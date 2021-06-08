$(document).ready(function (){
    $('.header__burger').on('click',function (){
        $('.header__burger').toggleClass('header__burger_active')
        $('.header__ul').toggleClass('header__ul_active')
    })
})