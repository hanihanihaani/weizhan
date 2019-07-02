import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'
import './index.scss'

export default class Search extends Component {

  state = {
    isModalVisible:false
  }
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}
  toggleModal() {
    this.setState({
      isModalVisible:!this.state.isModalVisible
    })
  }
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    const { isModalVisible } = this.state
    const height = `${Taro.getSystemInfoSync().windowHeight}Px`
    return (
      <View>
        <View className='search-wrap'>
          <View className='search-l'>
            <Input 
              className='input' 
              placeholder='请输入要搜索的内容'
            />
            <Text className='search'>搜索</Text>
          </View>
          <View className='search-r' onClick={this.toggleModal}>
            <View className='item-icon'></View>
            <Text className='item'>分类</Text>
          </View>
        </View>
        {
          isModalVisible 
          ? <View className='mask-wrap'>
              <View className='mask' onClick={this.toggleModal}></View>
              <View style={{height:height}} className='mask-con'>
                <View className='title-wrap'>
                  <Text className='title-big'>共</Text>
                  <Text className='title-right'>[4个分类]</Text>
                </View>
                <View className='item-box'>
                  <View className='item-wrap'>
                    <Text className='item-con'>两三点开放收到了开发免费看</Text>
                  </View>
                  <View className='item-wrap'>
                    <Text className='item-con'>两三点开放收到了开发免费看</Text>
                  </View><View className='item-wrap'>
                    <Text className='item-con'>两三点开放收到了开发免费看</Text>
                  </View>
                </View>
              </View>
            </View> 
          : null
        }
      </View>
    )
  }
}

