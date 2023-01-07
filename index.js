
//$('h2').css('color','blue'); // łapanie w jquery <h2>
//tworzenie animacji klasy anim
$('.anim').css({
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: 200,
    height: 200,
    //backgroundColor: 'red'
})/*
.animate({
    left: 500,
}, 1000)
.animate({
    bottom: 500,
}, 2000)
.animate({
    width: 300,
    height: 300,
}, 500)
// powrót animacji
.animate({
    left: 0,
    bottom: 0,
    width: 200,
    height: 200,
}, 3000);*/
      //buttony klasy
$('#add-class').click(() => $('.anim').addClass('pink'));
$('#remove-class').click(() => $('.anim').removeClass('pink'));
$('#toggle-class').click(() => $('.anim').toggleClass('pink'));
$('#hide').click(() => $('.anim').hide());
$('#show').click(() => $('.anim').show());
$('#slide-up').click(() => $('.anim').slideUp(500));
$('#slide-down').click(() => $('.anim').slideDown(500));
$('#fade-in').click(() => $('.anim').fadeIn(500));
$('#fade-out').click(() => $('.anim').fadeOut(500));
$('#fade-to').click(() => $('.anim').fadeTo(500, 0.3));

//$('.anim').html('<p class="pink">Hello<p>');
$('.anim')
   .append('<p class="pink">hello</p>')
   .append('<p>drugi element</p>')
   .prepend('<p>trzeci element</p');

$('#toggle-class').appendTo($('.anim')); //wrzucenie buttona do klasy   






