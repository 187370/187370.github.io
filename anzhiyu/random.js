var posts=["posts/a0419e9f/","posts/4a17b156/","posts/7c8b4f72/","posts/4b0178e0/","posts/ded8437/","posts/ded8437/","posts/d253f8ca/","posts/4145f9d2/","posts/cd1fec94/","posts/d87f7e0c/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };