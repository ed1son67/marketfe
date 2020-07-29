<template>
    <div>
        <Form
            ref="searchBillForm"
            class="component-margin"
            :model="billFormData"
            :rules="rules"
            inline
        >
            <FormItem prop="providerName">
                <Input v-model="billFormData.providerName" type="text" placeholder="供应商名字" />
            </FormItem>
            <FormItem>
                <Button
                    type="primary"
                    shape="circle"
                    icon="ios-search"
                    @click="handleSubmit"
                ></Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
    import { Form, FormItem, Input, Button} from 'view-design';
    import types from '../../../store/types';
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
                    providerName: [
                        { required: true, message: '该输入不能为空', trigger: 'blur' }
                    ],
                }
            };
        },
        computed: {
        },
        methods: {
            handleSubmit () {
                this.$refs['searchBillForm'].validate((res) => {
                    if (res) {
                        this.$store.dispatch(types.GET_BILLS_BY_PROVIDER_NAME, this.billFormData.providerName);
                    }
                });
            }
        }
    };
</script>

<style lang="scss">
    .bill-form-container {
        width: 600px;
    }
</style>
