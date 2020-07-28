<template>
    <Layout class="home-container">
      <Header class="home-header" style="height: 70px;">
        <span>腾科超市账单管理系统</span>
      </Header>
      <Layout class="home-main-container">
        <Sider class="home-sider">
          <CustomMenu />
        </Sider>
        <Layout>
          <Content class="content-container">
<!--            <div class="welcome-page-container">-->
<!--              <div class="welcome-page-content">-->
<!--                <h1>欢迎使用 腾科超市账单管理系统</h1>-->
<!--                <p>账单管理：增删查改账单信息</p>-->
<!--                <p>用户管理：增删查改用户信息</p>-->
<!--                <p>供应商管理：增删查改供应商信息</p>-->
<!--              </div>-->
<!--            </div>-->
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
</template>

<script>
  import { Layout, Sider, Header, Content } from 'view-design';
  import CustomMenu from './components/CustomMenu';
  import { mapGetters } from 'vuex';
  export default {
    name: 'Home',
    components: {
        CustomMenu,
      Content,
      Sider,
      Header,
      Layout,
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
</style>
