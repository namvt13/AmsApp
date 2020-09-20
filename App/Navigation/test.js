const filter = (predicate) => (step) => (a, v) => {
  if (predicate(v)) {
    return step(a, v);
  }
  return a;
};
const map = (transform) => (step) => (a, v) => {
  return step(a, transform(v));
};

const compose = (...transformArr) => {
  return (reducerFunc) => {
    // Here we return the reducerFunc after running reduce
    return transformArr.reduceRight(
      (func, transform) => transform(func),
      reducerFunc,
    );
  };
};

const isLargerThan3 = (x) => (x > 3 ? x : null);
const plus4 = (x) => x + 4;

const reduceFunc = compose(
  filter(isLargerThan3),
  map(plus4),
)((a, c) => a.concat([c]));

const result = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(reduceFunc, []);
console.log(result);
