function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const objA = { name: "Kiwi", age: 30 };
const objB = { job: "Full Stack Developer", city: "Ukraine" };

const mergeObj = merge(objA, objB);
console.log(mergeObj);
