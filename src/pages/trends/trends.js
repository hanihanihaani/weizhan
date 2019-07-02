import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import CompanyMes from '@components/company-mes'
import './trends.scss'

let trendsList = [{
  title:'可是对方来看待爹看得开飞机',
  content:'实力坑爹离开水电费收快递费毛而非',
  pic:'http://jic.makepolo.net/img/yellow/yellow_new/200.jpg'
},{
  title:'可是对方来看待爹看得开飞机',
  content:'实力坑爹离开水电费收快递费毛而非',
  pic:'http://jic.makepolo.net/img/yellow/yellow_new/200.jpg'
},{
  title:'可是对方来看待爹看得开飞机',
  content:'实力坑爹离开水电费收快递费毛而非',
  pic:'http://jic.makepolo.net/img/yellow/yellow_new/200.jpg'
}]
export default class CompanyTrends extends Component {
  config = {
    navigationBarTitleText: '公司动态'
  }
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <View className='trends-box'>
        <View className='trends-wrap'>
          {
            trendsList.map((trend,index) => {
              return <View className='trend-item' key={index}>
                        <Text className='title'>{trend.title}</Text>
                        <View className='b-wrap'>
                          <View className='pic-wrap'>
                            <Image src={trend.pic} className='pic' />
                          </View>
                          <View className='b-right'>
                            <Text className='con'>{trend.content}</Text>
                            <Text className='check-all'>查看全文>></Text>
                          </View>
                        </View>
                      </View>
            })
          }
        </View>
        <View className='mes-wrap'>
          <CompanyMes />
        </View>
      </View>
    )
  }
}

