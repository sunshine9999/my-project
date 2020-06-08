/* eslint-disable no-sparse-arrays */
/**
 * @description 存储sessionStorage
 * @param {存储的keyName} name
 * @param {存储的值} value
 */
export const setStore = (name, value) => {
  if (!name) {
    return false
  }
  window.sessionStorage.setItem(name, typeof value !== 'string' ? JSON.stringify(value) : value)
}

/**
 * @description 读取sessionStorage
 * @param {存储的keyName} name
 */
export const getStore = (name) => {
  if (!name) {
    return false
  }
  return window.sessionStorage.getItem(name)
}

/**
 * @description 删除sessionStorage
 * @param {需要删除的keyName} name
 */
export const removeStroe = (name) => {
  if (!name) {
    return false
  }
  window.sessionStorage.removeItem(name)
}

/**
 * @description 存储localstorage
 * @param {存储的keyName} name
 * @param {存储的值} value
 */
export const setLocal = (name, value) => {
  if (!name) {
    return false
  }
  window.localstorage.setItem(name, typeof value !== 'string' ? JSON.stringify(value) : value)
}

/**
 * @description 读取localstorage
 * @param {存储的keyName} name
 */
export const getLocal = (name) => {
  if (!name) {
    return false
  }
  return window.localstorage.getItem(name)
}

/**
 * @description 删除localstorage
 * @param {需要删除的keyName} name
 */
export const removeLocal = (name) => {
  if (!name) {
    return false
  }
  window.localstorage.removeItem(name)
}

/**
 * @description 按日处理时间为xxxx-yy-dd
 * @param {需要处理的时间} time:object
 */
export const timeProcessDay = (time) => {
  if (!time) {
    return ''
  }
  let d = new Date(time)
  return d.getFullYear() + ((d.getMonth() + 1) >= 10 ? ('-' + (d.getMonth() + 1)) : ('-0' + (d.getMonth() + 1))) + '-' + (d.getDate() >= 10 ? d.getDate() : '0' + d.getDate())
}
/**
 * @description 按月处理时间为xxxx-yy
 * @param {需要处理的时间} time:object
 */
export const timeProcessMonth = (time) => {
  let d = new Date(time)
  return d.getFullYear() + ((d.getMonth() + 1) >= 10 ? ('-' + (d.getMonth() + 1)) : ('-0' + (d.getMonth() + 1)))
}
/**
 * @description 按月处理时间为yyyyMM
 * @param {需要处理的时间} time:object
 */
export const timeProcessMonth1 = (time) => {
  let d = new Date(time)
  return d.getFullYear() + ((d.getMonth() + 1) >= 10 ? (d.getMonth() + 1) : ('0' + (d.getMonth() + 1)))
}
export const getUrlKey = function (name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ''])[1].replace(/\+/g, '%20')) || null
}
/* 获取全部url参数,并转换成json对象 */
export const getUrlAllParams = function (urls) {
  var url = urls || window.location.href
  var _pa = url.substring(url.indexOf('?') + 1)

  var _arrS = _pa.split('&')
  var _rs = {}
  for (var i = 0, _len = _arrS.length; i < _len; i++) {
    var pos = _arrS[i].indexOf('=')
    if (pos === -1) {
      continue
    }
    var name = _arrS[i].substring(0, pos)
    var value = window.decodeURIComponent(_arrS[i].substring(pos + 1))
    var index = value.indexOf('#/')
    if (index > 0) {
      value = value.substr(0, index)
    }
    _rs[name] = value
  }
  return _rs
}
