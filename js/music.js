document.addEventListener('DOMContentLoaded', function() {
    // 创建一个AudioContext
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // 加载音频文件
    function loadAudio(url) {
        return fetch(url)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer));
    }

    // 播放音频
    function playAudio(buffer) {
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.loop = true; // 设置循环播放
        source.start(0);

        // 保存当前播放的source，以便后续停止
        currentSource = source;
    }

    // 停止音频
    function stopAudio() {
        if (currentSource) {
            currentSource.stop();
            currentSource = null;
        }
    }

    // 获取播放按钮并添加点击事件监听器
    const MusicButton = document.getElementById('MusicButton');
    let currentSource = null; // 用于保存当前播放的音频源
    MusicButton.addEventListener('click', function() {
        if (currentSource) {
            // 如果音频正在播放，则停止
            stopAudio();
            MusicButton.textContent = "Music(Off)";
        } else {
            // 如果音频停止，则重新加载并播放
            loadAudio('../rs/gxfc.mp3').then(playAudio);
            MusicButton.textContent = "Music(On)";
        }
    });
});
