console.log("Start");

const getUser = (email, password, callback) => {
  setTimeout(() => {
    callback({
      me: email,
    });
  }, 2000);
};

getUser("atom@gmail.com", "12333", (e) => {
  console.log("e", e);
});

console.log(me2);

console.log("End");
