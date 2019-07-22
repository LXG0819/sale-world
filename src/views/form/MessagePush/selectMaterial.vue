<template>
    <div class="selectMaterial">
         <a-form :form="form" @submit="selectMaterialSubmit">
            <a-form-item label="选择素材" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
                <div class="Material_library fl" @click="Materiallibraryclick">
                    <a-icon type="plus" />
                    <span>从素材库选择素材</span>
                </div>
                <div class="add_Material fl" @click="addMaterialclick">
                    <a-icon type="plus" />
                    <span>新建素材</span>
                </div>
            </a-form-item>
            
        </a-form>
        <div>
            <a-modal v-model="Materiallibrary" title="选择素材" onOk="handleOk">
            <template slot="footer">
                <a-button key="back" @click="handleCancel">确定</a-button>
                <a-button key="submit" type="新建素材" :loading="loading" @click="handleOk">取消</a-button>
            </template>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            </a-modal>
            <a-modal v-model="addMaterial" title="Title" onOk="handleOk">
            <template slot="footer">
                <a-button key="back" @click="handleCancel">确定</a-button>
                <a-button key="submit" type="primary" :loading="loading" @click="handleOk">取消</a-button>
            </template>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            </a-modal>
        </div>
    </div>
</template>

<style lang="less" scoped>
.fl{float: left;}
.fr{float: right;}

.Material_library,.add_Material{
    background: rgba(0,0,0,0.02);
    border: 1px solid rgba(0,0,0,0.15);
    text-align: center;
    position: relative;
    border-radius: 4px;
    width: 144px;
    height: 132px;
    margin-left: 18px;
    .anticon{
        position: absolute;
        top: 30%;
        left: 43%;
        font-size: 24px;
        margin:0 auto;
        height: 24px;
        color: #bfbfbf;
    }
    span{
        font-size: 14px;
        position: absolute;
        bottom: 30%;
        left: 10%;
        color: #3A8EDC;
        line-height: 22px;
    }
}
.add_Material span{
    left: 32%;
}

</style>



<script>
export default {
    data(){
        return{
            loading: false,
            Materiallibrary: false,
            addMaterial: false,


        }
    },
    methods: {
        //素材库
        Materiallibraryclick() {
            this.addMaterial = true;

        },
        //新建素材
        addMaterialclick() {
            this.addMaterial = true;

        },
        //取消
        handleOk(e) {
        this.loading = true;
            setTimeout(() => {
                this.Materiallibrary = false;
                this.addMaterial = false;
                this.loading = false;
            }, 3000);
        },
        //确定
        handleCancel(e) {
            this.Materiallibrary = false;
            this.addMaterial = false;
           
        },
        //表单
        selectMaterialSubmit(e){
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                console.log('Received values of form: ', values);
                }
            });
        },
    }
}
</script>


