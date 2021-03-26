// new constructor[([arguments])]
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new
const myNew = (Func, ...args) => {
  const instance = {} // 给一片空间
  if (Func.prototype) {
    Object.setPrototypeOf(instance, Func.prototype) // 加上prototype
  }
  const res = Func.apply(instance, args) // 将步骤1新创建的对象作为this的上下文 ；
  if (typeof res === "function" || (typeof res === "object" && res !== null)) {
    return res
  }
  return instance
}

// 创建一个空的简单JavaScript对象（即{}）
// 链接该对象（设置该对象的constructor）到另一个对象 
// 将步骤1新创建的对象作为this的上下文 ；
// 如果该函数没有返回对象，则返回this。

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
if (!Object.setPrototypeOf) {
  // 仅适用于Chrome和FireFox，在IE中不工作：
   Object.prototype.setPrototypeOf = function(obj, proto) {
       if(obj.__proto__) {
           obj.__proto__ = proto;
           return obj;
       } else {
           // 如果你想返回 prototype of Object.create(null):
           var Fn = function() {
               for (var key in obj) {
                   Object.defineProperty(this, key, {
                       value: obj[key],
                   });
               }
           };
           Fn.prototype = proto;
           return new Fn();
       }
   }
}