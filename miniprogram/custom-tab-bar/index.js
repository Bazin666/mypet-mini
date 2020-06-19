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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxDQUFDO0lBQ1IsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLFNBQVM7UUFDaEIsYUFBYSxFQUFFLFNBQVM7UUFDeEIsSUFBSSxFQUFFLENBQUM7Z0JBQ0wsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsZ0JBQWdCLEVBQUUsd0JBQXdCO2dCQUMxQyxJQUFJLEVBQUUsSUFBSTthQUNYLEVBQUU7Z0JBQ0QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsZ0JBQWdCLEVBQUUsd0JBQXdCO2dCQUMxQyxJQUFJLEVBQUUsSUFBSTthQUNYLENBQUM7S0FDSDtJQUNELFFBQVE7SUFDUixDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsU0FBUyxZQUFDLENBQUM7WUFDVCxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQTtZQUNwQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1lBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEtBQUEsRUFBQyxDQUFDLENBQUE7WUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDckIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiQ29tcG9uZW50KHtcclxuICBkYXRhOiB7XHJcbiAgICBjb2xvcjogXCIjN0E3RTgzXCIsXHJcbiAgICBzZWxlY3RlZENvbG9yOiBcIiMzY2M1MWZcIixcclxuICAgIGxpc3Q6IFt7XHJcbiAgICAgIHBhZ2VQYXRoOiBcIi9wYWdlcy9pbmRleC9pbmRleFwiLFxyXG4gICAgICBpY29uUGF0aDogXCIvc3RhdGljL2ltZy9zaG91eWUucG5nXCIsXHJcbiAgICAgIHNlbGVjdGVkSWNvblBhdGg6IFwiL3N0YXRpYy9pbWcvc2hvdXllLnBuZ1wiLFxyXG4gICAgICB0ZXh0OiBcIummlumhtVwiXHJcbiAgICB9LCB7XHJcbiAgICAgIHBhZ2VQYXRoOiBcIi9wYWdlcy91c2VyL3VzZXJcIixcclxuICAgICAgaWNvblBhdGg6IFwiL3N0YXRpYy9pbWcveW9uZ2h1LnBuZ1wiLFxyXG4gICAgICBzZWxlY3RlZEljb25QYXRoOiBcIi9zdGF0aWMvaW1nL3lvbmdodS5wbmdcIixcclxuICAgICAgdGV4dDogXCLnlKjmiLdcIlxyXG4gICAgfV1cclxuICB9LFxyXG4gIGF0dGFjaGVkKCkge1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc3dpdGNoVGFiKGUpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0XHJcbiAgICAgIGNvbnN0IHVybCA9IGRhdGEucGF0aFxyXG4gICAgICB3eC5zd2l0Y2hUYWIoe3VybH0pXHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IGRhdGEuaW5kZXhcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn0pIl19