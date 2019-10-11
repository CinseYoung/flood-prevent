<template>
  <div style="height:100%">
    <el-tabs v-model="activeName2" type="border-card">
      <el-tab-pane label="值班表" name="first">
        <dz-search @searchSubmit="searchSubmit" />
        <div class="gr-datagrid2">
          <div class="gr-tag">
            <span class="data-title">值班日历</span>
            <el-button type="primary" size="mini" @click="addZbdj">值班登记</el-button>
            <el-button type="success" size="mini" @click="addZbap">值班安排</el-button>
            <el-button type="info" size="mini" @click="addZbbg">值班报告</el-button>
          </div>
          <full-calendar :events="events" lang = "zh" ref="calendar" @eventClick='eventClick'>
          </full-calendar>
        </div>
      </el-tab-pane>
      <el-tab-pane label="值班报告" name="second">
        <bg-search @searchBg="searchBg" />
        <div class="gr-datagrid2">
          <div class="gr-tag">
            <span class="data-title">值班报告</span>
          </div>
          <mb-grid ref="dataGrid2" />
        </div>
      </el-tab-pane>
    </el-tabs>
    <gr-dialog
      :dialogVisible.sync="dialogVisible"
      :dialogOptions="dialogOptions"
      :dialogContentComponent="dialogContentComponent"
      :data="editItem"
      :showDel="show"
    />
  </div>
</template>
<script>
import FullCalendar from '@/components/common/vue-fullcalendar/fullCalendar.vue'
import search from '@/components/system/search/xqzs-zbgl/xqzs-zbgl-zbrl/index.vue'
import search1 from '@/components/system/search/xqzs-zbgl/xqzs-zbgl-zbbg/index.vue'
import datagrid1 from '@/components/system/grid/xqzs-zbgl/index.vue'
import _dialog from '@/components/common/dialog/index.vue'
var date = new Date()
var nowDay = date.getDate()
var nextDay = date.getDate()
export default {
  data() {
    return {
      activeName2: 'first',
      dialogOptions: {},
      dialogVisible: false,
      dialogContentComponent: null,
      show: false,
      events: [],
      editItem: {}
    }
  },
  components: {
    'dz-search': search,
    'bg-search': search1,
    'mb-grid': datagrid1,
    'gr-dialog': _dialog,
    'full-calendar': FullCalendar
  },
  created() {
    this.$emit('update:menuName', '值班管理')
  },
  methods: {
    eventClick(event, jsEvent, pos) {
      if (event.title.indexOf('已签到') === -1) {
        for (var key in event) {
          this.editItem[key] = event[key]
        }
        this.show = true
        this.dialogVisible = true
        this.dialogOptions = {
          width: '680px',
          title: '值班安排',
          saveBtn: '提交'
        }
        this.dialogContentComponent = () =>
        import('@/components/system/dialog/xqzs-zbgl/zbap_xg.vue')
      }
    },
    reload(data) {
      if (this.editItem.id) {
        this.events.forEach((el, ind) => {
          if (el.id === this.editItem.id) {
            this.events.splice(ind, 1)
          }
        })
      }
      this.events.push({
        id: this.editItem.id ? this.editItem.id : this.setUuid(),
        title: '带班领导：' + data.lead + '，' + '值班人员：' + data.person,
        start: data.st,
        end: data.et,
        allDay: true
      })
    },
    setUuid() {
      var s = []
      var hexDigits = '0123456789abcdef'
      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
      }
      s[14] = '4'
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
      s[8] = s[13] = s[18] = s[23]
      var uuid = s.join('')
      return uuid
    },
    deleteDate() {
      if (this.editItem.id) {
        this.events.forEach((el, ind) => {
          if (el.id === this.editItem.id) {
            this.events.splice(ind, 1)
          }
        })
      }
    },
    searchSubmit(data) {
      this.$refs.calendar.fireMethod(data.time)
    },
    searchBg(data) {
      this.$refs.dataGrid2.searchSubmit(data)
    },
    addZbdj() {
      if (nowDay === nextDay) {
        this.events.push({
          id: this.setUuid(),
          title: '✔️已签到',
          start: new Date(),
          cssClass: 'qiandao'
        })
        // eslint-disable-next-line no-const-assign
        nextDay++
      } else {
        this.$message.error('您今天已经签到')
      }
    },
    addZbap() {
      this.show = false
      this.editItem = {}
      this.dialogVisible = true
      this.dialogOptions = {
        width: '680px',
        title: '值班安排',
        saveBtn: '提交'
      }
      this.dialogContentComponent = () =>
        import('@/components/system/dialog/xqzs-zbgl/zbap_xg.vue')
    },
    addZbbg() {
      this.show = false
      this.dialogVisible = true
      this.dialogOptions = {
        width: '680px',
        title: '值班报告',
        saveBtn: '提交'
      }
      this.dialogContentComponent = () =>
        import('@/components/system/dialog/xqzs-zbgl/zbbg.vue')
    }
  }
}
</script>
<style >
 @import "../../../style/css/general-content.css";
</style>