
$('h2').css('color','blue'); // łapanie w jquery <h2>
//tworzenie animacji klasy anim
$('.anim').css({
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: 200,
    height: 200,
    backgroundColor: 'red'
})
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
}, 3000)