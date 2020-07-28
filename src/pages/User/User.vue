<template>
    <div class="page">
        <Divider orientation="left">所有用户信息：</Divider>
        <CustomTable
            :columns="columns"
            :data="users"
            @delete="handleDelete"
            @update="handleUpdate"
        />
        <Divider orientation="left">添加用户：</Divider>
        <UserForm />
        <Modal
            title="更新用户信息"
            :value="showModal"
            :mask-closable="false"
            :footer-hide="true"
            @on-ok="handleConfirm"
            @on-cancel="handleCancel"
        >
            <ModalForm
                :username="username"
                @confirm="handleConfirm"
            />
        </Modal>
    </div>
</template>

<script>
    import CustomTable from '../../components/CustomTable';
    import UserForm from './components/UserForm';
    import ModalForm from './components/ModalForm';
    import types from '../../store/types';
    import { mapState } from 'vuex';
    import { Divider, Modal } from 'view-design';
    export default {
        name: 'User',
        components: {
            Modal,
            CustomTable,
            ModalForm,
            UserForm,
            Divider
        },
        data () {
            return {
                username: '',
                showModal: false,
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
            handleCancel () {
                this.showModal = false;
            },
            handleConfirm () {
                this.showModal = false;
            },
            handleUpdate (data) {
                this.username = data.username;
                this.showModal = true;
                console.log(data);
            },
            handleDelete (data) {
                this.$store.dispatch(types.DELETE_USER, { id: data.id });
            }
        }
    };
</script>

<style lang="scss">
</style>
