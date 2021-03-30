class Dep {
  static stack = []
  static target = null
  deps = null

  constructor() {
    this.deps = new Set()
  }

  depend() {
    if (Dep.target) {
      this.deps.add(Dep.target) // 添加watcher
    }
  }

  notify() {
    this.deps.forEach(w => w.update())
  }

  static pushTarget(t) {
    if (this.target) {
      this.target.push(this.target)
    }
    this.target = t
  }

  static poptarget() {
    this.target = this.stack.pop()
  }
}

class Watcher {
  constructor(effect) {
    this.effect = effect
    this.update()
  }

  update() {
    Dep.pushTarget(this)
    this.value = this.effect()
    Dep.poptarget()
    return this.value
  }
}

// reactive
function reactive(o) {
  return defineReactive(o)
  // // 对象或者数组这样的引用类型
  // if (o && typeof o === 'object') {
  //   Object.keys(o).forEach(k => {
  //     return defineReactive(o, k, o[k]) // 遍历属性，递归设置set函数
  //   })
  // }
  // return o
}

function defineReactive(obj, k, val) {
  // console.log(obj, k, val);
  // let dep = new Dep()
  // 什么时候会触发defineProperty
  // obj.k => get
  // obj = llll => set

  // 递归监听对象下的每一个属性

  // Object.defineProperty(obj, k, {
  //   get() {
  //     dep.depend() // 添加观察者 => 成为订阅者
  //     return val
  //   },
  //   set(newVal) {
  //     if (val === newVal) return // 值发生改变时通知
  //     val = newVal
  //     dep.notify() // 通知订阅者
  //   }
  // })

  let handler = {
    get(target, property) {
      return target[property]; // get进行订阅
    },
    set(target, key, newVal) {
      // set进行通知
      // console.log('set', target, key, newVal);
      if (val === newVal) return // 值发生改变时通知
      val = newVal
      let res = Reflect.set(target, key, newVal);
      return res
    }
  }
  let proxy = new Proxy(obj, handler);
  return proxy
}


const data = reactive({
  msg: 'aaa'
})

new Watcher(() => {
  console.log('===> effect', data.msg);
})

setTimeout(() => {
  data.msg = 'hello'
}, 100)


// 简单的实验vue2 vue3的动态绑定

// 发布订阅模式的 通知的时候的有序性如何保证，如何保证订阅者都被通知到