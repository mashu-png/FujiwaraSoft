(function(){
    let StartElement = document.getElementById('StartAnimation')
    let StartAnimationImageElement = document.getElementById('TopImageAnimation')
    let StartAnimationTextElement = document.getElementById('StartAnimationTextFields')
    let headerElement = document.getElementById('header');
    let menuElement = document.getElementById('menu');
    let MenuDisplayElement = document.getElementById('MenuDisplay');
    let HomeElement = document.getElementById('Home');
    let AboutElement = document.getElementById('About')
    let RecruitElement= document.getElementById('Recruit')
    let ContactElement = document.getElementById('Contact')
    let CloseElement = document.getElementById('Close');
    let mainElement = document.getElementById('main');
    let footerElement = document.getElementById('footer');

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
            $('#TopImageAnimation').fadeOut(1750);
            $('#StartAnimationBottomTextFields').fadeOut(1500);  
        },8000)
        setTimeout(function () {
            $('#header').hide().fadeIn(1000)
            $('#main').hide().fadeIn(1000)
            $('#footer').hide().fadeIn(1000)
        },10000);
        //setTimeout(loadedCSS,12000)
    }

    menuElement.addEventListener("click", MenuClickINHandler)
    function MenuClickINHandler(){
        setTimeout(function(){
            $('#header').fadeOut(1000);
            $('#main').fadeOut(1000);
            $('#footer').fadeOut(1000);
        },500);
        setTimeout(function(){
            $('#MenuDisplay').hide().fadeIn(2000);
            MenuHeaderColor();
        },1500)
    }


    const AddClassName = "Exit";

    CloseElement.addEventListener("click" ,MenuClickOutHandler)
    function MenuClickOutHandler(){
        HomeElement.classList.toggle(AddClassName);
        AboutElement.classList.toggle(AddClassName);
        RecruitElement.classList.toggle(AddClassName);
        ContactElement.classList.toggle(AddClassName);
        setTimeout(function(){
            $('#MenuDisplay').fadeOut(2000);

        },500);
        setTimeout(function(){
            $('#header').hide().fadeIn(1000)
            $('#main').hide().fadeIn(1000)
            $('#footer').hide().fadeIn(1000)
        },1500)

    }

    function MenuHeaderColor(){
        $('.MenuTexts').animate({
            color: "#000000"
        },1000);
        $('.MenuTexts').animate({
            color: "#ffffff"
        },1000)
        MenuHeaderColor();
    }
}())