var posts=["2024/08/25/hello-world/","2024/08/30/CSAPP/","2024/09/12/ics第一周-信息的表示和处理/","2024/09/04/title/","2024/09/14/ics第二周-信息的表示和处理续/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };