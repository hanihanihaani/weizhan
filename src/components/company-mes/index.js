import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

export default class CompanyMes extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <View className='mes-box'>
        <View className='mes-wrap'>
          <Text className='company'>北京市老师快递费公司</Text>
          <Text className='title'>实力坑爹来看待</Text>
          <View className='item-wrap'>
            <Text className='item'>公司地址：中国  北京 北京市 中关村大街中关村大厦1201-1206</Text>
            <Text className='item'>联系电话：13412341234</Text>
            <Text className='item'>公司传真：010-88889999</Text>
            <Text className='item'>电子邮件：123456@qq.com</Text>
            <Text className='item'>邮政编码：100080</Text>
          </View>
        </View>
      </View>
    )
  }
}

