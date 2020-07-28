<template>
    <Form
            ref="billForm"
            class="component-margin bill-form-container"
            :model="billFormData"
            :rules="rules"
            label-position="left"
            :label-width="120"
    >
        <FormItem prop="providerName" label="供应商名字：">
            <Input v-model="billFormData.providerName" type="text" placeholder="供应商名字" />
        </FormItem>
        <FormItem prop="totalPrice" label="账单金额：">
            <Input v-model="billFormData.totalPrice" type="text" placeholder="账单金额" />
        </FormItem>
        <FormItem prop="content" label="账单内容：">
            <Input v-model="billFormData.content" type="textarea" placeholder="账单内容" />
        </FormItem>
        <FormItem prop="signature" label="签署人：">
            <Input v-model="billFormData.signature" type="textarea" placeholder="账单内容" />
        </FormItem>
        <FormItem>
            <Button type="primary" class="floatRight" @click="handleSubmit('billForm')">录入</Button>
        </FormItem>
    </Form>
</template>

<script>
    import { Form, FormItem, Input, Button} from 'view-design';
    import types from '../../../store/types';
    export default {
        name: 'ModalForm',
        components: {
            Form,
            FormItem,
            Input,
            Button,
        },
        data () {
            return {
                billFormData: {
                    signature: '',
                    providerName: '',
                    totalPrice: '',
                    content: ''
                },
                rules: {
                    providerName: [
                        { required: true, message: '该输入不能为空', trigger: 'blur' }
                    ],
                    signature: [
                        { required: true, message: '该输入不能为空', trigger: 'blur' }
                    ],
                    totalPrice: [
                        { required: true, message: '该输入不能为空', trigger: 'blur' }
                    ],
                    content: [
                        { required: true, message: '该输入不能为空', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            handleSubmit () {
                const { signature, providerName, totalPrice, content } = this.billFormData;
                const data = {
                    createdDate: new Date(),
                    signature,
                    providerName,
                    totalPrice,
                    content,
                };
                this.$refs['billForm'].validate((res) => {
                    if (res) {
                        this.$store.dispatch(types.MODIFY_BILL, data);
                        this.$emit('confirm');
                    }
                });
            }
        },
    };
</script>

<style lang="scss">
    .bill-form-container {
        width: auto;
    }
</style>
