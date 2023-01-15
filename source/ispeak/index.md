---
title: ispeak
top_img: false
comments: false
date: 2023-01-15 20:00:00
translate_title: speak
subtitle: Speak
aside: false
sidebar: []
---
<div id='speak'></speak>
<!-- 使用markdown渲染 -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/ispeak-bber/ispeak-bber-md.min.js" charset="utf-8" ></script>
<!-- 解析微信表情（参考：https://github.com/buddys/qq-wechat-emotion-parser） -->
<script src="https://cdn.jsdelivr.net/gh/buddys/qq-wechat-emotion-parser@master/dist/qq-wechat-emotion-parser.min.js">
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
        loading_img: 'https://bu.dusays.com/2021/03/04/d2d5e983e2961.gif',
        fromColor:'rgb(245, 150, 170)', // 下方标签背景颜色 默认 rgb(245, 150, 170)
        name: '天闲无影', // 显示的昵称
        comment: function (speak) {
          // 4.4.0 之后在此回调函数中初始化评论
          const { _id, title, content } = speak
          const contentSub = content.substring(0, 30)
          twikoo.init({
            el: '.ispeak-comment', // 默认情况下 ipseak 生成class为 ispeak-comment 的div
            title: title || contentSub, // 手动传入当前speak的标题(由于content可能过长，因此截取前30个字符)
            serverURL: 'https://twikoo.wyblog1.tk',
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
    .then(function() {
      // 哔哔加载完成后的回调函数，你可以写你自己的功能
      console.log('哔哔 加载完成')
    })
</script>
