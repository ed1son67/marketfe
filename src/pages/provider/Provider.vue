<template>
    <div class="page">
        <Divider orientation="left">所有供应商信息：</Divider>
        <CustomTable
            :columns="columns"
            :data="providers"
            @delete="handleDelete"
            @update="handleUpdate"
        />
        <Divider orientation="left">添加供应商：</Divider>
        <ProviderFrom />
        <Modal
                title="更新供应商信息"
                :value="showModal"
                :mask-closable="false"
                :footer-hide="true"
                @on-cancel="handleCancel"
        >
            <ModalForm
                    :id="providerID"
                    @confirm="handleConfirm"
            />
        </Modal>
    </div>
</template>

<script>
    import CustomTable from '../../components/CustomTable';
    import ProviderFrom from './components/ProviderFrom';
    import ModalForm from './components/ModalForm';
    import types from '../../store/types';
    import { mapState } from 'vuex';
    import { Divider, Modal } from 'view-design';
    export default {
        name: 'Supplier',
        components: {
            Modal,
            CustomTable,
            ModalForm,
            ProviderFrom,
            Divider
        },
        data () {
            return {
                showModal: false,
                providerID: -1,
                columns: [{
                    title: 'ID',
                    key: 'id'
                }, {
                    title: '供应商名',
                    key: 'providerName'
                }, {
                    title: '描述',
                    key: 'providerDesc'
                }],
            };
        },
        computed: {
            ...mapState({
                providers: 'providers'
            })
        },
        created () {
            // 拉供应商数据
            this.$store.dispatch(types.GET_PROVIDERS);
        },
        methods: {
            handleConfirm () {
                this.showModal = false;
            },
            handleUpdate (data) {
                this.providerID = data.id;
                this.showModal = true;
                console.log(data);
            },
            handleCancel () {
                this.showModal = false;
            },
            handleDelete (data) {
                this.$store.dispatch(types.DELETE_PROVIDER, { id: data.id });
            }
        }
    };
</script>

<style lang="scss">
</style>
