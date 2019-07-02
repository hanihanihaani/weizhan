import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './connect.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

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
          <Text className='item'>联 系 人：大概是</Text>
          <View className='phone-wrap'>
            <Text className='item'>联系电话：</Text>
            <Text className='item phone'>13412341234   |   010-55555555</Text>
          </View>
          <Text className='item'>传 真：010-88889999</Text>
          <Text className='item'>邮政编码：100080</Text>
        </View>
      </View>
    )
  }
}

