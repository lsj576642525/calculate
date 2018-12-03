Page({
  /**
   * 页面的初始数据
   */
  data: {
    resultData: "0",
    btnC: "C",
    btnDel: "Del",
    btnPercent: "%",
    btnDivision: "/",
    btnX: "*",
    btnAdd: "+",
    btnMinus: "-",
    btn1: "1",
    btn2: "2",
    btn3: "3",
    btn4: "4",
    btn5: "5",
    btn6: "6",
    btn7: "7",
    btn8: "8",
    btn9: "9",
    btn0: "0",
    btnPoint: ".",
    btnCal: "=",
    arr: [],
    logs: [],
    operaSymbo: {
      "＋": "+",
      "－": "-",
      "×": "*",
      "÷": "/",
      ".": "."
    },
    lastIsOperaSymbo: false,
  },

  btnOnClick: function (event) {
    var id = event.target.id
    var data = this.data.resultData
    var num = ''
    var arr = this.data.arr
    var optArr = []
    var lastOperator = ""
    if (id == this.data.btnDel) {
      if (data == "0") {
        return
      }
      data = data.substring(0, data.length - 1)
      if (data == "" || data == "-") {
        data = 0
      }
      this.setData({
        "resultData": data
      })
      this.data.arr.pop();
    } else if (id == this.data.btnC) { //清屏C
      this.setData({
        "resultData": "0"
      });
      this.data.arr.length = 0;
    } else if (id == this.data.btnCal) { //=
      if (data == "0") {
        return
      }

      var lastWord = data.charAt(data.length);
      if (isNaN(lastWord)) {
        return;
      }

      for (var i in arr) {
        if (isNaN(arr[i]) == false || arr[i] == this.data.btnPoint) {
          num += arr[i];
        } else {
          lastOperator = arr[i];
          optArr.push(num);
          optArr.push(arr[i]);
          num = "";
        }
      }

      optArr.push(Number(num));
      var result = Number(optArr[0]) * 1.0;
      console.log(result);
      for (var i = 1; i < optArr.length; i++) {
        if (isNaN(optArr[i])) {
          if (optArr[1] == this.data.btnAdd) {
            result += Number(optArr[i + 1]);
          } else if (optArr[1] == this.data.btnMinus) {
            result -= Number(optArr[i + 1]);
          } else if (optArr[1] == this.data.btnX) {
            result *= Number(optArr[i + 1]);
          } else if (optArr[1] == this.data.btnDivision) {
            result /= Number(optArr[i + 1]);
          }
        }
      }

      this.data.arr.length = 0;
      this.data.arr.push(result);

      this.setData({
        "resultData": result + ""
      });
    } else {
      if (this.data.operaSymbo[id]) { //如果是符号+-*/
        if (this.data.lastIsOperaSymbo || this.data.resultData == "0") {
          return;
        }
      }

      var resultData = this.data.resultData;
      if (resultData == 0) {
        data = id;
      } else {
        data = resultData + id;
      }
      this.setData({
        "resultData": data
      });
      this.data.arr.push(id);

      if (this.data.operaSymbo[id]) {
        this.setData({
          "lastIsOperaSymbo": true
        });
      } else {
        this.setData({
          "lastIsOperaSymbo": false
        });
      }
    }

    console.log(data)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {}
})