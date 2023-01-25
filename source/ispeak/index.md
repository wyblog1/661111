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
<!-- CSS -->
<link rel="stylesheet" href="https://jsd.cdn.zzko.cn/npm/@waline/client/dist/waline.min.css"/>
<link rel="stylesheet" href="https://jsd.cdn.zzko.cn/npm/highlight.js/styles/atom-one-dark.min.css" />
<div class='content'>
  <img src='https://bu.dusays.com/2022/05/01/626e88f349943.gif'>
</div>
{% btn 'https://blog.ccknbc.cc/essay/',查看全部,far fa-hand-point-right,block center blue larger %}
<hr />
<div class='ispeak-comment'></div>
<!-- JS -->
<script src="https://jsd.cdn.zzko.cn/npm/@waline/client/dist/waline.min.js"></script>
<script src="https://jsd.cdn.zzko.cn/npm/marked/marked.min.js"></script>
<script src="https://jsd.cdn.zzko.cn/npm/highlight.js/highlight.min.js"></script>
<script>
  const searchParams = new URLSearchParams(window.location.search);
  const speakId = searchParams.get('q');
  const path = window.location.pathname;
  const apiURL = 'https://kkapi.wyblog1.tk/api/ispeak?author=63c28a71aa610fa0dc9b6f1a';
  const markedRender = (body, loading_img='https://cdn-us.imgs.moe/2023/01/19/63c8e4c63a560.gif') => {
    const renderer = {
      image(href, title, text) {
        return `<a href="${href}" target="_blank" data-fancybox="group" class="fancybox">
            <img speak-src="${href}" src=${loading_img} alt='${text}'>
            </a>`
      }
    }
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (code) {
        if (hljs) {
          return hljs.highlightAuto(code).value
        } else {
          return code
        }
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: true,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    })
    marked.use({ renderer })
    return marked.parse(body)
  }
  fetch(`${apiURL}/get/${speakId}`)
  .then(response => response.json())
  .then(res => {
    const data = res.data;
    if(data){
      const {title,content} = data;
      const contentSub = content.substring(0, 30);
      document.querySelector('.content').innerHTML = markedRender(content);
      if(title){
        document.title = title;
      }
      Waline.init({
        el: '.ispeak-comment',
        path: path + '?q=' + speakId,
        pageTitle: title || contentSub,
        site: 'CC的部落格 即刻短文',
        useBackendConf: true,
        serverURL: 'https://waline.wyblog1.tk',
        pageSize: 10,
        requiredMeta: ["nick", "mail"],
        login: 'enable',
        dark: 'html[data-theme="dark"]',
        imageUploader: false,
        emoji:
          [
            "https://jsd.cdn.zzko.cn/npm/sticker-heo/Sticker-100/",
            // "https://jsd.cdn.zzko.cn/npm/telegram-gif/Telegram-Gif/",
            // "https://jsd.cdn.zzko.cn/npm/@waline/emojis/tw-emoji/"
          ]
      })
    }
  });
</script>
