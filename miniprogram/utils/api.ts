import config from './config'
const conf = config
const res = wx.request


/**
 * 
 * @param data 登陆携带数据
 * @param success_funtion 登录成功后执行函数
 * @param fail_function 登录失败后执行函数
 *  
 * @example login(info,()=>{
            console.log('success')
        },() => {
           console.log('fail')
        })
 */

export const login = (data:any,success_function:Function,fail_function:Function) => {
    res({
        url:conf.login_url,
        data:data,
        method:"POST",
        header:conf.header,
        success:res => {
            const data :any = res.data
            if(data.user && data.token){
                wx.setStorageSync('user_token',data.token)
                wx.setStorageSync('current_user',data.user)
                config.header.Authorization = data.token
                config.header.User = data.user
                success_function()
            }else{
                fail_function()
            }
        }
    })
}

export const wx_login_api = (data:any,success_function:Function,fail_function:Function = ()=>{})=>{
    res({
        url:conf.wx_login_url,
        data:data,
        method:"POST",
        header:conf.header,
        success:() => {
            success_function()
            fail_function()
        }
    })
}

export const question_add = (data:any)=>{
    res({
        url:conf.question_add_url,
        data:data,
        method:"POST",
        header:conf.header,
        success:() => {
            
        }
    })
}