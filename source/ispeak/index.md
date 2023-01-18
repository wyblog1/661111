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
- 这是无影的 Speak（说说）页面，Speak 的数据存储在 MongoDB 数据库中。
- 此项目目前为个人项目，也就是小康个人使用的。等待 api 相关功能及代码重构完成后即开源此项目。
- 本页面 api 服务部署于vercel
{% tabs tab-id %}

<!-- tab 关于ispeak页面</i> -->

这是关于无影的 Speak

<!-- endtab -->

<!-- tab 关于内容</i>  -->

speak 的内容来源于随手发送的想法、吐槽等。

<!-- endtab -->

{% endtabs %}
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
<script src="https://cdn.jsdelivr.net/gh/612901/661111@main/source/_volantis/1.js"></script>
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
        speakPage: '/ispeak/',
        loading_img: 'https://gd-hbimg.huaban.com/f84e8ec473d0a0bcc60c401a29e61a37fe197ba3d85a-FPoMK6_fw658',
        githubClientId: 'Iv1.799165c0f7a9dd1f',
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
<style>
/* 哔哔页面 */
#bibi button {
  color: #fff;
  border: 0;
  margin: 20px auto;
  border-radius: 0.3125rem;
  display: block;
  padding: 0 1rem;
  height: 40px;
  font-weight: 500;
  text-align: center;
  transition: all 0.5s ease-out;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 1000% 1000%;
  animation: Gradient 60s linear infinite;
  outline: 0;
}

#bibi .bb-info {
  font-weight: 700;
  font-size: 22px;
}

#bibi .bb-card {
  padding: 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #a5a5a5ee;
  margin-top: 20px;
  transition: all 0.25s;
  user-select: none;
  width: calc(48% - 7px);
  margin: 10px;
}

@media screen and (max-width: 800px) {
  #bibi .bb-card {
  width: 100%;
  }
}

#bibi .bb-card:hover {
  box-shadow: 0 5px 10px 8px #07111b29;
  transform: translateY(-3px);
}

#bibi .card-header {
  display: flex;
  align-items: center;
}

#bibi .card-header .avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  border-radius: 20px;
  overflow: hidden;
}

#bibi .card-header svg {
  height: 20px;
  width: 20px;
  margin-left: 5px;
}

#bibi .card-header .card-time {
  font-size: 12px;
  text-shadow: #d9d9d9 0 0 1px, #fffffb 0 0 1px, #fffffb 0 0 2px;
  margin-left: 10px;
}

#bibi .card-content {
  padding: 10px 0;
  white-space: pre-wrap;
}

#bibi .card-footer {
  display: flex;
  padding-bottom: 10px;
}

#bibi .card-footer .card-label {
  border-radius: 5px;
  padding: 0 5px;
  font-weight: 550;
  border-radius: 5px;
  box-shadow: inset 0 -1px 0 rgb(27 31 35 / 12%);
  font-size: 14px;
  user-select: none;
  margin-right: 10px;
}

div#bb_loading img{
  border-radius: 15px;
}

#bb-main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

</style>
