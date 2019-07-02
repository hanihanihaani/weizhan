import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Search from '@components/search'
import './proCenter.scss'

export default class ProCenter extends Component {

  config = {
    navigationBarTitleText: '产品中心'
  }
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <View>
        <Search />        
      </View>
    )
  }
}

