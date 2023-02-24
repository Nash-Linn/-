var foo = {
  a: 1,
  b: {
    x: 1,
  },
};
var bar = foo.b;
bar.c = foo;
foo = null;
console.log(bar);
