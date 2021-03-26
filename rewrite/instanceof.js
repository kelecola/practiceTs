const isInstanceOf = (instance, fclass) => {
  if (fclass === null) {
    console.error(`Right-hand side of 'instanceof' is not an object`);
    return
  }
  const targetPrototype = fclass.prototype
  let proto = instance.__proto__
  while (true) {
    if (proto === null) return false
    if (proto === targetPrototype) return true
    proto = proto.__proto__
  }
}

class Parent {}
class Child extends Parent {}
const child = new Child()
console.log(isInstanceOf(child, Parent), isInstanceOf(child, Child), isInstanceOf(child, Array));
console.log(isInstanceOf(child, null));