<template>
<div class="Newadd_source">
    
  <a-form :form="form" @submit="SourceForm"  >
    <a-form-item  label="关联试卷"  :labelCol="{ md: {span: 3}, sm: {span: 3} }">
      <a-radio-group v-decorator="['SouExamination']" name="SouExamination" @change="onSouExamination">
        <a-radio :value="9">不关联</a-radio>
        <a-radio :value="1">关联试卷</a-radio>
        <a-button type="primary" @click="() => setModal1Visible(true)" class="Examination_button fr" :style="{display: ActionDisaplay}">
            选择试卷
        </a-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="可靠次数" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }" :style="{display: ActionDisaplay}">
      <a-input name="SouReliableNumber"
        v-decorator="[ 'SouReliableNumber',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入"
      />
    </a-form-item>
    <a-form-item label="及格分数" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }" :style="{display: ActionDisaplay}">
      <a-input name="SouPassScore"
        v-decorator="[ 'SouPassScore',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入"
      />
    </a-form-item>
    <a-form-item label="显示分数" :labelCol="{md: {span:3}, sm: {span: 3}}"
            :wrapperCol="{md: {span: 10}, sm: {span: 11} }" :style="{display: ActionDisaplay}">
      <a-input name="SouShowmark"
        v-decorator="[ 'SouShowmark',{rules: [{ required: true, message: 'Please input your note!' }] } ]"
        placeholder="请输入"
      />
    </a-form-item>
    <div id="components-modal-demo-position">
        <a-modal
        title="选择试卷"
        width='1026px'
        :visible="modal1Visible"
        @ok="() => setModal1Visible(false)"
        @cancel="() => setModal1Visible(false)"
        >
            <a-row>
                <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }" >
                    <div class="from_status"  >
                    <span class="from_nameSpan">试卷类型:</span>
                    <a-dropdown>
                        <a-menu slot="overlay" @click="PaperTypeClick">
                        <a-menu-item key="1"><a-icon type="user" />1st menu item</a-menu-item>
                        <a-menu-item key="2"><a-icon type="user" />2nd menu item</a-menu-item>
                        <a-menu-item key="3"><a-icon type="user" />3rd item</a-menu-item>
                        </a-menu>
                        <a-button style="margin-left: 8px" >
                        <span> 请选择 </span><a-icon type="down" class="anticon" />
                        </a-button>
                    </a-dropdown>
                    </div>
                </a-col>
                <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }" >
                    <div class="from_status"  >
                    <span class="from_nameSpan">试卷名称:</span>
                    <a-dropdown>
                        <a-menu slot="overlay" @click="PaperNameClick">
                        <a-menu-item key="1"><a-icon type="user" />1st menu item</a-menu-item>
                        <a-menu-item key="2"><a-icon type="user" />2nd menu item</a-menu-item>
                        <a-menu-item key="3"><a-icon type="user" />3rd item</a-menu-item>
                        </a-menu>
                        <a-button style="margin-left: 8px" >
                        <span> 请选择 </span><a-icon type="down" class="anticon" />
                        </a-button>
                    </a-dropdown>
                    </div>
                </a-col>
                <a-date-picker
                    :disabledDate="disabledEndDate"
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder="End"
                    v-model="endValue"
                    :open="endOpen"
                    @openChange="handleEndOpenChange"
                    />
                <a-col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }" >
                    
                    <a-button type="primary fl" class="fome_seach" >搜索</a-button>
                     <a-button type="primary fl" class="fome_Reset" >重置</a-button>
                </a-col>
            </a-row>
        </a-modal>
    </div>
  </a-form>
</div>
</template>

<style lang="less" scoped>
.fl{float: left;}
.fr{float: right;}
.Examination_button{
    background-image: linear-gradient(-90deg, #7972F5 0%, #46C7FA 100%);
    border-radius: 4px;
    height: 32px;
    margin-top: 3px;
    line-height: 32px;
    width: 102px;
    font-size: 14px;
    color: #FFFFFF;
}
.model_botton{
    width: 100%;
    height: 100%;
    position:absolute;
    background: rgba(0,0,0,0.18);
    z-index: 99;
}
#components-modal-demo-position{
    width: 1026px;
}
</style>



<script>



export default {
    data(){
        return{
            formLayout: 'horizontal',
            form: this.$form.createForm(this),
            ActionDisaplay:'none',//是否关联考试
            modal1Visible: false,
            startValue: null,
            endValue: null,
            endOpen: false,
        }
    },
    watch: {
        endValue(val) {
        console.log('endValue', val)
        }
    },
    methods:{
            //表单
        SourceForm (e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                console.log('Received values of form: ', values);
                }
            });
        },
        //是否关联考试
        onSouExamination (e) {
            console.log('radio checked', e.target.value)
            if(e.target.value==1){
                this.ActionDisaplay='block'
            }else if(e.target.value==9){
                this.ActionDisaplay='none'
            }
        },
        //选择试卷
        showConfirm() {
            
        },
        //状态下拉框
        PaperTypeClick(e) {
           console.log('click', e);
        },
        PaperNameClick(e){
            console.log('click', e);
        },
        //
        setModal1Visible(modal1Visible) {
            this.modal1Visible = modal1Visible;
        },
        //发布时间
        disabledEndDate (endValue) {
            const startValue = this.startValue;
            if (!endValue || !startValue) {
                return false;
            }
            return startValue.valueOf() >= endValue.valueOf();
        },
        handleEndOpenChange (open) {
            this.endOpen = open;
        },
    }
}
</script>


