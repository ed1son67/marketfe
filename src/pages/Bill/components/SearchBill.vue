<template>
    <div>
        <Form
            ref="searchBillForm"
            class="component-margin"
            :model="billFormData"
            :rules="rules"
            inline
        >
            <FormItem prop="notNull">
                <Input v-model="billFormData.providerName" type="text" placeholder="供应商名字" />
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('searchBillForm')">搜索</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import { Form, FormItem, Input, Button} from 'view-design';
    export default {
        name: 'SearchBill',
        components: {
            Form,
            FormItem,
            Input,
            Button,
        },
        data () {
            return {
                billData: [],
                billFormData: {
                    providerName: '',
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
                console.log(this.data.providerName);
            }
        }
    };
</script>

<style lang="scss">
    .bill-form-container {
        width: 600px;
    }
</style>
