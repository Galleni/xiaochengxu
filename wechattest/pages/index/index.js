//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onGotUserInfo(e) {
    // e.detail 跟 wx.getUserInfo()获取的用户信息是一样的
    const {
      encryptedData,
      iv,
      rawData,
      signature,
      userInfo
    } = e.detail;
    const data = { encryptedData, iv };
    console.log(e.detail);
    //登录
    wx.login({
      timeout: 3000, // timeout 是超时时间，单位是 ms
      success: res => { // wx.login 接口调成功后会执行 success 回调
        // res.code 就是登录的凭证, 需要发送给服务端
        const code = res.code;
        console.log(code);
        //把 code、encryptedData、iv 发送给服务端，换取 JWT
        wx.request({
          url: `http://127.0.0.1:3000/users/wxLogin`, // 我们的服务端地址
          method: 'POST',
          data: {
            code, encryptedData, iv
          },
          success: res => {
            // res.data 为服务端正确登录后签发的 JWT
            wx.setStorageSync('auth', res.data);
            console.log(res.data)
          }
        });
        //end

      }
    });

  }
})