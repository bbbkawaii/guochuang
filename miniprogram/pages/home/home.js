Page({
  data: {
    keywords: ['农废资源化', '生态种植', '农产增值', '青年助农'],
    cycle: [
      {no: '01', mark: '收', title: '收集农废', desc: '残次果、果皮、秸秆分类归集'},
      {no: '02', mark: '酵', title: '规范发酵', desc: '村级工坊完成配比与过程管理'},
      {no: '03', mark: '土', title: '生态投入', desc: '服务土壤养护与田间管理'},
      {no: '04', mark: '种', title: '健康农作', desc: '培育本地番茄、玉米与大米'},
      {no: '05', mark: '创', title: '产品体验', desc: '连接饮品、甜品、伴手礼与研学'},
      {no: '06', mark: '回', title: '反哺乡村', desc: '支持农户、工坊与青年实践'}
    ]
  },
  goProcess() { wx.switchTab({url: '/pages/process/process'}); },
  goProducts() { wx.switchTab({url: '/pages/products/products'}); }
});
