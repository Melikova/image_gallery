$(document).ready(()=>{
    let value='';
    $(".nav-link").click(function(){
        let clicked_value = $(this).attr('data-filter');
        selected = (clicked_value !== value)? true: false ;
        if (clicked_value !== value) value = clicked_value;
        if(selected){
            $('.item_box').not('.all').hide(1000);
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
            if(value == 'all'){
                setTimeout(()=>{
                    $('.item_box').show(1000);}, 1000);
            }else{
                setTimeout(()=>{
                    $('.item_box').filter('.'+value).show(1000);}, 1000);
            }
        }
    })
})