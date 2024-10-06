var posts=["posts/7c8b4f72/","posts/ded8437/","posts/5cca8783/","posts/d253f8ca/","posts/4145f9d2/","posts/cd1fec94/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };