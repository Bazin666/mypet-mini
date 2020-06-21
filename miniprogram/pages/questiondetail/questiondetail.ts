import { question_one, question_rev, question_delete } from "../../utils/api"

// components/editor/editor.js
Page({

    /**
     * 组件的初始数据
     */
    data: {
        title:"",
        textarea_num:"0/200",
        context:"",
        question_detail:{
            qid:Number,
            context:String,
            title:String
        },
    },
  
    /**
     * 组件的方法列表
     */

    changeText(e:any){
        var value = e.detail.value
        this.setData({
            context:value,
            textarea_num:value.length+"/"+"200",
            question_detail:{
                context:value,
                title:(this.data.question_detail as any).title,
                qid:(this.data.question_detail as any).qid
            }
        })
        
    },

    onLoad(options :any){
       var qid = options.id
       var _this = this
       console.log(qid)
       question_one({
           qid:qid
       },(result : any) => {
           _this.setData({
                question_detail:result.data
           })
       })


       
    },
    submit(){
        var _this = this
        var qid = (_this.data.question_detail as any ).qid
        question_rev(this.data.question_detail as any,
                      () => {
                        question_one({
                            qid:qid
                        },(result : any) => {
                            _this.setData({
                                 question_detail:result.data
                            })
                        })
                      }  )
    },
    delete(){
        var _this = this
        question_delete(this.data.question_detail as any,
                      (res :any) => {
                          res
                        _this.success_delete()
                      }  )
    },
    success_delete(){
        wx.navigateBack({
            delta:1,
        })
    }

  })
  