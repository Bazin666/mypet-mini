import { question_one } from "../../utils/api";

// miniprogram/pages/comment/commnet.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    question_detail:{
        qid:Number,
        title:String,
        context:String
    },
    comment_button:[{text: '确定评论'}, {text: '取消'}],
    comment_show:false
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
        _this.setData({
          question_detail: result.data,
        });
      }
    );

    console.log(this.data.question_detail)
  },

  addcomment(){
      this.setData({
          comment_show:true
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
