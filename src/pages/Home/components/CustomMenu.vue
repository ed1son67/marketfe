<template>
    <Menu
            theme="dark"
            width="auto"
            :open-names="openNames"
            :active-name="activeName"
            @on-select="selectMenuItem"
    >
        <Submenu name="bill">
            <template slot="title">
                <Icon type="md-document" />
                <span>账单模块</span>
            </template>
            <MenuItem name="bill">
                账单管理
            </MenuItem>
        </Submenu>
        <Submenu name="user">
            <template slot="title">
                <Icon type="ios-people" />
                <span>用户模块</span>
            </template>
            <MenuItem name="user">
                用户管理
            </MenuItem>
        </Submenu>
        <div v-if="isAdmin">
            <Submenu name="supplier">
                <template slot="title">
                    <Icon type="ios-filing" />
                    <span>供应商模块</span>
                </template>
                <MenuItem name="supplier">
                    供应商管理
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
            openNames () {
                const route = this.$route.name.toLowerCase();
                console.log(this.$route);
                return [route];
            },
            activeName () {
                const route = this.$route.name;
                console.log(route);
                return route.toLowerCase();
            },
            ...mapGetters({
                isAdmin: 'isAdmin'
            })
        },
        methods: {
            selectMenuItem (name) {
                console.log(name);
                // 每一个item都有一个name，点击的时候根据name进行页面的切换
                this.$router.push('/' + name);
            }
        },
    };
</script>

<style lang="scss">
</style>
