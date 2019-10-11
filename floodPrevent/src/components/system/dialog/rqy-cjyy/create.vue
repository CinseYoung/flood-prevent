<template>
  <div>
    <el-form :model="globalForm" label-width="100px" ref="nfsForm" size="mini" :rules="globalRules" style="margin-right: 20px" label-position="right">
      <el-form-item label="存储方式" prop="saveWays">
        <el-select filterable v-model="globalForm.saveWays" placeholder="选择存储方式" style="width:300px">
          <el-option label="本地卷" value="0"></el-option>
          <el-option label="NFS" value="1"></el-option>
          <el-option label="configMap" value="2"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-form :model="localDisc" label-width="100px" ref="localDisc" size="mini" :rules="localRules" style="margin-right: 20px" label-position="right" v-show="globalForm.saveWays == 0">
      <el-form-item label="卷名称" prop="discName">
        <el-input v-model="localDisc.discName" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="主机路径" prop="hostPath">
        <el-input v-model="localDisc.hostPath" style="width:300px"></el-input>
      </el-form-item>
    </el-form>
    <el-form :model="nfsForm" label-width="100px" ref="nfsForm" size="mini" :rules="nfsRules" style="margin-right: 20px" label-position="right" v-show="globalForm.saveWays == 1">
      <el-form-item label="NFS名称" prop="nfsName">
        <el-input v-model="nfsForm.nfsName" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="nfsAddress">
        <el-input v-model="nfsForm.nfsAddress" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="NFS路径" prop="nfsPath">
        <el-input v-model="nfsForm.nfsPath" style="width:300px"></el-input>
      </el-form-item>
    </el-form>
    <el-form :model="configForm" label-width="100px" ref="configForm" size="mini" :rules="configRules" style="margin-right: 20px" label-position="right" v-show="globalForm.saveWays == 2">
      <el-form-item label="卷名称" prop="discName">
        <el-input v-model="configForm.discName" style="width:300px"></el-input>
      </el-form-item>
      <el-form-item label="值" prop="mapValue">
        <el-input v-model="configForm.mapValue" style="width:300px"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['discForm'])
  },
  data() {
    return {
      localDisc: {
        discName: '',
        hostPath: ''
      },
      globalForm: {
        saveWays: '0'
      },
      nfsForm: {
        nfsName: '',
        nfsAddress: '',
        nfsPath: ''
      },
      configForm: {
        discName: '',
        mapValue: ''
      },
      localRules: {
        discName: [
          { required: true, message: '请输入卷名称', trigger: 'blur' }
        ]
      },
      globalRules: {
        saveWays: [
          { required: true, message: '请选择存储方式', trigger: 'blur' }
        ]
      },
      nfsRules: {
        nfsName: [
          { required: true, message: '请输入NFS名称', trigger: 'blur' }
        ],
        nfsAddress: [
          { required: true, message: '请输入NFS地址', trigger: 'blur' }
        ],
        nfsPath: [
          { required: true, message: '请输入NFS路径', trigger: 'blur' }
        ]
      },
      configRules: {
        discName: [
          { required: true, message: '请输入卷名称', trigger: 'blur' }
        ],
        mapValue: [
          { required: true, message: '请输入configMap值', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['saveDisc']),
    submitForm(that) {
      let assignForm = {}
      if (this.globalForm.saveWays === '0') {
        this.$refs.localDisc.validate(valid => {
          if (!valid) {
            return false
          }
          assignForm = { ...this.globalForm, ...this.localDisc }
          this.saveDisc(assignForm)
          that.modalClose()
        })
      } else if (this.globalForm.saveWays === '1') {
        this.$refs.nfsForm.validate(valid => {
          if (!valid) {
            return false
          }
          assignForm = { ...this.globalForm, ...this.nfsForm }
          this.saveDisc(assignForm)
          that.modalClose()
        })
      } else {
        this.$refs.configForm.validate(valid => {
          if (!valid) {
            return false
          }
          assignForm = { ...this.globalForm, ...this.configForm }
          this.saveDisc(assignForm)
          that.modalClose()
        })
      }
    },
    resetForm() {
      this.$refs.localDisc.resetFields()
      this.$refs.nfsForm.resetFields()
      this.$refs.configForm.resetFields()
    }
  }
}
</script>