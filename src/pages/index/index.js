import Taro, { Component } from '@tarojs/taro'
import { View, Text,WebView } from '@tarojs/components'
import { INDEX } from '@service/api' 
import MD5 from '@utils/md5.js'
import { set as setGlobalData, get as getGlobalData } from '@utils/global_data.js'
import FirstTml from '@tmp/first-tml'
import SecondTml from '@tmp/second-tml'
import ThreeTml from '@tmp/three-tml'
import FourTml from '@tmp/four-tml'
import FiveTml from '@tmp/five-tml'
import SixTml from '@tmp/six-tml'
import SevenTml from '@tmp/seven-tml'
import EightTml from '@tmp/eight-tml'
import NineTml from '@tmp/nine-tml'
import TenTml from '@tmp/ten-tml'

import './index.scss'


export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    focusList:[],
    indexTmp:'45'
  }
  getIndex() {
    let ts = Date.parse(new Date())/1000
    let corpid = getGlobalData('corpid')
    let platid = getGlobalData('platid')
    Taro.request({
      url:INDEX,
      method:'POST',
      header: {
        'content-type': 'application/json'
      },
      data:{
       corpid:corpid,
       platid: platid,
       ts:ts,
       sign:MD5.hexMD5(`aid=61010&corpid=${corpid}&platid=${platid}&ts=${ts}&smallprogram20180716rmaekd8d4ds9`)
      }
    })
    .then(res => {
      if (res.statusCode == 200) {
        if (res.data.state == 1) {
          setGlobalData('phone',res.data.data.tel)
          setGlobalData('indexTmp',res.data.data.index_tmp)
          Taro.setNavigationBarTitle({title:res.data.data.name_w})
          this.setState({
            focusList:res.data.data.focus,
            indexTmp:res.data.data.index_tmp
          })
        } else {
          Taro.showToast({title:res.data.msg,icon:'none'})
        }
      } else {
        Taro.showToast({title:'网络错误',icon:'none'})
      }
    })
    .catch(err => {
      Taro.showToast({title:err,icon:'none'})
    })
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () {
    this.getIndex()
  }

  componentDidHide () { }

  render () {
    const { focusList, indexTmp } = this.state
    let showTmp
    if (indexTmp == '45') {
      showTmp = <FirstTml list={focusList} />
    } else if (indexTmp == '46') {
      showTmp = <SecondTml list={focusList} />
    } else if (indexTmp == '47') {
      showTmp = <ThreeTml list={focusList} />
    } else if (indexTmp == '48') {
      showTmp = <FourTml list={focusList} />
    } else if (indexTmp == '49') {
      showTmp = <FiveTml />
    } else if (indexTmp == '50') {
      showTmp = <SixTml list={focusList} />
    } else if (indexTmp == '51') {
      showTmp = <SevenTml list={focusList} />
    } else if (indexTmp == '52') {
      showTmp = <EightTml list={focusList} />
    } else if (indexTmp == '53') {
      showTmp = <NineTml list={focusList} />
    } else if (indexTmp == '54') {
      showTmp = <TenTml />
    }
    return (
        <View className='index'>
          {showTmp}
        </View>
      )
  }
}
