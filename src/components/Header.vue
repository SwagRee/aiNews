<template>
    <div class="toubu">
      <div id="touzuo">
        <img src="../img/kj.png" width="250px" alt="图片描述" /> <!-- 添加了alt属性，虽然不是必须的，但推荐用于图片描述 -->
      </div>
      <div class="touright">

        <ul class="tou">
          <li class="tou1"><a href="#">邮箱</a></li>
          <li class="tou2"><a href="#">English</a></li>
          <li class="tou3"><a href="#">繁体中文</a></li>
        </ul>
      </div>
    </div>
    <div class="dht">
      <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/news">资讯</router-link></li>
        <li><router-link to="/rank">排行</router-link></li>
        <li><router-link to="/AIGC">智能问答</router-link></li>
        <li><router-link to="/talk">社区交流</router-link></li>
      </ul>
    </div>
  </template>
<style>
      div[class="toubu"]{
        margin: 0 auto;
        width: 1200px;
        height: 120px;
        background: #f7f7f7;
    }
    div[id="touzuo"] p {
        font-size: 50px;
        height: 50px;
        width: 300px;
        margin-top: 25px;
        margin-left: 50px;
    }
    div[id="touzuo"]{
        height: 30px;
        width: 300px;
        float: left;
        margin-top: 10px;
        margin-left: 10px;
    }
    div[class="touright"]{
        float: right;
        height: 70px;
         margin-top: 9px;

    }
    div[class="shou"]{
        float: left;
        width: 239px;
        height: 34px;
        margin-top: 35px;
    }
    input[class="tubiao11"]{
        border-radius:  100px 0 0 100px  ;
        border-top: solid 2px #5ea6eb;
        border-bottom:solid 2px #5ea6eb;
        border-left:solid 2px #5ea6eb;
        background: url("../img/图标11.png")no-repeat;
        width: 35px;
        height: 31px;
        float: left;
        margin-top:0.5px;
        
    }
    input[class="shousuo1"]{
        height: 27px;
        line-height: 30px;
        color: #003f88;
        width: 124px;
        font-size: 14px;
        border-top: solid 2px #5ea6eb;
        border-bottom:solid 2px #5ea6eb;

    }
    input[class="shousuo2"]{
        width: 55px;
        line-height: 31px;
        height: 31px;
        float: right;
        border-radius: 0 100px 100px 0;
        font-size: 14px;
        float: right;
        color: white;
        background-color: #5ea6eb;
        margin-right: 19px;
        margin-top:-32px;
    }
   ul[class="tou"]{
        list-style: none;
        float: right;
        margin-top: 35px;
        height: 26px;
    }
    ul[class="tou"] li {
        float: left;
        height: 30px;
        line-height: 30px;
        font-size: 16px;
    }
    ul[class="tou"] a {
        text-decoration: none;
        color: #003f88;
        display: block;
        padding: 0 10px;
        font-size: 16px;
        height: 26px;

    }
    li[class="tou1"]{
        background: url("../img/信件.png")no-repeat left center ;
        padding-left:35px;
    }
    li[class="tou2"]{
       border-left: #003f88 1px solid;
   }
    li[class="tou3"]{
        border-left: #003f88 1px solid;
    }
    div[class="dht"]{
        width: 1200px;
        height: 48px;
        background-color: #007BC6;
        margin: 0 auto;
    }
    div[class="dht"] ul {
        list-style: none;

    }
    div[class="dht"] ul li {
        float: left;
    }
    div[class="dht"] ul li a {
        text-decoration: none;
        font-size: 19px;
        color: white;
        display: block;
        line-height: 48px;
        text-align: center;
        height: 48px;
        width: 200px;
    }
    div[class="dht"] ul li a:hover {
         color:  #007BC6;
         background-color: antiquewhite;
     }
    div[class="dht"] ul li ul {
        display: none;
        position: absolute;
        width: 100px;
    }
    div[class="dht"] ul li:hover ul {
        display: block;
        background: white;
    }
    div[class="dht"] ul li ul li a {
        text-align: center;
        display: block;
        border-bottom: 1px solid #b2b2b2;
        border-right: 1px solid #b2b2b2;
        border-left: 1px solid #b2b2b2;
        color: black;
        font-size: 16px;
        height: 30px;
        line-height: 30px;
        background: white;
    }
    div[class="dht"] ul li ul li a:hover {
        color: #18baab;
        background: wheat;
    }
</style>