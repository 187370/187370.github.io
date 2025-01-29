var posts=["posts/7c8b4f72/","posts/ded8437/","posts/5cca8783/","posts/d253f8ca/","posts/4145f9d2/","posts/cd1fec94/","posts/cc548c89/","posts/ee040603/","posts/147acb51/","posts/ef66d2a/","posts/dd893702/","posts/c7b885a3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };