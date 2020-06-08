// promise类
class ApiPromise {
  status; // 0：已初始化， 1：进行中，2：已完成
  code; // 最好是唯一标识符，不然会有各种花式bug
  constructor (code) {
    this.code = code
    this.status = 0
  }
  // 启动
  start () {
    this.status = 1
  }
  // 完成
  finish () {
    this.status = 2
  }
}

// 为了检查出是否有串行的promise而设置的延迟检测时间，同时也是为了防止页面抖动
// 如需在ie10,11中流畅运行，此值最少需要大于 400
const delayTimeForCheckout = 400

export const moduleLoading = {
  state: {

    // 存储当前已经发起的promise请求容器
    promiseCase: [],
    isFinished: false
  },
  getters: {
    isFinished: state => state.isFinished
  },
  mutations: {

    // 初始化promise，启动后放入容器
    pushPromiseIntoCase (state, code) {
      let apiPromise = new ApiPromise(code)
      apiPromise.start()
      state.promiseCase.push(apiPromise)
    },

    // 完成容器中的指定promise, 并销毁它
    finishPromiseInCase (state, code) {
      state.promiseCase.forEach(promise => {
        if (promise.code === code) {
          promise.finish()
        }
      })

      // 销毁已经完成的promise
      state.promiseCase = state.promiseCase.filter(promise => promise.status !== 2)
    },

    // 同步完成状态
    syncIsFininsh (state) {
      if (state.promiseCase <= 0) {
        state.isFinished = true
      } else {
        state.isFinished = false
      }
    }
  },
  actions: {
    // 检查完成状态,异步延迟执行是为了检测串行的promise
    checkoutIsFininsh ({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('syncIsFininsh')
          resolve(state.isFinished)
        }, delayTimeForCheckout)
      })
    }
  }
}
