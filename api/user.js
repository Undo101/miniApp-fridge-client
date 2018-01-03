import config from '../utils/config'
const common = require('./common')
const app = getApp()

module.exports.authWithWeiXinApp = function (code, iv, encryptedData, resolve) {
    wx.request({
        url: `${config.API_URL}/users/wei_xin/auth`,
        method: 'POST',
        header: common.setHeaders(),
        data: {
            'code': code,
            'iv': iv,
            'encrytedData': encryptedData
        },
        success: resolve
    })
}
module.exports.userUpdateName = function (name, resolve) {
    wx.request({
        url: `${config.API_URL}/users/me/name`,
        method: 'PUT',
        header: common.setHeaders(),
        data: {
            'name': name
        },
        success: resolve
    })
}