let svg = 'https://www.wyblog1.tk/media/images/custom-headerLogo.ico'
let total = 0
let nowNum = 0
let items = []
let page = 1
let Url = 'https://kkapi.wyblog1.tk/api/ispeak?author=63c28a71aa610fa0dc9b6f1a&page=1&pageSize=10' // 修改api，记得带参数page


window.addEventListener('DOMContentLoaded', () => {
    getNew();
});

// 获取数据
function getNew() {
    let bibi = document.getElementById('bibi');
    try {
        bibi.removeChild(document.getElementById('more'))
    } catch (error) { }

    bibi.innerHTML += '<div id="bb_loading"><img src="https://www.fomal.cc/assets/loading3.gif" alt="bb_loading"></div>' // bb_loading图片可以f12在我网站源码下载，也可以使用其他图片。

    fetch(Url + page).then(res => res.json()).then((res) => {
        total = res.data.total
        items = res.data.items
        nowNum += items.length
        if (page == 1) {
            document.querySelector('.bb-info').innerHTML = '<svg style="width:1.20em;height:1.20em;top:5px;fill:currentColor;overflow:hidden;position:relative"><use xlink:href="#icon-chat"></svg> 站长的唠叨(' + total + ')'
        }
        page += 1
    }).then(() => {
        bb();
        if (nowNum < total) {
            document.getElementById('bibi').innerHTML += '<button id="more" onclick="getNew()">再翻翻</button>'
        }
        document.getElementById('bibi').removeChild(document.getElementById('bb_loading'))
    })
}

// 渲染数据
function bb() {
    let bb = document.getElementById('bb-main')
    items.forEach((item) => {
        let time = item.createdAt.substring(0, 10);
        let div = document.createElement('div')
        item.content = contentFormat(item.content)

        div.className = 'bb-card'
        div.innerHTML = '<div class="card-header"><div class="avatar"><img class="nofancybox"src="' + item.author.avatar + '"></div><div class="name">' + item.author.nickName + '</div>' + svg + '<div class="card-time">' + time + '</div></div><div class="card-content">' + item.content + '</div><div class="card-footer"><div data-v-185689ea=""class="card-label"style="background: ' + item.tag.bgColor + '; color: white;">' + item.tag.name + '</div></div>'
        bb.appendChild(div)
    })
}

// content格式化
function contentFormat(s) {
    let br = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
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
