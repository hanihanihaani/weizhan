import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './connect.scss'

export default class CompanyConnect extends Component {

  config = {
    navigationBarTitleText: '联系我们'
  }
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <View className='connect-box'>
        <View className='connect-wrap'>
          <View className='item-wrap'>
            <Text className='icon-per'></Text>
            <Text className='item'>联 系 人：大概是</Text>
          </View>
          <View className='phone-wrap'>
            <Text className='icon-phone'></Text>
            <Text className='item'>联系电话：</Text>
            <Text className='item phone'>13412341234   |   010-55555555</Text>
          </View>
          <View className='item-wrap'>
            <Text className='icon-cz'></Text>
            <Text className='item'>传 真：010-88889999</Text>
          </View>
          <View className='item-wrap'>
            <Text className='icon-yz'></Text>
            <Text className='item'>邮政编码：100080</Text>
          </View>
        </View>
      </View>
    )
  }
}

