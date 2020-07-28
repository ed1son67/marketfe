<template>
    <CustomTable
        :columns="columns"
        :data="billsData"
        @delete="handleDelete"
    />
</template>

<script>
    import CustomTable from '../../../components/CustomTable';
    import { mapState } from 'vuex';
    import types from '../../../store/types';
    export default {
        name: 'BillTable',
        components: {
            CustomTable
        },
        props: {
            billsData: {
                type: Array,
                required: true
            }
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
                    title: '账单内容',
                    key: 'content'
                }, {
                    title: '账单金额',
                    key: 'totalPrice'
                }, {
                    title: '签署人',
                    key: 'signature'
                }],
            };
        },
        computed: {
            ...mapState({
                bills: 'bills'
            })
        },
        methods: {
            handleDelete (data) {
                this.$store.dispatch(types.DELETE_BILL, {id: data.id});
            }
        }
    };
</script>

<style lang="scss">
</style>
