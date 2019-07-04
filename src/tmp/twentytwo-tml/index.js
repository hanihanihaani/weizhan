import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import utils from '@utils/util'
import './index.scss'

export default class TwentytwoTml extends Component {
  goColumn(e) {
    utils.jump(e.currentTarget.id)
  }
  render () {
    return (
      <View className='twentytwo-box'>
        <View className='column-wrap'>
          {
            utils.columnList.map((column,index) => {
              return <View className={`column-item-${index} column-item`} id={index} key={index} onClick={this.goColumn}>
                      <View className={`column-icon-${index} icon`}></View>                      
                      <Text className='name'>{column.name}</Text>
                    </View>
            })
          }
        </View>
      </View>
    )
  }
}

