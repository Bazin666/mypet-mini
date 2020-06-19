"use strict";
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
    attached: function () {
    },
    methods: {
        switchTab: function (e) {
            var data = e.currentTarget.dataset;
            var url = data.path;
            wx.switchTab({ url: url });
            this.setData({
                selected: data.index
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLFNBQVM7UUFDaEIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsSUFBSSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsZ0JBQWdCLEVBQUUsd0JBQXdCO2dCQUMxQyxJQUFJLEVBQUUsSUFBSTthQUNYLEVBQUU7Z0JBQ0QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsZ0JBQWdCLEVBQUUsd0JBQXdCO2dCQUMxQyxJQUFJLEVBQUUsSUFBSTthQUNYLENBQUM7S0FDSDtJQUNELFFBQVE7SUFDUixDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxZQUFDLENBQUM7WUFDVCxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQTtZQUNwQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1lBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEtBQUEsRUFBQyxDQUFDLENBQUE7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDckIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcbiAgZGF0YToge1xuICAgIGNvbG9yOiBcIiM3QTdFODNcIixcbiAgICBzZWxlY3RlZENvbG9yOiBcIiMzY2M1MWZcIixcbiAgICBsaXN0OiBbe1xuICAgICAgcGFnZVBhdGg6IFwiL3BhZ2VzL2luZGV4L2luZGV4XCIsXG4gICAgICBpY29uUGF0aDogXCIvc3RhdGljL2ltZy9zaG91eWUucG5nXCIsXG4gICAgICBzZWxlY3RlZEljb25QYXRoOiBcIi9zdGF0aWMvaW1nL3Nob3V5ZS5wbmdcIixcbiAgICAgIHRleHQ6IFwi6aaW6aG1XCJcbiAgICB9LCB7XG4gICAgICBwYWdlUGF0aDogXCIvcGFnZXMvdXNlci91c2VyXCIsXG4gICAgICBpY29uUGF0aDogXCIvc3RhdGljL2ltZy95b25naHUucG5nXCIsXG4gICAgICBzZWxlY3RlZEljb25QYXRoOiBcIi9zdGF0aWMvaW1nL3lvbmdodS5wbmdcIixcbiAgICAgIHRleHQ6IFwi55So5oi3XCJcbiAgICB9XVxuICB9LFxuICBhdHRhY2hlZCgpIHtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHN3aXRjaFRhYihlKSB7XG4gICAgICBjb25zdCBkYXRhID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXRcbiAgICAgIGNvbnN0IHVybCA9IGRhdGEucGF0aFxuICAgICAgd3guc3dpdGNoVGFiKHt1cmx9KVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2VsZWN0ZWQ6IGRhdGEuaW5kZXhcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KSJdfQ==