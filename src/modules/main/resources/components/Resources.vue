<template>
  <div class="resources-home">
    <div class="resources-header">
    </div>
    <div class="resources-content">
      <h4>Resources</h4>
      <ul>
        <li><h5>We got the images from the website of the respective games.</h5></li>
        <li><h5>We decorated it with Google images.</h5></li>
        <li><h5>Google Pictures</h5></li>
      </ul>
    </div>
<!--    <div class="resources-wrapper">-->
<!--      <div class="resources-gallery">-->
<!--        <ul>-->
<!--          <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/9.png"></li>-->
<!--          <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/2.png"></li>-->
<!--          <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/3.png"></li>-->
<!--          <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/1.png"></li>-->
<!--          <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/4.png"></li>-->
<!--          <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/5.png"></li>-->
<!--          <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/7.png"></li>-->
<!--          <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53819/6.png"></li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<style scoped>
.resources-home  {
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.resources-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin: 0 50px 40px 50px;
  width: 800px;
  min-height:700px;
  box-shadow: 0 0 10px 2px #cecece;
  border-radius: 15px;
  background-color: white;
  background-blend-mode: screen;
  color: #191919;
  font-family: serif;
}

.resources-wrapper {
  width: 40%;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

div.resources-gallery {
  margin-top: 30px;
}

div.resources-gallery ul {
  list-style-type: none;
  margin-left: 35px;
}

/* animation */
div.resources-gallery ul li, div.resources-gallery li img {
  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  -o-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
}

div.resources-gallery ul li {
  position: relative;
  float: left;
  width: 130px;
  height: 130px;
  margin: 5px;
  padding: 5px;
  z-index: 0;
}

/* Make sure z-index is higher on hover */
/* Ensure that hover image overlapped the others */
div.resources-gallery ul li:hover {
  z-index: 5;
}

/* Image is position nicely under li */
div.resources-gallery ul li img {
  position: absolute;
  left: 0;
  top: 0;
  border: 1px solid #dddddd;
  padding: 5px;
  width: 130px;
  height: 130px;
  background: #f0f0f0;
}

div.resources-gallery ul li img:hover {
  width: 200px;
  height: 200px;
  margin-top: -130px;
  margin-left: -130px;
  top: 65%;
  left: 65%;
}

p.attribution {
  font-family: 'Consolas';
  color: #000;
  clear: both;
  text-align: center;
  line-height: 25px;
  padding-top: 30px;
}

p.attribution a {
  color: #4c8d7c;
}

/* Responsive hack */
@media only screen and (min-width: 499px) and (max-width: 1212px) {
  .resources-wrapper {
    width: 500px;
  }
}

@media only screen and (max-width: 498px) {
  .resources-wrapper {
    width: 300px;
  }

  div.resources-gallery ul {
    list-style-type: none;
    margin: 0;
  }
}
</style>
