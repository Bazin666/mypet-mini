"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    tologin: function () {
        wx.navigateTo({
            url: "../login/login"
        });
    },
    onLoad: function () {
        var _this = this;
        _this.setData({
            userInfo: wx.getStorageSync('userInfo')
        });
        _this.setData({
            hasUserInfo: true
        });
        if (util_1.getUserToken() == null || util_1.getUserToken() == '') {
            wx.navigateTo({
                url: '../login/login'
            });
        }
        var eventChannel = this.getOpenerEventChannel();
        if (eventChannel.on) {
            eventChannel.on('sendUserInfo', function (userinfo) {
                _this.setData({ userInfo: userinfo.data });
                _this.setData({ hasUserInfo: true });
            });
        }
    },
    toquestion: function (e) {
        console.log(e);
        wx.navigateTo({
            url: '../question/question'
        });
    },
    toreg: function () {
        wx.navigateTo({
            url: '../reg/reg'
        });
    },
    onShow: function () {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHlDQUE2QztBQUM3QyxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO0tBQ3BEO0lBRUQsV0FBVztRQUNULEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsT0FBTztRQUNMLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUMsZ0JBQWdCO1NBQ3JCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ25CLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDWixRQUFRLEVBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7U0FDdkMsQ0FBQyxDQUFBO1FBQ0YsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUNaLFdBQVcsRUFBQyxJQUFJO1NBQ2pCLENBQUMsQ0FBQTtRQUNGLElBQUcsbUJBQVksRUFBRSxJQUFHLElBQUksSUFBSSxtQkFBWSxFQUFFLElBQUksRUFBRSxFQUFDO1lBQy9DLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFDLGdCQUFnQjthQUNyQixDQUFDLENBQUE7U0FDSDtRQTRCRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtRQUNqRCxJQUFHLFlBQVksQ0FBQyxFQUFFLEVBQUM7WUFDakIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsVUFBUyxRQUFRO2dCQUMvQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUMsUUFBUSxFQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFBO2dCQUN2QyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBQyxDQUFDLENBQUE7WUFDbkMsQ0FBQyxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFDRCxVQUFVLFlBQUMsQ0FBSztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFDLHNCQUFzQjtTQUMzQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsS0FBSztRQUNILEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUMsWUFBWTtTQUNqQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVU7WUFDcEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZCLFFBQVEsRUFBRSxDQUFDO2FBQ1osQ0FBQyxDQUFBO1NBQ0g7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcclxuLy8g6I635Y+W5bqU55So5a6e5L6LXHJcbi8vIGNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXHJcbmltcG9ydCB7Z2V0VXNlclRva2VufSBmcm9tICcuLi8uLi91dGlscy91dGlsJ1xyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICB1c2VySW5mbzoge30sXHJcbiAgICBoYXNVc2VySW5mbzogZmFsc2UsXHJcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXHJcbiAgfSxcclxuICAvLyDkuovku7blpITnkIblh73mlbBcclxuICBiaW5kVmlld1RhcCgpIHtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcuLi9sb2dzL2xvZ3MnLFxyXG4gICAgfSlcclxuICB9LFxyXG4gIHRvbG9naW4oKXtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6XCIuLi9sb2dpbi9sb2dpblwiXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgIHVzZXJJbmZvOnd4LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpXHJcbiAgICB9KVxyXG4gICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGhhc1VzZXJJbmZvOnRydWVcclxuICAgIH0pXHJcbiAgICBpZihnZXRVc2VyVG9rZW4oKSA9PW51bGwgfHwgZ2V0VXNlclRva2VuKCkgPT0gJycpe1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6Jy4uL2xvZ2luL2xvZ2luJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgIC8vICAgdGhpcy5zZXREYXRhKHtcclxuICAgIC8vICAgICB1c2VySW5mbzogYXBwLmdsb2JhbERhdGEudXNlckluZm8sXHJcbiAgICAvLyAgICAgaGFzVXNlckluZm86IHRydWUsXHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMuZGF0YS5jYW5JVXNlKSB7XHJcbiAgICAvLyAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXHJcbiAgICAvLyAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcclxuICAgIC8vICAgYXBwLnVzZXJJbmZvUmVhZHlDYWxsYmFjayA9IHJlcyA9PiB7XHJcbiAgICAvLyAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgIC8vICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXHJcbiAgICAvLyAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxyXG4gICAgLy8gICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAvLyAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgIC8vICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAvLyAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgLy8gICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxyXG4gICAgLy8gICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcclxuICAgIC8vICAgICAgIH0pXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgfSlcclxuICAgIC8vIH1cclxuICAgIGNvbnN0IGV2ZW50Q2hhbm5lbCA9IHRoaXMuZ2V0T3BlbmVyRXZlbnRDaGFubmVsKClcclxuICAgIGlmKGV2ZW50Q2hhbm5lbC5vbil7XHJcbiAgICAgIGV2ZW50Q2hhbm5lbC5vbignc2VuZFVzZXJJbmZvJywgZnVuY3Rpb24odXNlcmluZm8pIHtcclxuICAgICAgICBfdGhpcy5zZXREYXRhKHt1c2VySW5mbzp1c2VyaW5mby5kYXRhfSlcclxuICAgICAgICBfdGhpcy5zZXREYXRhKHtoYXNVc2VySW5mbzp0cnVlfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIHRvcXVlc3Rpb24oZTphbnkpe1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6Jy4uL3F1ZXN0aW9uL3F1ZXN0aW9uJ1xyXG4gICAgfSlcclxuICB9LFxyXG4gIHRvcmVnKCl7XHJcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgdXJsOicuLi9yZWcvcmVnJ1xyXG4gICAgfSlcclxuICB9LFxyXG4gIG9uU2hvdygpe1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmdldFRhYkJhciA9PT0gJ2Z1bmN0aW9uJyAmJlxyXG4gICAgICAgIHRoaXMuZ2V0VGFiQmFyKCkpIHtcclxuICAgICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xyXG4gICAgICAgICAgc2VsZWN0ZWQ6IDBcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgfVxyXG59KVxyXG4iXX0=