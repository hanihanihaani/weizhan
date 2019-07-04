import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import { set as setGlobalData, get as getGlobalData } from '@utils/global_data.js'

import './app.scss'

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
      'pages/proDetail/proDetail',
      'pages/proHot/proHot'
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

  componentDidMount () {
    // platid: 0 微信， 1 百度， 2 支付宝， 3 头条， 4 360
    setGlobalData('corpid',100018362773)
    setGlobalData('platid',0)
  }

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
