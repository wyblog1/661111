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
      avatar: "https://www.wyblog1.tk/media/images/custom-headerLogo.ico",
      name: "无影博客",
      limit: 10,
      useLoadingImg: false,
      baseURL: "https://qexo.wyblog1.tk",
    }).then(function (){
      console.log("qexoDaodao加载完成");
    })
  </script>
</body>
