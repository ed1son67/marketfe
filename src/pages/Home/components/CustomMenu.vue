<template>
    <Menu
            theme="dark"
            width="auto"
            @on-select="selectMenuItem"
    >
        <Submenu name="bill">
            <template slot="title">
                <Icon type="md-document" />
                <span>账单管理</span>
            </template>
            <MenuItem name="1">
                查询账单
            </MenuItem>
            <MenuItem name="2">
                查询账单
            </MenuItem>
        </Submenu>
        <Submenu name="user">
            <template slot="title">
                <Icon type="ios-people" />
                <span>用户管理</span>
            </template>
            <MenuItem name="user">
                用户管理
            </MenuItem>
            <MenuItem name="4">
                查询账单
            </MenuItem>
        </Submenu>
        <div v-if="isAdmin">
            <Submenu name="supplier">
                <template slot="title">
                    <Icon type="ios-filing" />
                    <span>供应商管理</span>
                </template>
                <MenuItem name="5">
                    查询账单
                </MenuItem>
                <MenuItem name="6">
                    查询账单
                </MenuItem>
            </Submenu>
        </div>
    </Menu>
</template>

<script>
    import { Menu, MenuItem, Submenu} from 'view-design';
    import { mapGetters } from 'vuex';
    export default {
        name: 'CustomMenu',
        components: {
            Submenu,
            Menu,
            MenuItem,
        },
        data () {
            return {
            };
        },
        computed: {
            ...mapGetters({
                isAdmin: 'isAdmin'
            })
        },
        methods: {
            selectMenuItem () {
                console.log(name);
                // 每一个item都有一个name，点击的时候根据name进行页面的切换
                this.$router.push(name);
                console.log(this.isAdmin);
            }
        },
    };
</script>

<style lang="scss">
</style>
