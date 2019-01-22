var clicks = 0;
var touches = 0;

$(".other").hide();

$(".next").click(function(){
    $(".N").text("Jk, you're just a normal person");
    $(".picture").html("<img src='https://i.imgur.com/xrPWYUl.png'>");
    clicks = clicks + 1;
    
});

$(".next").click(function(){
    if (clicks === 2){
        $(".N").text("Annnd this is a set... great.");
       $(".picture").html("<img src='https://i.imgur.com/JELLiXh.png'>");
        } 
    if (clicks === 3){
     $(".N").text("Oh, what is it that you're looking at? me? Why thank you, I'm flattered");
       $(".picture").html("<img src='https://i.imgur.com/7ca7N0P.png'>");
        } 
    if (clicks === 4){
             $(".N").text("What? You're really gonna listen to everything you see on the internet? If you're smart, you'll click the picture.");
       $(".picture").html("<img src='https://i.imgur.com/ENDOvRb.png'>");
        }
    
});

 if (clicks === 6){
     $(".N").text("...");
       $(".picture").html("<img src='https://i.imgur.com/BKI4tSn.png'>");
        
 }

  $('.N').mouseenter(function(){
        $('.N').css('margin-top','100px');
    $('.N').text('no plz');
  });
  
  

  
  $('.N').click(function(){
      $('.lose').hide();
      $('body').css('background-color','red');
      $('.N').text('you should not have done that');
      $('.N').css('color','white');
  });
  
  $('.picture').click(function(){
      $('.N').text('you found the treasure! :D');
        $(".picture").html("<img src='https://i.imgur.com/HLZuvdg.png'>");
         $('marquee').hide();
        $('button').hide();
  });
  
 