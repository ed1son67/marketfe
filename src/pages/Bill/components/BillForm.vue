<template>
    <Form
        ref="billForm"
        class="component-margin bill-form-container"
        :model="billFormData"
        :rules="rules"
        label-position="left"
        label-width="120"
    >
        <FormItem prop="notNull" label="供应商名字：">
            <Input v-model="billFormData.providerName" type="text" placeholder="供应商名字" />
        </FormItem>
        <FormItem prop="notNull" label="账单金额：">
            <Input v-model="billFormData.totalPrice" type="text" placeholder="账单金额" />
        </FormItem>
        <FormItem prop="notNull" label="账单内容：">
            <Input v-model="billFormData.content" type="textarea" placeholder="账单内容" />
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('billForm')">录入</Button>
        </FormItem>
    </Form>
</template>

<script>
    import { Form, FormItem, Input, Button} from 'view-design';
    export default {
        name: 'BillForm',
        components: {
            Form,
            FormItem,
            Input,
            Button,
        },
        data () {
            return {
                billFormData: {
                    providerName: '',
                    totalPrice: '',
                    content: ''
                },
                rules: {
                    notNull: [
                        { required: true, message: '该输入不能为空', trigger: 'blur' }
                    ],
                }
            };
        },
        computed: {
        },
        methods: {
            handleSubmit () {
            }
        }
    };
</script>

<style lang="scss">
    .bill-form-container {
        width: 600px;
    }
</style>
