<template>
    <Form
        ref="formInline"
        class="component-margin"
        :model="formInline"
        :rules="ruleInline"
        inline
    >
        <FormItem prop="user">
            <Input v-model="formInline.user" type="text" placeholder="用户名">
                <Icon slot="prepend" type="ios-person-outline"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input v-model="formInline.password" type="password" placeholder="密码">
                <Icon slot="prepend" type="ios-lock-outline"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">确认</Button>
        </FormItem>
    </Form>
</template>

<script>
    import { Form, FormItem, Input, Button } from 'view-design';
    export default {
        name: 'UserForm',
        components: {
            Form,
            FormItem,
            Input,
            Button,
        },
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码.', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur' }
                    ]
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

<style lang="scss"></style>
