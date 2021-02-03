<template>
    <div class="header">
        <div class="container">
            <div class="logo"><span style="color: rgb(12, 184, 184); font-size: 30px;">K</span>HALED</div>
            <ul class="text-right">
            <router-link to="/" tag="li">
            <a>Home</a>
            </router-link>
            <router-link to="/about" tag="li">
            <a>about</a>
            </router-link>
            <router-link to="/blog" tag="li">
            <a>Blog</a>
            </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppHeader", 
}
</script>

<style lang="scss" scoped>
.header{
    background-color: #333;
    color: #fff;
    overflow: hidden;
    height: 60px;

    .logo{
        font-size: 24px;
        padding: 10px;
        float: left;
        width: 200px;
    }
    ul{
        float:left;
        width: calc(100% - 200px);
        padding: 20px;
        margin: 0;

        li{
            padding: 30px;
            display: inline;
            font-size: 18px;

            a{
                color: #fff;
                text-decoration: none;
                padding: 10px;
                border-radius: 4px;
            }
            a:hover{
                background-color:rgb(12, 184, 184);
                color: #333;
            }
        }
    }
}

</style>

