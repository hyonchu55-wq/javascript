const countDownBoxEl = document.querySelector('.page__countDown__countDownBox');
const targetDate = new Date('2026-07-10 23:59:59')

console.log(targetDate)

let endTime = new Date(targetDate).getTime();
let period = endTime - new Date().getTime();

let days = ""
let hours = ""
let minutes = ""
let seconds = ""

function countDown() {
    period = endTime - new Date().getTime();

    //정적 Math.floor()메서드는 항상 반올림하여 정수를 반환
    const daysValue = Math.floor(period / (1000 * 60 * 60 * 24));
    const hoursValue = Math.floor((period % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesValue = Math.floor((period % (1000 * 60 * 60)) / (1000 * 60));
    const secondsValue = Math.floor((period % (1000 * 60)) / 1000);

    days = daysValue
    hours = hoursValue
    minutes = minutesValue
    seconds = secondsValue
}

setInterval(() => {
    countDown()

    countDownBoxEl.innerHTML = `
        <div class="countDown">
            <div class="countDown__layout">
                <span class="countDown__layout__text">마감</span>
                <span class="countDown__layout__time">${days}일</span>
                <span class="countDown__layout__time">${hours}시간</span>
                <span class="countDown__layout__time">${minutes}분</span>
                <span class="countDown__layout__time">${seconds}초</span>
                <span class="countDown__layout__text">전 이에요</span>
            </div>
            <button class="countDown__button">이력서 열람하기</button>
        </div>`
}, 1000)