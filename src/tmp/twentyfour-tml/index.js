import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import utils from '@utils/util'
import './index.scss'

export default class TwentyfourTml extends Component {
  state = {
    cList:[]
  }
  goColumn(e) {
    let index = e.currentTarget.id
    if (index == 5) {
      Taro.navigateTo({url:'/pages/info/info'})
    } else if (index == 4) {
      Taro.navigateTo({url:'/pages/proCenter/proCenter'})
    } else if (index == 3) {
      Taro.navigateTo({url:'/pages/album/album'})
    } else if (index == 2) {
      Taro.navigateTo({url:'/pages/trends/trends'})
    } else if (index == 1) {
      Taro.navigateTo({url:'/pages/proHot/proHot'})
    } else if (index == 0) { 
      Taro.navigateTo({url:'/pages/connect/connect'})
    } 
  }
  componentDidMount() {
    let cList = utils.columnList.reverse()
    this.setState({
      cList:cList
    })
  }
  render () {
    const { cList } = this.state
    return (
      <View className='twentyfour-box'>
        <View className='column-wrap'>
          {
            cList.map((column,index) => {
              return <View className='column-item' id={index} key={index} onClick={this.goColumn}>
                      <Text className='name'>{column.name}</Text>
                    </View>
            })
          }
        </View>
      </View>
    )
  }
}

