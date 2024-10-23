

$(function(){
    Splitting();
    
 })

 // 스크롤시 nav 숨기고 나타나게 하기
 $(function(){
    var prevScrollTop = 0;
    document.addEventListener('scroll', function(){
        var nowScrollTop = $(window).scrollTop();

        if(nowScrollTop > prevScrollTop){
            $('header nav').addClass('active');
        } else {
            $('header nav').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    })
 })

//  nav -> profile, work, contact 스크롤
$(function(){
    $('header .gnb .home').click(function(){
        var homeOffset = $('header').offset().top
    
        $('html').animate({scrollTop: homeOffset})
    
        return false
    })

    $('header .gnb ul li').eq(0).click(function(){
        var ProfileOffset = $('#section01').offset().top
    
        $('html').animate({scrollTop: ProfileOffset})
    
        return false
    })

    $('header .gnb ul li').eq(1).click(function(){
        var WorkListOffset = $('#section02').offset().top
    
        $('html').animate({scrollTop: WorkListOffset})
    
        return false
    })

    $('header .gnb ul li').eq(2).click(function(){
        var ContactOffset = $('footer').offset().top
    
        $('html').animate({scrollTop: ContactOffset + 2000})
    
        return false
    })
})

 // section01 - software 진행률 애니메이션
 function progress() {
    const progressContainers = document.querySelectorAll('.progress-container');
    
    progressContainers.forEach((container) => {
        const progressCircle = container.querySelector('.progress-circle');
        const progress = container.getAttribute('data-progress'); // 진행률 가져오기

        const radius = progressCircle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        progressCircle.style.strokeDasharray = `${circumference}`;
        progressCircle.style.strokeDashoffset = `${circumference}`;

        function setProgress(percent) {
            const offset = circumference - (percent / 100) * circumference;
            progressCircle.style.strokeDashoffset = offset;
        }

        setProgress(progress); // 각 원에 대해 설정된 진행률 적용
    });
};

// section01에서 software 진행 애니메이션 재생되게 하기
$(window).scroll(function(){
    let scrT = $(window).scrollTop();
    let sec1Top = $('#section01').offset().top;
    if(scrT >= sec1Top - 300) {
        progress()
    }

})




// #section02 gsap (원 커지는거)

gsap.registerPlugin(ScrollTrigger);
// mainCir
$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger:'#section02',
            start:'0% 50%',
            end:'30% 0%',
            scrub:1,
            // markers:true
        }
    })
    .fromTo('.mainCir',{'width':'0','height':'0','duration':'10','ease':'elastic','top':'3%'},{'width':'2500px','height':'2500px','duration':'10','top':'40%'},0)

    // textBox
    gsap.timeline({
        scrollTrigger:{
            trigger:'#section02 .textBox',
            start:'0% 80%',
            end:'100% 80%',
            scrub:1,
            // markers:true
        }
    })
    .fromTo('#section02 .textBox',{'top':'60%','duration':'5','ease':'elastic','opacity':'0'},{'duration':'5','ease':'none','opacity':'1','top':'50%'},0)

    // #section3 gsap (카드 네개 순서대로 올라오는거)

    $(function(){
        gsap.timeline({
            scrollTrigger:{
                trigger:'#section03 ul',
                start:'-40% 90%',
                end:'20% 130%',
                scrub:2,
                // markers:true
            }
        })
        .to('#section03 li:nth-child(1)', {y:'-500px', duration:1, ease:'none'}, 0.2)
        .to('#section03 li:nth-child(2)', {y:'-500px', duration:1, ease:'none'}, 0.4)
        .to('#section03 li:nth-child(3)', {y:'-500px', duration:1, ease:'none'}, 0.6)
        .to('#section03 li:nth-child(4)', {y:'-500px', duration:1, ease:'none'}, 0.8)
    })
})

// section03 sign svg
$(window).scroll(function(){
    let scrT2 = $(window).scrollTop();
    let sec3Top = $('#section03').offset().top;
    if(scrT2 >= sec3Top - 1200) {
        $('#section03 svg').addClass('on')
    }
    
})


