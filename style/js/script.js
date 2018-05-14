$(document).on("click","ul.nav li.parent > a ", function(){          
    $(this).find('i').toggleClass("fa-minus");      
}); 
$(".sidebar span.icon").find('em:first').addClass("fa-plus");

$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
});

$('#scrollTopBtn').click(function(){
    $("html, body").animate({ scrollTop: "0px" })
});