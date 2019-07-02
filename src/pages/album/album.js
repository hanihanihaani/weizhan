import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import CompanyMes from '@components/company-mes'
import './album.scss'

const albumList = [{
  pic:'http://img12.makepolo.cn/images/formals/img/product/66/955/4_718a888b66ff2e910e24a74c93a23d5b.jpg!120x90',
  name:'塑料袋开发离开了'
},{
  pic:'http://img12.makepolo.cn/images/formals/img/product/66/955/4_718a888b66ff2e910e24a74c93a23d5b.jpg!120x90',
  name:'塑料袋开发离开了'
},{
  pic:'http://img12.makepolo.cn/images/formals/img/product/66/955/4_718a888b66ff2e910e24a74c93a23d5b.jpg!120x90',
  name:'塑料袋开发离开了'
},{
  pic:'http://img12.makepolo.cn/images/formals/img/product/66/955/4_718a888b66ff2e910e24a74c93a23d5b.jpg!120x90',
  name:'塑料袋开发离开了'
},{
  pic:'http://img12.makepolo.cn/images/formals/img/product/66/955/4_718a888b66ff2e910e24a74c93a23d5b.jpg!120x90',
  name:'塑料袋开发离开了'
}]
export default class CompanyAlbum extends Component {

  config = {
    navigationBarTitleText: '企业相册'
  }
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <View className='album-box'>
        <View className='album-wrap'>
        {
          albumList.map((album,index) => {
            return <View key={index} className='album-item'>
                      <View className='pic-wrap'>
                        <Image src={album.pic} className='pic' />
                      </View>
                      <Text className='title'>{album.name}</Text>
                    </View>
          })
        }
        </View>
        <CompanyMes />
      </View>
    )
  }
}

