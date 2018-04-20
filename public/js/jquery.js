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
});