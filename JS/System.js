//const { createFunctionExpression } = require("@vue/compiler-core");

(function(){
    const HeaderElement = document.getElementById('header')
    const menuElement = document.getElementById('menu');
    const HomeElement = document.getElementById('Home');
    const AboutElement = document.getElementById('About');
    const AboutMenuElement = document.getElementById('About-menu');
    const RecruitElement= document.getElementById('Recruit')
    const ContactElement = document.getElementById('Contact')
    const CloseElement = document.getElementById('Close');
    const mainElement = document.getElementById('main');
    const footerElement = document.getElementById('footer');
    const AboutPages = {
        AboutPages:document.getElementById('AboutPage'),
        About_Header:document.getElementById('header-About'),
        About_menu:document.getElementById('menu-About'),
        About_Body:document.getElementById('main-About'),
        About_footer:document.getElementById('footer-About')
    };

    $('#TopImageAnimation').hide()
    $('#StartAnimationTopTextFields').hide()
    $('#StartAnimationBottomTextFields').hide()

    window.onload = TopAnimation();

    function TopAnimation(){
        setTimeout(function () {
            $('#StartAnimationTopTextFields').hide().fadeIn(2500);
            $('#TopImageAnimation').hide().fadeIn(1000);
            $('#StartAnimationBottomTextFields').hide().fadeIn(4500);
        },3000);
        setInterval(function () {
            $('#StartAnimationTopTextFields').fadeOut(2000);
            $('#TopImageAnimation').fadeOut(1800);
            $('#StartAnimationBottomTextFields').fadeOut(1600);  
        },8000)
        setTimeout(function () {
            $('#header').hide().fadeIn(1000)
            $('#main').hide().fadeIn(200)
            $('#footer').hide().fadeIn(6000)
        },10000);
        //setTimeout(loadedCSS,12000)
    }

    const StartAnimationClassName = "AnimationStart"

    menuElement.addEventListener("click", MenuClickINHandler)
    function MenuClickINHandler(){
        setTimeout(function(){
            HomeElement.classList.add(StartAnimationClassName);
            AboutElement.classList.add(StartAnimationClassName);
            RecruitElement.classList.add(StartAnimationClassName);
            ContactElement.classList.add(StartAnimationClassName);
            console.log(ContactElement.classList);
            $('#header').fadeOut(1000)
            $('#main').fadeOut(1000);
            $('#footer').fadeOut(1000);
        },500);
        setTimeout(function(){
            $('#MenuDisplay').hide().fadeIn(2000);
        },2000)

        if(HomeElement.classList[1] === StartAnimationClassName){
            HomeElement.classList.remove(StartAnimationClassName)
            AboutElement.classList.remove(StartAnimationClassName)
            RecruitElement.classList.remove(StartAnimationClassName)
            ContactElement.classList.remove(StartAnimationClassName)
        }
    }

    const EndAnimationClass = "Exit";

    CloseElement.addEventListener("click" ,MenuClickOutHandler)
    function MenuClickOutHandler(){
        setTimeout(function(){
            HomeElement.classList.add(EndAnimationClass);
            AboutElement.classList.add(EndAnimationClass);
            RecruitElement.classList.add(EndAnimationClass);
            ContactElement.classList.add(EndAnimationClass);
            $('#MenuDisplay').fadeOut(1000);
        },500);
        setTimeout(function(){
            $('#header').hide().fadeIn(1000);
            $('#main').hide().fadeIn(1000);
            $('#footer').hide().fadeIn(1000);
            HomeElement.classList.remove(EndAnimationClass)
            AboutElement.classList.remove(EndAnimationClass)
            RecruitElement.classList.remove(EndAnimationClass)
            ContactElement.classList.remove(EndAnimationClass)
        },1500);

    }


    HomeElement.addEventListener("click", HomeClickINHandler)
    AboutElement.addEventListener("click", AboutClickINHandler)
    RecruitElement.addEventListener("click", RecruitClickINHandler)
    ContactElement.addEventListener("click", ContactClickINHandler)


    function HomeClickINHandler(){
        setTimeout(function () {
            $('#MenuDisplay').fadeOut(1000);
            HomeElement.classList.add(EndAnimationClass);
            AboutElement.classList.add(EndAnimationClass);
            RecruitElement.classList.add(EndAnimationClass);
            ContactElement.classList.add(EndAnimationClass);
        },500)
        setTimeout(function() {
            $('#header').hide().fadeIn(2500);
            $('#main').hide().fadeIn(3500);
            $('#footer').hide().fadeIn(4500);
            HomeElement.classList.remove(EndAnimationClass);
            AboutElement.classList.remove(EndAnimationClass);
            RecruitElement.classList.remove(EndAnimationClass);
            ContactElement.classList.remove(EndAnimationClass);
        },1500);

    }

    function AboutClickINHandler(){
        setTimeout(function () {
            $('#MenuDisplay').fadeOut(1000);
            HomeElement.classList.add(EndAnimationClass);
            AboutElement.classList.add(EndAnimationClass);
            RecruitElement.classList.add(EndAnimationClass);
            ContactElement.classList.add(EndAnimationClass);
        },500)
        setTimeout(function () {
            HomeElement.classList.remove(EndAnimationClass);
            AboutElement.classList.remove(EndAnimationClass);
            RecruitElement.classList.remove(EndAnimationClass);
            ContactElement.classList.remove(EndAnimationClass);
            
        SettingAboutPageStyles();
        },1500);
    }
    function RecruitClickINHandler(){
        setTimeout(function(){
            $('#header-Recruit').hide().fadeIn(1000);
            $('#main-Recruit').hide().fadeIn(2000);
            $('#footer-Recruit').hide().fadeIn(3000);
        },1000)
    }
    function ContactClickINHandler(){
        setTimeout(function(){
            $('#header-Contact').hide().fadeIn(1000);
            $('#main-Contact').hide().fadeIn(2000);
            $('#footer-Contact').hide().fadeIn(3000);
        },1000)
    }

    HeaderPosition();
    function HeaderPosition () {
        let navPosition = $('.header').offset().top;
        let navHeight = $('.header').outerHeight();
        $(window).on('scroll',function() {
            if($(this).scrollTop() > navPosition){
                $('body').css('padding-top' , navHeight);
                $('.header').addClass('TitleFixed');
            }else{
                $('body').css('padding-top',0);
                $('.header').removeClass('TitleFixed');
            }
        })
    }

    function SettingAboutPageStyles () {
        const AboutPageElements = AboutPages.AboutPages;
        const AboutHeaderElement = AboutPages.About_Header;
        const AboutBodyElement = AboutPages.About_Body;
        const marqueeTextElement = document.getElementById('marqueeText-About');
        const AboutFooterElement = AboutPages.About_footer;
        const HeaderStyle = AboutHeaderElement.style;
        const BodyStyle = AboutBodyElement.style;
        const FooterStyle = AboutBodyElement.style;

        AboutPageElements.style.display = "flex"
        $('#header-About').hide().fadeIn(2500);
        $('#main-About').hide().fadeIn(3500);
        $('#footer-About').hide().fadeIn(4500);
        HeaderStyle.backgroundColor = "#FADBDA"
        HeaderStyle.color = "#000"
        HeaderStyle.display = "fixed"
        BodyStyle.backgroundColor = "#FFFEF6"
        marqueeTextElement.innerHTML = "This is a ABout page"
        marqueeTextElement.style.textAlign = "left";
        marqueeTextElement.style.color = "#fff"

        AboutMenuElement.addEventListener('click',function() {
            $('.AboutPage').fadeOut(2000);
            MenuClickINHandler();
        })
    }
}())