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
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
</template>

<script>
  import { Layout, Sider, Header, Content } from 'view-design';
  import CustomMenu from './components/CustomMenu';
  export default {
    name: 'Home',
    components: {
      CustomMenu,
      Content,
      Sider,
      Header,
      Layout,
    },
    methods: {
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
  .content-container {
    position: relative;
  }
</style>
