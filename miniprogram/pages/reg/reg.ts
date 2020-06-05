import config from '../../utils/config'
const conf = config

Page({
    data:{
        username:'',
        password:''
    },
    formSubmit(e: any){
        var info = e.detail.value
        wx.request({
            url:conf.regist_url,
            data:info,
            method:"POST",
            header:conf.header,
            success:res => {
                console.log(res)
            }
        })

    },
    formReset(e:any){
        console.log(e)
        this.setData({
            username:'',
            password:''
        })
    }
})