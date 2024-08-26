var posts=["2024/08/25/hello-world/","2024/08/26/my-first-blog/","2024/08/26/image/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };