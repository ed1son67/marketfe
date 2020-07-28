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
            v-model="showModal"
            :title="title"
            @on-ok="handleOk"
        >
            <p>你确定吗？</p>
        </Modal>
    </div>
</template>

<script>
    import { Table, Button, Modal } from 'view-design';
    export default {
        name: 'CustomTable',
        components: {
            Modal,
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
            handleOk () {
                this.$emit('delete', this.currentData);
            },
            handleDelete (data) {
                this.currentData = data;
                this.title = '确认删除？';
                this.showModal = true;
            },
            handleUpdate (e) {
                this.$emit('update', e);
            }
        }
    };
</script>

<style lang="scss"></style>
