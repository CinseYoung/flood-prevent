<template>
  <el-form
    :model="dataForm"
    label-width="100px"
    ref="dataForm"
    size="mini"
    disabled="true"
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
          v-for="option in roleSelectData"
          :key="option.id"
          v-bind:value="option.id"
          v-bind:label="option.type_name"
        ></el-option>
      </el-select>
    </el-form-item>
    <!-- <el-form-item label="所属地市" prop="record_type">
      <el-select
        v-model="dataForm.record_type"
        placeholder="请选择档案类型"
        style="width:200px"
        prop="record_type"
      >
        <el-option
          v-for="option in roleSelectData"
          :key="option.id"
          v-bind:value="option.id"
          v-bind:label="option.type_name"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所属项目" prop="record_type">
      <el-select v-model="dataForm.record_type" placeholder="请选择档案类型" prop="record_type">
        <el-option
          v-for="option in roleSelectData"
          :key="option.id"
          v-bind:value="option.id"
          v-bind:label="option.type_name"
        ></el-option>
      </el-select>
    </el-form-item> -->
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
        :accept="'.doc,.docx,.xls,.xlsx'"
        :limit="5" 
     
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload_text" >
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传.doc,.docx,.xls,.xlsx文件,且文件小于100M,一次最多上传5个文件</div>
      </el-upload>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      roleSelectData: [],
      dataForm: {
        record_code: '',
        record_name: '',
        type: '0',
        creater: '',
        create_time: '',
        remark: '',
        is_enabled: '1',
        record_type: '',
        is_del: '0'
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
        roomid: [{ required: true, message: '请选择档案室', trigger: 'blur' }],
        creater: [{ required: true, message: '请输入创建人', trigger: 'blur' }],
        create_time: [
          { required: true, message: '请选择创建时间', trigger: 'blur' }
        ],
        is_enabled: [
          { required: true, message: '请选择状态', trigger: 'blur' }
        ],
        place: [{ required: true, message: '请输入所在位置', trigger: 'blur' }],
        remark: [{ required: false, message: '请输入备注', trigger: 'blur' }],
        total: [
          { required: true, message: '输入不能为空' },
          { type: 'number', message: '必须为数字值' }
        ],
        current_total: [
          { required: true, message: '输入不能为空' },
          { type: 'number', message: '年龄必须为数字值' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.dataForm.validate(valid => {
        if (!valid) {
          return false
        }
        // this.login()
      })
    }
  }
}
</script>