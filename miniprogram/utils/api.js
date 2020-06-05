"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var conf = config_1.default;
var res = wx.request;
exports.login = function (data, success_function, fail_function) {
    res({
        url: conf.login_url,
        data: data,
        method: "POST",
        header: conf.header,
        success: function (res) {
            var data = res.data;
            if (data.user && data.token) {
                wx.setStorageSync('user_token', data.token);
                wx.setStorageSync('current_user', data.user);
                config_1.default.header.Authorization = data.token;
                config_1.default.header.User = data.user;
                success_function();
            }
            else {
                fail_function();
            }
        }
    });
};
exports.wx_login_api = function (data, success_function, fail_function) {
    if (fail_function === void 0) { fail_function = function () { }; }
    res({
        url: conf.wx_login_url,
        data: data,
        method: "POST",
        header: conf.header,
        success: function () {
            success_function();
            fail_function();
        }
    });
};
exports.question_add = function (data) {
    res({
        url: conf.question_add_url,
        data: data,
        method: "POST",
        header: conf.header,
        success: function () {
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQTZCO0FBQzdCLElBQU0sSUFBSSxHQUFHLGdCQUFNLENBQUE7QUFDbkIsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQTtBQWdCVCxRQUFBLEtBQUssR0FBRyxVQUFDLElBQVEsRUFBQyxnQkFBeUIsRUFBQyxhQUFzQjtJQUMzRSxHQUFHLENBQUM7UUFDQSxHQUFHLEVBQUMsSUFBSSxDQUFDLFNBQVM7UUFDbEIsSUFBSSxFQUFDLElBQUk7UUFDVCxNQUFNLEVBQUMsTUFBTTtRQUNiLE1BQU0sRUFBQyxJQUFJLENBQUMsTUFBTTtRQUNsQixPQUFPLEVBQUMsVUFBQSxHQUFHO1lBQ1AsSUFBTSxJQUFJLEdBQVEsR0FBRyxDQUFDLElBQUksQ0FBQTtZQUMxQixJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBQztnQkFDdkIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUMxQyxFQUFFLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQzNDLGdCQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO2dCQUN4QyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtnQkFDOUIsZ0JBQWdCLEVBQUUsQ0FBQTthQUNyQjtpQkFBSTtnQkFDRCxhQUFhLEVBQUUsQ0FBQTthQUNsQjtRQUNMLENBQUM7S0FDSixDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFFWSxRQUFBLFlBQVksR0FBRyxVQUFDLElBQVEsRUFBQyxnQkFBeUIsRUFBQyxhQUErQjtJQUEvQiw4QkFBQSxFQUFBLDhCQUE4QixDQUFDO0lBQzNGLEdBQUcsQ0FBQztRQUNBLEdBQUcsRUFBQyxJQUFJLENBQUMsWUFBWTtRQUNyQixJQUFJLEVBQUMsSUFBSTtRQUNULE1BQU0sRUFBQyxNQUFNO1FBQ2IsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNO1FBQ2xCLE9BQU8sRUFBQztZQUNKLGdCQUFnQixFQUFFLENBQUE7WUFDbEIsYUFBYSxFQUFFLENBQUE7UUFDbkIsQ0FBQztLQUNKLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQUVZLFFBQUEsWUFBWSxHQUFHLFVBQUMsSUFBUTtJQUNqQyxHQUFHLENBQUM7UUFDQSxHQUFHLEVBQUMsSUFBSSxDQUFDLGdCQUFnQjtRQUN6QixJQUFJLEVBQUMsSUFBSTtRQUNULE1BQU0sRUFBQyxNQUFNO1FBQ2IsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNO1FBQ2xCLE9BQU8sRUFBQztRQUVSLENBQUM7S0FDSixDQUFDLENBQUE7QUFDTixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJ1xyXG5jb25zdCBjb25mID0gY29uZmlnXHJcbmNvbnN0IHJlcyA9IHd4LnJlcXVlc3RcclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSBkYXRhIOeZu+mZhuaQuuW4puaVsOaNrlxyXG4gKiBAcGFyYW0gc3VjY2Vzc19mdW50aW9uIOeZu+W9leaIkOWKn+WQjuaJp+ihjOWHveaVsFxyXG4gKiBAcGFyYW0gZmFpbF9mdW5jdGlvbiDnmbvlvZXlpLHotKXlkI7miafooYzlh73mlbBcclxuICogIFxyXG4gKiBAZXhhbXBsZSBsb2dpbihpbmZvLCgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJylcclxuICAgICAgICB9LCgpID0+IHtcclxuICAgICAgICAgICBjb25zb2xlLmxvZygnZmFpbCcpXHJcbiAgICAgICAgfSlcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPSAoZGF0YTphbnksc3VjY2Vzc19mdW5jdGlvbjpGdW5jdGlvbixmYWlsX2Z1bmN0aW9uOkZ1bmN0aW9uKSA9PiB7XHJcbiAgICByZXMoe1xyXG4gICAgICAgIHVybDpjb25mLmxvZ2luX3VybCxcclxuICAgICAgICBkYXRhOmRhdGEsXHJcbiAgICAgICAgbWV0aG9kOlwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcjpjb25mLmhlYWRlcixcclxuICAgICAgICBzdWNjZXNzOnJlcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgOmFueSA9IHJlcy5kYXRhXHJcbiAgICAgICAgICAgIGlmKGRhdGEudXNlciAmJiBkYXRhLnRva2VuKXtcclxuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd1c2VyX3Rva2VuJyxkYXRhLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2N1cnJlbnRfdXNlcicsZGF0YS51c2VyKVxyXG4gICAgICAgICAgICAgICAgY29uZmlnLmhlYWRlci5BdXRob3JpemF0aW9uID0gZGF0YS50b2tlblxyXG4gICAgICAgICAgICAgICAgY29uZmlnLmhlYWRlci5Vc2VyID0gZGF0YS51c2VyXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzX2Z1bmN0aW9uKClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBmYWlsX2Z1bmN0aW9uKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB3eF9sb2dpbl9hcGkgPSAoZGF0YTphbnksc3VjY2Vzc19mdW5jdGlvbjpGdW5jdGlvbixmYWlsX2Z1bmN0aW9uOkZ1bmN0aW9uID0gKCk9Pnt9KT0+e1xyXG4gICAgcmVzKHtcclxuICAgICAgICB1cmw6Y29uZi53eF9sb2dpbl91cmwsXHJcbiAgICAgICAgZGF0YTpkYXRhLFxyXG4gICAgICAgIG1ldGhvZDpcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXI6Y29uZi5oZWFkZXIsXHJcbiAgICAgICAgc3VjY2VzczooKSA9PiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NfZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICBmYWlsX2Z1bmN0aW9uKClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcXVlc3Rpb25fYWRkID0gKGRhdGE6YW55KT0+e1xyXG4gICAgcmVzKHtcclxuICAgICAgICB1cmw6Y29uZi5xdWVzdGlvbl9hZGRfdXJsLFxyXG4gICAgICAgIGRhdGE6ZGF0YSxcclxuICAgICAgICBtZXRob2Q6XCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyOmNvbmYuaGVhZGVyLFxyXG4gICAgICAgIHN1Y2Nlc3M6KCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59Il19