<template>
    <div class="blog">
        <h1>{{  pageName }}</h1>
        <p></p>
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="posts-area">
                <blogposts v-for="post in posts" :key="post.id" 
                :views="post.views" 
                :title="post.title" 
                :content="post.content" 
                :date="post.date"
                 :auther="post.auther" 
                :catogry="post.catogry"/>

              </div>

            </div>
            <div class="col-md-4">
              <div class="sidebar">
                <sidebar/>

              </div>
            </div>

          </div>


        </div>


    </div>
</template>
<script>

import blogposts from '../components/blog/blogposts.vue';
import sidebar from '../components/global/sidebar.vue';
import data from '@/json/data.json';

export default {
     data: function(){
    return {
      pageName: "khaled",
      pageDisc: "IT IS ABOUT PAGE",
      posts: data,
    }
    
  },
    name: "blog",
    components: {
      blogposts,
      sidebar,

    }
        
}
</script>