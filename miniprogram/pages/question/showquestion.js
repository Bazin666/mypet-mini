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
        this.onLoad();
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
    },
    select_q: function (e) {
        var qid = e.currentTarget.dataset.item.id;
        wx.navigateTo({
            url: "../questiondetail/questiondetail?id=" + qid
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd3F1ZXN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hvd3F1ZXN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQStDO0FBRy9DLElBQUksQ0FBQztJQUtELElBQUksRUFBRTtRQUNGLFVBQVUsRUFBQyxTQUFTO1FBQ3BCLFdBQVcsRUFBQyxFQUFFO1FBQ2QsT0FBTyxFQUFDLEVBQUU7UUFDVixTQUFTLEVBQUMsRUFBRTtRQUNaLElBQUksRUFBQyxFQUFFO0tBQ1Y7SUFLRCxNQUFNLEVBQUUsVUFBVSxPQUFPO1FBQ3JCLE9BQU8sQ0FBQTtRQUNQLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNsQixtQkFBYSxDQUNULFVBQUMsR0FBUTtZQUNOLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ2IsVUFBVSxFQUFDLEdBQUcsQ0FBQyxJQUFJO2FBQ25CLENBQUMsQ0FBQTtRQUNMLENBQUMsQ0FDSixDQUFBO0lBRUwsQ0FBQztJQUtELE9BQU8sRUFBRTtJQUVULENBQUM7SUFLRCxNQUFNLEVBQUU7UUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDakIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtRQUVmLE9BQU8sRUFBRSxDQUFBO0lBQ2IsQ0FBQztJQUNELFFBQVEsWUFBQyxDQUFLO1FBQ1YsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQTtRQUN6QyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1YsR0FBRyxFQUFDLHNDQUFzQyxHQUFDLEdBQUc7U0FDakQsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHF1ZXN0aW9uX2xpc3QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXBpXCJcclxuXHJcbi8vIG1pbmlwcm9ncmFtL3BhZ2VzL3F1ZXN0aW9uL3Nob3dxdWVzdGlvbi5qc1xyXG5QYWdlKHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmhtemdoueahOWIneWni+aVsOaNrlxyXG4gICAgICovXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgcXVlc3Rpb25fbDp1bmRlZmluZWQsXHJcbiAgICAgICAgc2VsZWN0X2l0ZW06JycsXHJcbiAgICAgICAgcV90aXRsZTonJyxcclxuICAgICAgICBxX2NvbnRleHQ6JycsXHJcbiAgICAgICAgcV9pZDonJyxcclxuICAgIH0sXHJcbiAgXHJcbiAgICAvKipcclxuICAgICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XHJcbiAgICAgKi9cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICBvcHRpb25zXHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzXHJcbiAgICAgICAgcXVlc3Rpb25fbGlzdChcclxuICAgICAgICAgICAgKHJlczogYW55KSA9PntcclxuICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbl9sOnJlcy5kYXRhXHJcbiAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcblxyXG4gICAgfSxcclxuICBcclxuICAgIC8qKlxyXG4gICAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcclxuICAgICAqL1xyXG4gICAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xyXG4gIFxyXG4gICAgfSxcclxuICBcclxuICAgIC8qKlxyXG4gICAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcclxuICAgICAqL1xyXG4gICAgb25TaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5vbkxvYWQoKVxyXG4gICAgfSxcclxuICBcclxuICAgIC8qKlxyXG4gICAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cclxuICAgICAqL1xyXG4gICAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxyXG4gICAgICovXHJcbiAgICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xyXG4gIFxyXG4gICAgfSxcclxuICBcclxuICAgIC8qKlxyXG4gICAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcclxuICAgICAqL1xyXG4gICAgb25QdWxsRG93blJlZnJlc2g6IGZ1bmN0aW9uICgpIHtcclxuICBcclxuICAgIH0sXHJcbiAgXHJcbiAgICAvKipcclxuICAgICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxyXG4gICAgICovXHJcbiAgICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XHJcbiAgXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcclxuICAgICAqL1xyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHt9XHJcbiAgICB9LFxyXG4gICAgc2VsZWN0X3EoZTphbnkpe1xyXG4gICAgICAgIHZhciBxaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pdGVtLmlkXHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDpcIi4uL3F1ZXN0aW9uZGV0YWlsL3F1ZXN0aW9uZGV0YWlsP2lkPVwiK3FpZFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gIH0pIl19