<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import resize from '../chart/mixins/resize'
require('echarts/theme/macarons') // echarts theme
// 用户性别统计，作为组件使用
export default {
  name: 'UserSexPieCount',
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data () {
    return {
      chart: null,
      data: [2]
    }
  },
  mounted: function () {
    this.initChart()
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart () {
      this.$axios
        .get('/user/sexCount', {
        })
        .then(resp => {
          // console(resp.data.size())
          this.data = resp.data
          this.drawing(this.data)
        })
        .catch(failResponse => {
        })
      // this.drawing()
    },
    drawing (data) {
      this.chart = echarts.init(this.$el, 'macarons')

      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['men', 'women']
        },
        series: [
          {
            name: 'WEEKLY WRITE ARTICLES',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: [
              { value: data[0], name: 'men' },
              { value: data[1], name: 'women' },
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>
