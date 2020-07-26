<template>
    <Layout class="home-container">
      <Header class="home-header" style="height: 70px;">
        <span>腾科超市账单管理系统</span>
      </Header>
      <Layout class="home-main-container">
        <Sider class="home-sider">
          <Menu
            class="home-menu"
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
              <MenuItem name="3">
                修改密码
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
        </Sider>
        <Layout>
          <Content class="content-container">
            <div class="welcome-page-container">
              <div class="welcome-page-content">
                <h1>欢迎使用 腾科超市账单管理系统</h1>
                <p>账单管理：增删查改账单信息</p>
                <p>用户管理：增删查改用户信息</p>
                <p>供应商管理：增删查改供应商信息</p>
              </div>
            </div>
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
</template>

<script>
  import { Layout, Sider, Header, Content, Menu, MenuItem, Submenu } from 'view-design';
  import { mapGetters } from 'vuex';
  export default {
    name: 'Home',
    components: {
      Submenu,
      Menu,
      Content,
      Sider,
      Header,
      Layout,
      MenuItem,
    },
    computed: {
      ...mapGetters({
        isAdmin: 'isAdmin'
      })
    },
    methods: {
      selectMenuItem (name) {
        console.log(name);
        // 每一个item都有一个name，点击的时候根据name进行页面的切换
        this.$router.push(name);
        console.log(this.isAdmin);
      }
    },
  };
</script>

<style lang="scss">
  .home-container {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
    height: 100vh;
  }
  .home-header {
    font-size: 18px;
    line-height: 70px !important;
    padding: 0 20px !important;
    color: #fff;
  }
  .home-sider {
    width: 240px;
  }
  .welcome-page-container {
    height: 100%;
    width: auto;
    position: relative;
    background: url(../../assets/usedraw.png) no-repeat 300px 50%;

  }
  .welcome-page-content {
    position: absolute;
    left: 920px;
    top: 50%;
    width: 1000px;
    transform: translateY(-50%);
    p {
      font-size: 16px;
      color: #999;
      letter-spacing: 2px;
      line-height: 2em;
    }
    h1 {
      font-size: 60px;
      color: #3c71c4;
      position: relative;
      margin-bottom: 54px;
      &:after, &:before {
        content: "";
        position: absolute;
        height: 26px;
        width: 26px;
        background-color: #3c71c4;
        border-radius: 50%;
        top: 50%;
        margin-top: -10px;
      }
      &:before {
        left: -85px;
      }
      &:after {
        right: 50px;
      }
    }
  }
</style>
