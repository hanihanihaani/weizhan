import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// 
 class Tml extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <View>
        <Text>this is first teml</Text>
      </View>
    )
  }
}

module.exports = Tml