//金点子管理
const goldIdeaApi = {
    List: '/tlink-cons/goldIdea/goldIdeaList',//金点子列表
    Details: '/tlink-cons//goldIdea/goldIdeaDetails',//金点子详情
    Top: '/tlink-cons/goldIdea/goldIdeaTop',//金点子置顶
    Delete: '/tlink-cons//goldIdea/goldIdeaDelete',//金点子删除
    Status: '/tlink-cons/goldIdea/goldIdeaStatus',//金点子状态修改
    Category: '/tlink-cons/goldIdea/goldIdeaCategory',//金点子类别
}

//消息推送
const NotificationApi = {
    queryAppList: '/tlink-cons/msgPush/queryAppList',//获取应用列表
    queryModelList: '/tlink-cons/msgPush/queryModelList',//应用产品及系列列表
    queryDepartmentList: '/tlink-cons/msgPush/queryDepartmentList',//获取组织架构
    trainMsgPush: '/tlink-cons/msgPush/trainMsgPush',//文章推送
    queryDepartmentEmpList: '/tlink-cons/msgPush/queryDepartmentEmpList',//查询机构下人员列表接口
    PushList: '/tlink-cons/msgPush/queryMessagePushList',//推送列表
    PushStatus: '/tlink-cons/msgPush/updateMsgPushStatus',//更新推送状态
    delTrainMsgPush: '/tlink-cons/msgPush/delTrainMsgPush',//删除文章推送记录
    queryUserPushLog: '/tlink-cons/msgPush/queryUserPushLog',//文章推送用户记录列表
    queryTrainCommentList: '/tlink-cons/article/queryTrainCommentList',//查询文章评论列表
    queryTrainAppreList: '/tlink-cons/article/queryTrainAppreList',//查询文章点赞列表
    queryTrainNotReadList: '/tlink-cons/article/queryTrainNotReadList',//查询文章未读列表
    queryTrainReadList: '/tlink-cons/article/queryTrainReadList',//查询文章已读列表接口
}

//菜单
const menuApi = {
    mobileMenu: '/tlink-cons/menu/mobileMenu',//查询移动菜单列表
    mobileMenuById: '/tlink-cons/menu/mobileMenuById',//查询移动菜单详情
    addMenu: '/tlink-cons/menu/addMenu',//新增移动菜单
    editMenu: '/tlink-cons/menu/editMenu',//编辑移动菜单
    delMenu: '/tlink-cons/menu/delMenu',//删除移动菜单
    batchDelMenu: '/tlink-cons/menu/batchDelMenu',//批量删除移动菜单
    menuSpinner: '/tlink-cons/menu/menuSpinner',//移动菜单下拉列表
}
//通讯录
const addressApi = {
    addLabel: '/tlink-cons/label/addLabel', //新增标签
    modifyLabelName: '/tlink-cons/label/modifyLabelName',//修改标签名
    delLabel: '/tlink-cons/label/delLabel', //删除标签
    labelList: '/tlink-cons/label/labelList', //标签列表
    addUserLabel: '/tlink-cons/label/addUserLabel', // 新增人员绑定标签
    delUserLabel: '/tlink-cons/label/delUserLabel', // 删除人员绑定标签
    personnelLabel: '/tlink-cons/label/personnelLabel',  //人员绑定标签查看
    fuzzySearch: '/tlink-cons/label/fuzzySearch',  //模糊搜索人员列表(可能不适用)
    labelUser: '/tlink-cons/label/labelUser',  //标签绑定人员列表
    editAddPersonnelLabel: '/tlink-cons/label/editAddPersonnelLabel',  //编辑新增人员标签
    editPersonnelLabel: '/tlink-cons/label/editPersonnelLabel',  //编辑新增标签列表
    personnelSearch: '/tlink-cons/label/personnelSearch',  //搜索人员侧边菜单
    personnelSearchList: '/tlink-cons/label/personnelSearchList',  //搜索人员列表
    orgPersonnel: '/tlink-cons/label/orgPersonnel',  //机构人员列表
    findOrgUserTree: '/tlink-cons/org/findOrgUserTree',  //查询组织机构人员下拉树
    organizationTree: '/tlink-cons/org/organizationTree',  //查询组织机构下拉树
    labelPopupList: '/tlink-cons/label/labelPopupList',  //弹窗标签菜单列表
    batchDelUserLabel: '/tlink-cons/label/batchDelUserLabel',  //批量删除人员绑定标签
}
//考试管理
const ExaminationApi = {
    importExamExcel: '/tlink-cons/exam/importExamExcel',  //导入考试题目
    queryTrainExamList: '/tlink-cons/exam/queryTrainExamList',  //查询文章考试列表
    queryExamTypeList: '/tlink-cons/exam/queryExamTypeList',  //查询考试分类列表
    deleteExam: '/tlink-cons/exam/deleteExam',  //删除考试
    addExamType: '/tlink-cons/exam/addExamType',  //新增考试分类
    previewExamInfo: '/tlink-cons/exam/previewExamInfo',  //预览试卷信息
    exportExam: '/tlink-cons/exam/exportExam',  //导出试卷信息
    bathExportExam: '/tlink-cons/exam/bathExportExam',  //批量导出试卷信息
    queryExamDetailInfo: '/tlink-cons/exam/queryExamDetailInfo',  //查询试卷详情信息
    exportCommentList: '/tlink-cons/article/exportCommentList',  //导出评论列表
    exportAppreList: '/tlink-cons/article/exportAppreList',  //导出点赞列表
    exportTrainReadList: '/tlink-cons/article/exportTrainReadList',  //导出已读列表
    exportTrainUnReadList: '/tlink-cons/article/exportTrainUnReadList',  //导出未读读列表
}

  export default{ goldIdeaApi ,NotificationApi,menuApi,addressApi,ExaminationApi}