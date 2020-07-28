<template>
    <Form
        ref="userForm"
        class="component-margin"
        :model="userForm"
        :rules="userFormRules"
        inline
    >
        <FormItem prop="username">
            <Input v-model="userForm.username" type="text" placeholder="用户名">
                <Icon slot="prepend" type="ios-person-outline"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input v-model="userForm.password" type="password" placeholder="密码">
                <Icon slot="prepend" type="ios-lock-outline"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('userForm')">确认</Button>
        </FormItem>
    </Form>
</template>

<script>
    import { Form, FormItem, Input, Button } from 'view-design';
    import types from '../../../store/types';
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
                userForm: {
                    username: '',
                    password: ''
                },
                userFormRules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            handleSubmit () {
                this.$refs['userForm'].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch(types.ADD_USER, this.userForm);
                    }
                });
            }
        }
    };
</script>

<style lang="scss"></style>
