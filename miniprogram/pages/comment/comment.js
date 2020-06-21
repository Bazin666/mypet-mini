"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../utils/api");
Page({
    data: {
        question_detail: {
            qid: Number,
            title: String,
            context: String
        },
        comment_button: [{ text: '确定评论' }, { text: '取消' }]
    },
    onLoad: function (options) {
        var qid = options.qid;
        var _this = this;
        api_1.question_one({
            qid: qid,
        }, function (result) {
            _this.setData({
                question_detail: result.data,
            });
        });
        console.log(this.data.question_detail);
    },
    onReady: function () { },
    onShow: function () { },
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
    onShareAppMessage: function () {
        return {};
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBK0M7QUFHL0MsSUFBSSxDQUFDO0lBSUgsSUFBSSxFQUFFO1FBQ0osZUFBZSxFQUFDO1lBQ1osR0FBRyxFQUFDLE1BQU07WUFDVixLQUFLLEVBQUMsTUFBTTtZQUNaLE9BQU8sRUFBQyxNQUFNO1NBQ2pCO1FBQ0QsY0FBYyxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUM7S0FDOUM7SUFLRCxNQUFNLEVBQUUsVUFBVSxPQUFZO1FBQzVCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDdEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGtCQUFZLENBQ1Y7WUFDRSxHQUFHLEVBQUUsR0FBRztTQUNULEVBQ0QsVUFBQyxNQUFXO1lBQ1YsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDWixlQUFlLEVBQUUsTUFBTSxDQUFDLElBQUk7YUFDN0IsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUNGLENBQUM7UUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUtELE9BQU8sRUFBRSxjQUFhLENBQUM7SUFLdkIsTUFBTSxFQUFFLGNBQWEsQ0FBQztJQUt0QixNQUFNLEVBQUUsY0FBYSxDQUFDO0lBS3RCLFFBQVEsRUFBRSxjQUFhLENBQUM7SUFLeEIsaUJBQWlCLEVBQUUsY0FBYSxDQUFDO0lBS2pDLGFBQWEsRUFBRSxjQUFhLENBQUM7SUFLN0IsaUJBQWlCLEVBQUU7UUFDakIsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcXVlc3Rpb25fb25lIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2FwaVwiO1xyXG5cclxuLy8gbWluaXByb2dyYW0vcGFnZXMvY29tbWVudC9jb21tbmV0LmpzXHJcblBhZ2Uoe1xyXG4gIC8qKlxyXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAqL1xyXG4gIGRhdGE6IHtcclxuICAgIHF1ZXN0aW9uX2RldGFpbDp7XHJcbiAgICAgICAgcWlkOk51bWJlcixcclxuICAgICAgICB0aXRsZTpTdHJpbmcsXHJcbiAgICAgICAgY29udGV4dDpTdHJpbmdcclxuICAgIH0sXHJcbiAgICBjb21tZW50X2J1dHRvbjpbe3RleHQ6ICfnoa7lrpror4TorronfSwge3RleHQ6ICflj5bmtognfV1cclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxyXG4gICAqL1xyXG4gIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMgOmFueSkge1xyXG4gICAgdmFyIHFpZCA9IG9wdGlvbnMucWlkO1xyXG4gICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgIFxyXG4gICAgcXVlc3Rpb25fb25lKFxyXG4gICAgICB7XHJcbiAgICAgICAgcWlkOiBxaWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIChyZXN1bHQ6IGFueSkgPT4ge1xyXG4gICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcXVlc3Rpb25fZGV0YWlsOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEucXVlc3Rpb25fZGV0YWlsKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXHJcbiAgICovXHJcbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XHJcbiAgICovXHJcbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgKi9cclxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAqL1xyXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7fSxcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgKi9cclxuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge30sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAqL1xyXG4gIG9uUmVhY2hCb3R0b206IGZ1bmN0aW9uICgpIHt9LFxyXG5cclxuICAvKipcclxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgKi9cclxuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH0sXHJcbn0pO1xyXG4iXX0=