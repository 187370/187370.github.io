var posts=["2024/08/27/my-first-note/","2024/08/25/hello-world/","2024/08/26/image-test-again-again-again-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };