var posts=["posts/7c8b4f72/","posts/ded8437/","posts/5cca8783/","posts/4145f9d2/","posts/d253f8ca/","posts/ee040603/","posts/cc548c89/","posts/ef66d2a/","posts/dd893702/","posts/147acb51/","posts/c7b885a3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };