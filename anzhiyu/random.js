var posts=["posts/7c8b4f72/","posts/ded8437/","posts/5cca8783/","posts/d253f8ca/","posts/cc548c89/","posts/4145f9d2/","posts/cd1fec94/","posts/ee040603/","posts/dd893702/","posts/147acb51/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };