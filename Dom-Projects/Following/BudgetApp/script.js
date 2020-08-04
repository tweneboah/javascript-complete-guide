//APP DATA

const todosController = (function () {
  //constructor
  let Todos = function (id, desc, amount) {
    this.id = id;
    this.desc = desc;
    this.amount = amount;
  }

  //DATA STRUCTURE
  const data = {
    incoms: []
  };

  return {
    addTodos: function (desc, amount) {
      let ID = 900;
      let allBudget;
      allBudget = new Todos(ID, desc, amount);
      data.incoms.push(allBudget)
      return allBudget;
    },
  };
})();

//UI

//Get the values from inputs
const todoUIController = (function () {

  return {
    getInputs: function () {
      return {
        amountValue: document.querySelector('.amount'),
        descValue: document.querySelector('.desc')
      }
    }
  }
})();

//App controller
//Where the actions will take place

const appController = (function (todosUI, todoCtrl) {

  //Get the values from the input from UI Controller
  const inputValues = todosUI.getInputs();

  document.querySelector('.add').addEventListener('click', function () {
    const data = todoCtrl.addTodos(inputValues.descValue.value, inputValues.amountValue.value)
    console.log(data)
    // //ParentDiv
    const parentDVI = document.querySelector('.container');
    // We will create our html on the fly
    let html;
    html = `<h2>Amount : GHS ${data.amount} -  </h2>
    <p>Description: ${data.desc}</p>
    `
    parentDVI.insertAdjacentHTML('afterbegin', html)


  })

})(todoUIController, todosController);