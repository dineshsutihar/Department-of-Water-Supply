$(document).ready(function(){
    $(".showToolTip").tooltip();
    $(".firstInput").focus().select();
    $(".common_page table:not(.table)").each(function(){
        $(this).addClass("table table-hover table-striped");
    });
});

