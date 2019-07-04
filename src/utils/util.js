import Taro, { Component } from '@tarojs/taro'

const height =  `${Taro.getSystemInfoSync().windowHeight-170}Px`

module.exports = { height }