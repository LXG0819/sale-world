
import { axios } from '@/utils/request'
import qs from 'qs'
import { goldIdeaApi ,NotificationApi,menuApi,addressApi,ExaminationApi} from './Documents'


var url = 'http://squantest.tcl.com.cn:81'   //   http://squantest.tcl.com.cn:81
// openQRCode2 ,querylogin,loginVerify


//获取二维码
export function openQRCode2 (parameter){
  return axios({
    url: url + '/icloud-scanCode/qrCode/openQRCode2',
    method: 'post',
    data: qs.stringify(parameter)
  })
}
//验证扫码状态
export function querylogin(parameter){
  return axios({
    url: url + '/icloud-scanCode/qrCode/login',
    method: 'post',
    data: qs.stringify(parameter)
  })
}
//验证权限登录
export function loginVerify(parameter){
  return axios({
    url: url + '/tlink-cons/login/sign',
    method: 'post',
    params: parameter
  })
}

//金点子管理
//列表
export function goldIdeaList (parameter) {
  return axios({
    url: url + '/tlink-cons/goldIdea/goldIdeaList',
    method: 'post',
    params: parameter
  })
}
//详情
export function goldIdeaDetails (parameter) {
  return axios({
    url:  url +'/tlink-cons//goldIdea/goldIdeaDetails',
    method: 'post',
    params: parameter
  })
}

//置顶
export function goldIdeaTop (parameter) {
  return axios({
    url:  url + '/tlink-cons/goldIdea/goldIdeaTop',
    method: 'post',
    params: parameter
  })
}
//删除
export function goldIdeaDelete (parameter) {
  return axios({
    url:  url + '/tlink-cons//goldIdea/goldIdeaDelete',
    method: 'post',
    params: parameter
  })
}
//状态修改
export function goldIdeaStatus (parameter) {
  return axios({
    url:  url +'/tlink-cons/goldIdea/goldIdeaStatus',
    method: 'post',
    params: parameter
  })
}
//类别
export function goldIdeaCategory (parameter) {
  return axios({
    url:  url +'/tlink-cons/goldIdea/goldIdeaCategory',
    method: 'get',
    params: parameter
  })
}


//消息推送
//获取应用列表
export function AppList (parameter) {
  return axios({
    url:  url +'/tlink-cons/msgPush/queryAppList',
    method: 'get',
    params : parameter
  })
}

//应用产品及系列列表
export function queryModelList (parameter) {
  return axios({
    url:  url +'/tlink-cons/msgPush/queryModelList',
    method: 'get',
    params: parameter
  })
}

//获取组织架构
export function queryDepartmentList (parameter) {
  return axios({
    url:  url +'/tlink-cons/msgPush/queryDepartmentList',
    method: 'get',
    params: parameter
  })
}

//文章推送
export function trainMsgPush (parameter) {
  return axios({
    url:  url +NotificationApi.trainMsgPush,
    method: 'get',
    data: parameter
  })
}

//查询机构下人员列表接口
export function queryDepartmentEmpList (parameter) {
  return axios({
    url:  url +NotificationApi.queryDepartmentEmpList,
    method: 'get',
    data: parameter
  })
}

//推送列表
export function queryMessagePushList (parameter) {
  return axios({
    url:  url +'/tlink-cons/msgPush/queryMessagePushList',
    method: 'post',
    params: parameter
  })
}

//更新推送状态
export function updateMsgPushStatus (parameter) {
  return axios({
    url:  url +NotificationApi.updateMsgPushStatus,
    method: 'get',
    data: parameter
  })
}

//删除文章推送记录
export function delTrainMsgPush (parameter) {
  return axios({
    url:  url +NotificationApi.delTrainMsgPush,
    method: 'get',
    data: parameter
  })
}

//文章推送用户记录列表
export function queryUserPushLog (parameter) {
  return axios({
    url:  url +'/tlink-cons/msgPush/queryUserPushLog',
    method: 'post',
    params: parameter
  })
}

//查询文章评论列表
export function queryTrainCommentList (parameter) {
  return axios({
    url:  url +'/tlink-cons/article/queryTrainCommentList',
    method: 'post',
    params: parameter
  })
}

