---
title: 短文
top_img: false
comments: false
date: 2023-01-15 20:00:00
translate_title: speak
subtitle: Speak
aside: false
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
<!-- CSS -->
<link
  rel="stylesheet"
  href="https://jsd.cdn.zzko.cn/npm/@waline/client/dist/waline.min.css"
/>
<!-- JS -->
<script src="https://jsd.cdn.zzko.cn/npm/@waline/client/dist/waline.min.js"></script>
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
        loading_img: 'https://bu.dusays.com/2022/05/01/626e88f349943.gif',
        speakPage: '/essay',
        githubClientId: 'Iv1.f333c02f5f6676e8',
        comment: function (speak) {
          // 4.4.0 之后在此回调函数中初始化评论
          const { _id, title, content } = speak
          const contentSub = content.substring(0, 30)
          Waline.init({
            el: '.ispeak-comment', // 默认情况下 ipseak 生成class为 ispeak-comment 的div
            path: '/essay/speak?q=' + _id, // 手动传入当前speak的唯一id
            title: 短文 || contentSub, // 手动传入当前speak的标题(由于content可能过长，因此截取前30个字符)
            envId: 'https://twikoo.wyblog1.tk',
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
      })
      .then(function () {
        console.log('ispeak 加载完成')
        document.getElementById('tip').style.display = 'none'
      })
  } else {
    document.getElementById('tip').innerHTML = 'ipseak依赖加载失败！'
  }
</script>
