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
        speakPage: '/ispeak/',
        loading_img: 'https://bu.dusays.com/2021/03/04/d2d5e983e2961.gif',
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
<script>
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).timeago={})}(this,function(e){"use strict";var r=["second","minute","hour","day","week","month","year"];var a=["秒","分钟","小时","天","周","个月","年"];function t(e,t){n[e]=t}function i(e){return n[e]||n.en_US}var n={},f=[60,60,24,7,365/7/12,12];function o(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function d(e,t){for(var n=e<0?1:0,r=e=Math.abs(e),a=0;e>=f[a]&&a<f.length;a++)e/=f[a];return(0===(a*=2)?9:1)<(e=Math.floor(e))&&(a+=1),t(e,a,r)[n].replace("%s",e.toString())}function l(e,t){return((t?o(t):new Date)-o(e))/1e3}var s="timeago-id";function h(e){return parseInt(e.getAttribute(s))}var p={},v=function(e){clearTimeout(e),delete p[e]};function m(e,t,n,r){v(h(e));var a=r.relativeDate,i=r.minInterval,o=l(t,a);e.innerText=d(o,n);var u,c=setTimeout(function(){m(e,t,n,r)},Math.min(1e3*Math.max(function(e){for(var t=1,n=0,r=Math.abs(e);e>=f[n]&&n<f.length;n++)e/=f[n],t*=f[n];return r=(r%=t)?t-r:t,Math.ceil(r)}(o),i||1),2147483647));p[c]=0,u=c,e.setAttribute(s,u)}t("en_US",function(e,t){if(0===t)return["just now","right now"];var n=r[Math.floor(t/2)];return 1<e&&(n+="s"),[e+" "+n+" ago","in "+e+" "+n]}),t("zh_CN",function(e,t){if(0===t)return["刚刚","片刻后"];var n=a[~~(t/2)];return[e+" "+n+"前",e+" "+n+"后"]}),e.cancel=function(e){e?v(h(e)):Object.keys(p).forEach(v)},e.format=function(e,t,n){return d(l(e,n&&n.relativeDate),i(t))},e.register=t,e.render=function(e,t,n){var r=e.length?e:[e];return r.forEach(function(e){m(e,e.getAttribute("datetime"),i(t),n||{})}),r},Object.defineProperty(e,"__esModule",{value:!0})});
var Url = 'https://bbapi.chuckle.top/api/ispeak?author=62dfff698999529f10b18d03&pageSize=30'
var items = []

// 获取数据
function getNew() {
    fetch(Url).then(res => res.json()).then((res) => {
        items = res.data.items
    }).then(() => {
        bb();
    })
}

// 渲染数据
function bb() {
    let bb = document.getElementById('bibi')
    if (items.length == 30) {
        document.querySelector('.limit').style.display = 'block'
    }

    items.forEach((item) => {
        let d = new Date(item.createdAt)
        let date = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        let dataTime = timeago.format(date, 'zh_CN');

        bb.innerHTML += '<div class="bb-box"><div class="bb-content">' + contentFormat(item.content) + '</div><div class="bb-bottom"><span class="time">' + dataTime + '</span> <span style="margin-left:5px;"><i class="fa-solid fa-tag"></i> ' + item.tag.name
    })
    var x = document.getElementById("bbcontainer");
    if (x != null)
    x.remove();
}

function contentToText(s) {
    let br = /<\/*br>|[\s\uFEFF\xA0]+/g;
    let re_forimg = /<img(.*?)src=[\"|\']?(.*?)[\"|\']?(.*?)>|!\[(.*?)\]\((.*?)\)/g;
    let getImgUrl = /(http(.*).[jpg|png|gif])/g;
    let ls = s.match(getImgUrl)
    s = s.replace(re_forimg, '')
    s = s.replaceAll(br, '')

    let text = ''
    if (ls) {
        ls.forEach((e) => {
            text += '[图片]'
        })
    }
    s += text
    console.log(s);
    return s
}

// content格式化
function contentFormat(s) {
    let br = /<\/*br>|^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    let re_forimg = /<img(.*?)src=[\"|\']?(.*?)[\"|\']?(.*?)>|!\[(.*?)\]\((.*?)\)/g;
    let getImgUrl = /(http(.*).[jpg|png|gif])/g;
    let ls = s.match(getImgUrl)
    s = s.replace(re_forimg, '')
    s = s.replace(br, '')

    let html = '<br>'
    if (ls) {
        ls.forEach((e) => {
            html += '<a href="' + e + '" target="_blank" data-fancybox="group" class="fancybox"><img src="' + e + '"></a>'
        })
    }
    s += html
    return s
}
getNew();
</script>

<div id="bibi"></div>

<div class="limit">- 只展示最近30条短文 -</div>
