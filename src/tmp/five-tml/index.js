import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import utils from '@utils/util'
import './index.scss'

export default class FiveTml extends Component {
  goColumn(e) {
    utils.jump(e.currentTarget.id)
  }
  render () {
    return (
      <View className='five-box'>
        <View className='column-wrap'>
          {
            utils.columnList.map((column,index) => {
              return <View className={`column-item column-item-${index}`} id={index} key={index} onClick={this.goColumn}>
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

