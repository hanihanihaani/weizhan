import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

const columnList = [{
  name:'公司简介',
},{
  name:'产品中心',
},{
  name:'企业相册',
},{
  name:'公司动态',
},{
  name:'热销产品',
},{
  name:'联系我们',
}] 
export default class FiveTml extends Component {
  jump (e) {
    let id = e.currentTarget.id
    if (id == 0) {
      Taro.navigateTo({url:'/pages/info/info'})
    } else if (id == 1) {
      Taro.navigateTo({url:'/pages/proCenter/proCenter'})
    } else if (id == 2) {
      Taro.navigateTo({url:'/pages/album/album'})
    } else if (id == 3) {
      Taro.navigateTo({url:'/pages/trends/trends'})
    } else if (id == 4) {
      Taro.navigateTo({url:'/pages/proHot/proHot'})
    } else if (id == 5) { 
      Taro.navigateTo({url:'/pages/connect/connect'})
    } 
  }
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    return (
      <View className='five-box'>
        <View className='column-wrap'>
          {
            columnList.map((column,index) => {
              return <View className={`column-item column-item-${index}`} id={index} key={index} onClick={this.jump}>
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

