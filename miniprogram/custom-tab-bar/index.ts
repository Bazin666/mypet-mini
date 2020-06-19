Component({
  data: {
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/static/img/shouye.png",
      selectedIconPath: "/static/img/shouye.png",
      text: "首页"
    }, {
      pagePath: "/pages/user/user",
      iconPath: "/static/img/yonghu.png",
      selectedIconPath: "/static/img/yonghu.png",
      text: "用户"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})