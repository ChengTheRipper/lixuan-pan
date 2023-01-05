let output = {
  legendData: [],

  seriesData: [],
}
try {
  // read contents of the file
  const data = `
    专业服务(咨询、人力资源、财会)\t3473
    中介服务\t486
    互联网/电子商务\t4334
    交通/运输/物流\t3074
    仪器仪表/工业自动化\t3979
    会计/审计\t322
    保险\t1143
    信托/担保/拍卖/典当\t35
    公关/市场推广/会展\t274
    农/林/牧/渔\t1391
    制药/生物工程\t9479
    办公用品及设备\t140
    医疗/护理/卫生\t2336
    医疗设备/器械\t3749
    印刷/包装/造纸\t1238
    原材料和加工\t2114
    外企代表处\t2
    外包服务\t192
    外资（欧美）\t2
    多元化业务集团公司\t2455
    奢侈品/收藏品/工艺品/珠宝\t208
    娱乐/休闲/体育\t340
    学术/科研\t1788
    家具/家电/玩具/礼品\t1743
    家居/室内设计/装潢\t901
    广告\t344
    建筑/建材/工程\t9096
    影视/媒体/艺术/文化传播\t923
    快速消费品(食品、饮料、化妆品)\t5062
    房地产\t8212
    批发/零售\t2287
    政府/公共事业\t457
    教育/培训/院校\t3251
    文字媒体/出版\t305
    新能源\t2639
    服装/纺织/皮革\t2091
    机械/设备/重工\t7533
    检测，认证\t1746
    民营公司\t5
    汽车\t5201
    汽车零配件\t2116
    法律\t274
    物业管理/商业中心\t1585
    环保\t1714
    生活服务\t363
    电子技术/半导体/集成电路\t13592
    电气/电力/水利\t3320
    石油/化工/矿产/地质\t3881
    租赁服务\t233
    网络游戏\t363
    美容/保健\t99
    航天/航空\t1180
    计算机服务(系统、数据服务、维修)\t1431
    计算机硬件\t779
    计算机软件\t9882
    贸易/进出口\t3490
    通信/电信/网络设备\t3464
    通信/电信运营、增值服务\t665
    酒店/旅游\t512
    采掘业/冶炼\t556
    金融/投资/证券\t3651
    银行\t460
    非营利组织\t166
    餐饮业\t814
  `


  // split the contents by new line
  const lines = data.split(/\r?\n/);

  // print all lines
  lines.forEach((line) => {
    line = line.trim()
    if(!line || !line.length)
      return
    const career = line.split('\t')[0]
    const data = parseInt(line.split('\t')[1])
    output.legendData.push(career)
    output.seriesData.push({name: career, value: data})
  });
} catch (err) {
  console.error(err);
}

export default output
