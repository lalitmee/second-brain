var a = 10;

// var -> scope function
// const -> block
// let -> funcion and block

function hello() {
  console.log("func", a);

  var a = 1;
}

console.log("file", a);

hello();

console.log([] === []);
