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
    </div>
</template>

<script>
    import CustomTable from '../../components/CustomTable';
    import UserForm from './components/UserForm';
    import types from '../../store/types';
    import { mapState } from 'vuex';
    import { Divider } from 'view-design';
    export default {
        name: 'User',
        components: {
            CustomTable,
            UserForm,
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
            handleDelete (data) {
                console.log(data);
                this.$store.dispatch(types.DELETE_USER, { id: data.id });
            }
        }
    };
</script>

<style lang="scss">
</style>
