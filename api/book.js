import config from '../utils/config'
const common = require('./common')

module.exports.bookList = function (booklist, resolve) {
    wx.request({
        url: `${config.API_URL}/book/booklineList`,
        method: 'GET',
        header: common.setHeaders(),
        success: resolve
    })
}
module.exports.bookcreateOne = function (bookline, resolve) {
    wx.request({
        url: `${config.API_URL}/book`,
        method: 'POST',
        header: common.setHeaders(),
        success: resolve
    })
}
module.exports.bookPageImage = function (image, resolve) {
    wx.request({
        url: `${config.API_URL}/book/sliderImage`,
        method: 'get',
        header: common.setHeaders(),
        success: resolve
    })
}