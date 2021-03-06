import {login, wx_login_api} from '../../utils/api'
Page({
    onLoad:function(options){
        options
    },
    onReady: function () {
  
    },

    onShow: function () {
  
    },

    onHide: function () {
  
    },

    onUnload: function () {
  
    },

    onPullDownRefresh: function () {
  
    },

    onReachBottom: function () {
  
    },

    onShareAppMessage: function () {

        return {}
    },

    data:{
        username:'',
        password:'',
        res_msg:'',
        buttons:[{text:'OK'}],
        is_show_dialog:false,
        login_state:"",
        user_data:'',
        userInfo:undefined,
        hasUserInfo:false,
    },

    formSubmit(e: any){
        var _this = this;
        var info = e.detail.value
        login(info,()=>{
            _this.setData({res_msg:'登陆成功'})
            _this.setData({login_state:'success_login'})
            _this.showMsg()
            
            console.log('show')
        },() => {
            _this.setData({login_state:'fail_login'})
            _this.setData({res_msg:'登陆失败'})
            _this.showMsg()
        })

    },
    formReset(){
        wx.navigateTo({
            url:'../reg/reg'
          })
    },
    showMsg(){
        var _this = this
        _this.setData({is_show_dialog:true})

    },
    success_login(){
        var _this = this
        var pages = getCurrentPages();
                var prePage = pages[pages.length - 2];
                prePage.setData({userInfo:_this.data.userInfo,
                                    hasUserInfo: true,})
        wx.navigateBack({
            delta:1,
        })
    },
    fail_login(){
        this.setData({
            is_show_dialog:false,
        })
    },
    wx_login(){
        wx.login({
            success(res){
                console.log(res)
                wx_login_api({code:res.code},()=>{console.log("wx_login")})
            }
        })
    },
    wx_getuserinfo(e:any){
        var _this  = this
        var userdetail= JSON.stringify(e.detail)
        _this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
          })
        console.log(e.detail.userInfo)
        wx.setStorageSync('userInfo',e.detail.userInfo)
        wx.login({
            success(res){
                var info = {code:res.code,userinfo:userdetail}
                wx_login_api(info,()=>{

                        _this.setData({res_msg:'登陆成功'})
                        _this.setData({login_state:'success_login'})
                        _this.showMsg()})
            }
        })
        
    }
})