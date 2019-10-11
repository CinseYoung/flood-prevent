/*eslint-disable   */
import { mapState } from 'vuex'

export default {
  data() {
    return {
      keyword: '',
      show: false,
      size: 0,
      height: 0,
      formInline: { region: '', keyword: '', river: '', type: '' },
      activeSpan: '',
      data: [],
      leftPage: {
        total: 1,
        currentPage: 1,
        pageSize: 2
      },
      rivers: ['黄河流域', '长江流域', '松辽流域', '海河流域', '淮河流域', '珠江流域',],
      regions: [],
      types: ['防洪保护区', '山丘区洪水', '水库', '蓄滞洪区', '城市', '洪番区洪水',],
      title: '',
      idx: null

    }
  },
  props: {
    url_key: {
      type: String,
      default:  'risk_result'
    }
  },
  computed: { ...mapState(['isShowDetail', 'pageName', 'showLeft']) },
  created() {
    this.height = document.body.clientHeight - 127
    this.getCity();
    this.loadData()

  },

  mounted() {
  },
  methods: {
    getCity: function () {
     
      var me = this;
      this.api.get(this,'risk_city',(data)=>{
        if (data === null) return;
        me.regions = data;
      })

    },
    close: function () {
      this.$store.state.showLeft = !this.showLeft
      this.$store.state.isShowDetail = false
    },
    loadData() {
      
      var me = this;
      this.api.get(this,this.url_key,(data)=>{
        if (data === null) return;
        me.data = data
        me.leftPage.total = data.length
      })
    },
    handleCollapse() {
      this.show = !this.show
      this.height = document.body.clientHeight - (this.show ? 217 : 127)
    },
    spanClick(data, e) {
      this.activeSpan = data.id
      this.title = data.name
      if (this.pageName == '影响分析') {
        this.$store.state.isShowDetail = true
      }
      this.$parent.setSourceData(data.children);
 
    },
    checked: function (index) {
      this.idx = index
    },

    search: function () {
      var me = this
      var url
      // this.axios
      //   .get(url, me.formInline)
      //   .then(data => {s
      //     if (data === null) return
      //     this.data = data
      //     this.leftPage.total = data.length
      //   })
      //   .catch(error => {
      //     this.$message({ showClose: true, message: error, type: 'error' })
      //   })
    },

    handleCurrentChange(val) {
      this.loadData(this.leftPage.currentPage)
    }
  }
}
