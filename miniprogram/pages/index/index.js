"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../utils/api");
Page({
    data: {
        question_l: undefined
    },
    onLoad: function () {
    },
    onShow: function () {
        if (typeof this.getTabBar === 'function' &&
            this.getTabBar()) {
            this.getTabBar().setData({
                selected: 0
            });
        }
        var _this = this;
        var question_l = api_1.question_list_all(function (res) {
            _this.setData({
                question_l: res.data
            });
        });
        console.log(question_l);
    },
    select_q: function (e) {
        var qid = e.currentTarget.dataset.item.id;
        wx.navigateTo({
            url: "../comment/comment?qid=" + qid
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHVDQUFtRDtBQUduRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixVQUFVLEVBQUMsU0FBUztLQUNyQjtJQUdELE1BQU07SUFTTixDQUFDO0lBQ0QsTUFBTTtRQUNKLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVU7WUFDcEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZCLFFBQVEsRUFBRSxDQUFDO2FBQ1osQ0FBQyxDQUFBO1NBQ0g7UUFDSCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDaEIsSUFBSSxVQUFVLEdBQUcsdUJBQWlCLENBQ2hDLFVBQUMsR0FBUTtZQUNQLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ2IsVUFBVSxFQUFDLEdBQUcsQ0FBQyxJQUFJO2FBQ25CLENBQUMsQ0FBQTtRQUNKLENBQUMsQ0FDRixDQUFBO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBRUQsUUFBUSxZQUFDLENBQUs7UUFDWixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFBO1FBQ3pDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDVixHQUFHLEVBQUMseUJBQXlCLEdBQUMsR0FBRztTQUNwQyxDQUFDLENBQUE7SUFDTixDQUFDO0NBRUEsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5kZXgudHNcclxuLy8g6I635Y+W5bqU55So5a6e5L6LXHJcblxyXG5pbXBvcnQgeyBxdWVzdGlvbl9saXN0X2FsbCB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIlxyXG5cclxuLy8gY29uc3QgYXBwID0gZ2V0QXBwPElBcHBPcHRpb24+KClcclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgcXVlc3Rpb25fbDp1bmRlZmluZWRcclxuICB9LFxyXG4gIC8vIOS6i+S7tuWkhOeQhuWHveaVsFxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICAvLyBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICAvLyBjb25zdCBldmVudENoYW5uZWwgPSB0aGlzLmdldE9wZW5lckV2ZW50Q2hhbm5lbCgpXHJcbiAgICAvLyBpZihldmVudENoYW5uZWwub24pe1xyXG4gICAgLy8gICBldmVudENoYW5uZWwub24oJ3NlbmRVc2VySW5mbycsIGZ1bmN0aW9uKHVzZXJpbmZvKSB7XHJcbiAgICAvLyAgICAgX3RoaXMuc2V0RGF0YSh7dXNlckluZm86dXNlcmluZm8uZGF0YX0pXHJcbiAgICAvLyAgICAgX3RoaXMuc2V0RGF0YSh7aGFzVXNlckluZm86dHJ1ZX0pXHJcbiAgICAvLyAgIH0pXHJcbiAgICAvLyB9XHJcbiAgfSxcclxuICBvblNob3coKXtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5nZXRUYWJCYXIgPT09ICdmdW5jdGlvbicgJiZcclxuICAgICAgICB0aGlzLmdldFRhYkJhcigpKSB7XHJcbiAgICAgICAgdGhpcy5nZXRUYWJCYXIoKS5zZXREYXRhKHtcclxuICAgICAgICAgIHNlbGVjdGVkOiAwXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgdmFyIF90aGlzID0gdGhpc1xyXG4gICAgdmFyIHF1ZXN0aW9uX2wgPSBxdWVzdGlvbl9saXN0X2FsbChcclxuICAgICAgKHJlczogYW55KSA9PntcclxuICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgcXVlc3Rpb25fbDpyZXMuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIClcclxuICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uX2wpXHJcbiAgfSxcclxuXHJcbiAgc2VsZWN0X3EoZTphbnkpe1xyXG4gICAgdmFyIHFpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW0uaWRcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDpcIi4uL2NvbW1lbnQvY29tbWVudD9xaWQ9XCIrcWlkXHJcbiAgICB9KVxyXG59LFxyXG5cclxufSlcclxuIl19