
<script src="../script/news.js"></script>

<template>
  <div>
    <Modal v-model="showModal" title="Ajouter une News">
      <form @submit.prevent="addNews()">
          <div class="form-group">
    <label for="exampleInputEmail1">Titre</label>
    <input type="text" class="form-control" 
    id=""  placeholder="Nouvel Evenement" maxlength="15"
    v-model="title" required>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Contenu</label>
    <textarea name="" id=""  rows="5" 
    v-model="content" required
    class="form-control"></textarea>
  </div>
  
  <button type="submit" class="btn btn-info">Publier</button>
      </form>
    </Modal>
    <Modal v-model="showEditModal" title="Modifier">
      <form @submit.prevent="editNews()">
          <div class="form-group">
    <label for="exampleInputEmail1">Titre</label>
    <input type="text" class="form-control" 
    id=""  placeholder="Evenement" maxlength="15"
    v-model="titleUpdated" required>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Contenu</label>
    <textarea name="" id=""  rows="5" 
    v-model="contentUpdated" required
    class="form-control"></textarea>
  </div>
  
  <button type="submit" class="btn btn-info">Mettre à jour</button>
      </form>
    </Modal>
    <section class="news pt-0">
      <div class="container mt-md-5">
        <div class="row">
            <div class="col-10 col-md-11"></div>
        <i class="fa fa-plus text-info" 
        @click="showNewsModal()"
        style="color:rgb(80,150,150);font-size:40px"></i>
        </div>
        <ul
          class="row d-lg-flex list-unstyled image-block justify-content-center px-lg-0 mx-lg-0"
        >
          <li class="col-lg-4 col-md-5 image-block full-width p-3" v-for="(item, index) in news" :key="index">
            <div class="image-block-inner">
              <a class="mh-100" href="#">
                <img
                  src="https://raw.githubusercontent.com/solodev/recent-blog-posts/master/images/news-1.jpg"
                  alt="LunarXP Wins Space Innovator of the Year Award"
                  class="img-responsive w-100"
              /></a>
              <span class="hp-posts-cat">{{item.title}}</span> <br> <span class="text-info" style="margin-left: 26px;font-weight: 700;">{{item.created_at.substr(0,10)}}</span>
              <h4 class="mt-3">
                <span style="font-size: 15px;">{{item.content.substr(0,25)}} ... </span>
              </h4>
              <!--  <p></p> -->
              <div class="row">
              <a style="cursor:pointer" class="read-more text-info col-9" @click="showEditNewsModal(item.id)">Modifier</a>
              <a class="read-more text-end"  style="cursor:pointer" @click="deleteNews(item.id)"><i class="fa fa-trash text-danger"></i></a>
              </div>
            </div>
            <!-- .image-block-inner -->
          </li>
        
        </ul>
      </div>
    </section>
  </div>
</template>
<style  scoped>
.container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  
  .image-block {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
  }
  
  .image-block-inner {
    -webkit-box-shadow: 0px 3px 10px 1px rgba(204, 204, 204 0, 1);
    -moz-box-shadow: 0px 3px 10px 1px rgba(204, 204, 204 0, 1);
    box-shadow: 0px 3px 10px 1px rgba(204, 204, 204, 1);
  }
  
  .image-block li>.image-block-inner {
    padding-bottom: 30px;
    background-color: #fff;
    height: 100%;
  }
  
  a {
    color: #111;
    text-decoration: none;
  }
  
  h2,
  h4 a {
    text-transform: uppercase;
  }
  
  a:hover {
    text-decoration: none;
  }
  
  .image-block li>.image-block-inner>a {
    display: block;
    overflow: hidden;
  }
  
  .image-block li>.image-block-inner>a img {
    border: 1px solid #e1e1df;
  }
  
  .image-block li>.image-block-inner:hover {
    background-color: #eee;
  }
  
  .hp-posts-cat {
    margin-bottom: 13px;
    margin-top: 35px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    display: inline-block;
  }
  
  .news {
    font-family: 'Oswald', sans-serif;
  }
  
  .news .image-block li>.image-block-inner h4,
  .hp-posts-cat,
  .news .image-block li>.image-block-inner p,
  .read-more {
    padding: 0 28px;
  }
  
  .read-more {
    display: block;
    text-decoration: underline;
    margin-top: 30px;
    font-weight: 600;
  }
  
  /* Media Queries */
  
  @media (min-width: 992px) {
    .col-md-5 {
      width: 41.66667%;
    }
  }
  
  @media (min-width: 768px) {
    .image-block li.image-block1 {
      padding-left: 26px;
      padding-right: 14.5px;
    }
  }
  
  @media (min-width: 1200px) {
    .image-block li>.image-block-inner>a {
      max-height: 245px;
    }
  }
  
  @media (min-width: 992px) {
  
    .pl-lg-0,
    .px-lg-0 {
      padding-left: 0;
      padding-right: 0;
    }
  
    .ml-lg-0,
    .mx-lg-0 {
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>></style>