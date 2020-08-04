$('.copy').click(function(e){
	e.preventDefault();
	copyToClipboard('.' + $(this).attr('data-target'));
	alert("Code was copied. Please paste code in text editor and edit him or paste code in theme.");
})

function copyToClipboard(element) {
	var $temp = $("<textarea></textarea>");
	$("body").append($temp);
	
	var data = $(element).val();

	data = data.replace(new RegExp("<", "g"),"_||_<");
	data = data.split('_||_');
	var newdata = [];
	var count = 0;
	top:
	for(var i=0; i<data.length; i++) {
		data[i] = data[i].trim();
		if(data[i] == '') {continue top;}
		if(data[i].indexOf('<!--') > -1) {
			newdata[i] = getT(count) + data[i];
			continue top;
		}
		if(data[i].indexOf('<br>') > -1) {
			newdata[i] = "\0" + data[i];
			continue top;
		}

		if( check1(data, i) ) {
			newdata[i] = "\0" + data[i];
		} else {
			newdata[i] = getT(count) + data[i];
		}

		if( check2(checkString2, data, i) ) {
		} else {
			if( check2(checkString3, data, i) ) {
			}
			else {
				count = data[i].indexOf('</') > -1 ? Math.max(0, count - 1) : (data[i].indexOf('<img ') == -1 && data[i].indexOf('<input') == -1 && data[i].indexOf('<hr') == -1) ? count + 1 : count;
				if( check2(checkString4, data, i) ) {
					count -= 1;
				}
			}
		}
		//console.log(count)
	}
	newdata = newdata.join("\r\n");
	newdata = newdata.replace(/\r\n\0/g,"");
	newdata = newdata.replace(new RegExp("http://cdn", "g"),"//cdn");
	newdata = newdata.replace(new RegExp("https://cdn", "g"),"//cdn");
	newdata = newdata.trim();

	$temp.val(newdata).select();
	document.execCommand("copy");
	$temp.remove();
}
function check1(data, i) {
	if(!data[i-1]) return false;

	top:
	for(var j=i-1; j>=0; j--) {
		if(!data[j]) return false;
		if(data[j].indexOf("<!--") > -1) continue top;
		if(data[j].indexOf("<br>") > -1) continue top;
		if(data[i].indexOf('</') > -1 && data[j].indexOf('</') == -1 && data[j].indexOf('<img ') == -1 && data[j].indexOf('<input') == -1 && data[i].indexOf('<hr') == -1) {
			return true
		} else {
			return false;
		}
	}
}
function check2(checkFunc, data, i) {
	if(!data[i+1]) return false;

	top:
	for(var j=i+1; j<data.length; j++) {
		if(!data[j]) return false;
		if(data[j].indexOf("<!--") > -1) continue top;
		if(data[j].indexOf("<br>") > -1) continue top;
		if(eval('checkFunc(data, i, j)')) {
			return true
		} else {
			return false;
		}
	}
}
function checkString2(data, i, j) {
	return data[i].indexOf('</') == -1  && data[j].indexOf('</') > -1 && data[i].indexOf('<img ') == -1 && data[i].indexOf('<input') == -1 && data[i].indexOf('<hr') == -1
}
function checkString3(data, i, j) {
	return data[i].indexOf('</') > -1 && data[j].indexOf('</') == -1
}
function checkString4(data, i, j) {
	return data[j] && data[j].indexOf('</') > -1 && (data[i].indexOf('<img ') > -1 || data[i].indexOf('<input') > -1 || data[i].indexOf('<hr') > -1)
}
function getT(count){
	var t = '';
	for(var i=0; i<count; i++) {
		t += '\t';
	}
	return t;
}