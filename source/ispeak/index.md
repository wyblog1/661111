---
title: Speak
date: 2022-08-21 14:11:00
update: 2022-08-21 14:11:00
top_img: https://tva1.sinaimg.cn/large/005B3XPgly1ghkxqgvmy0j30zk0irn2q.jpg
aside: false
comments: false
description: 欢迎来到无影的Speak页面，快来看看无影分享了什么speak！
sidebar: []
---
<div id="tip" style="text-align:center;">ipseak加载中</div>
<div id="ispeak"></div>
<link
  rel="stylesheet"
  href="https://jsd.cdn.zzko.cn/npm/highlight.js/styles/atom-one-dark.min.css"
/>
<link
  rel="stylesheet"
  href="https://jsd.cdn.zzko.cn/npm/ispeak/style.css"
/>

<script src="https://jsd.cdn.zzko.cn/npm/highlight.js/highlight.min.js"></script>
<script src="https://jsd.cdn.zzko.cn/npm/marked@v3/marked.min.js"></script>
<script src="https://jsd.cdn.zzko.cn/npm/ispeak/ispeak.umd.js"></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/twikoo@1.6.8/dist/twikoo.css"
/>
<!-- JS -->
<script src="https://cdn.jsdelivr.net/npm/twikoo@1.6.8/dist/twikoo.min.js"></script>
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
        loading_img: 'https://bu.dusays.com/2021/03/04/d2d5e983e2961.gif',
        fromColor:'rgb(245, 150, 170)', // 下方标签背景颜色 默认 rgb(245, 150, 170)
        comment: function (speak) {
          // 4.4.0 之后在此回调函数中初始化评论
          const { _id, title, content } = speak
          const contentSub = content.substring(0, 30)
          twikoo.init({
            el: '.ispeak-comment', // 默认情况下 ipseak 生成class为 ispeak-comment 的div
            title: title || contentSub, // 手动传入当前speak的标题(由于content可能过长，因此截取前30个字符)
            envId: 'https://twikoo.wyblog1.tk',
            pageSize: 10,
            requiredMeta: ["nick", "mail"],
            login: 'enable',
            dark: 'html[data-theme="dark"]',
            imageUploader: false,
            emoji:
              [
                "https://jsd.cdn.zzko.cn/npm/sticker-heo/Sticker-100",
                "https://jsd.cdn.zzko.cn/npm/telegram-gif/Telegram-Gif",
                "https://jsd.cdn.zzko.cn/npm/@waline/emojis/tw-emoji/"
              ]
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

<div class="btn-center">
{% btn 'https://ispeak-biubiu.ccknbc.cc', 发表短文,https://biubiu.wyblog1.tk ,outline green larger %}
{% btn 'https://kkadmin.ccknbc.cc/#/ispeak/list', 管理短文,https://kkadmin.wyblog1.tk/#/ispeak/list ,outline green larger %}
</div>
