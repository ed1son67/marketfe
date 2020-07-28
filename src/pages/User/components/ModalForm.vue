<template>
    <Form
        ref="userModalForm"
        :model="formData"
        :rules="userFormRules"
    >
        <FormItem>
            <Input
                v-model="username"
                type="text"
                :disabled="true"
                placeholder="用户名"
            >
                <Icon slot="prepend" type="ios-person-outline"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input v-model="formData.password" type="password" placeholder="密码">
                <Icon slot="prepend" type="ios-lock-outline"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button class="floatRight" type="primary" @click="handleSubmit">更新</Button>
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
        props: {
          username: {
              type: String,
              default: ''
          }
        },
        data () {
            return {
                formData: {
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
                this.$refs['userModalForm'].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch(types.MODIFY_PASSWORD, this.formData);
                        this.$emit('confirm');
                    }
                });
            }
        }
    };
</script>

<style lang="scss"></style>
