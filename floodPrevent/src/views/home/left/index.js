export default {
  name: 'left',
  data() {
    return {
      activeName: 'fxkh',
      syss: [
        { title: '防汛抗旱', key: 'fxkh' },
        { title: '水利工程', key: 'szy' },
        { title: '水资源', key: 'stbc' },
        { title: '水土保持', key: 'slgc' },
        { title: '其他', key: 'xtpz' }
      ],
      menus: {},
      dutyInfo: [],
      works: [],
      height: ''
    }
  },
  created() {
    var me = this
    me.api.get(this, 'sys_nav', this.setMenuData)
    me.getDutyInfo()
    me.getWorks()
  },
  methods: {
    setMenuData(data) {
      this.menus = data
      localStorage.setItem('kpst-all-menus', JSON.stringify(data))
    },
    setItemClass(key) {
      const obj = { 'item-icon': true }
      obj[`item-icon${key}`] = true
      return obj
    },
    clickUrl(data) {
      this.utils.clickUrl(this, data)
    },
    handleClick(tab, event) {},
    getDutyInfo: function() {
      var me = this
      this.api.get(this, 'mh_dutyInfo', (data) => {
        me.dutyInfo = data
      })
    },
    getWorks: function() {
      var me = this
      this.api.get(this, 'mh_works', (data) => {
        me.works = data
      })
    },
    moreWorks() {

    }
  }
}
