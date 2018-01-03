//index.js
//获取应用实例
const app = getApp()
const bookApi = require('../../api/book.js')
Page({
  data: {
    bookList: [],
    swiper: {
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      circular: true,
      interval: 3000,
      duration: 500, //切换速度
      items: [],
      images: [
        '../../images/read1.jpg',
        '../../images/read2.jpg',
        '../../images/read3.jpg',
        '../../images/read4.jpg',
        '../../images/read5.jpg',
      ],
      swiperchange: function () {

      }
    },
    motto: 'Hello World',
    userInfo: {},
    bookList1: [
      {
        name: 'js',
        author: 'ryf',
        txt: 'believe yourself, you can make it.believe yourself, you can make it.believe yourself, you can make it'
      },
      {
        name: 'Algorithms',
        author: 'ahaLei',
        txt: 'believe yourself, you can make it'
      },
      {
        name: 'http',
        author: 'shangyeXuan',
        txt: 'believe yourself, you can make it'
      },
      {
        name: 'http',
        author: 'shangyeXuan',
        txt: 'believe yourself, you can make it'
      }
    ]
  },
  onShow: function () {
    let that = this
    bookApi.bookList(function (result) {
      let bookList = result.data.data.bookList;
      that.setData ({
        'booklist': booklist
      })
    })
  },
  addone: function(e) {
    wx.navigateTo({
      url: '../addone/book-add'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
