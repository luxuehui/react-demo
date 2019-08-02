function log(target) {
  const desc = Object.getOwnPropertyDescriptors(target.prototype)
  for (const key of Object.keys(desc)) {
    if (key === 'constructor') {
      continue;
    }
    const func = desc[key].value

    if ('function' === typeof func) {
      Object.defineProperty(target.prototype, key, {
        value(...args) {
          console.log('before ' + key)
          const ret = func.apply(this, args)
          console.log('after ' + key)

          return ret
        }
      })
    }
  }
}

const readOnly = (target, key, descriptor) => {
  descriptor.writable = false
}

const validate = (target, key, descriptor) => {
  const func = descriptor.value
  descriptor.value = function (...args) {
    for (let num of args) {
      if ('number' !== typeof num) {
        throw new Error(`"${num}" is not a number`)
      }
    }
    return func.apply(this, args)
  }
}

@log
class Numberic {
  @readOnly PI = 3.1415926;

  constructor () {
  }
  @validate
  add (...nums) {
    return nums.reduce((p, n) => (p + n), 0)
  }
}

export default new Numberic()
