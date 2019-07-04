import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import { set as setGlobalData, get as getGlobalData } from '@utils/global_data.js'


 export default class Phone extends Component {

  componentWillMount() {
    
  }
 
  componentDidMount () {}

  componentDidShow () {
    let phone = getGlobalData('phone')
    Taro.makePhoneCall({
      phoneNumber:phone
    })
    .then(res => Taro.switchTab({url:'/pages/index/index'}))
    .catch(err => Taro.switchTab({url:'/pages/index/index'}))
  }

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    return (
      <View>
      </View>
    )
  }
}
