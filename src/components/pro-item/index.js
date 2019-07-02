import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

const itemList = [{
  pic:'http://img12.makepolo.cn/images/formals/img/product/66/955/4_718a888b66ff2e910e24a74c93a23d5b.jpg!120x90',
  con:'谁离开对方来看待乐山大佛离开水电费塑料袋开发吗所发生的方面'
},{
  pic:'http://img12.makepolo.cn/images/formals/img/product/66/955/4_718a888b66ff2e910e24a74c93a23d5b.jpg!120x90',
  con:'谁离开对方来看待乐山大佛离开水电费塑料袋开发吗所发生的方面'
},{
  pic:'http://img12.makepolo.cn/images/formals/img/product/66/955/4_718a888b66ff2e910e24a74c93a23d5b.jpg!120x90',
  con:'谁离开对方来看待乐山大佛离开水电费塑料袋开发吗所发生的方面'
}]

export default class ProItem extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}
  jumpDetail() {
    Taro.navigateTo({url:'/pages/proDetail/proDetail'})
  }
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <View>
        {
          itemList.map((item,index) => {
            return <View className='item-wrap' key={index} onClick={this.jumpDetail}>
                    <View className='pic-wrap'>
                      <Image src={item.pic} className='item-pic' />
                    </View>
                    <View className='item-r'>
                      <Text className='con'>{item.con}</Text>
                      <Text className='mianyi'>面议</Text>
                    </View>
                  </View>
          })
        }
      </View>
    )
  }
}

