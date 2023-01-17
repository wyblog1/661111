---
title: Speak
date: 2022-08-21 14:11:00
update: 2022-08-21 14:11:00
top_img: https://tva1.sinaimg.cn/large/005B3XPgly1ghkxqgvmy0j30zk0irn2q.jpg
aside: false
comments: ture
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
<script src="https://jsd.cdn.zzko.cn/npm/ispeak/ispeak.umd.js"></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/twikoo@1.6.8/dist/twikoo.css"
/>
<!-- JS -->
<script src="https://cdn.jsdelivr.net/npm/twikoo@1.6.8/dist/twikoo.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/612901/661111@main/source/_volantis/1.js"></script>
      .then(function () {
        console.log('ispeak 加载完成')
        document.getElementById('tip').style.display = 'none'
      })
  } else {
    document.getElementById('tip').innerHTML = 'ipseak依赖加载失败！'
  }
</script>
