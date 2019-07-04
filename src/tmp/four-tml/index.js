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
export default class FourTml extends Component {
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
    const height = `${Taro.getSystemInfoSync().windowHeight-170}Px`

    return (
      <View>
        <AllSwiper list={this.props.list} />
        <View className='column-wrap' style={{height:height}}>
          {
            columnList.map((column,index) => {
              return <View className='column-item-wrap' key={index} id={index} onClick={this.jump}>
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
