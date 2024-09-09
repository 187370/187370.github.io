var posts=["2024/08/30/CSAPP/","2024/09/04/title/","2024/08/25/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };