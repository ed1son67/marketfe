<template>
    <Table
        border
        :columns="columnsComputed"
        :data="data"
    >
        <template slot="action" slot-scope="">
            <Button type="error" style="margin-right: 5px" @click="handleDelete">删除</Button>
        </template>
    </Table>
</template>

<script>
    import { Table, Button } from 'view-design';
    export default {
        name: 'CustomTable',
        components: {
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
            handleDelete (e) {
                this.$emit('delete', e);
            }
        }
    };
</script>

<style lang="scss"></style>
