export default {
  // 登陆-注销
  loginAction: '/loginAction',
  sys_destroy: '/sys/destroy',
  // 菜单
  sys_nav: '/sys/get/menu/nav',
  sys_menu: '/sys/get/menu/list',
  sys_changePwd: 'sys/changePwd',
  sys_record_menu: '/sys/get/menu/record',
  sys_analyze_menu: '/sys/get/menu/analyze',

  // 门户主页
  mh_works: 'sys/get/works',
  mh_dutyInfo: 'sys/get/dutyInfo',
  mh_warn: '/sys/get/warn',
  mh_yqInfo: '/sys/get/yqInfo',
  mh_waterInfo: '/sys/get/waterInfo',

  // 风向图查询
  risk_city: '/risk/get/base/result/city',
  risk_result: '/risk/get/base/result',
  risk_countyTree: 'risk/get/base/result/countyTree',

  // 档案接口
  record_page: '/da/get/base/recordPage',
  record_office: '/da/get/base/recordRoom',
  record_room_insert: '/da/crud/recordRoom/insertRecordRoom',
  record_room_update: '/da/crud/recordRoom/updateRecordRoom',
  record_room_deleted: '/da/crud/recordRoom/deleteRecordRoom',
  record_room_list: '/da/get/base/recordRoomList',
  record_type: '/da/get/base/recordType',
  record_type_list: '/da/get/base/recordTypeList',
  record_type_insert: '/da/crud/record/insertRecordType',
  record_type_update: '/da/crud/record/updateRecord',
  record_type_deleted: '/da/crud/record/deleteRecordType',
  record_log: '/da/get/base/recordLogPage',
  record_bin: '/da/get/fileRecover/getRecoverFile',
  record_insert: '/da/crud/recordDocument/insertRecordDocument',
  record_update: '/da/crud/recordDocument/updateRecordDocument',
  record_recovery: '/da/crud/fileRecover/updateRecoverFile',
  record_deleted: '/da/crud/fileRecover/deleteRecoverFile',
  record_batch_deleted: '/da/crud/fileRecover/batchDeleteRecoverFile',
  record_batch_update: '/da/crud/fileRecover/batchUpdateRecoverFile',
  record_borrow: '/da/get/base/recordBorrow_Page',
  record_borrow_update: '/da/crud/recordBorrow/updateRecordBorrow',
  record_borrow_deleted: '/da/crud/recordBorrow/deleteRecordBorrow',
  record_auth: '/da/get/base/recordAuth_Page',
  record_auth_update: '/da/crud/recordAuth/updateRecordAuth',
  record_auth_deleted: '/da/crud/recordAuth/deleteRecordAuth',
  record_project: '/da/record/get/base/recordProject',
  record_statistics_count: '/da/get/statistics/recordCount',
  record_statistics_electronic: '/da/get/statistics/electronicRatio',
  record_statistics_paper: '/da/get/statistics/paperRatio',
  record_count_year: '/da/get/statistics/recordCountYear',
  record_count_week: '/da/get/statistics/recordCountWeek',
  record_count_month: '/da/get/statistics/recordCountMonth',
  record_count_day: '/da/get/statistics/recordCountDay',
  record_ranking_year: '/da/get/statistics/recordRankingYear',
  file_upload: '/da/business/common/upload',
  file_download: '/da/business/common/download',
  // 分析接口
  analyze_page: '/analyze/get/base/analyzePage',
  analyze_gb_page: 'analyze/get/base/analyzeGbPage',
  analyze_zyz_page: 'analyze/get/base/analyzeZyzPage',
  analyze_szzyz_page: 'analyze/get/base/analyzeSzzyzPage',
  analyze_jb_page: 'analyze/get/base/analyzeJbPage',
  analzye_cj_page: 'analyze/get/base/analyzeCjPage',
  analyze_zyzdr1_page: 'analyze/get/base/analyzeZyzdr1Page',
  analyze_zyzdr2_page: 'analyze/get/base/analyzeZyzdr2Page',
  analyze_zyzdb_page: 'analyze/get/base/analyzeZyzdbPage',
  analyze_lstzz_page: 'analyze/get/base/analyzeLstzzPage',
  analyze_zyzsw_page: 'analyze/get/base/analyzeZyzswPage',
  analyze_zyzls_page: 'analyze/get/base/analyzeZyzlsPage',
  analyze_top_page: 'analyze/get/base/analyzeTopPage',
  analyze_down_page: 'analyze/get/base/analyzeDownPage',
  analyze_mainsk_page: 'analyze/get/base/analyzeMainskPage',
  analyze_skq_page: 'analyze/get/base/analyzeSkqPage',
  analyze_station_page: 'analyze/get/base/analyzeStationPage',
  analyze_skxsl_page: 'analyze/get/base/analyzeSkxslPage',
  analyze_sktzz_page: 'analyze/get/base/analyzeSktzzPage',
  analyze_ylmonth_page: 'analyze/get/base/analyzeYlmonthPage',
  analyze_ylday_page: 'analyze/get/base/analyzeYldayPage',
  analyze_ylhour_page: 'analyze/get/base/analyzeYlhourPage',
  analyze_swdz_page: 'analyze/get/base/analyzeSwdzPage',
  analyze_swsmx_page: 'analyze/get/base/analyzeSwsmxPage',

  // 汛期值守接口
  system_xq_page: 'system/get/base/systemXqPage',
  system_yj_page: 'system/get/base/systemYjPage',
  system_dx1_page: 'system/get/base/systemDx1Page',
  system_dx2_page: 'system/get/base/systemDx2Page',
  system_dh_page: 'system/get/base/systemDhPage',
  system_bg_page: 'system/get/base/systemBgPage',
  system_gw_page: 'system/get/base/systemGwPage',

  // 资源接口
  data_zylx: '/data/get/base/datazylx',
  data_zyfw: '/data/get/base/datazyfw',
  data_zysh: '/data/get/base/datazysh',

  // 用户组织权限接口
  system_yh_page: '/sl/get/userManage/getUserList',
  system_gn_page: '/sl/get/function/getFunctionList',
  system_zzjg_page: '/sl/get/organization/getOrganizationList',
  system_qx_page: 'system/get/base/systemQxPage',
  system_zxt_page: 'system/get/base/systemZxtPage',
  // 设置上级组织机构
  set_upper_zzjg: '/sl/crud/organization/setSuperOrganization',
  // 获取行政区划列表
  get_area_list: '/sl/get/common/getAreaList',
  // 获取单位列表
  get_company_list: '/sl/get/common/getCompanyList',
  // 增加功能菜单
  add_gn: '/sl/crud/function/addFunction',
  // 编辑功能菜单
  edit_gn: '/sl/crud/function/updateFunction',
  // 删除功能菜单
  delete_gn: '/sl/crud/function/deleteFunction',
  // 获取功能菜单列表
  gn_list: '/sl/get/common/getFunctionList',
  // 字典
  data_zdlx: '/data/get/base/datazdlx',
  data_zdxx: '/data/get/base/datazdxx',

  // 数据同步管理
  data_sjtb_sjgl: '/data/get/base/datasjgl',
  data_sjtb_mxgl: '/data/get/base/datamxgl',
  data_sjtb_rwgj: '/data/get/base/datarwgj',

  // 数据管理-数据标识管理
  data_sjgl_left_sjbs: '/data/get/base/left_datasjbs',
  data_sjgl_sjbs__LY_LYDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__HP_HPDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__HL_HLDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__CZ_CZDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__DB_DBDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__SDZ_SDZDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__SZ_SZDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__XJB_XJBDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__BZ_BZDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__DF_DFDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__QD_QDDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__HD_HDDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__QL_QLDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__SC_SCDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__QSK_QSKDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__PWK_PWKDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__SK_SKDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__GQ_GQDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__NCGS_NCGSDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__ZZ_ZZDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__ZRR_ZRRDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__DW_DWDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__XZQH_XZQHDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__LYPQ_LYPQDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__SZY_SZYDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__SGNQ_SGNQDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__SYDB_SYDBDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__SYDX_SYDXDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__STBC_STBCDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__CS_CSDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__JKD_JKDDX_I: '/data/get/base/datasjbs',
  data_sjgl_sjbs__DMT_DMTDX_I: '/data/get/base/datasjbs',
  // 数据管理-数据备份还原
  data_sjgl_sjbf: '/data/get/base/datasjbf',
  data_sjgl_alllist: '/data/get/base/dataalllist',

  // 数据管理-核心数据
  data_sjgl_dmtjbxxb: '/data/get/base/datadmtjbxxb',
  data_sjgl_jkdjbsx: '/data/get/base/datajkdjbsx',
  data_sjgl_jkdjksjwj: '/data/get/base/datajkdjksjwj',
  data_sjgl_csjcqjbsx: '/data/get/base/datajcqjbsx',
  data_sjgl_cskcqjbsx: '/data/get/base/datakcqjbsx',
  // 数据管理-核心数据-水土保持
  data_sjgl_stbcqhjbsx: '/data/get/base/datastbcqhjbsx',
  data_sjgl_stbcfabzjbxxb: '/data/get/base/datastbcfabzjbxxb',
  data_sjgl_stbcfajsscxxb: '/data/get/base/datastbcfajsscxxb',
  data_sjgl_stbcfapfxxb: '/data/get/base/datastbcfapfxxb',
  data_sjgl_stbcfassxxb: '/data/get/base/datastbcfassxxb',
  data_sjgl_stbcfatxb: '/data/get/base/datastbcfatxb',
  data_sjgl_stbcfatxbcs: '/data/get/base/datastbcfatxbcs',
  data_sjgl_stbcfatxbxm: '/data/get/base/datastbcfatxbxm',
  data_sjgl_stbclxqhtb: '/data/get/base/datastbclxqhtb',
  data_sjgl_stbczdfzqht: '/data/get/base/datastbczdfzqht',
  // 数据管理-核心数据-地下水水源地模型对象表
  data_sjgl_sydx_dxjgqdxs: '/data/get/base/data_sydx_dxjgqdxs',
  data_sjgl_sydx_dxjgqjbq: '/data/get/base/data_sydx_dxjgqjbq',
  data_sjgl_dxsy_dxsgssydszzkb: '/data/get/base/data_sydx_dxsgssydszzkb',
  data_sjgl_sydx_dxssyddbswxxb: '/data/get/base/data_sydx_dxssyddbswxxb',
  data_sjgl_sydx_dxssydfxxcltjb: '/data/get/base/data_sydx_dxssydfxxcltjb',
  data_sjgl_sydx_dxssydjbsx: '/data/get/base/data_sydx_dxssydjbsx',
  data_sjgl_sydx_dxssydkcltjb: '/data/get/base/data_sydx_dxssydkcltjb',
  data_sjgl_sydx_dxssydkzswxxb: '/data/get/base/data_sydx_dxssydkzswxxb',
  data_sjgl_sydx_dxssydszpjxxb: '/data/get/base/data_sydx_dxssydszpjxxb',
  data_sjgl_sydx_dxssydydmtzlgxb: '/data/get/base/data_sydx_dxssydydmtzlgxb',
  data_sjgl_sydx_dxssydydxsjczgxb: '/data/get/base/data_sydx_dxssydydxsjczgxb',
  data_sjgl_sydx_dxsydlslrbb: '/data/get/base/data_sydx_dxsydlslrbb',
  data_sjgl_sydx_dxsydlslybb: '/data/get/base/data_sydx_dxsydlslybb',
  data_sjgl_sydx_dxsydslxxnbb: '/data/get/base/data_sydx_dxsydslxxnbb',
  data_sjgl_sydx_jzsdxsgssydbhqkb: '/data/get/base/data_sydx_jzsdxsgssydbhqkb',
  data_sjgl_sydx_sydszzkpj: '/data/get/base/data_sydx_sydszzkpj',
  // 数据管理-核心数据-地表水水源地模型对象表结构
  data_sjgl_sydb_dbssydszpjxxb: '/data/get/base/data_sydb_dbssydszpjxxb',
  data_sjgl_sydb_dbssyjbsx: '/data/get/base/data_sydb_dbssyjbsx',
  data_sjgl_sydb_dbsydlslrbb: '/data/get/base/data_sydb_dbsydlslrbb',
  data_sjgl_sydb_dbsydlslybb: '/data/get/base/data_sydb_dbsydlslybb',
  data_sjgl_sydb_dbsydslxxnbb: '/data/get/base/data_sydb_dbsydslxxnbb',
  // 数据管理-核心数据-水功能区模型对象表结构
  data_sjgl_sgnq_dbpjbgndpg: '/data/get/base/data_sgnq_dbpjbgndpg',
  data_sjgl_sgnq_dbpjbgndpj: '/data/get/base/data_sgnq_dbpjbgndpj',
  data_sjgl_sgnq_dgsgnqdbkhqkb: '/data/get/base/data_sgnq_dgsgnqdbkhqkb',
  data_sjgl_sgnq_hbszpjtjb: '/data/get/base/data_sgnq_hbszpjtjb',
  data_sjgl_sgnq_hddmdxszx: '/data/get/base/data_sgnq_hddmdxszx',
  data_sjgl_sgnq_hddmszdbp: '/data/get/base/data_sgnq_hddmszdbp',
  data_sjgl_sgnq_ljlyysgnqbhgxb: '/data/get/base/data_sgnq_ljlyysgnqbhgxb',
  data_sjgl_sgnq_pjbgsdbpgxxb: '/data/get/base/data_sgnq_pjbgsdbpgxxb',
  data_sjgl_sgnq_qgsgnqszpjcgb: '/data/get/base/data_sgnq_qgsgnqszpjcgb',
  data_sjgl_sgnq_sgnqbgxxb: '/data/get/base/data_sgnq_sgnqbgxxb',
  data_sjgl_sgnq_sgnqdbpjbgsjbxxb: '/data/get/base/data_sgnq_sgnqdbpjbgsjbxxb',
  data_sjgl_sgnq_sgnqjbjbxxb: '/data/get/base/data_sgnq_sgnqjbjbxxb',
  data_sjgl_sgnq_sgnqjbsx: '/data/get/base/data_sgnq_sgnqjbsx',
  data_sjgl_sgnq_sgnqjznwrlxxb: '/data/get/base/data_sgnq_sgnqjznwrlxxb',
  data_sjgl_sgnq_sgnqnwnlfxxx: '/data/get/base/data_sgnq_sgnqnwnlfxxx',
  data_sjgl_sgnq_sgnqnwnlhdbgsxxb: '/data/get/base/data_sgnq_sgnqnwnlhdbgsxxb',
  data_sjgl_sgnq_sgnqnwnlhdcgxxb: '/data/get/base/data_sgnq_sgnqnwnlhdcgxxb',
  data_sjgl_sgnq_sgnqnwnljbxx: '/data/get/base/data_sgnq_sgnqnwnljbxx',
  data_sjgl_sgnq_sgnqszdbfxxxb: '/data/get/base/data_sgnq_sgnqszdbfxxxb',
  data_sjgl_sgnq_sgnqszdbjjgb: '/data/get/base/data_sgnq_sgnqszdbjjgb',
  data_sjgl_sgnq_sgnqszdbzkxxb: '/data/get/base/data_sgnq_sgnqszdbzkxxb',
  data_sjgl_sgnq_sgnqxppwzlkzxxb: '/data/get/base/data_sgnq_sgnqxppwzlkzxxb',
  data_sjgl_sgnq_sjstszpjt: '/data/get/base/data_sgnq_sjstszpjt',
  data_sjgl_sgnq_skszpjtjb: '/data/get/base/data_sgnq_skszpjtjb',

  // 数据管理-核心数据-水资源分区模型对象表结构
  data_sjgl_szy_fqydkdehgxb: '/data/get/base/data_szy_fqydkdehgxb',
  data_sjgl_szy_nwnljxppwzlkzf: '/data/get/base/data_szy_nwnljxppwzlkzf',
  data_sjgl_szy_nwnljxppwzlkzj: '/data/get/base/data_szy_nwnljxppwzlkzj',
  data_sjgl_szy_qsxkjbqk: '/data/get/base/data_szy_qsxkjbqk',
  data_sjgl_szy_qsxkjbqkb: '/data/get/base/data_szy_qsxkjbqkb',
  data_sjgl_szy_qsxkjdjcqk: '/data/get/base/data_szy_qsxkjdjcqk',
  data_sjgl_szy_qsxkjdjcqkb: '/data/get/base/data_szy_qsxkjdjcqkb',
  data_sjgl_szy_sgnqdbkhzbb: '/data/get/base/data_szy_sgnqdbkhzbb',
  data_sjgl_szy_sjfqnyjqdbhgx: '/data/get/base/data_szy_sjfqnyjqdbhgx',
  data_sjgl_szy_sjfqyejqdbhgx: '/data/get/base/data_szy_sjfqyejqdbhgx',
  data_sjgl_szy_sxsjxzqhjszygkb: '/data/get/base/data_szy_sxsjxzqhjszygkb',
  data_sjgl_szy_szyfqdxskcltjb: '/data/get/base/data_szy_szyfqdxskcltjb',
  data_sjgl_szy_szyfqjbsx: '/data/get/base/data_szy_szyfqjbsx',
  data_sjgl_szy_szyfqpjjgb: '/data/get/base/data_szy_szyfqpjjgb',
  data_sjgl_szy_szyfqqsxktjb: '/data/get/base/data_szy_szyfqqsxktjb',
  data_sjgl_szy_szyfqyhbgxb: '/data/get/base/data_szy_szyfqyhbgxb',
  data_sjgl_szy_szyfqyskgxb: '/data/get/base/data_szy_szyfqyskgxb',
  data_sjgl_szy_szyfqyxzqhgxb: '/data/get/base/data_szy_szyfqyxzqhgxb',
  data_sjgl_szy_szyfzssyqkb: '/data/get/base/data_szy_szyfzssyqkb',
  data_sjgl_szy_szyjsfqjbxxb: '/data/get/base/data_szy_szyjsfqjbxxb',
  data_sjgl_szy_szyjsfqyczgxb: '/data/get/base/data_szy_szyjsfqyczgxb',
  data_sjgl_szy_szyqyczgx: '/data/get/base/data_szy_szyqyczgx',
  data_sjgl_szy_szysjfqybzgxb: '/data/get/base/data_szy_szysjfqybzgxb',
  data_sjgl_szy_szysjfqydxssydgxb: '/data/get/base/data_szy_szysjfqydxssydgxb',
  data_sjgl_szy_xzqsgnqdbkhqkb: '/data/get/base/data_szy_xzqsgnqdbkhqkb',
  data_sjgl_szy_xzqsgnqfldbkhqkb: '/data/get/base/data_szy_xzqsgnqfldbkhqkb',
  data_sjgl_szy_zyjhhbsgnqszd: '/data/get/base/data_szy_zyjhhbsgnqszd',
  // 数据管理-核心数据-水资源分区模型对象表结构
  data_sjgl_lypq_lypqjbsx: '/data/get/base/data_lypq_lypqjbsx',
  // 数据管理-核心数据-行政区划模型对象表结构
  data_sjgl_xzqh_xzqhjbxx: '/data/get/base/data_xzqh_xzqhjbxx',
  data_sjgl_xzqh_bgls: '/data/get/base/data_xzqh_bgls',
  data_sjgl_xzqh_bglsfjxx: '/data/get/base/data_xzqh_bglsfjxx',
  data_sjgl_xzqh_xzqhjszygk: '/data/get/base/data_xzqh_xzqhjszygk',
  data_sjgl_xzqh_nzwbzmjqk: '/data/get/base/data_xzqh_nzwbzmjqk',
  data_sjgl_xzqh_nyjxyyl: '/data/get/base/data_xzqh_nyjxyyl',
  data_sjgl_xzqh_nzqclqk: '/data/get/base/data_xzqh_nzqclqk',
  data_sjgl_xzqh_shjjb: '/data/get/base/data_xzqh_shjjb',
  data_sjgl_xzqh_ncnyxfp: '/data/get/base/data_xzqh_ncnyxfp',
  data_sjgl_xzqh_csnyxfp: '/data/get/base/data_xzqh_csnyxfp',
  // 数据管理-核心数据-单位模型对象表结构
  data_sjgl_dw_dwjbsx: '/data/get/base/data_dw_dwjbsx',
  data_sjgl_dw_ffrzzjbxx: '/data/get/base/data_dw_ffrzzjbxx',
  data_sjgl_dw_jgjbxx: '/data/get/base/data_dw_jgjbxx',
  data_sjgl_dw_sydwjbxx: '/data/get/base/data_dw_sydwjbxx',
  data_sjgl_dw_stjbxx: '/data/get/base/data_dw_stjbxx',
  data_sjgl_dw_qyjbxx: '/data/get/base/data_dw_qyjbxx',
  data_sjgl_dw_dwscxw: '/data/get/base/data_dw_dwscxw',
  // 数据管理-核心数据-自然人模型对象表结构
  data_sjgl_zrr_zrrjbsx: '/data/get/base/data_zrr_zrrjbsx',
  data_sjgl_zrr_hdcyry: '/data/get/base/data_zrr_hdcyry',
  // 数据管理-核心数据-闸站工程模型对象表结构
  data_sjgl_zz_zzgcjbsx: '/data/get/base/data_zz_zzgcjbsx',
  // 数据同步管理
  data_sjgl_sjgl: '/data/get/base/datasjgl',
  data_sjgl_mxgl: '/data/get/base/datamxgl',
  data_sjgl_rwgj: '/data/get/base/datarwgj',

  // 数据管理
  data_sjgl_lyjb: '/data/get/base/dataLyjb',
  data_sjgl_lyxzqh: '/data/get/base/dataLyxzqh',
  data_sjgl_hpsx: '/data/get/base/dataHpsx',
  data_sjgl_hptz: '/data/get/base/dataHptz',
  data_sjgl_hpsj: '/data/get/base/dataHpsj',
  data_sjgl_hpxx: '/data/get/base/dataHpxx',
  data_sjgl_chsx: '/data/get/base/dataChsx',
  data_sjgl_rhsx: '/data/get/base/dataRhsx',
  data_sjgl_hpswmj: '/data/get/base/dataHpswmj',
  data_sjgl_hlsx: '/data/get/base/dataHlsx',
  data_sjgl_lyqk: '/data/get/base/dataLyqk',
  data_sjgl_hcsmx: '/data/get/base/dataHcsmx',
  data_sjgl_hlhd: '/data/get/base/dataHlhd',
  data_sjgl_hdza: '/data/get/base/dataHdza',
  data_sjgl_hscb: '/data/get/base/dataHscb',
  data_sjgl_czsx: '/data/get/base/dataCzsx',
  data_sjgl_hdfh: '/data/get/base/dataHdfh',
  data_sjgl_trtzz: '/data/get/base/dataTrtzz',
  data_sjgl_hspl: '/data/get/base/dataHspl',
  data_sjgl_swll: '/data/get/base/dataSwll',
  data_sjgl_ddm: '/data/get/base/dataDdm',
  data_sjgl_khqx: '/data/get/base/dataKhqx',
  data_sjgl_jsl: '/data/get/base/dataJsl',
  data_sjgl_jxl: '/data/get/base/dataJxl',
  data_sjgl_bb: '/data/get/base/dataBb',
  // 日志管理
  system_logyh_page: 'system/get/base/systemLogyhPage',
  system_logxt_page: 'system/get/base/systemLogxtPage',

  // 一张图
  yzt_search: '/sys/get/searchResult',

  // 容器云
  rqy_yygl_page: 'rqy/get/base/yygl', // 应用管理
  rqy_fwgl_page: 'rqy/api/service', // 服务管理
  rqy_jxck_page: 'rqy/get/base/jxck', // 镜像仓库
  rqy_ccgl_page: 'rqy/get/base/ccgl' // 存储管理
}