// section03 work list -> publishing, banner, popup, detail 스크롤
$(function(){
    $('#section03 .centerbox1340 ul li').eq(0).click(function(){
        var PublishingOffset = $('#section04').offset().top
    
        $('html').animate({scrollTop: PublishingOffset})
    
        return false
    })

    $('#section03 .centerbox1340 ul li').eq(1).click(function(){
        var BannerOffset = $('#section06').offset().top
    
        $('html').animate({scrollTop: BannerOffset + 1050})
    
        return false
    })

    $('#section03 .centerbox1340 ul li').eq(2).click(function(){
        var PopupOffset = $('#section08').offset().top
    
        $('html').animate({scrollTop: PopupOffset})
    
        return false
    })

    $('#section03 .centerbox1340 ul li').eq(3).click(function(){
        var DetailOffset = $('#section10').offset().top
    
        $('html').animate({scrollTop: DetailOffset})
    
        return false
    })
})



// #section05 웹 (PC) 이미지 호버 애니메이션
$(function(){
    $('.screen').mouseover(function(){
        let imgH = $(this).find('img').height();
        let scrH = $(this).outerHeight();
        
        $(this).find('img').css({top:- imgH + scrH})
    })
    
    $('.screen').mouseout(function(){
        $(this).find('img').css({top:0})
    });
})

// #section05 웹 (mobile) 이미지 호버 애니메이션
$(function(){
    $('.mo_screen').mouseover(function(){
        let imgH = $(this).find('.mo_cont').height();
        let scrH = $(this).outerHeight();
        
        $(this).find('.mo_cont').css({top:- imgH + scrH})
    })
    
    $('.mo_screen').mouseout(function(){
        $(this).find('.mo_cont').css({top:0})
    });
})


$(function(){
    $('.animate').scrolla({
        mobile:true,
        once:false
    })
})


$(function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('#section05 section').forEach((section, i) => {
        ScrollTrigger.create({
            trigger:section,
            start:'top top',
            end: '100% top',
            pin: true,
            pinSpacing:false,
            // markers:true
        })
    })
    
    // ScrollTrigger.create({
    //     snap:1 / (section.length -1)
    // })

})


// $('.mockup01 .link li').eq(1).click(function(){
//     $('.viewDetail .FCseoul').show();
// })


// section07 banner detail 
$(function(){
    $('#section07 .workList a').click(function(){
        $(this).siblings('figure').show();

        $('body').css({ overflow: 'hidden' })
        return false;
    });

    $('#section07 .workList figure span').click(function(){
        $('#section07 .workList .banner_detail').hide();
        return false;
    })
        
    $('#section07 .workList .banner_detail').click(function (e) {
        if (e.target == this) {
            $(this).hide()
        }
        $('body').css({ overflow: '' })

    })

    
})


// section09 popup slide

//scroll animation
$(function(){
    $('.animate').scrolla({
        mobile:true,
        once:false
    })
})

$(function(){
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        '(min-width:1024px)' : function(){
            //popup 가로 스크롤
            let list = gsap.utils.toArray('#section09 ul li');
            let scrollTween = gsap.to(list, {
                xPercent:-100 * (list.length -1),
                ease:'none',
                scrollTrigger:{
                    trigger:'#section09',
                    pin:true,
                    scrub:1,
                    start:'center center',
                    end:'300%',
                    // markers:true
                }
            });

            //.imgBox 모션
            gsap.utils.toArray('.imgBox').forEach(function(imgBox){

                //imgBox 가 커지는 애니메이션
                gsap.timeline({
                    scrollTrigger:{
                        trigger:imgBox,
                        containerAnimation:scrollTween,
                        start : 'center right',
                        end:'center center',
                        scrub:true,
                        // markers:true
                    }
                })
                .to(imgBox, {'clip-path':'inset(0%)', ease:'none', duration:1}, 0)

                //imgBox가 작아지는 애니메이션
                gsap.timeline({
                    scrollTrigger:{
                        trigger:imgBox,
                        containerAnimation:scrollTween,
                        start:'center center',
                        end:'center left',
                        scrub:true,
                        // markers:true
                    }
                })
                .to(imgBox, {'clip-path':'inset(20%)', ease:'none', duration:1},0)
            });            

        }
    })
})


