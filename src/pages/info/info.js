import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import CompanyMes from '../../components/company-mes'
import './info.scss'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

export default class CompanyInfo extends Component {
  config = {
    navigationBarTitleText: '公司简介'
  }
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <View className='info-box'>
        <View className='c-info-wrap'>
          <Text className='c-info'>公司简介</Text>
          <Text className='c-info-con cons'>就饥渴难耐 两份李梅兰芳绿山咖啡建安费立刻发送哦分秒里面的成怒发你浪费离开没地方舒服么劳动模范 快递费地方离开的父母是foe目测科目后付费令肌肤的库开发收到了分开配偶发</Text>
        </View>
        <View className='c-info-wrap'>
          <Text className='c-info'>基本信息</Text>
          <Text className='c-info-con'>公司名称：修北京搜斗士信息科技有限公司</Text>
          <Text className='c-info-con'>公司地址：中国 北京 北京市 中关村大街中关村大厦1201-1206</Text>
          <Text className='c-info-con'>公司类型： </Text>
          <Text className='c-info-con'>经营模式：生产型</Text>
          <Text className='c-info-con'>主营产品：电工电气</Text>
          <Text className='c-info-con'>成立时间：请选择成立年份年6月</Text>
          <Text className='c-info-con'>厂房面积：10000平方米</Text>
          <Text className='c-info-con'>主要销售区域：大陆</Text>
        </View>
        <CompanyMes />
      </View>
    )
  }
}

