import utils from '../utils';

describe('Stat', function () {
  beforeEach(utils.beforeEach);
  afterEach(utils.afterEach);

  it('Stat-测试1', function () {
    // 1、点击login页面的login-button
    return this.app.client.click('#login')
    // 等待底部通知框出现'未注册用户登陆！'提示，进入Home页
      .waitUntilTextExists('#notice-bar', '未注册用户登陆！')
    // 2、点击顶部导航栏的stat-page，进入stat页
      .click('#navbar-stat')
      .waitUntilTextExists('#notice-bar', '数据分析-数据分析')
    // 2.1、本地文件 leftPanel显示本地文件列表
      .click('#stat-local-doc')
      .waitUntilTextExists('.stat-left-file-tr', 'test_stat_1.csv')
    // 2.1.1 点击leftPanel列表 rightPanel数据表显示当前文件的前十条数据 chart显示当前数据图表 提示显示当前数据提示内容
      // .click('.stat-left-file-tr')
      // .waitUntilWindowLoaded(500)
      // .getText('#stat-right-table')
      // .then(function (rightTable) {
      //   expect(rightTable).to.be.an('string');
      // })
    // 2.1.1.1 点击rightPanel数据表的单条或多条数据高亮显示 rightPanel的chart及提示显示当前数据的图表及提示内容
      // .click('.stat-right-table')
      // .waitUntilWindowLoaded(500)
      // .getCssProperty('.stat-right-table')
      // .then(function (rightTableTr) {
      //   console.log(rightTableTr)
      // })
    // 2.1.1.1.1 点击工具栏的加入对比 将rightPanel数据表中选中的数据加入到对比数据中
    // 2.1.1.1.2 点击工具栏的显示对比 将对比数据显示到rightPanel的数据表中
    // 2.1.1.1.3 点击工具栏的保存对比
    // 2.1.1.1.4 点击工具栏的前一页 rightPanel显示当前数据的前十条数据并且当前行高亮显示 如果为第一页则提示"当前已是第一页"
      // .click('#stat-prev-page')
      // .waitUntilWindowLoaded(500)
      // .getText('#stat-right-table')
      // .then(function (rightTable) {
      //   console.log(rightTable)
      //   expect(rightTable).to.be.an('array');
      // })
    // 2.1.1.1.5 点击工具栏的后一页 rightPanel显示当前数据的后十条数据并且当前行高亮显示 如果为最后一页则提示"当前已是最后一页"
      // .click('#stat-next-page')
      // .waitUntilWindowLoaded(500)
      // .getText('#stat-right-table')
      // .then(function (rightTable) {
      //   console.log(rightTable)
      //   expect(rightTable).to.be.an('array');
      // })
    // 2.1.1.1.6 点击工具栏的编辑数据 将当前本地文件数据显示传到Edit的rightPanel中并高亮显示当前选中数据 leftPanel显示选中的第一条数据内容
    // 2.1.1.1.7 点击工具栏的左图选择 下拉框显示可选图形
      // .click('#stat-bar-left-chart')
      // .waitUntilTextExists('#stat-left-bar', '柱状图')
    // 2.1.1.1.7.1 点击柱状图 rightPanel左部chart数据展示为柱状图
      // .click('#stat-left-discount')
      // .waitUntilTextExists('#stat-left-discount', '柱状图')
    // 2.1.1.1.7.2 点击折线图 rightPanel左部chart数据展示为折线图
    // 2.1.1.1.7.3 点击散点图 rightPanel左部chart数据展示为散点图
    // 2.1.1.1.7.4 点击雷达图 rightPanel左部chart数据展示为雷达图
    // 2.1.1.1.8 点击工具栏的右图选择 下拉框显示可选图形
    // 2.1.1.1.8.1 点击柱状图 rightPanel右部chart数据展示为柱状图
    // 2.1.1.1.8.2 点击折线图 rightPanel右部chart数据展示为折线图
    // 2.1.1.1.8.3 点击散点图 rightPanel右部chart数据展示为散点图
    // 2.1.1.1.8.4 点击雷达图 rightPanel右部chart数据展示为雷达图
    // 2.1.1.1.9 点击工具栏的维度选择 下拉框显示可选维度
    // 2.1.1.1.9.1 点击机构 leftPanel显示可选机构维度
    // 2.1.1.1.9.2 点击时间 leftPanel显示可选时间维度
    // 2.1.1.1.9.3 点击病种 leftPanel显示可选病种维度
    // 2.1.1.2 点击工具栏的前一页 rightPanel显示当前数据的前十条数据 如果为第一页则提示"当前已是第一页"
    // 2.1.1.3 点击工具栏的后一页 rightPanel显示当前数据的后十条数据 如果为最后一页则提示"当前已是最后一页"
    // 2.1.1.4 点击工具栏的编辑数据 将当前本地文件数据显示传到Edit的rightPanel中并高亮显示当前选中数据 leftPanel默认显示第一条数据内容
    // 2.1.1.5 点击工具栏的加入对比 提示"未选中对比数据"
    // 2.1.1.6 点击工具栏的保存对比 提示"无对比数据"
    // 2.1.1.7 点击工具栏的显示对比 提示"无对比数据"
    // 2.1.1.8 点击工具栏左图选择 下拉框显示可选图形
    // 2.1.1.8.1 点击柱状图 rightPanel左部chart数据展示为柱状图
    // 2.1.1.8.2 点击折线图 rightPanel左部chart数据展示为折线图
    // 2.1.1.8.3 点击散点图 rightPanel左部chart数据展示为散点图
    // 2.1.1.8.4 点击雷达图 rightPanel左部chart数据展示为雷达图
    // 2.1.1.9 点击工具栏右图选择 下拉框显示可选图形
    // 2.1.1.9.1 点击柱状图 rightPanel右部chart数据展示为柱状图
    // 2.1.1.9.2 点击折线图 rightPanel右部chart数据展示为折线图
    // 2.1.1.9.3 点击散点图 rightPanel右部chart数据展示为散点图
    // 2.1.1.9.4 点击雷达图 rightPanel右部chart数据展示为雷达图
    // 2.1.1.10 点击工具栏的维度选择 下拉框显示可选维度
    // 2.1.1.10.1 点击机构 leftPanel显示可选机构维度
    // 2.1.1.10.2 点击时间 leftPanel显示可选时间维度
    // 2.1.1.10.3 点击病种 leftPanel显示可选病种维度
    // 2.1.2 点击leftPanel列表 rightPanel数据表无数据提示"当前分析文件中无数据" chart显示当前图表无数据 提示显示无提示内容
    // 本地文件 如果leftPanel无数据分析文件 提示"暂无本地分析文件"

    // 2.2、远程文件 leftPanel显示远程文件列表
    // 2.2.1 点击leftPanel列表 rightPanel数据表显示当前文件的前十条数据 chart显示当前数据图表 提示显示当前数据提示内容
    // 2.2.1.1 点击rightPanel数据表的单条或多条数据高亮显示 rightPanel的chart及提示显示当前数据的图表及提示内容
    // 2.2.1.1.1 点击工具栏的加入对比 将rightPanel数据表中选中的数据加入到对比数据中
    // 2.2.1.1.2 点击工具栏的显示对比 将对比数据显示到rightPanel的数据表中
    // 2.2.1.1.3 点击工具栏的保存对比
    // 2.2.1.1.4 点击工具栏的前一页 rightPanel显示当前数据的前十条数据并且当前行高亮显示 如果为第一页则提示"当前已是第一页"
    // 2.2.1.1.5 点击工具栏的后一页 rightPanel显示当前数据的后十条数据并且当前行高亮显示 如果为最后一页则提示"当前已是最后一页"
    // 2.2.1.1.6 点击工具栏的编辑数据 将当前远程文件数据显示传到Edit的rightPanel中并高亮显示当前选中数据 leftPanel显示选中的第一条数据内容
    // 2.2.1.1.7 点击工具栏的左图选择 下拉框显示可选图形
    // 2.2.1.1.7.1 点击柱状图 rightPanel左部chart数据展示为柱状图
    // 2.2.1.1.7.2 点击折线图 rightPanel左部chart数据展示为折线图
    // 2.2.1.1.7.3 点击散点图 rightPanel左部chart数据展示为散点图
    // 2.2.1.1.7.4 点击雷达图 rightPanel左部chart数据展示为雷达图
    // 2.2.1.1.8 点击工具栏的右图选择 下拉框显示可选图形
    // 2.2.1.1.8.1 点击柱状图 rightPanel右部chart数据展示为柱状图
    // 2.2.1.1.8.2 点击折线图 rightPanel右部chart数据展示为折线图
    // 2.2.1.1.8.3 点击散点图 rightPanel右部chart数据展示为散点图
    // 2.2.1.1.8.4 点击雷达图 rightPanel右部chart数据展示为雷达图
    // 2.2.1.1.9 点击工具栏的维度选择 下拉框显示可选维度
    // 2.2.1.1.9.1 点击机构 leftPanel显示可选机构维度
    // 2.2.1.1.9.2 点击时间 leftPanel显示可选时间维度
    // 2.2.1.1.9.3 点击病种 leftPanel显示可选病种维度
    // 2.2.1.2 点击工具栏的前一页 rightPanel显示当前数据的前十条数据 如果为第一页则提示"当前已是第一页"
    // 2.2.1.3 点击工具栏的后一页 rightPanel显示当前数据的后十条数据 如果为最后一页则提示"当前已是最后一页"
    // 2.2.1.4 点击工具栏的编辑数据 将当前远程文件数据显示传到Edit的rightPanel中并高亮显示当前选中数据 leftPanel默认显示第一条数据内容
    // 2.2.1.5 点击工具栏的加入对比 提示"未选中对比数据"
    // 2.2.1.6 点击工具栏的保存对比 提示"无对比数据"
    // 2.2.1.7 点击工具栏的显示对比 提示"无对比数据"
    // 2.2.1.8 点击工具栏左图选择 下拉框显示可选图形
    // 2.2.1.8.1 点击柱状图 rightPanel左部chart数据展示为柱状图
    // 2.2.1.8.2 点击折线图 rightPanel左部chart数据展示为折线图
    // 2.2.1.8.3 点击散点图 rightPanel左部chart数据展示为散点图
    // 2.2.1.8.4 点击雷达图 rightPanel左部chart数据展示为雷达图
    // 2.2.1.9 点击工具栏右图选择 下拉框显示可选图形
    // 2.2.1.9.1 点击柱状图 rightPanel右部chart数据展示为柱状图
    // 2.2.1.9.2 点击折线图 rightPanel右部chart数据展示为折线图
    // 2.2.1.9.3 点击散点图 rightPanel右部chart数据展示为散点图
    // 2.2.1.9.4 点击雷达图 rightPanel右部chart数据展示为雷达图
    // 2.2.1.10 点击工具栏的维度选择 下拉框显示可选维度
    // 2.2.1.10.1 点击机构 leftPanel显示可选机构维度
    // 2.2.1.10.2 点击时间 leftPanel显示可选时间维度
    // 2.2.1.10.3 点击病种 leftPanel显示可选病种维度
    // 2.2.2 点击leftPanel列表 rightPanel数据表无数据提示"当前分析文件中无数据" chart显示当前图表无数据 提示显示无提示内容\
    // 远程文件 如果leftPanel无数据分析文件 提示"暂无本地分析文件"

    // 2.3、前一页
    // 2.3.1 rightPanel无显示数据是 点击前一页 提示"数据为空 不能查询前一页"
    // 2.3.2 rightPanel有数据 点击前一页 rightPanel数据显示当前数据的前十条 如果为第一页则提示"当前已是第一页"

    // 2.4、后一页
    // 2.4.1 rightPanel无显示数据时 点击后一页 提示"数据为空 不能查询后一页"
    // 2.4.2 rightPanel有数据 点击后一页 rightPanel数据显示当前数据的后十条 如果为最后一页则提示"当前已是最后一页"

    // 2.5、编辑数据
    // 2.5.1 rightPanel无显示数据时 点击编辑数据 提示"请查询数据后进行数据编辑"
    // 2.5.2 rightPanel有数据 点击编辑数据 将当前本地文件或远程文件数据显示传到Edit的rightPanel中并高亮显示当前选中数据 leftPanel显示选中的第一条数据内容

    // 2.6、加入对比
    // 2.6.1 已选rightPanel单条或多条数据 点击加入对比 将当前单条数据加入到对比数据中\
    // 2.6.2 rightPanel数据未选择 提示"请选择加入对比数据"

    // 2.7、保存对比

    // 2.8、显示对比
    // 2.8.1 对比数据存在时 将对比数据展示在rightPanel数据表中
    // 2.8.1 无对比数据时 提示"请选择数据加入对比后显示"

    // 2.9、左图选择 下拉框显示可选图形
    // 2.9.1、柱状图 左部chart数据展示为柱状图
    // 2.9.2、折线图 左部chart数据展示为折线图
    // 2.9.3、散点图 左部chart数据展示为散点图
    // 2.9.4、雷达图 左部chart数据展示为雷达图
    // 2.10、右图选择 下拉框显示可选图形
    // 2.10.1、柱状图 右部chart数据展示为柱状图
    // 2.10.2、折线图 右部chart数据展示为折线图
    // 2.10.3、散点图 右部chart数据展示为散点图
    // 2.10.4、雷达图 右部chart数据展示为雷达图
    // 2.11、维度选择 下拉框显示可选维度
    // 2.11.1、机构 leftPanel显示可选机构维度
    // 2.11.2、时间 leftPanel显示可选时间维度
    // 2.11.3、病种 leftPanel显示可选病种维度
  })
});
