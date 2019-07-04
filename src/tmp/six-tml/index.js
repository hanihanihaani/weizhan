import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import AllSwiper from '@components/swiper'
import './index.scss'

export default class SixTml extends Component {
  static defaultProps = {
    list:[]
  }
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    return (
      <View>
        <AllSwiper list={this.props.list} />
      </View>
    )
  }
}

