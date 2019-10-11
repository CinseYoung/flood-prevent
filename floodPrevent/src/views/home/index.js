import _dialog from '@/components/common/dialog/index.vue'
import left from './left/index.vue'
import center from './center/index.vue'
import right from './right/index.vue'
export default {
  name: 'home',
  components: {
    'gr-dialog': _dialog,
    left: left,
    cen: center,
    right: right
  },
  data() {
    return {
      username: localStorage.getItem('kpst-username'),
      dialogOptions: { width: '20%', title: '提示', saveBtn: '保存' },
      dialogVisible: false,
      dialogContentComponent: null,
      dropdownData: [
        { name: '用户中心', divided: false, class: 'el-icon-user-solid', command: 'push$' },
        { name: '密码修改', divided: false, class: 'el-icon-s-goods', command: 'dialog${"title":"密码修改","width":"450px"}' },
        { name: '退出系统', divided: true, class: 'el-icon-error', command: 'destroy$' }
      ],
      screenWidth: document.body.clientWidth,
      screenHeight: document.body.clientHeight,
      cheight: document.body.clientHeight - 30 + 'px'
    }
  },
  methods: {
    setDropdownClass(option) {
      return option + ' el-icon--left'
    }, handleCommand(command) {
      const params = command.split('$')
      if (params[0] === 'dialog') {
        this.dialogOptions = this.utils.getDialogOption(params[1])
        this.dialogVisible = true
        this.dialogContentComponent = () => import('./pwd/xg.vue')
        return
      }
      this.utils[params[0]].call(this, this, params[1])
    }
  }
}
