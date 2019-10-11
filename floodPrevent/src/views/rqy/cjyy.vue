<template>
  <div style="height:100%">
    <div class="gr-datagrid-notitle">
      <el-form :model="dataForm" label-width="100px" ref="dataForm" size="mini" :rules="rules" style="margin-right: 20px;padding-top:20px" :inline="true" label-position="right">
        <el-form-item label="应用名称" prop="yymc">
          <el-input v-model="dataForm.yymc" style="width:200px"></el-input>
        </el-form-item>
        <el-form-item label="选择镜像" prop="xzjx">
          <el-select filterable v-model="dataForm.xzjx" placeholder="选择镜像" style="width:200px">
            <el-option label="选项一" value="1"></el-option>
            <el-option label="选项二" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="镜像版本" prop="jxbb">
          <el-select filterable v-model="dataForm.jxbb" placeholder="镜像版本" style="width:200px">
            <el-option label="版本一" value="1"></el-option>
            <el-option label="版本二" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="容器配置" prop="rqpz">
          <el-select filterable v-model="dataForm.rqpz" placeholder="容器配置" style="width:200px">
            <el-option label="配置一" value="1"></el-option>
            <el-option label="配置二" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="实例数量" prop="slsl">
          <el-input-number v-model="dataForm.slsl" :min="1"></el-input-number>
        </el-form-item>
      </el-form>
      <el-collapse v-model="activeNames" @change="handleChange" style="margin: 0 17px 0 22px" accordion>
        <el-collapse-item title="高可用" name="1">
          <el-form size="mini" label-width="150px" label-position="right">
            <el-form-item label="是否支持滚动升级">
              <el-radio v-model="checked" border label="yes" size="mini">是</el-radio>
              <el-radio v-model="checked" border label="no" size="mini">否</el-radio>
            </el-form-item>
            <el-form-item label="健康检查探针">
              <el-radio v-model="jctz" label="http" border size="mini">HTTP</el-radio>
              <el-radio v-model="jctz" label="tcp" border size="mini">TCP</el-radio>
              <el-radio v-model="jctz" label="wu" border size="mini">无</el-radio>
            </el-form-item>
            <el-form-item label="端口号" prop="dkh" v-show="jctz != 'wu'">
              <el-input v-model="dataForm.dkh" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="路径" prop="lj" v-show="jctz == 'http'">
              <el-input v-model="dataForm.lj" style="width:200px"></el-input>
            </el-form-item>
          </el-form>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            配置管理 <el-button size="mini" style="margin-left: 10px" @click.stop="createDisc">创建卷</el-button>
          </template>
          <el-form size="mini" label-width="100px" label-position="right" :inline="true" v-for="(item,index) in pzgls" :key="index + 10">
            <el-form-item label="挂载目录" prop="gzml">
              <el-input v-model="item.gzml" style="width:400px" placeholder="例：/app"></el-input>
            </el-form-item>
            <el-form-item label="卷" prop="rqpz">
              <el-select filterable v-model="item.juan" placeholder="请选择卷" style="width:400px">
                <el-option :label="item.discName" :value="JSON.stringify(item)" v-for="(item, index) in discForm" :key="index"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="text" style="margin-left:70px" @click.prevent="removePz(item)">删除</el-button>
            </el-form-item>
          </el-form>
          <div class="btn-wrapper">
            <el-button size="mini" @click="addPz">添加</el-button>
          </div>
        </el-collapse-item>
        <el-collapse-item title="高级设置" name="3">
          <el-divider content-position="left">环境变量</el-divider>
          <el-form size="mini" label-width="100px" label-position="right" :inline="true" v-for="(item,index) in gjszs" :key="index + 100">
            <el-form-item label="键" prop="jian">
              <el-input v-model="item.jian" style="width:400px"></el-input>
            </el-form-item>
            <el-form-item label="值" prop="zhi">
              <el-input v-model="item.zhi" style="width:400px"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="text" style="margin-left:70px" @click.prevent="removeBl(item)">删除</el-button>
            </el-form-item>
          </el-form>
          <div class="btn-wrapper">
            <el-button size="mini" @click="addBl">添加</el-button>
          </div>

          <el-divider content-position="left">映射端口</el-divider>
          <el-form size="mini" label-width="100px" label-position="right" :inline="true" v-for="(item,index) in ysdks" :key="index + 1000">
            <el-form-item label="容器端口" prop="rqdk">
              <el-input v-model="item.rqdk" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="主机端口" prop="zjdk">
              <el-input v-model="item.zjdk" style="width:200px"></el-input>
            </el-form-item>
            <el-form-item label="协议" prop="xy">
              <el-select filterable v-model="item.xy" placeholder="请选择协议" style="width:200px">
                <el-option label="HTTP" value="http"></el-option>
                <el-option label="TCP" value="tcp"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="text" style="margin-left:70px" @click.prevent="removeDk(item)">删除</el-button>
            </el-form-item>
          </el-form>
          <div class="btn-wrapper">
            <el-button size="mini" @click="addDk">添加</el-button>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <gr-dialog :dialogVisible.sync="dialogVisible" :dialogOptions="dialogOptions" :dialogContentComponent="dialogContentComponent" :data="data" :show="show" />
  </div>

