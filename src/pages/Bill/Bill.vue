<template>
    <div class="page">
        <Divider orientation="left">所有账单信息：</Divider>
        <CustomTable
                :columns="columns"
                :data="bills"
                @delete="handleDelete"
        />
        <Divider orientation="left">录入账单：</Divider>
    </div>
</template>

<script>
    import CustomTable from '../../components/CustomTable';
    import types from '../../store/types';
    import { mapState } from 'vuex';
    import { Divider } from 'view-design';
    export default {
        name: 'User',
        components: {
            CustomTable,
            Divider
        },
        data () {
            return {
                columns: [{
                    title: 'ID',
                    key: 'id'
                }, {
                    title: '创建时间',
                    key: 'createdDate'
                }, {
                    title: '供应商名',
                    key: 'providerName'
                }, {
                    title: '操作员',
                    key: 'signature'
                }, {
                    title: '账单内容',
                    key: 'content'
                }, {
                    title: '账单金额',
                    key: 'totalPrice'
                }],
            };
        },
        computed: {
            ...mapState({
                bills: 'bills'
            })
        },
        created () {
            // 拉取账单数据
            this.$store.dispatch(types.GET_BILLS);
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
