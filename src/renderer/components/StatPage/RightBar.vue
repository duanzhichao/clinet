<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active" v-on:click='loadData'>
          <a class="nav-link text-light" href="#"> 本地文件 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active" v-on:click='serverData'>
          <a class="nav-link text-light" href="#"> 远程文件 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active" v-on:click='page(-1)'>
          <a class="nav-link text-light" href="#"> 前一页 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active" v-on:click='page(1)'>
          <a class="nav-link text-light" href="#"> 后一页 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active" v-on:click='edit'>
          <a class="nav-link text-light" href="#"> 编辑数据 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active" v-on:click='compare'>
          <a class="nav-link text-light" href="#"> 加入对比 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active" v-on:click='showCompare'>
          <a class="nav-link text-light" href="#"> 显示对比 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active" v-on:click='showCompare'>
          <a class="nav-link text-light" href="#"> 保存对比 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            左图选择
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="nav-link" href="#" v-on:click='showChart("chartLeft", "柱状图")'> 柱状图 <span class="sr-only">(current)</span></a>
            <a class="nav-link" href="#" v-on:click='showChart("chartLeft", "折线图")'> 折线图 <span class="sr-only">(current)</span></a>
            <a class="nav-link" href="#" v-on:click='showChart("chartLeft", "雷达图")'> 雷达图 <span class="sr-only">(current)</span></a>
            <a class="nav-link" href="#" v-on:click='showChart("chartLeft", "散点图")'> 散点图 <span class="sr-only">(current)</span></a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            右图选择
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="nav-link" href="#" v-on:click='showChart("chartRight", "柱状图")'> 柱状图 <span class="sr-only">(current)</span></a>
            <a class="nav-link" href="#" v-on:click='showChart("chartRight", "折线图")'> 折线图 <span class="sr-only">(current)</span></a>
            <a class="nav-link" href="#" v-on:click='showChart("chartRight", "雷达图")'> 雷达图 <span class="sr-only">(current)</span></a>
            <a class="nav-link" href="#" v-on:click='showChart("chartRight", "散点图")'> 散点图 <span class="sr-only">(current)</span></a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            维度选择
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="nav-link" href="#" v-on:click='selX("机构")'> 机构 <span class="sr-only">(current)</span></a>
            <a class="nav-link" href="#" v-on:click='selX("时间")'> 时间 <span class="sr-only">(current)</span></a>
            <a class="nav-link" href="#" v-on:click='selX("病种")'> 病种 <span class="sr-only">(current)</span></a>
          </div>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      </form>
    </div>
  </nav>
</template>

<script>
  import chartLine from '../../utils/ChartLine';
  import chartScatter from '../../utils/ChartScatter';
  import chartRadar from '../../utils/ChartRadar';
  import chartBar from '../../utils/ChartBar';
  
  export default {
    data() {
      return {
        paths: []
      };
    },
    methods: {
      loadData: function () {
        this.$store.commit('STAT_SET_LEFT_PANEL', ['file', null]);
        this.$store.commit('STAT_LOAD_FILES');
      },
      serverData: function () {
        this.$store.commit('STAT_SERVER_FILES');
      },
      page: function (n) {
        this.$store.commit('STAT_TABLE_PAGE', n);
      },
      edit: function () {
        this.$store.commit('EDIT_SET_LAST_NAV', '/stat');
        this.$store.commit('EDIT_SET_RIGHT_PANEL', 'local');
        this.$router.push('/edit');
      },
      selX: function (x) {
        this.$store.commit('STAT_SET_LEFT_PANEL', ['dimension', x]);
      },
      showChart: function (id, type) {
        if (id === 'chartRight') {
          // this.$store.commit('SET_CHART_RIGHT', type);
          switch (type) {
            case '柱状图':
              chartBar(id, this.$store.state.Stat.rightBar)
              break;
            case '折线图':
              chartLine(id)
              break;
            case '雷达图':
              chartRadar(id)
              break;
            case '散点图':
              chartScatter(id)
              break;
            default: break;
          }
        } else {
          // this.$store.commit('SET_CHART_LEFT', type);
          switch (type) {
            case '柱状图':
              chartBar(id, this.$store.state.Stat.leftBar)
              break;
            case '折线图':
              chartLine(id)
              break;
            case '雷达图':
              chartRadar(id)
              break;
            case '散点图':
              chartScatter(id)
              break;
            default: break;
          }
        }
      },
      compare: function () {

      },
      showCompare: function () {

      },
    },
  };
</script>

<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

</style>
