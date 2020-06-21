"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../utils/api");
Page({
    data: {
        question_detail: {
            qid: Number,
            title: String,
            context: String,
            comments: []
        },
        comment_button: [{ text: '确定评论' }, { text: '取消' }],
        comment_show: false,
        comment_context: ''
    },
    onLoad: function (options) {
        var qid = options.qid;
        var _this = this;
        api_1.question_one({
            qid: qid,
        }, function (result) {
            console.log(result.data);
            _this.setData({
                question_detail: result.data,
            });
        });
        console.log(this.data.question_detail.comments);
    },
    addcomment: function () {
        this.setData({
            comment_show: true
        });
    },
    tapDialogButton: function (e) {
        var _this_1 = this;
        var index = e.detail.index;
        var _this = this;
        console.log('asdasd');
        if (index == 0) {
            api_1.comment_add({
                qid: _this.data.question_detail.qid,
                comment_context: _this.data.comment_context
            }, function (res) {
                if (res.data.code == 10000) {
                    _this.setData({
                        comment_show: false,
                        comment_context: ''
                    });
                    wx.showToast({
                        title: '成功',
                        icon: 'none',
                        duration: 2000,
                    });
                    var option = { qid: _this_1.data.question_detail.qid };
                    _this_1.onLoad(option);
                }
                console.log(res);
            });
        }
        if (index == 1) {
            _this.setData({
                comment_show: false
            });
        }
    },
    changeText: function (e) {
        var val = e.detail.value;
        this.setData({
            comment_context: val
        });
    },
    onReady: function () {
    },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
    onShareAppMessage: function () {
        return {};
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBNEQ7QUFHNUQsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osZUFBZSxFQUFDO1lBQ1osR0FBRyxFQUFDLE1BQU07WUFDVixLQUFLLEVBQUMsTUFBTTtZQUNaLE9BQU8sRUFBQyxNQUFNO1lBQ2QsUUFBUSxFQUFDLEVBQUU7U0FDZDtRQUNELGNBQWMsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDO1FBQzdDLFlBQVksRUFBQyxLQUFLO1FBQ2xCLGVBQWUsRUFBQyxFQUFFO0tBQ25CO0lBS0QsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUM1QixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3RCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUVqQixrQkFBWSxDQUNWO1lBQ0UsR0FBRyxFQUFFLEdBQUc7U0FDVCxFQUNELFVBQUMsTUFBVztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ1osZUFBZSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2FBQzdCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FDRixDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRUQsVUFBVTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxZQUFZLEVBQUMsSUFBSTtTQUNwQixDQUFDLENBQUE7SUFDTixDQUFDO0lBR0QsZUFBZSxZQUFDLENBQUs7UUFBckIsbUJBK0JDO1FBOUJDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQzFCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JCLElBQUcsS0FBSyxJQUFJLENBQUMsRUFBQztZQUNWLGlCQUFXLENBQUM7Z0JBQ1IsR0FBRyxFQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQVU7Z0JBQ3pDLGVBQWUsRUFBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQXNCO2FBQ3BELEVBQ0QsVUFBQyxHQUFPO2dCQUNKLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFDO29CQUN0QixLQUFLLENBQUMsT0FBTyxDQUFDO3dCQUNWLFlBQVksRUFBQyxLQUFLO3dCQUNsQixlQUFlLEVBQUMsRUFBRTtxQkFDckIsQ0FBQyxDQUFBO29CQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUM7d0JBQ1QsS0FBSyxFQUFFLElBQUk7d0JBQ1gsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFFLElBQUk7cUJBQ2YsQ0FBQyxDQUFBO29CQUNKLElBQUksTUFBTSxHQUFHLEVBQUMsR0FBRyxFQUFDLE9BQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBQyxDQUFBO29CQUNoRCxPQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2lCQUN0QjtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3BCLENBQUMsQ0FBQyxDQUFBO1NBQ0w7UUFDRCxJQUFHLEtBQUssSUFBSSxDQUFDLEVBQUM7WUFDWixLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUNaLFlBQVksRUFBQyxLQUFLO2FBQ3JCLENBQUMsQ0FBQTtTQUNEO0lBQ0gsQ0FBQztJQUNELFVBQVUsWUFBQyxDQUFLO1FBQ1osSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNULGVBQWUsRUFBQyxHQUFHO1NBQ3RCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFTRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFLGNBQWEsQ0FBQztJQUt0QixNQUFNLEVBQUUsY0FBYSxDQUFDO0lBS3RCLFFBQVEsRUFBRSxjQUFhLENBQUM7SUFLeEIsaUJBQWlCLEVBQUUsY0FBYSxDQUFDO0lBS2pDLGFBQWEsRUFBRSxjQUFhLENBQUM7SUFLN0IsaUJBQWlCLEVBQUU7UUFDakIsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcXVlc3Rpb25fb25lLCBjb21tZW50X2FkZCB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIjtcclxuXHJcbi8vIG1pbmlwcm9ncmFtL3BhZ2VzL2NvbW1lbnQvY29tbW5ldC5qc1xyXG5QYWdlKHtcclxuICAvKipcclxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cclxuICAgKi9cclxuICBkYXRhOiB7XHJcbiAgICBxdWVzdGlvbl9kZXRhaWw6e1xyXG4gICAgICAgIHFpZDpOdW1iZXIsXHJcbiAgICAgICAgdGl0bGU6U3RyaW5nLFxyXG4gICAgICAgIGNvbnRleHQ6U3RyaW5nLFxyXG4gICAgICAgIGNvbW1lbnRzOltdXHJcbiAgICB9LFxyXG4gICAgY29tbWVudF9idXR0b246W3t0ZXh0OiAn56Gu5a6a6K+E6K66J30sIHt0ZXh0OiAn5Y+W5raIJ31dLFxyXG4gICAgY29tbWVudF9zaG93OmZhbHNlLFxyXG4gICAgY29tbWVudF9jb250ZXh0OicnXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zIDphbnkpIHtcclxuICAgIHZhciBxaWQgPSBvcHRpb25zLnFpZDtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICBcclxuICAgIHF1ZXN0aW9uX29uZShcclxuICAgICAge1xyXG4gICAgICAgIHFpZDogcWlkLFxyXG4gICAgICB9LFxyXG4gICAgICAocmVzdWx0OiBhbnkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZGF0YSlcclxuICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIHF1ZXN0aW9uX2RldGFpbDogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEucXVlc3Rpb25fZGV0YWlsLmNvbW1lbnRzKVxyXG4gIH0sXHJcblxyXG4gIGFkZGNvbW1lbnQoKXtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgIGNvbW1lbnRfc2hvdzp0cnVlXHJcbiAgICAgIH0pXHJcbiAgfSxcclxuICBcclxuXHJcbiAgdGFwRGlhbG9nQnV0dG9uKGU6YW55KXtcclxuICAgIHZhciBpbmRleCA9IGUuZGV0YWlsLmluZGV4XHJcbiAgICB2YXIgX3RoaXMgPSB0aGlzXHJcbiAgICBjb25zb2xlLmxvZygnYXNkYXNkJylcclxuICAgIGlmKGluZGV4ID09IDApe1xyXG4gICAgICAgIGNvbW1lbnRfYWRkKHtcclxuICAgICAgICAgICAgcWlkOl90aGlzLmRhdGEucXVlc3Rpb25fZGV0YWlsLnFpZCBhcyBhbnksXHJcbiAgICAgICAgICAgIGNvbW1lbnRfY29udGV4dDpfdGhpcy5kYXRhLmNvbW1lbnRfY29udGV4dCBhcyBhbnlcclxuICAgICAgICB9ICxcclxuICAgICAgICAocmVzOmFueSk9PntcclxuICAgICAgICAgICAgaWYocmVzLmRhdGEuY29kZSA9PSAxMDAwMCl7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50X3Nob3c6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudF9jb250ZXh0OicnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbiA9IHtxaWQ6dGhpcy5kYXRhLnF1ZXN0aW9uX2RldGFpbC5xaWR9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTG9hZChvcHRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBpZihpbmRleCA9PSAxKXtcclxuICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgY29tbWVudF9zaG93OmZhbHNlXHJcbiAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2hhbmdlVGV4dChlOmFueSl7XHJcbiAgICAgIHZhciB2YWwgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgY29tbWVudF9jb250ZXh0OnZhbFxyXG4gICAgICB9KVxyXG4gIH0sXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgKi9cclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xyXG4gICAqL1xyXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XHJcbiAgICovXHJcbiAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxyXG4gICAqL1xyXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXHJcbiAgICovXHJcbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xyXG4gICAqL1xyXG4gIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge307XHJcbiAgfSxcclxufSk7XHJcbiJdfQ==