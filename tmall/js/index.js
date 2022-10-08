(function () {
    let top = document.querySelector(".top"),
        bgc4 = document.querySelector(".bgc4"),
        sign = document.querySelector(".sign"),
        webAccessibility = document.querySelector(".webAccessibility");


    // 网页无障碍
    webAccessibility.onclick = function () {
        if (top.style.display == 'none') {
            top.style.display = 'flex';
        }
        else {
            top.style.display = 'none'
        }
    }
    bgc4.onclick = function () {
        top.style.display = 'none'
    }
    //轮播图
    let sw = new Swiper("#container1", {
        loop: true,

        //自动播放
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    //小轮播图
    let lb = new Swiper('#container2', {
        loop: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
            fill: 'column',
            rows: 1,
        },
        //自动播放
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },


        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });





    //天猫超市
    let data = null;
    let supermarketGoods = document.querySelector(".SupermarketGoods");
    const getDate = function getDate() {
        let cs = new XMLHttpRequest;
        cs.open("get", "./json/TmallSupermarket.json", false);
        cs.onreadystatechange = function () {
            if (cs.readyState === 4 && cs.status === 200) {
                data = JSON.parse(cs.response);
            }
        }
        cs.send(null);
    }
    getDate()
    const render = function render(TmallSupermarket) {
        let str = '';
        data.forEach(item => {
            let { id, img, title, price } = item;
            str += `<li>
    <img src="${img}" alt="">
    <p class="introduce">${title}</p>
    <p class="price">${price}</p>
</li>`
        })
        supermarketGoods.innerHTML = str
    }
    render()



    //猜你喜欢
    let recommend = document.querySelector(".recommend")
    const Date = function Date() {
        let cs = new XMLHttpRequest;
        cs.open("get", "./json/GuessYou.json", false);
        cs.onreadystatechange = function () {
            if (cs.readyState === 4 && cs.status === 200) {
                data = JSON.parse(cs.response);
            }
        }
        cs.send(null);
    }
    Date()
    const like = function like(TmallSupermarket) {
        let str = '';
        data.forEach(item => {
            let { id, img, title, price } = item;
            str += `<li>
    <img src="${img}" alt="">
    <span class="gray-bgc"></span>
    <p class="introduce">${title}</p>
    <p class="price">${price}</p>
</li>`
        })
        recommend.innerHTML = str
    }
    like()

    //天猫国际
    let TmallGlobal = document.querySelector(".TmallGlobal")
    const newDate = function newDate() {
        let cs = new XMLHttpRequest;
        cs.open("get", "./json/TmallGlobal.json", false);
        cs.onreadystatechange = function () {
            if (cs.readyState === 4 && cs.status === 200) {
                data = JSON.parse(cs.response);
            }
        }
        cs.send(null);
    }
    newDate()
    const global = function global(TmallSupermarket) {
        let str = '';
        data.forEach(item => {
            let { id, img, title, price } = item;
            str += `<li>
    <img src="${img}" alt="">
    <span class="gray-bagc"></span>
    <p class="introduce">${title}</p>
    <p class="price">${price}</p>
</li>`
        })
        TmallGlobal.innerHTML = str
    }
    global()




})()
