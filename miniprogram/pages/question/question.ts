import {question_add} from "../../utils/api"

Page({
    data:{
        question_title:'',
        question_context:''
    },
    formSubmit(e: any){
        var info = e.detail.value
        question_add(info)

    },
    formReset(e:any){
        console.log(e)
        this.setData({
            username:'',
            password:''
        })
    }
})