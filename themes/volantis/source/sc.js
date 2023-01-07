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
