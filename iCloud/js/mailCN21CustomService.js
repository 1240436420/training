window.cn21CustomService = {
  state: {
    currentDialog: null
  },
  closeDialog: function () {
    if (this.state.currentDialog) {
      document.body.removeChild(this.state.currentDialog)
      this.state.currentDialog = null
    }
  },
  hideDialog: function () {
    if (this.state.currentDialog) {
      this.state.currentDialog.querySelector('iframe').style.display = 'none'
    }
  },
  showDialog: function () {
    if (this.state.currentDialog) {
      this.state.currentDialog.querySelector('iframe').style.display = 'block'
    } else {
      var cDom = document.createElement('div')
      cDom.id = 'cn21_custom_service'
      cDom.innerHTML = '<iframe src="https://im.21cn.com:3443/custom-service-page/" style="position: fixed;bottom: 20px;right: 40px;width: 355px;height: 580px;border: 0;box-shadow: 0 0 20px 0 rgba(0,0,0,0.15);z-index: 99999;"></iframe>'
      document.body.append(cDom)
      this.state.currentDialog = cDom
    }
  }
}
var getMsgFromChildFrame = function (b) {
  var data = b.data
  var source = b.source
  var origin = b.origin
  if (b.data == 'hideChatDialog') {
    window.cn21CustomService.hideDialog()
  }
  if (b.data == 'closeChatDialog') {
    window.cn21CustomService.closeDialog()
  }
  if (b.data == 'openChatBox') {
  }
}
if (window.addEventListener) {
  window.addEventListener('message', getMsgFromChildFrame)
} else {
  window.attachEvent('onmessage', getMsgFromChildFrame)
}