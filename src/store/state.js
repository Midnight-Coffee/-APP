let defaultCity = '广州'   //设定默认城市
try {
  if (localStorage.city) {
    defaultCity = localStorage.city   //替换默认城市
  }
} catch (e) {}   //防止用户关闭储存功能或者使用隐身模式，程序会卡死

export default {
  city: defaultCity
}
