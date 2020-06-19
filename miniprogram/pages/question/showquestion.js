"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("../../utils/api");
Page({
    data: {
        question_l: undefined,
        select_item: '',
        q_title: '',
        q_context: '',
        q_id: '',
    },
    onLoad: function (options) {
        options;
        var _this = this;
        api_1.question_list(function (res) {
            _this.setData({
                question_l: res.data
            });
        });
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function () {
        return {};
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd3F1ZXN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hvd3F1ZXN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQStDO0FBRy9DLElBQUksQ0FBQztJQUtELElBQUksRUFBRTtRQUNGLFVBQVUsRUFBQyxTQUFTO1FBQ3BCLFdBQVcsRUFBQyxFQUFFO1FBQ2QsT0FBTyxFQUFDLEVBQUU7UUFDVixTQUFTLEVBQUMsRUFBRTtRQUNaLElBQUksRUFBQyxFQUFFO0tBQ1Y7SUFLRCxNQUFNLEVBQUUsVUFBVSxPQUFPO1FBQ3JCLE9BQU8sQ0FBQTtRQUNQLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNsQixtQkFBYSxDQUNULFVBQUMsR0FBUTtZQUNOLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ2IsVUFBVSxFQUFDLEdBQUcsQ0FBQyxJQUFJO2FBQ25CLENBQUMsQ0FBQTtRQUNMLENBQUMsQ0FDSixDQUFBO0lBRUwsQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELFFBQVEsRUFBRTtJQUVWLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtJQUVuQixDQUFDO0lBS0QsYUFBYSxFQUFFO0lBRWYsQ0FBQztJQUtELGlCQUFpQixFQUFFO1FBRWYsT0FBTyxFQUFFLENBQUE7SUFDYixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcXVlc3Rpb25fbGlzdCB9IGZyb20gXCIuLi8uLi91dGlscy9hcGlcIlxyXG5cclxuLy8gbWluaXByb2dyYW0vcGFnZXMvcXVlc3Rpb24vc2hvd3F1ZXN0aW9uLmpzXHJcblBhZ2Uoe1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIGRhdGE6IHtcclxuICAgICAgICBxdWVzdGlvbl9sOnVuZGVmaW5lZCxcclxuICAgICAgICBzZWxlY3RfaXRlbTonJyxcclxuICAgICAgICBxX3RpdGxlOicnLFxyXG4gICAgICAgIHFfY29udGV4dDonJyxcclxuICAgICAgICBxX2lkOicnLFxyXG4gICAgfSxcclxuICBcclxuICAgIC8qKlxyXG4gICAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgICAqL1xyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnNcclxuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXNcclxuICAgICAgICBxdWVzdGlvbl9saXN0KFxyXG4gICAgICAgICAgICAocmVzOiBhbnkpID0+e1xyXG4gICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uX2w6cmVzLmRhdGFcclxuICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAgICovXHJcbiAgICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XHJcbiAgXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAgICovXHJcbiAgICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuICBcclxuICAgIH0sXHJcbiAgXHJcbiAgICAvKipcclxuICAgICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICAgKi9cclxuICAgIG9uSGlkZTogZnVuY3Rpb24gKCkge1xyXG4gIFxyXG4gICAgfSxcclxuICBcclxuICAgIC8qKlxyXG4gICAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgICAqL1xyXG4gICAgb25VbmxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICBcclxuICAgIH0sXHJcbiAgXHJcbiAgICAvKipcclxuICAgICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICAgKi9cclxuICAgIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgICAqL1xyXG4gICAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xyXG4gIFxyXG4gICAgfSxcclxuICBcclxuICAgIC8qKlxyXG4gICAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICAgKi9cclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB7fVxyXG4gICAgfVxyXG4gIH0pIl19