//查询文章点赞列表
export function queryTrainAppreList (parameter) {
  return axios({
    url:  url +'/tlink-cons/article/queryTrainAppreList',
    method: 'post',
    params: parameter
  })
}

//查询文章未读列表
export function queryTrainNotReadList (parameter) {
  return axios({
    url:  url +'/tlink-cons/article/queryTrainNotReadList',
    method: 'post',
    params: parameter
  })
}

//查询文章已读列表接口
export function queryTrainReadList (parameter) {
  return axios({
    url:  url +'/tlink-cons/article/queryTrainReadList',
    method: 'post',
    params: parameter
  })
}

//移动菜单
//查询移动菜单列表
export function mobileMenu (parameter) {
  return axios({
    url:  url +'/tlink-cons/menu/mobileMenu',
    method: 'post',
    params: parameter
  })
}

//查询移动菜单详情
export function mobileMenuById (parameter) {
  return axios({
    url:  url +'/tlink-cons/menu/mobileMenuById',
    method: 'get',
    params: parameter
  })
}

//新增移动菜单接口
export function addMenu (parameter) {
  return axios({
    url:  url +'/tlink-cons/menu/addMenu',
    method: 'post',
    params: parameter
  })
}
//编辑移动菜单
export function editMenu (parameter) {
  return axios({
    url:  url +'/tlink-cons/menu/editMenu',
    method: 'post',
    params: parameter
  })
}
//删除移动菜单
export function delMenu (parameter) {
  return axios({
    url:  url +'/tlink-cons/menu/delMenu',
    method: 'post',
    params: parameter
  })
}
//批量删除移动菜单
export function batchDelMenu (parameter) {
  return axios({
    url:  url +'/tlink-cons/menu/batchDelMenu',
    method: 'post',
    params: parameter
  })
}

//移动菜单下拉列表
export function menuSpinner (parameter) {
  return axios({
    url:  url +'/tlink-cons/menu/menuSpinner',
    method: 'post',
    params: parameter
  })
}

//通讯录
//新增标签
export function addLabel (parameter) {
  return axios({
    url:  url +'/tlink-cons/label/addLabel',
    method: 'post',
    data: parameter
  })
}

//修改标签名
export function modifyLabelName (parameter) {
  return axios({
    url:  url +'/tlink-cons/label/modifyLabelName',
    method: 'post',
    data: parameter
  })
}

//删除标签
export function delLabel (parameter) {
  return axios({
    url:  url +'/tlink-cons/label/delLabel',
    method: 'post',
    data: parameter
  })
}

//标签列表
export function labelList (parameter) {
  return axios({
    url:  url +'/tlink-cons/label/labelList',
    method: 'get',
    params: parameter
  })
}

//新增人员绑定标签
export function addUserLabel (parameter) {
  return axios({
    url:  url +'/tlink-cons/label/addUserLabel',
    method: 'post',
    data: parameter
  })
}

//删除人员绑定标签
export function delUserLabel (parameter) {
  return axios({
    url:  url +'/tlink-cons/label/delUserLabel',
    method: 'post',
    data: parameter
  })
}

//人员绑定标签查看
export function personnelLabel (parameter) {
  return axios({
    url:  url +'/tlink-cons/label/personnelLabel',
    method: 'post',
    params: parameter
  })
}

//模糊搜索人员列表(可能不适用)
export function fuzzySearch (parameter) {
  return axios({
    url:  url +'/tlink-cons/label/fuzzySearch',
    method: 'post',
    data: parameter
  })
}

//标签绑定人员列表
export function labelUser (parameter) {
  return axios({
    url:  url +'/tlink-cons/label/labelUser',
    method: 'get',
    params: parameter
  })
}

//编辑新增人员标签
export function editAddPersonnelLabel (parameter) {
  return axios({
    url:  url +'/tlink-cons/label/editAddPersonnelLabel',
    method: 'post',
    data: parameter
  })
}

