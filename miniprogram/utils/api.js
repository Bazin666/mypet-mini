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
exports.question_change = function (data, success_function) {
    res({
        url: conf.question_change_url,
        data: data,
        method: "POST",
        success: function (res) {
            success_function(res);
        }
    });
};
exports.question_list = function (success_function) {
    res({
        url: conf.question_list_url,
        method: "GET",
        header: conf.header,
        success: function (res) {
            if (success_function) {
                success_function(res);
            }
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQTZCO0FBQzdCLElBQU0sSUFBSSxHQUFHLGdCQUFNLENBQUE7QUFDbkIsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQTtBQWdCVCxRQUFBLEtBQUssR0FBRyxVQUFDLElBQVEsRUFBQyxnQkFBeUIsRUFBQyxhQUFzQjtJQUMzRSxHQUFHLENBQUM7UUFDQSxHQUFHLEVBQUMsSUFBSSxDQUFDLFNBQVM7UUFDbEIsSUFBSSxFQUFDLElBQUk7UUFDVCxNQUFNLEVBQUMsTUFBTTtRQUNiLE1BQU0sRUFBQyxJQUFJLENBQUMsTUFBTTtRQUNsQixPQUFPLEVBQUMsVUFBQSxHQUFHO1lBQ1AsSUFBTSxJQUFJLEdBQVEsR0FBRyxDQUFDLElBQUksQ0FBQTtZQUMxQixJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBQztnQkFDdkIsRUFBRSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUMxQyxFQUFFLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQzNDLGdCQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO2dCQUN4QyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtnQkFDOUIsZ0JBQWdCLEVBQUUsQ0FBQTthQUNyQjtpQkFBSTtnQkFDRCxhQUFhLEVBQUUsQ0FBQTthQUNsQjtRQUNMLENBQUM7S0FDSixDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFFWSxRQUFBLFlBQVksR0FBRyxVQUFDLElBQVEsRUFBQyxnQkFBeUIsRUFBQyxhQUErQjtJQUEvQiw4QkFBQSxFQUFBLDhCQUE4QixDQUFDO0lBQzNGLEdBQUcsQ0FBQztRQUNBLEdBQUcsRUFBQyxJQUFJLENBQUMsWUFBWTtRQUNyQixJQUFJLEVBQUMsSUFBSTtRQUNULE1BQU0sRUFBQyxNQUFNO1FBQ2IsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNO1FBQ2xCLE9BQU8sRUFBQyxVQUFDLEdBQUc7WUFDUixJQUFNLElBQUksR0FBUSxHQUFHLENBQUMsSUFBSSxDQUFBO1lBQzFCLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFDO2dCQUN2QixFQUFFLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDM0MsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7Z0JBQ3hDLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO2dCQUM5QixnQkFBZ0IsRUFBRSxDQUFBO2FBQ3JCO2lCQUFJO2dCQUNELGFBQWEsRUFBRSxDQUFBO2FBQ2xCO1FBQ0wsQ0FBQztLQUNKLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQUVZLFFBQUEsWUFBWSxHQUFHLFVBQUMsSUFBUTtJQUNqQyxHQUFHLENBQUM7UUFDQSxHQUFHLEVBQUMsSUFBSSxDQUFDLGdCQUFnQjtRQUN6QixJQUFJLEVBQUMsSUFBSTtRQUNULE1BQU0sRUFBQyxNQUFNO1FBQ2IsTUFBTSxFQUFDLElBQUksQ0FBQyxNQUFNO1FBQ2xCLE9BQU8sRUFBQztRQUVSLENBQUM7S0FDSixDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFFWSxRQUFBLGVBQWUsR0FBRyxVQUFDLElBQVEsRUFBQyxnQkFBeUI7SUFDOUQsR0FBRyxDQUFDO1FBQ0EsR0FBRyxFQUFDLElBQUksQ0FBQyxtQkFBbUI7UUFDNUIsSUFBSSxFQUFDLElBQUk7UUFDVCxNQUFNLEVBQUMsTUFBTTtRQUNiLE9BQU8sRUFBQyxVQUFDLEdBQUc7WUFDUixnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN6QixDQUFDO0tBQ0osQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBQ1ksUUFBQSxhQUFhLEdBQUcsVUFBQyxnQkFBMEI7SUFDcEQsR0FBRyxDQUFDO1FBQ0EsR0FBRyxFQUFDLElBQUksQ0FBQyxpQkFBaUI7UUFDMUIsTUFBTSxFQUFDLEtBQUs7UUFDWixNQUFNLEVBQUMsSUFBSSxDQUFDLE1BQU07UUFDbEIsT0FBTyxFQUFDLFVBQUMsR0FBRztZQUNSLElBQUcsZ0JBQWdCLEVBQUM7Z0JBQ2hCLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ3hCO1FBQ0wsQ0FBQztLQUNKLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXHJcbmNvbnN0IGNvbmYgPSBjb25maWdcclxuY29uc3QgcmVzID0gd3gucmVxdWVzdFxyXG5cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIGRhdGEg55m76ZmG5pC65bim5pWw5o2uXHJcbiAqIEBwYXJhbSBzdWNjZXNzX2Z1bnRpb24g55m75b2V5oiQ5Yqf5ZCO5omn6KGM5Ye95pWwXHJcbiAqIEBwYXJhbSBmYWlsX2Z1bmN0aW9uIOeZu+W9leWksei0peWQjuaJp+ihjOWHveaVsFxyXG4gKiAgXHJcbiAqIEBleGFtcGxlIGxvZ2luKGluZm8sKCk9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKVxyXG4gICAgICAgIH0sKCkgPT4ge1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCdmYWlsJylcclxuICAgICAgICB9KVxyXG4gKi9cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IChkYXRhOmFueSxzdWNjZXNzX2Z1bmN0aW9uOkZ1bmN0aW9uLGZhaWxfZnVuY3Rpb246RnVuY3Rpb24pID0+IHtcclxuICAgIHJlcyh7XHJcbiAgICAgICAgdXJsOmNvbmYubG9naW5fdXJsLFxyXG4gICAgICAgIGRhdGE6ZGF0YSxcclxuICAgICAgICBtZXRob2Q6XCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyOmNvbmYuaGVhZGVyLFxyXG4gICAgICAgIHN1Y2Nlc3M6cmVzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA6YW55ID0gcmVzLmRhdGFcclxuICAgICAgICAgICAgaWYoZGF0YS51c2VyICYmIGRhdGEudG9rZW4pe1xyXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3VzZXJfdG9rZW4nLGRhdGEudG9rZW4pXHJcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnY3VycmVudF91c2VyJyxkYXRhLnVzZXIpXHJcbiAgICAgICAgICAgICAgICBjb25maWcuaGVhZGVyLkF1dGhvcml6YXRpb24gPSBkYXRhLnRva2VuXHJcbiAgICAgICAgICAgICAgICBjb25maWcuaGVhZGVyLlVzZXIgPSBkYXRhLnVzZXJcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NfZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGZhaWxfZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHd4X2xvZ2luX2FwaSA9IChkYXRhOmFueSxzdWNjZXNzX2Z1bmN0aW9uOkZ1bmN0aW9uLGZhaWxfZnVuY3Rpb246RnVuY3Rpb24gPSAoKT0+e30pPT57XHJcbiAgICByZXMoe1xyXG4gICAgICAgIHVybDpjb25mLnd4X2xvZ2luX3VybCxcclxuICAgICAgICBkYXRhOmRhdGEsXHJcbiAgICAgICAgbWV0aG9kOlwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcjpjb25mLmhlYWRlcixcclxuICAgICAgICBzdWNjZXNzOihyZXMpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA6YW55ID0gcmVzLmRhdGFcclxuICAgICAgICAgICAgaWYoZGF0YS51c2VyICYmIGRhdGEudG9rZW4pe1xyXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3VzZXJfdG9rZW4nLGRhdGEudG9rZW4pXHJcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnY3VycmVudF91c2VyJyxkYXRhLnVzZXIpXHJcbiAgICAgICAgICAgICAgICBjb25maWcuaGVhZGVyLkF1dGhvcml6YXRpb24gPSBkYXRhLnRva2VuXHJcbiAgICAgICAgICAgICAgICBjb25maWcuaGVhZGVyLlVzZXIgPSBkYXRhLnVzZXJcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NfZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGZhaWxfZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHF1ZXN0aW9uX2FkZCA9IChkYXRhOmFueSk9PntcclxuICAgIHJlcyh7XHJcbiAgICAgICAgdXJsOmNvbmYucXVlc3Rpb25fYWRkX3VybCxcclxuICAgICAgICBkYXRhOmRhdGEsXHJcbiAgICAgICAgbWV0aG9kOlwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcjpjb25mLmhlYWRlcixcclxuICAgICAgICBzdWNjZXNzOigpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHF1ZXN0aW9uX2NoYW5nZSA9IChkYXRhOmFueSxzdWNjZXNzX2Z1bmN0aW9uOkZ1bmN0aW9uKT0+e1xyXG4gICAgcmVzKHtcclxuICAgICAgICB1cmw6Y29uZi5xdWVzdGlvbl9jaGFuZ2VfdXJsLFxyXG4gICAgICAgIGRhdGE6ZGF0YSxcclxuICAgICAgICBtZXRob2Q6XCJQT1NUXCIsXHJcbiAgICAgICAgc3VjY2VzczoocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3NfZnVuY3Rpb24ocmVzKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGNvbnN0IHF1ZXN0aW9uX2xpc3QgPSAoc3VjY2Vzc19mdW5jdGlvbj86RnVuY3Rpb24pPT57XHJcbiAgICByZXMoe1xyXG4gICAgICAgIHVybDpjb25mLnF1ZXN0aW9uX2xpc3RfdXJsLFxyXG4gICAgICAgIG1ldGhvZDpcIkdFVFwiLFxyXG4gICAgICAgIGhlYWRlcjpjb25mLmhlYWRlcixcclxuICAgICAgICBzdWNjZXNzOihyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYoc3VjY2Vzc19mdW5jdGlvbil7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzX2Z1bmN0aW9uKHJlcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0iXX0=