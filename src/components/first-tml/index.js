import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image,Swiper,SwiperItem } from '@tarojs/components'
import './index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// 
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

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}
  jump (e) {
    let id = e.currentTarget.id
    if (id == 0) {
      Taro.navigateTo({url:'/pages/info/info'})
    } else if (id == 1) {
      Taro.navigateTo({url:'/pages/proCenter/proCenter'})
    } else if (id == 2) {
      Taro.navigateTo({url:'/pages/album/album'})
    } else if (id == 4) {
      Taro.navigateTo({url:'/pages/connect/connect'})
    } else if (id == 5) { 
      Taro.navigateTo({url:'/pages/trends/trends'})
    } 
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <View>
        <View className='swiper-wrap'>
          <Swiper 
            className='swiper'
            autoplay
            indicatorDots
            indicatorColor='#fff'
            indicatorActiveColor='#04d8fb'
          >
            <SwiperItem>
              <Image className='img' src={'http://img12.makepolo.cn/images/formals/img/banner/7/411/4_55f7113b8ae0ddbb7bf8c8b968461f7b.png'} />
            </SwiperItem>
            <SwiperItem>
              <Image className='img' src={'http://jic.makepolo.net/img/channel/20190401/15540882872833.png'} />
            </SwiperItem>
          </Swiper>
        </View>
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
