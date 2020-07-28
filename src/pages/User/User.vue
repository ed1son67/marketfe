<template>
    <div class="page">
        <div>
            <div>所有用户信息：</div>
            <CustomTable
              :columns="columns"
              :data="users"
              @delete="handleDelete"
            />
        </div>
    </div>
</template>

<script>
    import CustomTable from '../../components/CustomTable';
    import types from '../../store/types';
    import { mapState } from 'vuex';
    export default {
        name: 'User',
        components: {
            CustomTable
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
