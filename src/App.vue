<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  html,
  body {
    margin: 0;
    padding: 0;
    height: auto;
    width: 100%;
    color: #333;
  }

  #app {
    height: auto;
    width: 100%;
  }
  button {
    outline: none;
    background: transparent;
    cursor: pointer;
    border: none;
  }
  i {
    font-style: normal;
  }
  .page {
    padding: 20px;
  }
  .component-margin {
    margin: 50px 0;
  }
  .floatRight {
    float: right;
  }
</style>
