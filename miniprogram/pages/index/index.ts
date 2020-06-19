// index.ts
// 获取应用实例
// const app = getApp<IAppOption>()
import {getUserToken} from '../../utils/util'
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  tologin(){
    wx.navigateTo({
      url:"../login/login"
    })
  },
  onLoad() {
    const _this = this;
    _this.setData({
      userInfo:wx.getStorageSync('userInfo')
    })
    _this.setData({
      hasUserInfo:true
    })
    if(getUserToken() ==null || getUserToken() == ''){
      wx.navigateTo({
        url:'../login/login'
      })
    }
    
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true,
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true,
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true,
    //       })
    //     },
    //   })
    // }
    const eventChannel = this.getOpenerEventChannel()
    if(eventChannel.on){
      eventChannel.on('sendUserInfo', function(userinfo) {
        _this.setData({userInfo:userinfo.data})
        _this.setData({hasUserInfo:true})
      })
    }
  },
  toquestion(e:any){
    console.log(e)
    wx.navigateTo({
      url:'../question/question'
    })
  },
  toreg(){
    wx.navigateTo({
      url:'../reg/reg'
    })
  },
  onShow(){
    if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
  }
})
