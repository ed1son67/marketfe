<template>
    <Form
            ref="providerModalForm"
            class="component-margin"
            :model="providerFormData"
            :rules="rules"
            label-position="left"
            :label-width="120"
    >
        <FormItem prop="providerName" label="供应商名字：">
            <Input v-model="providerFormData.providerName" type="text" placeholder="供应商名字" />
        </FormItem>
        <FormItem prop="providerDesc" label="描述：">
            <Input v-model="providerFormData.providerDesc" type="textarea" placeholder="描述" />
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit">添加</Button>
        </FormItem>
    </Form>
</template>

<script>
    import { Form, FormItem, Input, Button } from 'view-design';
    import types from '../../../store/types';
    export default {
        name: 'ModalForm',
        components: {
            Form,
            FormItem,
            Input,
            Button,
        },
        props: {
            id: {
                type: Number,
                default: -1
            }
        },
        data () {
            return {
                providerFormData: {
                    providerDesc: '',
                    providerName: ''
                },
                rules: {
                    providerName: [
                        { required: true, message: '该输入不能为空', trigger: 'blur' }
                    ],
                    providerDesc: [
                        { required: true, message: '该输入不能为空', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            handleSubmit () {
                const { providerDesc, providerName } = this.providerFormData;
                const data = {
                    id: this.id,
                    providerDesc,
                    providerName
                };
                this.$refs['providerModalForm'].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch(types.MODIFY_PROVIDER, data);
                        this.$emit('confirm');
                    }
                });
            }
        }
    };
</script>
