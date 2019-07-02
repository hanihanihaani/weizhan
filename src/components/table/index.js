import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class Table extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <View className='table-box'>
        <View className='table-wrap'>
          <View className='table-item'>
            <Text className='item'>立刻发两份酒康酒康上岛咖卡</Text>
            <Text className='item'>立刻发两份酒康酒康上岛咖卡</Text>
          </View>
          <View className='table-item'>
            <Text className='item'>立刻发两份酒康酒康上岛咖卡</Text>
            <Text className='item'>立刻发两份酒康酒康上岛咖卡</Text>
          </View>
          <View className='table-item'>
            <Text className='item'>立刻发两份酒康酒康上岛咖卡</Text>
            <Text className='item'>立刻发两份酒康酒康上岛咖卡</Text>
          </View>
        </View>
      </View>
    )
  }
}

