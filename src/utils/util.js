import Taro, { Component } from '@tarojs/taro'

const height =  `${Taro.getSystemInfoSync().windowHeight-170}Px`

const jump = function jump (index) {
  if (index == 0) {
    Taro.navigateTo({url:'/pages/info/info'})
  } else if (index == 1) {
    Taro.navigateTo({url:'/pages/proCenter/proCenter'})
  } else if (index == 2) {
    Taro.navigateTo({url:'/pages/album/album'})
  } else if (index == 3) {
    Taro.navigateTo({url:'/pages/trends/trends'})
  } else if (index == 4) {
    Taro.navigateTo({url:'/pages/proHot/proHot'})
  } else if (index == 5) { 
    Taro.navigateTo({url:'/pages/connect/connect'})
  } 
}

const columnList = [{
  name:'公司简介',
},{
  name:'产品中心',
},{
  name:'企业相册',
},{
  name:'公司动态',
},{
  name:'热销产品',
},{
  name:'联系我们',
}] 
module.exports = { height, jump, columnList }