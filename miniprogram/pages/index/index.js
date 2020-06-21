"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../utils/api");
Page({
    data: {
        question_l: {},
    },
    onLoad: function () {
    },
    onShow: function () {
        if (typeof this.getTabBar === "function" && this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0,
            });
        }
        var _this = this;
        var question_l = api_1.question_list_all(function (res) {
            if (res.data.code == 10000) {
                _this.setData({
                    question_l: {},
                });
            }
            else {
                _this.setData({
                    question_l: res.data,
                });
            }
        });
        console.log(question_l);
    },
    select_q: function (e) {
        var qid = e.currentTarget.dataset.item.id;
        wx.navigateTo({
            url: "../comment/comment?qid=" + qid,
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHVDQUFvRDtBQUdwRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUUsRUFBRTtLQUNmO0lBR0QsTUFBTTtJQVNOLENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUM1RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUN2QixRQUFRLEVBQUUsQ0FBQzthQUNaLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksVUFBVSxHQUFHLHVCQUFpQixDQUFDLFVBQUMsR0FBUTtZQUMxQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssRUFBRTtnQkFDMUIsS0FBSyxDQUFDLE9BQU8sQ0FBQztvQkFDWixVQUFVLEVBQUUsRUFBRTtpQkFDZixDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxLQUFLLENBQUMsT0FBTyxDQUFDO29CQUNaLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSTtpQkFDckIsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELFFBQVEsWUFBQyxDQUFNO1FBQ2IsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUMxQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLHlCQUF5QixHQUFHLEdBQUc7U0FDckMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXHJcbi8vIOiOt+WPluW6lOeUqOWunuS+i1xyXG5cclxuaW1wb3J0IHsgcXVlc3Rpb25fbGlzdF9hbGwgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCI7XHJcblxyXG4vLyBjb25zdCBhcHAgPSBnZXRBcHA8SUFwcE9wdGlvbj4oKVxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBxdWVzdGlvbl9sOiB7fSxcclxuICB9LFxyXG4gIC8vIOS6i+S7tuWkhOeQhuWHveaVsFxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICAvLyBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICAvLyBjb25zdCBldmVudENoYW5uZWwgPSB0aGlzLmdldE9wZW5lckV2ZW50Q2hhbm5lbCgpXHJcbiAgICAvLyBpZihldmVudENoYW5uZWwub24pe1xyXG4gICAgLy8gICBldmVudENoYW5uZWwub24oJ3NlbmRVc2VySW5mbycsIGZ1bmN0aW9uKHVzZXJpbmZvKSB7XHJcbiAgICAvLyAgICAgX3RoaXMuc2V0RGF0YSh7dXNlckluZm86dXNlcmluZm8uZGF0YX0pXHJcbiAgICAvLyAgICAgX3RoaXMuc2V0RGF0YSh7aGFzVXNlckluZm86dHJ1ZX0pXHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyB9XHJcbiAgfSxcclxuICBvblNob3coKSB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuZ2V0VGFiQmFyID09PSBcImZ1bmN0aW9uXCIgJiYgdGhpcy5nZXRUYWJCYXIoKSkge1xyXG4gICAgICB0aGlzLmdldFRhYkJhcigpLnNldERhdGEoe1xyXG4gICAgICAgIHNlbGVjdGVkOiAwLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgcXVlc3Rpb25fbCA9IHF1ZXN0aW9uX2xpc3RfYWxsKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAxMDAwMCkge1xyXG4gICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcXVlc3Rpb25fbDoge30sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBxdWVzdGlvbl9sOiByZXMuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbl9sKTtcclxuICB9LFxyXG5cclxuICBzZWxlY3RfcShlOiBhbnkpIHtcclxuICAgIHZhciBxaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pdGVtLmlkO1xyXG4gICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgIHVybDogXCIuLi9jb21tZW50L2NvbW1lbnQ/cWlkPVwiICsgcWlkLFxyXG4gICAgfSk7XHJcbiAgfSxcclxufSk7XHJcbiJdfQ==