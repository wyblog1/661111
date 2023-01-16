---
date: 2023-01-14 15:07:29
sidebar: []
title: talk
updated: 2023-01-16 20:16:50
---
<head>
  <!-- ... -->
  <script src="//cdn.jsdelivr.net/gh/Uyoahz26/daodao@main/dist/qexo-dao.min.js"></script>
  <!-- ... -->
</head>
<body>
  <!-- ... -->
  <div id="qexoDaoDao"></div>
  <script>
    qexoDaodao?.init({
      el: "#qexoDaoDao",
      avatar: "https://q1.qlogo.cn/g?b=qq&nk=2496091142&s=640",
      name: "UyoAhz",
      limit: 10,
      useLoadingImg: false,
      baseURL: "https://admin.uyoahz.cn/",
    }).then(function (){
      console.log("qexoDaodao加载完成");
    })
  </script>
</body>
