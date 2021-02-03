<template>
  <div class="" >
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" style="height: inherit;">
      <img class="d-block w-100" src="..\assets\p1.jpeg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..\assets\p1.jpeg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..\assets\p1.jpeg" alt="Third slide">
    </div>
  </div>
</div>
<div class="cardsec">
 <div class="title1">
   <h1>
     <span style="color: rgb(12, 184, 184);">O</span>ur objects
   </h1>
 </div>
<div class="card" style="width: 20rem;" id="cardst">
  <img class="card-img-top" src="..\assets\pho1.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card" style="width: 20rem;" id="cardst">
  <img class="card-img-top" src="..\assets\pho1.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card" style="width: 20rem;" id="cardst">
  <img class="card-img-top" src="..\assets\pho1.jpg" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<section>
  
</section>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";


export default {
  name: "Home",
  components: {
    
  }
};
</script>

<style lang="css" scoped>
#cardst{
  float:none;
  margin: 6px;
  margin-bottom: 60px;
  display: inline-block;
  size: 100%;
}
.cardsec{
  float: none;
  border-color: rgb(4, 3, 58);
  border-radius: 6px;
  padding:0px;
  margin: 100px;
  box-sizing: border-box;
  

  
}
.title1{
  font-size: 30px;
}
.span{
  color: rgb(12, 184, 184);
}
</style>
