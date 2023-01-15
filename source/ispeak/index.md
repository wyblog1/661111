---
title: 短文
top_img: false
comments: false
date: 2023-01-15 20:00:00
translate_title: speak
subtitle: Speak
aside: false
---
<div class="btn-center">
{% btn 'https://ispeak-biubiu.ccknbc.cc',发表短文,fa-regular fa-message,outline green larger %}
{% btn 'https://ispeak.wyblog1.tk/#/ispeak/list',管理短文,fa-solid fa-user-pen,outline green larger %}
</div>

<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/twikoo@1.6.8/dist/twikoo.css"/>
<link rel="stylesheet" href="https://jsd.cdn.zzko.cn/npm/highlight.js/styles/atom-one-dark.min.css" />
<div class='content'>
  <img src='https://bu.dusays.com/2022/05/01/626e88f349943.gif'>
</div>
{% btn 'https://blog.wyblog1.tk/ispeak/',查看全部,far fa-hand-point-right,block center blue larger %}
<hr />
<div class='ispeak-comment'></div>
<!-- JS -->
<script src="https://cdn.jsdelivr.net/npm/twikoo@1.6.8/dist/twikoo.min.js"></script>
<script src="https://jsd.cdn.zzko.cn/npm/marked/marked.min.js"></script>
<script src="https://jsd.cdn.zzko.cn/npm/highlight.js/highlight.min.js"></script>
<script>
  const searchParams = new URLSearchParams(window.location.search);
  const speakId = searchParams.get('q');
  const path = window.location.pathname;
  const apiURL = 'https://kkapi.wyblog1.tk';
  const markedRender = (body, loading_img='https://bu.dusays.com/2022/05/01/626e88f349943.gif') => {
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
      twikoo.init({
        el: '.ispeak-comment',
        path: path + '?q=' + speakId,
        pageTitle: title || contentSub,
        site: '无影博客 即刻短文',
        useBackendConf: true,
        serverURL: 'https://twikoo.wyblog1.tk/',
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