// section10 detail page 제목 애니메이션

$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger:'#section10',
            start:'0% 100%',
            end:'0% 20%',
            scrub:1,
            // markers:true
        }
    })
    .fromTo('#section10 .title .a', {x:'-100%'}, {x:'0%', ease:'none', duration:5},0)
    .fromTo('#section10 .title .b', {x:'100%'}, {x:'0%', ease:'none', duration:5},0)

    .to('#section10 .title', {position:'fixed', ease:'none', left:'0', top:'40%', width:'100%', duration:5},0)

    gsap.timeline({
        scrollTrigger:{
            trigger:'#section10 ul',
            start:'100% 50%',
            end:'100% 0%',
            scrub:1,
            // markers: true
        }
    })
    .to('#section10 .title .a', {x:'-100%', ease:'none', duration:5},0)
    .to('#section10 .title .b', {x:'100%', ease:'none', duration:5},0)
})



$(document).ready(function() {
    // 각 섹션에 해당하는 메모 배열을 정의
    const memoArray = [
        [
            `window.addEventListener('DOMContentLoaded', (event) => {
                window.addEventListener('scroll', () => {
                    const scrollTop = window.scrollY || document.documentElement.scrollTop;

                    const header = document.querySelector('header');
                    if (scrollTop > 0) {
                        header.classList.add('on');
                    } else {
                        header.classList.remove('on');
                    }
                });
            });`, 
            `const matchBox = document.querySelector('.match_box');
            const slideBoxW = matchBox.offsetWidth;
            let slideInit = 1;
            
            document.querySelector('.btn_right').addEventListener('click', function() {
                document.querySelector('.btn_left').style.display = 'block';
                slideInit++;
                if (slideInit >= 3) {
                    slideInit = 2;
                }
                if (slideInit >= 2) {
                    this.style.display = 'none';
                }
                document.querySelector('.match_box .match').style.transition = 'left 0.5s';
                document.querySelector('.match_box .match').style.left = '-' + slideBoxW * slideInit + 'px';
            });`, 
            `document.querySelector('.btn_left').addEventListener('click', function() {
                document.querySelector('.btn_right').style.display = 'block';
                slideInit--;
                if (slideInit < 0) {
                    slideInit = 1;
                }
                if (slideInit <= 0) {
                    this.style.display = 'none';
                }
                document.querySelector('.match_box .match').style.transition = 'left 0.5s';
                document.querySelector('.match_box .match').style.left = '-' + slideBoxW * slideInit + 'px';
            });`, 
            `document.querySelectorAll('nav a').forEach(function(link) {
                link.addEventListener('click', function() {
                    const menu = document.querySelector('.mo_menu');
                    const hamburger = document.querySelector('.hamburger');
            
                    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
                    
                    hamburger.classList.toggle('on');
                });
            });
            `,
            `window.addEventListener('scroll', function() {
                let scrT = window.scrollY;
            
                document.querySelector('header').style.top = scrT + 'px';
            });
            `,
            `let rankingElement = document.querySelector('.ranking');
            let rankT = parseInt(window.getComputedStyle(rankingElement).top);
            
            window.addEventListener('scroll', function() {
                let scrT = window.scrollY;
                rankingElement.style.top = (scrT + rankT) + 'px';
            });
            `,
            `let chatElement = document.querySelector('.chat');
            let chatT = parseInt(window.getComputedStyle(chatElement).bottom);
            
            window.addEventListener('scroll', function() {
                let scrT = window.scrollY;
                let winH = window.innerHeight; 
                let docH = document.documentElement.scrollHeight;
                let scrollBottom = docH - (scrT + winH);
            
                chatElement.style.bottom = (scrollBottom + chatT) + 'px';
            });`
        ],
        [
            `document.querySelector('.hamburger').addEventListener('click', function(event) {
                event.preventDefault(); 
                document.querySelector('nav .all_menu_wrap').classList.toggle('on');
                document.querySelector('.hamburger').classList.toggle('on');
            });`, 
            `let floatingMenu = document.querySelector('.floating_menu');
            let recentTop = parseInt(window.getComputedStyle(floatingMenu).top);

            window.addEventListener('scroll', function() {
                let scrollTop = window.scrollY;
                console.log(scrollTop);

                if (scrollTop > recentTop) {
                    floatingMenu.style.transition = 'none';
                    floatingMenu.style.top = scrollTop + recentTop + 'px';
                } else {
                    floatingMenu.style.transition = 'none';
                    floatingMenu.style.top = '30%';
                }
            });`, 
            "섹션 2의 메모 3", 
            "섹션 2의 메모 4"
        ],
        [
            "섹션 3의 메모 1", 
            "섹션 3의 메모 2", 
            "섹션 3의 메모 3", 
            "섹션 3의 메모 4"
        ],
        [
            "섹션 4의 메모 1", 
            "섹션 4의 메모 2", 
            "섹션 4의 메모 3", 
            "섹션 4의 메모 4"
        ],
        [
            "섹션 5의 메모 1", 
            "섹션 5의 메모 2", 
            "섹션 5의 메모 3", 
            "섹션 5의 메모 4"
        ]
    ];

    // 메모장
    const memoPosi = [
        [
            {left:"1100px", top:"100px"},
            {left:"400px", top:"1820px"},
            {left:"650px", top:"2700px"},
            {left:"2650px", top:"30px"},
            {left:"2070px", top:"630px"},
            {left:"3100px", top:"1280px"},
            {left:"3100px", top:"1900px"}
        ],
        [
            {left:"1220px", top:"560px"},
            {left:"800px", top:"1300px"}
        ],
        [
            {left:"50%", top:"100px"},
            {left:"80%", top:"50px"},
            {left:"40%", top:"30px"},
        ],
    ]

    // 버튼들
    const btnPosi = [
        [
            {left:"1170px", top:"420px"},
            {left:"900px", top:"1820px"},
            {left:"290px", top:"2950px"},
            {left:"3000px", top:"290px"},
            {left:"2480px", top:"720px"},
            {left:"3100px", top:"1585px"},
            {left:"3100px", top:"2292px"}
        ],
        [
            {left:"1557px", top:"980px"},
            {left:"1557px", top:"1320px"}
        ],
        [
            {left:"1170px", top:"420px"},
            {left:"800px", top:"600px"},
            {left:"400px", top:"800px"},
        ],
    ]


    let buttonIndex,buttonLeng
    $('.view_detail').click(function(){
        let imgDesktop = $(this).attr('data-desktop');
        let imgMobile = $(this).attr('data-mobile');

        if(imgMobile == undefined){
            $('figure.mobile').hide();
            $('.iconBox span').eq(1).hide();
        } else {
            $('figure.mobile').show();
            $('.iconBox span').show();
        }

        buttonIndex = $(this).data('index');  //1
        buttonLeng = $(this).attr('data-btnLeng');  //7

        $('.detailBox .desktop img').attr('src', imgDesktop);
        $('.detailBox .mobile img').attr('src', imgMobile);

        $('.viewDetail').addClass('on');
        $('body').css('overflow', 'hidden');

        console.log(buttonIndex,buttonLeng);
        for(let i = 0; i < buttonLeng; i++){
            $('.banilaBox').append('<a href="#" class="btn_banila">바닐라스크립트 보기'+(i+1)+'</a>');
            let btnsPosition = btnPosi[buttonIndex-1][i];
            $('.banilaBox a').eq(i).css({left:btnsPosition.left, top:btnsPosition.top})
        }

            
        // .btn_banila 버튼 클릭 시 .memoBox 위치 변경
        $('.btn_banila').click(function() {
            
            let btnBanilaIndex = $(this).index();
            let pos = memoPosi[buttonIndex-1][btnBanilaIndex];

            if ($(this).hasClass('banila')) {
                // .banila 클래스를 가지고 있을 때 (즉, 이미 클릭되어 memoBox가 표시된 상태일 때)
                $('.memoBox').css({left: -500, top: 0}); // memoBox를 화면 밖으로 이동
                $(this).text('바닐라스크립트 보기').removeClass('banila');
            } else {
                // .banila 클래스가 없을 때 (즉, 처음 클릭하거나 숨겨진 상태일 때)
                $(this).text('제이쿼리 보기').addClass('banila');
                $('.memoBox').css({left: pos.left, top: pos.top}); // memoBox 위치 설정
                $('.memoBox').find('.memo').text(memoArray[buttonIndex-1][btnBanilaIndex]);
                
                // 다른 버튼들이 있으면 그들의 상태도 초기화
                $('.btn_banila').not(this).removeClass('banila').text('바닐라스크립트 보기');
            }
            console.log(buttonIndex-1,btnBanilaIndex)
            return false;
        });

        return false

    })

    $('.close').click(function(){
        $('.viewDetail').removeClass('on');
        $('body').css('overflow', 'auto');
        $('.banilaBox').empty();
        $('.memoBox').css({left: -500, top: 0});
        $('.memoBox').find('.memo').text('');

        $('.detailBox .desktop img').attr('src', '');
        $('.detailBox .mobile img').attr('src', '');
        
        $('.viewDetail').animate({scrollTop:0})
        return false;
    })

    

    $('.viewDetail .iconBox span').click(function(){
        let spanIndex = $(this).index();
        $('.detailBox .detail_container').animate({left: -spanIndex * 100 + '%', });
        $('.viewDetail').animate({scrollTop:0})
        $(this).addClass('on').siblings().removeClass('on');
    })

        
    $('.viewDetail').scroll(function(){
        let viewScrT = $(this).scrollTop();
        $('.viewDetail .iconBox').stop().animate({top:viewScrT + 20}, 200)
        $('.viewDetail .close').stop().animate({top:viewScrT + 20}, 200)
    })


    // section10 상세페이지 자세히보기

    $('#section10 .detailPage li').click(function(){
        let detailIndex = $(this).index();

        $('#section10 .detail_detail').show().animate({scrollTop:0});
        $('#section10 .detail_detail figure').eq(detailIndex).show()
        $('body').css({ overflow: 'hidden' });
        $('.mouse_click').hide()
        return false
    })

    // $('#section10 .detailPage li').eq(0).click(function(){
    //     $('#section10 .detail_detail').show().animate({scrollTop:0});
    //     $('#section10 .detail_detail figure').eq(0).show()
    //     $('body').css({ overflow: 'hidden' });
    //     $('.mouse_click').hide()
    //     return false
    // })
    
    // $('#section10 .detailPage li').eq(1).click(function(){
    //     $('#section10 .detail_detail').show().animate({scrollTop:0});;
    //     $('#section10 .detail_detail figure').eq(1).show()
    //     $('body').css({ overflow: 'hidden' });
    //     $('.mouse_click').hide()
    //     return false
    // })

    $('#section10 .detail_detail span').click(function(){
        $('#section10 .detail_detail').hide();
        $('#section10 .detail_detail figure').hide()
        $('.mouse_click').show()
    })

    $('#section10 .detail_detail').click(function (e) {
        if (e.target == this) {
            $(this).hide()
            $('#section10 .detail_detail figure').hide()
        }
        $('body').css({ overflow: '' })
        $('.mouse_click').show()

    })


});

// section10 마우스 클릭

document.addEventListener('DOMContentLoaded', function() {

    const listItems = document.querySelectorAll('#section10 ul li');

    listItems.forEach(item => {
        const mouseCircle = item.querySelector('.mouse_click');

        item.addEventListener('mouseenter', () => {
            mouseCircle.style.opacity = '1'; // 나타나게
        });

        item.addEventListener('mouseleave', () => {
            mouseCircle.style.opacity = '0'; // 사라지게
        });

        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            mouseCircle.style.left = `${e.clientX - rect.left - (mouseCircle.offsetWidth / 2) + 50}px`;
            mouseCircle.style.top = `${e.clientY - rect.top - (mouseCircle.offsetHeight / 2) + 50}px`;
        });
    });
});