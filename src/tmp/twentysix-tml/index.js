import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import AllSwiper from '@components/swiper'
import utils from '@utils/util'
import './index.scss'

export default class TwentysixTml extends Component {
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
        <View className='column-wrap'>
          {
            utils.columnList.map((column,index) => {
              return <View className='column-item' key={index} id={index} onClick={this.goColumn}>
                      <View className='icon-wrap'>
                        {
                          {
                            0:<Image className='img' src='http://jic.makepolo.net/img/wei/wgw_web/init_0.png' />,
                            1:<Image className='img' src='http://jic.makepolo.net/img/wei/wgw_web/init_1.png' />,
                            2:<Image className='img' src='http://jic.makepolo.net/img/wei/wgw_web/init_2.png' />,
                            3:<Image className='img' src='http://jic.makepolo.net/img/wei/wgw_web/init_3.png' />,
                            4:<Image className='img' src='http://jic.makepolo.net/img/wei/wgw_web/init_4.png' />,
                            5:<Image className='img' src='http://jic.makepolo.net/img/wei/wgw_web/init_5.png' />,
                          }[index]
                        }
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

