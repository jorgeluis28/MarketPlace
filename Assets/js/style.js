/* --------- header ---------- */
//... navbar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//... left sidebar toggle
$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
});

//... right sidebar toggle
$('.cart').on('click', function () {
    $('.rsb').toggleClass('active');
    $('section form').toggleClass('active');
});


//... checkout counter up , down
var options = {
    selectors: {
        addButtonSelector: '.btn-add',
        subtractButtonSelector: '.btn-subtract',
        inputSelector: '.counter',
    },
    settings: {
        checkValue: true,
        isReadOnly: true,
    },
};

$(".input-counter").inputCounter(options);

//... open account contents
function openContent(evt, accountList) {
    var i, account_content, account_links;
    account_content = document.getElementsByClassName("account_content");
    for (i = 0; i < account_content.length; i++) {
      account_content[i].style.display = "none";
    }
    account_links = document.getElementsByClassName("account_links");
    for (i = 0; i < account_links.length; i++) {
      account_links[i].className = account_links[i].className.replace(" active", "");
    }
    document.getElementById(accountList).style.display = "block";
    evt.currentTarget.className += " active";
}

//... manage list open trolley modal from new list modal
$(".list-step2").addClass("hide");
$(".save_trolley_btn").click(function(){
    $(".list-step1").removeClass("show");
    $(".list-step1").addClass("hide");
    $(".list-step2").removeClass("hide");
    $(".list-step2").addClass("show");
    
});
$(".process_btn").click(function(){
    $(".list-step1").removeClass("show");
    $(".list-step1").addClass("hide");
    $(".list-step2").removeClass("hide");
    $(".list-step2").addClass("show");
});
$(".back_trolley_btn").click(function(){
    $(".list-step1").removeClass("hide");
    $(".list-step1").addClass("show");
    $(".list-step2").removeClass("show");
    $(".list-step2").addClass("hide");
})

//... product arrage as cards or tables
$("#arrange_withtable").addClass("hide");
$("#arrange_card_icon").click(function(){
    $(this).addClass("active");
    $("#arrange_table_icon").removeClass("active");
    $("#arrange_withcard").removeClass("hide");
    $("#arrange_withtable").addClass("hide");
});
$("#arrange_table_icon").click(function(){
    $(this).addClass("active");
    $("#arrange_card_icon").removeClass("active");
    $("#arrange_withcard").addClass("hide");
    $("#arrange_withtable").removeClass("hide");
});