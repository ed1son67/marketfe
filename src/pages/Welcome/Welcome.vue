<template>
    <div class="welcome-page-container">
        <div class="welcome-page-content">
            <h1>欢迎使用 腾科超市账单管理系统</h1>
            <p>账单管理：增删查改账单信息</p>
            <p>用户管理：增删查改用户信息</p>
            <p>供应商管理：增删查改供应商信息</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Welcome',
        data () {
            return {
            };
        }
    };
</script>

<style lang="scss">
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
