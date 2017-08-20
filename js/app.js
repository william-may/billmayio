$(document).ready(function(){
    addNavEventListeners()
});

function addNavEventListeners() {
    $('nav a').click(function(e){
        e.preventDefault();
        var sectionId = e.currentTarget.id + "Div"

        $('html body').animate({
            scrollTop: $('#' + sectionId).offset().top
        }, 1000);
    });
}