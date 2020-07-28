<template>
    <Modal
        :value="showModal"
        :title="title"
         @on-ok="handleOk"
    >
        <slot />
    </Modal>
</template>

<script>
    import { Modal } from 'view-design';
    export default {
        name: 'CustomModal',
        components: {
            Modal,
        },
        props: {
            showModal: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            }
        },
        data () {
            return {
            };
        },
        methods: {
            handleOk () {
                this.$emit('confirm');
            },
        }
    };
</script>

<style lang="scss"></style>
