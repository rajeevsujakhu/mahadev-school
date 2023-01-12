$(window).scroll(function(){
    if($(this).scrollTop()>100)
    {
    $(".arrow").show()
    }
    else
    {
        $(".arrow").hide()
    }
})

$(document).ready( function () {
    $('#table_id').DataTable();
} );

var yourTable= $('#table_id').DataTable({
    lengthMenu: [5, 10, 15]
})