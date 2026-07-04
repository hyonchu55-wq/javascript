// API 호출에 필요한 정보

const API_URL = "https://api.unsplash.com/search/photos"
const API_KEY = "tIM9Kdzw9wndz_rqfFhaWUjBKFQ_Vjw7b3tHyKAI8n8"
const PER_PAGE = 30

let searchValue = "Jeju"
let pageValue = 1

// -------------------------------------------------------------------------



const dataBoxEl = document.querySelector(".mySwiper")
const searchInput = document.querySelector(".searchBar__input")
const searchBtn = document.querySelector(".searchBar__button")
const photoCloseBtn = document.querySelector(".section-left__header__button.red")

searchInput.addEventListener("input", (event) => {
    searchValue = event.target.value
})
searchBtn.addEventListener("click", () => {
    console.log(searchValue);
    getData(searchValue)
})

//다이얼로그 닫힐 때 이전 데이터 비우기
photoCloseBtn.addEventListener("click", () => {
    dataBoxEl.innerHTML = ""
})

//엔터키 조회 기능
searchInput.addEventListener("keydown", (event) => {
    if(event.keyCode === 13) {
        getData(searchValue)
    }
})

// -------------------------------------------------------------------------


async function getData (inputValue) {
    dataBoxEl.innerHTML = "" // 이전 데이터 비워주고 재랜더링 효과

    //call unsplash
    try{
        const res = await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`)
        console.log(res);

        res.data.results.forEach(item => {
            dataBoxEl.innerHTML += `
                <swiper-slide>
                    <div class="album">
                        <img src="${item.urls.full}" alt="" class="album__image">
                        <div class="album__infoBox">
                            <div class="album__infoBox__row">
                                <span class="albumLabel">이미지크기</span>
                                <span class="value">${item.width} X ${item.height}</span>
                            </div>
                            <div class="album__infoBox__row">
                                <span class="albumLabel">좋아요</span>
                                <span class="value">${item.likes}</span>
                            </div>
                            <div class="album__infoBox__row">
                                <span class="albumLabel">작성자</span>
                                <span class="value">${item.user.name}</span>
                            </div>
                        </div>
                    </div>
                </swiper-slide>`
        });
    }catch(error) {
        console.log(error);
    }

}

getData("Jeju")