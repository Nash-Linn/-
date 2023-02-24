let a = {
  b: 1,
};

let test = function (param) {
  param.b = 2;

  param = {
    b: 3,
  };

  console.log(param);
};

test(a);
console.log(a.b);
