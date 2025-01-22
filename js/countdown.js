// 最重要
const targetDate = new Date('2025-01-29T00:00:00');


const countdownElement = document.getElementById('countdown');
const celebrationElement = document.getElementById('celebration');
const particles = [];

function updateCountdown() {
    const now = new Date();
    const remainingTime = targetDate - now +1000;

    if (remainingTime <= 1000) {
        countdownElement.style.display = 'none';
        celebrationElement.style.display = 'block';
        // startFireworks();
        return;
    }


    const s = Math.floor(remainingTime / 1000) % 60;
    const m = Math.floor(remainingTime / (1000 * 60)) % 60;
    const h = Math.floor(remainingTime / (1000 * 60 * 60)) % 24;
    const d = Math.floor(remainingTime / (1000 * 60 * 60 * 24)) % 30;
    const mm = Math.floor(d / 30);

    countdownElement.textContent = formatCountdown(mm, d, h, m, s);
}

function formatCountdown(mm, d, h, m, s) {
    let timeString = '';
    // TODO 修改消除0判断
    // 逐项判断，若为 0 则省略
    if (mm > 0) timeString += mm + ':';
    if (d > 0 || mm > 0) timeString += d + ':';
    if (h > 0 || d > 0 || mm > 0) timeString += h + ':';
    if (m > 0 || h > 0 || d > 0 || mm > 0) timeString += m + ':';

    // 删除单个数值中的十位 0 (特殊处理秒)
    timeString += s;
    return timeString;
}


setInterval(updateCountdown, 100);
