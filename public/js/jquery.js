$(document).ready(function(){
    console.log('yesss');
    $('.secondContainer__items--subcontent').hide();

    $('.secondContainer__items--header').hover(function(){
        $(this).css("text-decoration", "underline");
    },function(){
        $(this).css("text-decoration", "none"); 
    }).click(function(e){
        e.preventDefault();
        $(this).next('.secondContainer__items--subcontent').toggle('slow');
    }); 

    // form display

    $('.addBtn').on('click',function(){
       $('.form__add').slideToggle('slow');
    });

    // sign in form display

    $('.title__primary--input').on('click', function(){
        $('.modal').toggle('slow');
       
    })

    $('.modal__container--span').on('click', () => $('.modal').toggle('slow'));

    // story edit button 
    $('.edit').on('click', function(e) {
        e.preventDefault();
        $(this).next('.add').toggle('slow')
    });
});