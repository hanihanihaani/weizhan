import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import AllSwiper from '@components/swiper'
import utils from '@utils/util'
import { set as setGlobalData, get as getGlobalData } from '@utils/global_data.js'
import './index.scss'

export default class SixteenTml extends Component {
  static defaultProps = {
    list:[]
  }
  goColumn(e) {
    utils.jump(e.currentTarget.id)
  }
  phoneCall() {
    Taro.makePhoneCall({
      phoneNumber:getGlobalData('phone')
    })
  }
  render () {
    let phone = getGlobalData('phone')
    return (
      <View>
        <AllSwiper list={this.props.list} />
        <View className='phone-wrap' onClick={this.phoneCall}>
          <View className='phone-icon'></View>
          <Text className='phone'>{phone}</Text>
        </View>
        <View className='column-wrap'>
          {
            utils.columnList.map((column,index) => {
              return <View className='column-item' key={index} id={index} onClick={this.goColumn}>
                      <View className='column-icon-wrap'>
                        <View className={`column-icon-${index} icon`}></View>
                      </View>
                      <Text className='column-name'>{column.name}</Text>
                    </View>
            })
          }
        </View>
      </View>
    )
  }
}