</template>
<script>
import grDialog from '@/components/common/dialog/index.vue'
import { mapState } from 'vuex'
export default {
  components: {
    grDialog
  },
  data() {
    return {
      dialogOptions: {},
      dialogVisible: false,
      dialogContentComponent: null,
      data: {},
      show: true,
      pzgls: [{
        gzml: '',
        juan: ''
      }],
      gjszs: [{
        jian: '',
        zhi: ''
      }],
      ysdks: [{
        rqdk: '',
        zjdk: '',
        xy: ''
      }],
      checked: false,
      jctz: '1',
      activeNames: [],
      dataForm: {
        yymc: '',
        slsl: '',
        xzjx: '',
        jxbb: '',
        rqpz: ''
      },
      rules: {
        slsl: [
          { required: true, message: '请输入实例数量', trigger: 'blur' }
        ],
        yymc: [
          { required: true, message: '请输入应用名称', trigger: 'blur' }
        ],
        xzjx: [
          { required: true, message: '请选择镜像', trigger: 'blur' }
        ],
        jxbb: [
          { required: true, message: '请选择镜像版本', trigger: 'blur' }
        ],
        rqpz: [
          { required: true, message: '请选择容器配置', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapState(['discForm'])
  },
  mounted() {
    this.$emit('update:menuName', '创建应用')
  },
  methods: {
    createDisc() {
      this.show = true
      this.dialogVisible = true
      this.dialogOptions = {
        width: '480px',
        title: '创建卷',
        saveBtn: '提交'
      }
      this.dialogContentComponent = () =>
        import('@/components/system/dialog/rqy-cjyy/create.vue')
    },
    removePz(item) {
      var index = this.pzgls.indexOf(item)
      if (index !== 0) {
        this.pzgls.splice(index, 1)
      } else {
        this.$message.warning('已经是最后一项了哦')
      }
    },
    removeBl(item) {
      var index = this.gjszs.indexOf(item)
      if (index !== 0) {
        this.gjszs.splice(index, 1)
      } else {
        this.$message.warning('已经是最后一项了哦')
      }
    },
    removeDk(item) {
      var index = this.ysdks.indexOf(item)
      if (index !== 0) {
        this.ysdks.splice(index, 1)
      } else {
        this.$message.warning('已经是最后一项了哦')
      }
    },
    addPz() {
      this.pzgls.push({
        gzml: '',
        juan: '',
        key: Date.now()
      })
    },
    addBl() {
      this.gjszs.push({
        jian: '',
        zhi: '',
        key: Date.now()
      })
    },
    addDk() {
      this.ysdks.push({
        rqdk: '',
        zjdk: '',
        key: Date.now()
      })
    },
    handleChange(val) {
    },
    submitForm() {
      this.$refs.dataForm.validate(valid => {
        if (!valid) {
          return false
        }
        // this.login()
      })
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    }
  }
}
</script>
<style>
@import "~@/style/css/general-content.css";
</style>
<style lang="scss">
.gr-datagrid-notitle {
  overflow: auto;
  height: 90%;
  height: calc(100% - 45px);
  background: #fff;
  margin: 3px 0 3px 5px;
  padding: 0 17px;
  border-bottom: solid 1px #d9d9d9;
  .btn-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .gr-tag {
    line-height: 46px;
    .data-title {
      background: url("~@/assets/data-title.png") no-repeat center left;
      padding-left: 20px;
      font-size: 14px;
    }
    .el-button--primary {
      color: #fff;
      background: #409eff;
      border-color: #409eff;
      margin-left: 15px;
    }
    .el-button--primary:hover {
      background-color: rgb(193, 218, 243);
      border-color: rgb(121, 184, 248);
      color: #000;
    }
  }
}
</style>