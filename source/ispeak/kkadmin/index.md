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
<link href="https://unpkg.com/artalk@2.3.4/dist/Artalk.css" rel="stylesheet" />
<!-- JS -->
<script src="https://unpkg.com/artalk@2.3.4/dist/Artalk.js"></script>
<script>
  var head = document.getElementsByTagName('head')[0]
  var meta = document.createElement('meta')
  meta.name = 'referrer'
  meta.content = 'no-referrer'
  head.appendChild(meta)
  if (ispeak) {
    export interface initOptions {
  // 绑定的标签
  el?: string
  // api地址
  api: string
  // ispeak作者
  author: string
  // 每页speak显示的条数
  pageSize?: number
  // 懒加载失败时显示的图像
  fail_img?: string
  // loading的图片
  loading_img?: string
  // speak页面路径
  speakPage?: string
  githubClientId?: string
  // 是否隐藏评论按钮
  hideComment?: boolean
  // 初始化评论的回调函数
  comment?: (speak: SpeakType) => void
  // 创建div标签时的类名
  commentClass?: string
  }
      .then(function () {
        console.log('ispeak 加载完成')
        document.getElementById('tip').style.display = 'none'
      })
  } else {
    document.getElementById('tip').innerHTML = 'ipseak依赖加载失败！'
  }
</script>
