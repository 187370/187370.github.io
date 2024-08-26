var posts=["2024/08/26/image-test-again-again/","2024/08/25/hello-world/","2024/08/26/image/","2024/08/26/test-image/","2024/08/26/image-test-again/","2024/08/26/my-first-blog/","2024/08/26/image-test-again-again-again/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };