import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'

export default class AllSwiper extends Component {
	static defaultProps = {
			list:[]
		}
	jumpDetail(val) {
		if (val == 'company.html') {
			Taro.navigateTo('/pages/info/info')
		} else if (val == 'product_zx.html') {
			Taro.navigateTo('/pages/proCenter/proCenter')
		} else if (val == 'companyPic.html') {
			Taro.navigateTo('/pages/album/album')
		} else if (val == 'company_news_1.html') {
			Taro.navigateTo('/pages/trends/trends')
		} else if (val == 'product_hot.html') {
			Taro.navigateTo('/pages/trends/trends')
		} else if (val == 'contact_us.html') {
			Taro.navigateTo('/pages/connect/connect')
		}
	}
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    const { list } = this.props
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
            {
              list.map((focus,index) => {
                return <SwiperItem key={index} onClick={this.jumpDetail.bind(this,focus.content_lm)}>
                        <Image className='img' src={focus.pic_path_detail} />
                      </SwiperItem>
              })
            }
          </Swiper>
        </View>
      </View>
    )
  }
}