//编辑新增标签列表
export function editPersonnelLabel (parameter) {
  return axios({
    url:  url + '/tlink-cons/label/editPersonnelLabel',
    method: 'post',
    params: parameter
  })
}

//搜索人员侧边菜单
export function personnelSearch (parameter) {
  return axios({
    url:  url +'/tlink-cons/label/personnelSearch',
    method: 'post',
    data: parameter
  })
}

//搜索人员列表
export function personnelSearchList (parameter) {
  return axios({
    url:  url +'/tlink-cons/label/personnelSearchList',
    method: 'get',
    data: parameter
  })
}

//机构人员列表
export function orgPersonnel (parameter) {
  return axios({
    url:  url +'/tlink-cons/label/orgPersonnel',
    method: 'get',
    params: parameter
  })
}

//查询组织机构人员下拉树
export function findOrgUserTree (parameter) {
  return axios({
    url:  url +'/tlink-cons/org/findOrgUserTree',
    method: 'get',
    data: parameter
  })
}

//查询组织机构下拉树
export function organizationTree (parameter) {
  return axios({
    url:  url +'/tlink-cons/org/organizationTree',
    method: 'get',
    data: parameter
  })
}

//弹窗标签菜单列表
export function labelPopupList (parameter) {
  return axios({
    url:  url +'/tlink-cons/label/labelPopupList',
    method: 'get',
    data: parameter
  })
}

//批量删除人员绑定标签
export function batchDelUserLabel (parameter) {
  return axios({
    url:  url + '/tlink-cons/label/batchDelUserLabel',
    method: 'post',
    data: parameter
  })
}

//考试管理
//导入考试题目
export function importExamExcel (parameter) {
  return axios({
    url:  url +'/tlink-cons/exam/importExamExcel',
    method: 'post',
    data: parameter
  })
}

//查询文章考试列表
export function queryTrainExamList (parameter) {
  return axios({
    url:  url +'/tlink-cons/exam/queryTrainExamList',
    method: 'post',
    params: parameter
  })
}

//查询考试分类列表
export function queryExamTypeList (parameter) {
  return axios({
    url:  url +'/tlink-cons/exam/queryExamTypeList',
    method: 'post',
    data: parameter
  })
}

//删除考试
export function deleteExam (parameter) {
  return axios({
    url:  url +'/tlink-cons/exam/deleteExam',
    method: 'post',
    data: parameter
  })
}

//新增考试分类
export function addExamType (parameter) {
  return axios({
    url:  url +'/tlink-cons/exam/addExamType',
    method: 'post',
    data: parameter
  })
}

//预览试卷信息
export function previewExamInfo (parameter) {
  return axios({
    url:  url +'/tlink-cons/exam/previewExamInfo',
    method: 'post',
    data: parameter
  })
}

//导出试卷信息
export function exportExam (parameter) {
  return axios({
    url:  url +'/tlink-cons/exam/exportExam',
    method: 'post',
    data: parameter
  })
}

//批量导出试卷信息
export function bathExportExam (parameter) {
  return axios({
    url:  url +'/tlink-cons/exam/bathExportExam',
    method: 'post',
    data: parameter
  })
}

//查询试卷详情信息
export function queryExamDetailInfo (parameter) {
  return axios({
    url:  url +'/tlink-cons/exam/queryExamDetailInfo',
    method: 'post',
    data: parameter
  })
}

//导出评论列表
export function exportCommentList  (parameter) {
  return axios({
    url:  url +'/tlink-cons/article/exportCommentList',
    method: 'post',
    data: parameter
  })
}

//导出点赞列表
export function exportAppreList  (parameter) {
  return axios({
    url:  url +'/tlink-cons/article/exportAppreList',
    method: 'post',
    data: parameter
  })
}

//导出已读列表
export function exportTrainReadList  (parameter) {
  return axios({
    url:  url +'/tlink-cons/article/exportTrainReadList',
    method: 'post',
    data: parameter
  })
}

//导出未读读列表
export function exportTrainUnReadList  (parameter) {
  return axios({
    url:  url +'/tlink-cons/article/exportTrainUnReadList',
    method: 'post',
    data: parameter
  })
}
