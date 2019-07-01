import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

 export default class Phone extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <View>
        <Text>this is phone page</Text>
      </View>
    )
  }
}
