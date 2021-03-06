import config from './config'
import { getUserID } from './util'
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
        success:(res) => {
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

export const question_change = (data:any,success_function:Function)=>{
    res({
        url:conf.question_change_url,
        data:data,
        method:"POST",
        success:(res) => {
            success_function(res)
        }
    })
}
export const question_list = (success_function?:Function)=>{
    res({
        url:conf.question_list_url,
        method:"GET",
        header:conf.header,
        data:{userid:getUserID()},
        success:(res) => {
            if(success_function){
                success_function(res)
            }
        },
    })
}
export const question_list_all = (success_function?:Function)=>{
    res({
        url:conf.question_list_url_all,
        method:"GET",
        header:conf.header,
        success:(res) => {
            if(success_function){
                success_function(res)
            }
        },
    })
}
export const question_one = (data:{qid: number },success_function?:Function)=>{
    res({
        url:conf.question_one,
        method:"GET",
        header:conf.header,
        data:data,
        success:(res) => {
            if(success_function){
                success_function(res)
            }
        },
    })
}

export const question_rev = (data:{qid: number,title:string,context:string },success_function?:Function)=>{
    res({
        url:conf.question_rev,
        method:"POST",
        header:conf.header,
        data:data,
        success:(res) => {
            if(success_function){
                success_function(res)
            }
        },
    })
}


export const question_delete = (data:{qid: number,title:string,context:string },success_function?:Function)=>{
    res({
        url:conf.question_delete,
        method:"POST",
        header:conf.header,
        data:data,
        success:(res) => {
            if(success_function){
                success_function(res)
            }
        },
    })
}

export const comment_add = (data:{qid:number,comment_context:string},success_function:Function)=>{
    res({
        url:conf.comment_add,
        data:data,
        method:"POST",
        header:conf.header,
        success:(res) => {
            success_function(res)
        }
    })
}
