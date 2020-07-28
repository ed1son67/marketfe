<template>
    <div class="page">
        <Divider orientation="left">所有用户信息：</Divider>
        <CustomTable
            :columns="columns"
            :data="users"
            @delete="handleDelete"
        />
        <Divider orientation="left">添加用户：</Divider>
        <UserForm />
        <Divider orientation="left">修改密码</Divider>
        <PasswordForm />
    </div>
</template>

<script>
    import CustomTable from '../../components/CustomTable';
    import UserForm from './components/UserForm';
    import PasswordForm from './components/PasswordForm';
    import types from '../../store/types';
    import { mapState } from 'vuex';
    import { Divider } from 'view-design';
    export default {
        name: 'User',
        components: {
            CustomTable,
            UserForm,
            PasswordForm,
            Divider
        },
        data () {
            return {
                columns: [{
                    title: 'ID',
                    key: 'id'
                }, {
                    title: '用户名',
                    key: 'username'
                }],
            };
        },
        computed: {
            ...mapState({
                users: 'users'
            })
        },
        created () {
            // 拉取用户数据
            this.$store.dispatch(types.GET_USERS);
        },
        methods: {
            handleDelete (e) {
                console.log(e);
            }
        }
    };
</script>

<style lang="scss">
</style>
