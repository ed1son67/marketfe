<template>
    <div class="page">
        <Divider orientation="left">查询账单信息：</Divider>
        <SearchForm />
        <BillTable
                :bills-data="bills"
        />
        <Divider orientation="left">录入账单：</Divider>
        <BillForm />
    </div>
</template>

<script>
    import SearchForm from './components/SearchBill';
    import BillTable from './components/BillTable';
    import BillForm from './components/BillForm';
    import types from '../../store/types';
    import { mapState } from 'vuex';
    import { Divider } from 'view-design';
    export default {
        name: 'User',
        components: {
            BillForm,
            SearchForm,
            Divider,
            BillTable
        },
        data () {
            return {
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
