import Taro, { Component } from '@tarojs/taro'
import { View, Text,WebView } from '@tarojs/components'
import FirstTml from '@components/first-tml'
import Table from '@components/table'
import './index.scss'


export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state = {
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
          <FirstTml />
        </View>
      )
  }
}
