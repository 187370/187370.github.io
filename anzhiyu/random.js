var posts=["2024/08/30/CSAPP/","2024/08/25/hello-world/","2024/09/12/ics第一周-信息的表示和处理/","2024/09/20/algorithm/","2024/09/23/ics第三周-程序的机器级表示/","2024/09/14/ics第二周-信息的表示和处理续/","2024/09/20/ics第二周-程序的机器级表示/","2024/09/04/title/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };