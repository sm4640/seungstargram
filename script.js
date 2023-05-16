const timeDiv = document.getElementById("time");
const todayDiv = document.getElementById("today");

function getTime() {
    let now = new Date();
    let hour = padZero(now.getHours());
    let minute = padZero(now.getMinutes());
    let second = padZero(now.getSeconds());
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    timeDiv.textContent = `${hour}시 ${minute}분 ${second}초`;
    todayDiv.textContent = `${year}년 ${month}월 ${day}일`;
}

function padZero(data) {
    return data < 10 ? `0${data}` : data;
}

getTime();
setInterval(getTime, 1000);
