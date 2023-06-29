var binft = function (r) {
    var isTransparent = true;
    function getRandomColor() {
        if(isTransparent){
            isTransparent = false;
            return "rgba(255,255,255,0)"
        }else{
            isTransparent = true;
            return "rgba(255,255,255,1)"
        }
    }  
    function n(r) {
        for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
            var oneword = document.createElement("span");
            oneword.textContent = "_";
            oneword.style.color = getRandomColor();
            n.appendChild(oneword);
        }
        return n
    }
    function i() {
        var t = wordList[c.skillI];
        c.step ? c.step-- : (c.step = refreshDelayTime, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = showTotalWordDelayTime) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % wordList.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(maxLength, maxLength + c.prefixP) : Math.min(maxLength, t.length - c.skillP))), setTimeout(i, d)
    }
    var l = "",
    wordList = [ 
            "只有分离后才能懂的事，却没有了感慨的时间。",
            "成败就此一战，我们必须拼尽全力。",
            "哪有顷刻之间的心灰意冷，有的，只是日积月累的看透罢了。",
            "浩如星海的人群中，与你相遇真是一件幸运的事情",
            "爱情没有那么多借口，如果最终没能在一起，只能说明爱的不够。",
            "纵然变化，依然故我。",
            "真正的大师，如艺术一般。",
            "水晶帘动微风起，满架蔷薇一院香。",
            "慢慢来，谁还没有一个努力的过程。",
            "予力众生，成就不凡。",
            "天下没有不散的宴席，那就放下过去，憧憬未来！",
            "面具戴太久，就会长到脸上，再想揭下来，除非伤筋动骨扒皮。",
            "我们开始一起攀登，这长长的，长长的坡道。",
            "其实美丽的故事都是没有结局的，只因为它没有结局所以才会美丽。",
            "御剑于心，且听风吟。",
            "你是故意找茬是不是？",
            "我受到了召唤，我必须回应，一如既往。",
            "空无一物本身，是一些无惧无畏的旅人的起点，却是我的终点。",
            "因为喜欢你，所以喜欢你。",
            "心之所向，素履以往。",
            "要优秀啊，不然怎么遇见优秀的人！",
            "超过一定的年龄之后，所谓人生，无非是一个不断丧失的过程而已。",
            "迄今所有人生都大写着失败，但并不妨碍我继续向前。",
            "所以我松开拳头用手握紧笔，作为自己作为人类也作为你。",
            "悲痛藏于心，欢喜言于表。说的不就是我们吗！",
            "有情人终成眷属，没钱人亲眼目睹。",
            "木叶飞舞之处，火亦生生不息。",
            "爸爸我也不是一生下来就是爸爸，爸爸也是头一次当爸爸。",
            "有花堪折直需折,莫待无花空折枝.",
            "闲居少邻并,草径入荒园.鸟宿池边树,僧敲月下门.",
            "侯门一入深如海,从此萧郎是路人.",
            "才见岭头云似盖,已惊岩下雪如尘.",
            "人间万事消磨尽,只有清香似旧时.",
            "日暮酒醒人已远,满天风雨下西楼.",
            "落灯花,棋未收,叹新丰逆旅淹留.",
            "软风吹过窗纱,心期便隔天涯.",
            "迷惑失故路,薄暮无宿栖.",
            "不见白头相携老,只许与君共天明.",
            "晓迎秋露一枝新,不占园中最上春.",
            "荷尽已无擎雨盖,菊残犹有傲霜枝.",
            "春未绿,鬓先丝.人间别久不成悲.",
            "江东子弟多才俊,卷土重来未可知.",
            "莫听穿林打叶声,何妨吟啸且徐行.",
            "在天愿作比翼鸟,在地愿为连理枝.",
        ].map(function (r) {
    return r + ""
    }),
    showTotalWordDelayTime = 2,
    refreshDelayTime = 1,
    maxLength = 1,
    d = 75,
    c = {
        text: "",
        prefixP: -maxLength,
        skillI: 0,
        skillP: 0,
        direction: "forward",
        delay: showTotalWordDelayTime,
        step: refreshDelayTime
    };
    i()
};
window.addEventListener('load', ()=>{
    binft(document.getElementById('binft'));
}, {once: true})
