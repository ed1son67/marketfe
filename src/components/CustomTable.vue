<template>
    <div>
        <Table
                border
                class="component-margin"
                :columns="columnsComputed"
                :data="data"
        >
            <template slot="action" slot-scope="{ row }" style="width: 200px;">
                <Button
                        type="primary"
                        style="margin-right: 5px"
                        size="small"
                        @click="handleUpdate(row)"
                >
                    更新
                </Button>
                <Button
                        type="error"
                        style="margin-right: 5px"
                        size="small"
                        @click="handleDelete(row)"
                >
                    删除
                </Button>
            </template>
        </Table>
        <CustomModal
            :show-modal="showModal"
            :title="title"
            @confirm="handleConfirm"
        >
            <p>你确定吗？</p>
        </CustomModal>
    </div>
</template>

<script>
    import { Table, Button } from 'view-design';
    import CustomModal from './CustomModal';
    export default {
        name: 'CustomTable',
        components: {
            CustomModal,
            Button,
            Table
        },
        props: {
            columns: {
                type: Array,
                required: true
            },
            data: {
                type: Array,
                required: true
            }
        },
        data () {
          return {
              title: '',
              currentData: '',
              showModal: false,
              actionColumn: {
                  title: '操作',
                  slot: 'action',
                  width: 150,
                  align: 'center'
              }
          };
        },
        computed: {
            columnsComputed () {
                return [...this.columns, this.actionColumn];
            }
        },
        methods: {
            handleConfirm () {
                this.$emit('delete', this.currentData);
            },
            handleDelete (data) {
                this.currentData = data;
                this.title = '确认删除？';
                this.showModal = true;
            },
            handleUpdate (data) {
                this.$emit('update', data);
            }
        }
    };
</script>

<style lang="scss"></style>
