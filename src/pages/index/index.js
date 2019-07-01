import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Tml from '../../components/first-tml'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    // console.log('tml',Tml)
   }

  componentDidHide () { }

  render () {
    return (
        <View className='index'>
          <Tml />
          <Text>hello world</Text>
        </View>
      )
  }
}
