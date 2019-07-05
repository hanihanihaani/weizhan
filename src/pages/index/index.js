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
import ElevenTml from '@tmp/eleven-tml'
import TwelveTml from '@tmp/twelve-tml'
import ThirTeeTml from '@tmp/thirtee-tml'
import FourteenTml from '@tmp/fourteen-tml'
import FifteenTml from '@tmp/fifteen-tml'
import SixteenTml from '@tmp/sixteen-tml'
import EighteenTml from '@tmp/eighteen-tml'
import NineteenTml from '@tmp/nineteen-tml'
import TwentyTml from '@tmp/twenty-tml'
import TwentyoneTml from '@tmp/twentyone-tml'
import TwentytwoTml from '@tmp/twentytwo-tml'
import TwentythreeTml from '@tmp/twentythree-tml'
import TwentyfourTml from '@tmp/twentyfour-tml'
import TwentyfiveTml from '@tmp/twentyfive-tml'
import TwentysixTml from '@tmp/twentysix-tml'
import ThirtytwoTml from '@tmp/thirtytwo-tml'
import ThirtythreeTml from '@tmp/thirtythree-tml'
import ThirtysixTml from '@tmp/thirtysix-tml'

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
  componentDidShow () {
    this.getIndex()
  }
  render () {
    const { focusList, indexTmp } = this.state
    return (
        <View className='index'>
          {
            {
              '45':<FirstTml list={focusList} />,
              '46':<SecondTml list={focusList} />,
              '47':<ThreeTml list={focusList} />,
              '48':<FourTml list={focusList} />,
              '49':<FiveTml />,
              '50':<SixTml list={focusList} />,
              '51':<SevenTml list={focusList} />,
              '52':<EightTml list={focusList} />,
              '53':<NineTml list={focusList} />,
              '54':<TenTml />,
              '55':<ElevenTml list={focusList} />,
              '56':<TwelveTml list={focusList} />,
              '57':<ThirTeeTml list={focusList} />,
              '58':<FourteenTml list={focusList} />,
              '59':<FifteenTml list={focusList} />,
              '43':<SixteenTml list={focusList} />,
              '35':<EighteenTml />,
              '31':<NineteenTml />,
              '30':<TwentyTml />,
              '32':<TwentyoneTml />,
              '24':<TwentytwoTml />,
              '23':<TwentythreeTml />,
              '42':<TwentyfourTml />,
              '22':<TwentyfiveTml list={focusList} />,
              '41':<TwentysixTml list={focusList} />,
              '39':<ThirtytwoTml list={focusList} />,
              '40':<ThirtythreeTml list={focusList} />,
              '25':<ThirtysixTml list={focusList} />
            }[indexTmp]
          }
        </View>
      )
  }
}
