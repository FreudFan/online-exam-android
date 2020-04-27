// pages/historyTest/historyTest.js
const app = getApp()
var utils = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
      courseName:null,
      recordPaper:[],
      courseId:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var self=this
      var courseId=options.courseId
      self.setData({
        courseId:[courseId]
      })
      var courseName=options.courseName
      self.setData({
        courseName:[courseName]
      })
      //console.log(options)
    wx.request({
      url: app.globalData.url.recordShow,
      method: 'POST',
      data: {
          subjectId: courseId,
      },
      header: {
        'Authorization': app.globalData.token
      },
      success: function (res) {
        console.log(res)
        if (res.data.length != 0) {
          self.setData({
            recordPaper: res.data,
          })
        }
      }
    })
  },

  showWrongTopicSet:function(){
    var courseId=this.data.courseId
    var courseName = this.data.courseName
    wx.navigateTo({
      url: '/pages/worrySet/worrySet?courseId=' + courseId + '&courseName=' + courseName,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})