"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../../utils/config");
var conf = config_1.default;
Page({
    data: {
        username: '',
        password: ''
    },
    formSubmit: function (e) {
        var info = e.detail.value;
        wx.request({
            url: conf.regist_url,
            data: info,
            method: "POST",
            header: conf.header,
            success: function (res) {
                console.log(res);
            }
        });
    },
    formReset: function (e) {
        console.log(e);
        this.setData({
            username: '',
            password: ''
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXVDO0FBQ3ZDLElBQU0sSUFBSSxHQUFHLGdCQUFNLENBQUE7QUFFbkIsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFDO1FBQ0QsUUFBUSxFQUFDLEVBQUU7UUFDWCxRQUFRLEVBQUMsRUFBRTtLQUNkO0lBQ0QsVUFBVSxZQUFDLENBQU07UUFDYixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUN6QixFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1AsR0FBRyxFQUFDLElBQUksQ0FBQyxVQUFVO1lBQ25CLElBQUksRUFBQyxJQUFJO1lBQ1QsTUFBTSxFQUFDLE1BQU07WUFDYixNQUFNLEVBQUMsSUFBSSxDQUFDLE1BQU07WUFDbEIsT0FBTyxFQUFDLFVBQUEsR0FBRztnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3BCLENBQUM7U0FDSixDQUFDLENBQUE7SUFFTixDQUFDO0lBQ0QsU0FBUyxZQUFDLENBQUs7UUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULFFBQVEsRUFBQyxFQUFFO1lBQ1gsUUFBUSxFQUFDLEVBQUU7U0FDZCxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi91dGlscy9jb25maWcnXHJcbmNvbnN0IGNvbmYgPSBjb25maWdcclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YTp7XHJcbiAgICAgICAgdXNlcm5hbWU6JycsXHJcbiAgICAgICAgcGFzc3dvcmQ6JydcclxuICAgIH0sXHJcbiAgICBmb3JtU3VibWl0KGU6IGFueSl7XHJcbiAgICAgICAgdmFyIGluZm8gPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6Y29uZi5yZWdpc3RfdXJsLFxyXG4gICAgICAgICAgICBkYXRhOmluZm8sXHJcbiAgICAgICAgICAgIG1ldGhvZDpcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyOmNvbmYuaGVhZGVyLFxyXG4gICAgICAgICAgICBzdWNjZXNzOnJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0sXHJcbiAgICBmb3JtUmVzZXQoZTphbnkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6JycsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOicnXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSkiXX0=