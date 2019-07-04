import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import AllSwiper from '@components/swiper'
import './index.scss'

const itemList = [{
  name:'企业简介',
  img:'http://jic.makepolo.cn/img/wei/mb_img/mb_22/pic01.jpg',
  id:0
},{
  name:'产品中心',
  img:'http://jic.makepolo.cn/img/wei/mb_img/mb_22/pic02.jpg',
  id:1
},{
  name:'企业相册',
  img:'http://jic.makepolo.cn/img/wei/mb_img/mb_22/pic03.jpg',
  id:2
},{
  name:'热销产品',
  img:'http://jic.makepolo.cn/img/wei/mb_img/mb_22/pic04.jpg',
  id:3
},{
  name:'联系我们',
  img:'http://jic.makepolo.cn/img/wei/mb_img/mb_22/pic05.jpg',
  id:4
},{
  name:'公司动态',
  img:'http://jic.makepolo.cn/img/wei/mb_img/mb_22/pic06.jpg',
  id:5
}]
 export default class FirstTml extends Component {
  
  jump (e) {
    let id = e.currentTarget.id
    if (id == 0) {
      Taro.navigateTo({url:'/pages/info/info'})
    } else if (id == 1) {
      Taro.navigateTo({url:'/pages/proCenter/proCenter'})
    } else if (id == 2) {
      Taro.navigateTo({url:'/pages/album/album'})
    } else if (id == 3) {
      Taro.navigateTo({url:'/pages/proHot/proHot'})
    } else if (id == 4) {
      Taro.navigateTo({url:'/pages/connect/connect'})
    } else if (id == 5) { 
      Taro.navigateTo({url:'/pages/trends/trends'})
    } 
  }

  render () {
    return (
      <View>
        <AllSwiper list={this.props.list} />
        <View className='item-wrap'>
          {
            itemList.map((item,index) => {
              return  <View className='item' key={index} id={index} onClick={this.jump}>
                        <Image className='item-img' src={item.img} />
                        <View className={`icon-${index} icon`}></View>
                        <Text className='title'>{item.name}</Text>
                      </View>
            })
          }
        </View>
      </View>
    )
  }
}
