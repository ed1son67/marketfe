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
        <Modal
            :value="showModal"
            :title="title"
            :mask-closable="false"
            @on-ok="handleConfirm"
            @on-cancel="handleCancel"
        >
            <p>确认删除？</p>
        </Modal>
    </div>
</template>

<script>
    import { Table, Button, Modal} from 'view-design';
    export default {
        name: 'CustomTable',
        components: {
            Button,
            Modal,
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
              currentData: null,
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
            handleCancel () {
                this.showModal = false;
            },
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
