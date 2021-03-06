// const app = getApp<IAppOption>()
const pre_url = "http://localhost:5000/"
const login_url = pre_url+"login"
const regist_url = pre_url+"regist"
const question_add_url = pre_url+"question/add"
const wx_login_url = pre_url+"wx_login"
const question_change_url = pre_url+"question/change"
const question_list_url = pre_url+"questions"
const question_list_url_all = pre_url+"questions/all"
const question_one = pre_url + "question"
const question_rev = pre_url + "question/rev"
const question_delete = pre_url + "question/delete"
const comment_add = pre_url+"comment/add"
const header = {
    'content-type':'application/x-www-form-urlencoded',
    'Authorization':wx.getStorageSync('user_token') || 'test',
    'User':wx.getStorageSync('current_user')|| ''
    
}
const config = {
    pre_url,
    header,
    login_url,
    regist_url,
    question_add_url,
    wx_login_url,
    question_change_url,
    question_list_url,
    question_list_url_all,
    question_one,
    question_rev,
    question_delete,
    comment_add
}

export default config
