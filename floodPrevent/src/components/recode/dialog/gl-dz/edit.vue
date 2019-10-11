<template>
  <el-form
    :model="dataForm"
    label-width="100px"
    ref="dataForm"
    size="mini"
    :rules="rules"
    style="margin-right: 20px"
    :inline="true"
    label-position="right"
  >
    <el-form-item label="档案编号" prop="record_code">
      <el-input v-model="dataForm.record_code" style="width:200px"></el-input>
    </el-form-item>
    <el-form-item label="档案名称" prop="record_name">
      <el-input v-model="dataForm.record_name" style="width:200px"></el-input>
    </el-form-item>
    <!--档案类型动态获取 -->
    <el-form-item label="档案类型" prop="record_type">
      <el-select
        v-model="dataForm.record_type"
        placeholder="请选择档案类型"
        prop="record_type"
        style="width:200px"
      >
        <el-option
          v-for="option in typeSelectData"
          :key="option.id"
          v-bind:value="option.id"
          v-bind:label="option.type_name"
        ></el-option>
      </el-select>
    </el-form-item><el-form-item label="创建人" prop="creater">
      <el-input v-model="dataForm.creater" style="width:200px" placeholder="请输入创建人"></el-input>
    </el-form-item>
    <el-form-item label="创建时间" prop="create_time">
      <el-date-picker
        v-model="dataForm.create_time"
        type="datetime"
        placeholder="选择创建时间"
        style="width:200px">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="所属地市" prop="record_type">
      <el-select
        v-model="dataForm.regionid"
        placeholder="请选择所属地市"
        style="width:200px"
        prop="regionid"
      >
        <el-option
          v-for="option in regionSelectData"
          :key="option.dxid"
          v-bind:value="option.dxid"
          v-bind:label="option.xzqhmc"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所属项目" prop="projectid">
      <el-select v-model="dataForm.projectid" placeholder="所属项目">
        <el-option label="项目一" value="项目一"></el-option>
        <el-option label="项目二" value="项目二"></el-option>
        <el-option label="项目三" value="项目三"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="状态" prop="is_enabled">
      <el-radio-group v-model="dataForm.is_enabled" placeholder="请选择档案状态">
        <el-radio label="0">停用</el-radio>
        <el-radio label="1">启用</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="档案备注" prop="remark">
      <el-input
        v-model="dataForm.remark"
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 5}"
        style="width:510px;"
      ></el-input>
    </el-form-item>
    <el-form-item label="档案文件"  >
      <el-upload
        ref="upload"
        class="uploadFile"
        drag
        action
        multiple
        :auto-upload="false"
        :before-upload="uploadFiles"
        :on-success="uploadSuccess"
        :accept="'.pdf'"
        :limit="1" 
     
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload_text" >
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传PDF文件,且文件小于100M,一次最多上传1个文件</div>
      </el-upload>
    </el-form-item>
  </el-form>
</template>
<script>
import moment from 'moment'
export default {
  data() {
    return {
      dataForm: {
        record_code: '',
        record_name: '',
        creater: '',
        create_time: '',
        remark: '',
        is_enabled: '1',
        record_type: '',
        regionid: '',
        projectid: '',
        is_del: '0',
        that: null,
        is_upload: false
      },
      rules: {
        record_name: [
          { required: true, message: '请输入档案名称', trigger: 'blur' }
        ],
        record_code: [
          { required: true, message: '请输入档案编号', trigger: 'blur' }
        ],
        record_type: [
          { required: true, message: '请选择档案类型', trigger: 'blur' }
        ],
        creater: [{ required: true, message: '请输入创建人', trigger: 'blur' }],
        create_time: [{ required: true, message: '请输入创建时间', trigger: 'blur' }],
        is_enabled: [
          { required: true, message: '请选择状态', trigger: 'blur' }
        ],
        place: [{ required: true, message: '请输入所在位置', trigger: 'blur' }],
        remark: [{ required: false, message: '请输入备注', trigger: 'blur' }],
        regionid: [{ required: false, message: '请选择所属地市', trigger: 'blur' }],
        projectid: [{ required: false, message: '请选择所属项目', trigger: 'blur' }]
      }
    }
  },
  props: {
    typeSelectData: { type: Array, default: () => [] },
    data: { type: Object, default: () => {} },
    regionSelectData: { type: Array, default: () => [] }
  },
  mounted() {
    for (var key in this.data) {
      this.dataForm[key] = this.data[key]
    }
  },
  methods: {
    submitForm(that) {
      this.that = that
      this.$refs.dataForm.validate(valid => {
        if (!valid) {
          return false
        }
        this.$refs.upload.submit()
        if (!this.is_upload) {
          this.save()
        }
      })
    }, save(fileId) {
      this.dataForm.create_time = moment(this.dataForm.create_time).format('YYYY-MM-DD hh:mm:ss')
      this.dataForm.modify_time = moment(new Date()).format('YYYY-MM-DD hh:mm:ss')
      if (fileId) {
        this.dataForm.record_file = fileId
      }
      this.dataForm.record_file = fileId
      this.api.post(this, 'record_update', (data) => {
        this.$message({
          type: 'success',
          message: '修改成功!'
        })
        this.that.modalClose()
        this.that.reLoad()
      }, this.dataForm)
    },
    resetForm() {
      this.$refs.dataForm.resetFields()
    },
    /** 上传 */
    uploadFiles(file) {
      this.is_upload = true
      const fd = new FormData()
      fd.append('multipartFiles', file)
      this.api.post(this, 'file_upload', (data) => {
        this.save(data[0].fileId)
      }, fd)
      return false // 已发送请求，阻止实际上传
    },
    uploadSuccess() {
      this.$message({
        type: 'success',
        message: '上传成功'
      })
    }
  }
}
</script>