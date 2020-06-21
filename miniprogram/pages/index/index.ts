// index.ts
// 获取应用实例

import { question_list_all } from "../../utils/api";

// const app = getApp<IAppOption>()
Page({
  data: {
    question_l: {},
  },
  // 事件处理函数

  onLoad() {
    // const _this = this;
    // const eventChannel = this.getOpenerEventChannel()
    // if(eventChannel.on){
    //   eventChannel.on('sendUserInfo', function(userinfo) {
    //     _this.setData({userInfo:userinfo.data})
    //     _this.setData({hasUserInfo:true})
    //   })
    // }
  },
  onShow() {
    if (typeof this.getTabBar === "function" && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0,
      });
    }
    var _this = this;
    var question_l = question_list_all((res: any) => {
      if (res.data.code == 10000) {
        _this.setData({
          question_l: {},
        });
      } else {
        _this.setData({
          question_l: res.data,
        });
      }
    });
    console.log(question_l);
  },

  select_q(e: any) {
    var qid = e.currentTarget.dataset.item.id;
    wx.navigateTo({
      url: "../comment/comment?qid=" + qid,
    });
  },
});
