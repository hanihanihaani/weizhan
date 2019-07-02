import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'

 export default class Phone extends Component {

  componentWillMount() {
    
  }
 
  componentDidMount () {}

  componentDidShow () {
    Taro.makePhoneCall({
      phoneNumber:'18839967020'
    })
    .then(res => {
      Taro.switchTab({url:'/pages/index/index'})
    })
    .catch(err => Taro.switchTab({url:'/pages/index/index'}))
  }

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <View>
      </View>
    )
  }
}
