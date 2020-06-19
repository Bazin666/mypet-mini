import {question_add,question_list} from "../../utils/api"

// Component({
//     options:{
//         addGlobalClass:true
//     }
// })
Page({
    data:{
        question_title:'',
        question_context:'',
        question_l:undefined,
        select_item:'',
        q_title:'',
        q_context:'',
        q_id:'',
    },
    formSubmit(e: any){
        var info = e.detail.value
        question_add(info)

    },
    change(e:any){
        console.log(e)
        this.setData({
            username:'',
            password:''
        })
    },
    onLoad(){
        const _this = this
        question_list(
            (res: any) =>{
               _this.setData({
                question_l:res.data
               })

               console.log(res.data)
            }
        )
    },
    select_q(e:any){
        const q = e.currentTarget.dataset.item
        console.log(q)
        this.setData({
            q_title:q.title,
            q_context:q.context
        })
    },
})