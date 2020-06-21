import { question_one, comment_add } from "../../utils/api";

// miniprogram/pages/comment/commnet.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    question_detail:{
        qid:Number,
        title:String,
        context:String,
        comments:[]
    },
    comment_button:[{text: '确定评论'}, {text: '取消'}],
    comment_show:false,
    comment_context:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options :any) {
    var qid = options.qid;
    var _this = this;
    
    question_one(
      {
        qid: qid,
      },
      (result: any) => {
        console.log(result.data)
        _this.setData({
          question_detail: result.data,
        });
      }
    );
    console.log(this.data.question_detail.comments)
  },

  addcomment(){
      this.setData({
          comment_show:true
      })
  },
  

  tapDialogButton(e:any){
    var index = e.detail.index
    var _this = this
    console.log('asdasd')
    if(index == 0){
        comment_add({
            qid:_this.data.question_detail.qid as any,
            comment_context:_this.data.comment_context as any
        } ,
        (res:any)=>{
            if(res.data.code == 10000){
                _this.setData({
                    comment_show:false,
                    comment_context:''
                })
                wx.showToast({
                    title: '成功',
                    icon: 'none',
                    duration: 2000,
                  })
                var option = {qid:this.data.question_detail.qid}
                this.onLoad(option)
            }
            console.log(res)
        })
    }
    if(index == 1){
      _this.setData({
        comment_show:false
    })
    }
  },
  changeText(e:any){
      var val = e.detail.value
      this.setData({
          comment_context:val
      })
  },





  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {};
  },
});
