<template>
  <div style="height:100%;">
    <dz-search @searchSubmit="searchSubmit" />
    <div class="gr-datagrid">
      <div class="gr-tag bg-width">
        <span class="data-title">水情公报</span>
        <span v-if="show">{{"("+time+"数据"+")"}}</span>
      </div>
      <el-form :inline="true" :model="formInline" size="mini" class="xuanze">
        <el-form-item label="文件列表">
          <el-select v-model="formInline.report" filterable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="pdf" v-show="fileType === 'pdf'" style="paddingTop:50px">
        <p class="arrow">
          <span @click="changePdfPage(0)" class="turn" :class="{grey: currentPage==1}">上一页</span>
          {{currentPage}} / {{pageCount}}
          <span
            @click="changePdfPage(1)"
            class="turn"
            :class="{grey: currentPage==pageCount}"
          >下一页</span>
        </p>
        <div style="overflowY:scroll;overflowX:hidden">
          <pdf
          :src="src"
          :page="currentPage"
          @num-pages="pageCount=$event"
          @page-loaded="currentPage=$event"
          @loaded="loadPdfHandler"
          :style="{display:'block',padding:'0 14%',height:height+'px'}"
        ></pdf>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import search from '@/components/analyze/search/bg-gb/index.vue'
import pdf from 'vue-pdf'
export default {
  data() {
    return {
      time: '',
      show: false,
      formInline: {
        report: ''
      },
      options: [],
      currentPage: 0, // pdf文件页码
      pageCount: 0, // pdf文件总页数
      fileType: 'pdf', // 文件类型
      src: 'http://image.cache.timepack.cn/nodejs.pdf',
      height: 0,
      numPages: undefined
    }
  },
  components: { 'dz-search': search, pdf },
  created() {
    this.$emit('update:menuName', '水情公报')
    this.height = document.body.clientHeight - 250
    this.src = pdf.createLoadingTask(this.src)
  },
  methods: {
    searchSubmit(data) {
      // this.$refs.dataGrid.searchSubmit(data)
    },
    changePdfPage(val) {
      // console.log(val)
      if (val === 0 && this.currentPage > 1) {
        this.currentPage--
        // console.log(this.currentPage)
      }
      if (val === 1 && this.currentPage < this.pageCount) {
        this.currentPage++
        // console.log(this.currentPage)
      }
    },

    // pdf加载时
    loadPdfHandler(e) {
      this.currentPage = 1 // 加载的时候先加载第一页
    }
  }
}
</script>
<style >
@import "../../../style/css/general-content.css";
</style>
