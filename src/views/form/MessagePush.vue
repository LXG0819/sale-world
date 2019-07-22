<template>
    <div class="MessagePush">
        <div class="Message_addPush">
            <div @click="MessageaddPush(1)" :class="[Messageadddata==1?'addPush ':'']">新建推送</div>
            <div @click="MessageaddPush(2)" :class="[Messageadddata==2?'addPush':'']">已推送</div>
        </div>
        <div class="Message_add" v-show="Messageadddata==1">
            <a-form :form="form" @submit="MessageAddtive">
                <a-form-item label="选择推送应用" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-input  placeholder="请选择" v-decorator="['note',{rules: [{ required: true, message: 'Please input your note!' }]}]"/>
                </a-form-item>
                <a-form-item label="销傲天下" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-cascader :options="options" @change="onChange" placeholder="请选择" changeOnSelect />
                </a-form-item>
                <a-form-item label="销傲天下" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-select mode="multiple" :showArrow="true"  style="width: 100%" @change="handleChange" placeholder="请选择">
                        <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">{{(i + 9).toString(36) + i}}</a-select-option>
                    </a-select>
                </a-form-item>
                <select-material></select-material>
                <a-form-item label="关联试卷" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-radio-group v-decorator="['SouSeeting']" name="SouSeeting">
                        <a-radio value="b">关联试卷</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item label="发送设置" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                    <a-radio-group v-decorator="['ToDoMessage']" name="ToDoMessage">
                        <a-radio value="a">发送待办消息</a-radio>
                        <a-radio value="b">不发送待办消息</a-radio>
                    </a-radio-group>
                </a-form-item>

                <a-form-item :wrapper-col="{ span: 8, offset: 15 }" class="footer_item">
                    <div class="footer_button">
                        <a-button type="primary">推送</a-button>
                        <a-button type="primary">预览</a-button>
                    </div>
                </a-form-item>
            </a-form>
        </div>
        <message-section class="Message_Pushtion" v-show="Messageadddata==2"></message-section>
    </div>
</template>

<style lang="less" scoped>
.fl{float: left;}
.fr{float: right;}
.Message_addPush{
    min-width:960px;
    overflow: hidden;
    div{
        width: 120px;
        float: left;
        margin-right: 6px;
        height: 40px;
        line-height: 40px;
        background: rgba(0,0,0,0.02);
        border: 1px solid rgba(0,0,0,0.15);
        font-size: 14px;
        text-align: center;
        color: rgba(0,0,0,0.65);
        box-shadow: 0 -2px 4px 0 rgba(0,0,0,0.09);
        &.addPush{
            border: 1px solid #fff;
            background: #fff;
            font-size: 14px;
            color: #3A8EDC;
        }
    }

}
.Message_add{
    padding-top: 24px;
    min-width: 960px;
    background: #fff;
    .footer_item{
        border-top: #e8e8e8 solid 1px;
        .footer_button{
            overflow: hidden;
            width: 100%;
            padding: 20px 59px;
            button{
                background-image: linear-gradient(90deg, #7972F5 0%, #46C7FA 100%);
                border-radius: 4px;
                color: #fff;  
                font-size: 16px;
                width: 104px;
                height: 40px;
                line-height: 40px;
                margin-left: 22px;
            }
        }
    }
    
}

</style>


<script>

import selectMaterial from './MessagePush/selectMaterial'
import messageSection from './MessagePush/messageSection'






export default {
    components:{
        selectMaterial,
        messageSection
    },
    data(){
       return{
            Messageadddata:1,
            formLayout: 'horizontal',
            form: this.$form.createForm(this),//表单
            options: [{value: 'zhejiang',label: 'Zhejiang',
                children: [{value: 'hangzhou',label: 'Hangzhou',
                    children: [{value: 'xihu',label: 'West Lake',
                    }],
                }],
                }, {
                value: 'jiangsu',label: 'Jiangsu',
                    children: [{value: 'nanjing',label: 'Nanjing',
                        children: [{value: 'zhonghuamen',label: 'Zhong Hua Men',
                        }],
                    }],
            }]//联级选择
       }
    },
    methods:{
        //推送
        MessageaddPush(index){
            this.Messageadddata=index
        },
        //表单
        MessageAddtive (e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                console.log('Received values of form: ', values);
                }
            });
            },
        handleSelectChange (value) {
            console.log(value);
            this.form.setFieldsValue({
                note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
            });
        },
        handleChange(value) {
            console.log(`selected ${value}`);
        },
        //联级选择
        onChange(value){
            console.log(value);
        }
    }
}
</script>

