import copy from './copy/index'
import move from './move/index'
// 自定义指令
const directives = {
  copy,
  move
}
// 这种写法可以批量注册指令
export default {
  install (Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  }
}