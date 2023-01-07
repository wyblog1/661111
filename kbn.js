// 看板娘与APlayer
window.addEventListener('load', function () {
    let interval = setInterval(()=>{
        let aplayer = document.querySelectorAll("meting-js")[0].aplayer;
        if(!aplayer){
            return;
        }
        //播放
        aplayer.on("play", ()=>{
            music_index = aplayer.list.index;
            music_name = aplayer.list.audios[music_index].title;
            music_artist = aplayer.list.audios[music_index].artist;
            if(say){
                say(randomSeek(message_play));
            }
        });
        //暂停
        aplayer.on("pause", ()=>{
            if(say){
                say(randomSeek(message_pause));
            }
        });
        //快进
        aplayer.on("seeked", ()=>{
            if(say){
                say(randomSeek(message_seeked));
            }
        });
        clearInterval(interval)

        function randomSeek(list){
            return list[Math.floor(Math.random() * list.length)]
                .replaceAll("{name}", `<span>${music_name || "未知歌曲"}</span>`)
                .replaceAll("{artist}", `<span>${music_artist || "未知作者"}</span>`);
        }
    }, 300)

    let music_index;
    let music_name;
    let music_artist;

    const message_play = [
        '开始播放{name}',];
    const message_pause = [
        '{name}已暂停',];
    const message_seeked = [
        '快进',];
});
