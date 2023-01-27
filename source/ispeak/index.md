---
title: Speak
date: 2022-08-21 14:11:00
update: 2022-08-21 14:11:00
top_img: https://tva1.sinaimg.cn/large/005B3XPgly1ghkxqgvmy0j30zk0irn2q.jpg
aside: false
comments: false
description: 欢迎来到无影的Speak页面，快来看看无影分享了什么speak！
sidebar: []
swiper_index: 8
swiper_desc: 说说
---
<a class="bb-btn button--animated" href="https://biubiu.wyblog1.tk/" title="发表短文"><i class="fa-regular fa-message"></i> 发表短文 </a>
<a class="bb-btn button--animated" href="https://kkadmin.wyblog1.tk/" title="管理短文"><i class="fa-solid fa-user-pen"></i> 管理短文 </a>
<div id="tip" style="text-align:center;">ipseak加载中</div>
<div id="ispeak"></div>
<link
  rel="stylesheet"
  href="https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css"
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/ispeak@4.4.0/style.css"
/>

<script src="https://cdn.staticfile.org/highlight.js/10.6.0/highlight.min.js"></script>
<script src="https://cdn.staticfile.org/marked/2.0.0/marked.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ispeak@4.4.0/ispeak.umd.js"></script>
<!-- CSS -->
<link href="https://unpkg.com/artalk@2.4.3/dist/Artalk.css" rel="stylesheet" />
<!-- JS -->
<script src="https://unpkg.com/artalk@2.4.3/dist/Artalk.js"></script>
<script>
  var head = document.getElementsByTagName('head')[0]
  var meta = document.createElement('meta')
  meta.name = 'referrer'
  meta.content = 'no-referrer'
  head.appendChild(meta)
  if (ispeak) {
    ispeak
      .init({
        el: '#ispeak',
        api: 'https://kkapi.wyblog1.tk/',
        author: '63c28a71aa610fa0dc9b6f1a',
        pageSize: 10,
        loading_img: 'https://cdn-us.imgs.moe/2023/01/19/63c8e4c63a560.gif',
        comment: function (speak) {
          // 4.4.0 之后在此回调函数中初始化评论
          const { _id, title, content } = speak
          const contentSub = content.substring(0, 30)
          new Artalk({
            el: '.ispeak-comment', // 默认情况下 ipseak 生成class为 ispeak-comment 的div
            pageKey: '/ispeak/info.html?q=' + _id, // 手动传入当前speak的唯一id
            pageTitle: title || contentSub, // 手动传入当前speak的标题(由于content可能过长，因此截取前30个字符)
            server: 'https://artalk.wyblog.repl.co/',
            site: 'speak' // 你的站点名
          })
        }
      })
      .then(function () {
        console.log('ispeak 加载完成')
        document.getElementById('tip').style.display = 'none'
      })
  } else {
    document.getElementById('tip').innerHTML = 'ipseak依赖加载失败！'
  }
</script>     
<a class="bb-btn button--animated" href="/ispeak/" title="查看全部"><i class="far fa-hand-point-right fa-fw"></i> 查看更多 </a>
