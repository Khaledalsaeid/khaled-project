<template>
    <div class="post-box">
        <span class="views">{{  views  }}</span>
        <h3 class="title">{{  title  }} </h3>
        <span class="date">{{  date }}</span>
        <p class="content">{{  content  }}</p>
        <div class="row">
            <div class="col-sm-6">
                <span class="auther">{{auther | uppercase}}</span>

            </div>
            <div class="col-sm-6 text-right">
                <span class="catogry">{{catogry}}</span>

            </div>
        </div>
        
    </div>
</template>


<script>
export default {
    props:[
        "views",
        "title",
        "date",
        "content",
        "catogry",
        "auther",
    ],
    name: "post",


}
</script>

<style lang="scss" scoped>
.post-box{
    padding: 15px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    margin-bottom: 30px;
    .views{
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: dimgray;
    border-radius: 4px;
    color: ghostwhite;
    padding: 1px 5px;
    text-align: center;
    font-weight: bold;
     }
    .title{
        font-weight: bold;


    }
    .date{
        display: block;
        padding: 0 0 5px;
        color: #888;
        font-size: 11px;
    }
    .auther{
        background-color: gray;
        border-radius: 3px;
        padding: 4px;
    }
    .catogry{
        background-color: gray;
        border-radius: 3px;
        padding: 4px;
    }
    

}

</style>