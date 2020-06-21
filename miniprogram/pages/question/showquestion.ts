import { question_list } from "../../utils/api"

// miniprogram/pages/question/showquestion.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        question_l:undefined,
        select_item:'',
        q_title:'',
        q_context:'',
        q_id:'',
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        options
        const _this = this
        question_list(
            (res: any) =>{
               _this.setData({
                question_l:res.data
               })
            }
        )

    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
  
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.onLoad()
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
  
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
  
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
  
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
  
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

        return {}
    },
    select_q(e:any){
        var qid = e.currentTarget.dataset.item.id
        wx.navigateTo({
            url:"../questiondetail/questiondetail?id="+qid
        })
    },
  })