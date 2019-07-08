import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import AllSwiper from '@components/swiper'
import utils from '@utils/util'
import './index.scss'

export default class SecondTeml extends Component {
  static defaultProps = {
    list:[]
  }
  goColumn(e) {
    utils.jump(e.currentTarget.id)
  }
  render () {
    return (
      <View>
        <AllSwiper list={this.props.list} />
        <View className='column-wrap' style={{height:utils.height}}>
          {
            utils.columnList.map((column,index) => {
              return <View className='column-item' id={index} key={index} onClick={this.goColumn}>
                      <View className='column-icon-wrap'>
                        <View className={`column-icon-${index} icon`}></View>
                      </View>
                      <Text className='column-title'>{column.name}</Text>
                    </View>
            })
          }
        </View>
      </View>
    )
  }
}

