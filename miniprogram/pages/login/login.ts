import {login, wx_login_api} from '../../utils/api'

Page({
    onLoad(){

    },
    data:{
        username:'',
        password:'',
        res_msg:'',
        buttons:[{text:'OK'}],
        is_show_dialog:false,
        login_state:"",
        user_data:'',
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
    formReset(e:any){
        console.log(e)
        this.setData({
            username:'',
            password:''
        })
    },
    showMsg(){
        var _this = this
        _this.setData({is_show_dialog:true})

    },
    success_login(){
        wx.navigateTo({
            url:"../index/index"
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