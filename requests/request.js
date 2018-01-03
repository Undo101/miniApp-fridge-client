let api = require('./api.js');
let util = require('../utils/util.js');
let app = getApp();

const wxRequest = (params, url, successCallback, errorCallback, completeCallback) => {
    wx.request({
        url: url,
        method: params.method || 'GET',
        data: params.data || {},
        header: { 'Content-Type': 'application/json'},
        success(res) {
            if(app.debug) {
                console.log('response data: ', res);
            }
            if(res.statusCode == 200) 
                util.isFunction(successCallback) && successCallback(res.data);
            else 
                util.isFunction(errorCallback) && errorCallback(res);
        },
        fail(res) {
            util.isFunction(errorCallback) && errorCallback(res);
        },
        complete(res) {
            util.isFunction(completeCallback) && completeCallback(res);
        }
    })
}

const getBookList = (params, s, e, c) => wxRequest(params, api.API_BOOK, s, e, c);

module.exports = {
    getBookList
}