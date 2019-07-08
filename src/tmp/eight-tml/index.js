import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import AllSwiper from '@components/swiper'
import utils from '@utils/util'
import './index.scss'

export default class EightTml extends Component {
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
              return <View className='column-item' key={index} id={index} onClick={this.goColumn}>
                        <View className={`column-box-icon-${index} box-icon`}>
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

