Page({
  data: {
    choices: [
      {id:'field', title:'示范田共建', desc:'生态种植、田间记录与农户培训'},
      {id:'workshop', title:'工坊共创', desc:'原料处理、酵素发酵与公众体验'},
      {id:'study', title:'研学课程', desc:'从一筐农废开始完成循环任务'},
      {id:'brand', title:'品牌传播', desc:'产品、影像与数字内容共创'}
    ],
    selected: ''
  },
  choose(e) {
    this.setData({ selected: e.currentTarget.dataset.id });
  },
  submit() {
    if (!this.data.selected) {
      wx.showToast({title: '请先选择共创方向', icon: 'none'});
      return;
    }
    wx.setStorageSync('ruitu_join_interest', this.data.selected);
    wx.showToast({title: '已记录', icon: 'success'});
  }
});
