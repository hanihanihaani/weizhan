import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/phone/phone',
      'pages/info/info',
      'pages/connect/connect',
      'pages/album/album',
      'pages/trends/trends',
      'pages/proCenter/proCenter',
      'pages/proDetail/proDetail'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#4795ff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    tabBar:{
      list:[{
        pagePath:'pages/index/index',
        iconPath:'./assets/shouye.png',
        selectedIconPath:'./assets/shouye-s.png',
        text:'首页'
      },{
        pagePath:'pages/phone/phone',
        iconPath:'./assets/phone.png',
        selectedIconPath:'./assets/phone-s.png',
        text:'电话'
      }]
    },
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
