import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import AllSwiper from '@components/swiper'
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
export default class EightTml extends Component {
  static defaultProps = {
    list:[]
  }
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
      <View>
        <AllSwiper list={this.props.list} />
        <View className='column-wrap'>
          {
            columnList.map((column,index) => {
              return <View className='column-item' key={index} id={index} onClick={this.jump}>
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

