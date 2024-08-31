var posts=["2024/08/25/hello-world/","2024/08/30/CSAPP/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };