module.exports.setHeaders = function () {
    return {
        'Content-Type': 'application/json',
        'Autorization': wx.getStorageSync('token')
    }
}
module.exports.setFileheaders = function () {
    return {
        // 'Content-Type': 'application/json',
        'Authorization': wx.getStorageSync('token')
    }
}