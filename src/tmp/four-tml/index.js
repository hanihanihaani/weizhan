import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import AllSwiper from '@components/swiper'
import utils from '@utils/util'
import './index.scss'

export default class FourTml extends Component {
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
              return <View className='column-item-wrap' key={index} id={index} onClick={this.goColumn}>
                      <View className='column-items'>
                        <View className='column-item'>
                          <View className={`icon column-icon-${index}`}></View>
                        </View>
                      </View>
                      <Text className='name'>{column.name}</Text>
                    </View>
            })
          }
        </View>
      </View>
    )
  }
}

