<template>
    <div class="page">
        <Divider orientation="left">查询账单信息：</Divider>
        <SearchForm />
        <BillTable
            :bills-data="bills"
            @update="handleUpdate"
        />
        <Divider orientation="left">录入账单：</Divider>
        <BillForm />
        <Modal
            title="更新账单信息"
            :value="showModal"
            :mask-closable="false"
            :footer-hide="true"
            @on-cancel="handleCancel"
        >
            <ModalForm
                @confirm="handleConfirm"
            />
        </Modal>
    </div>
</template>

<script>
    import SearchForm from './components/SearchBill';
    import BillTable from './components/BillTable';
    import BillForm from './components/BillForm';
    import types from '../../store/types';
    import { mapState } from 'vuex';
    import { Divider, Modal } from 'view-design';
    import ModalForm from './components/ModalForm';

    export default {
        name: 'User',
        components: {
            Modal,
            ModalForm,
            BillForm,
            SearchForm,
            Divider,
            BillTable
        },
        data () {
            return {
                showModal: false,
                billData: null
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
            handleUpdate (data) {
                this.showModal = true;
                this.billData = data;
                console.log(data);
            },
            handleDelete (e) {
                console.log(e);
            },
            handleConfirm () {
                this.showModal = false;
            },
            handleCancel () {
                this.showModal = false;
            },
        }
    };
</script>

<style lang="scss">
</style>
