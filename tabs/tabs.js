$(document).ready(function() {
    $('#tabs-1').show();
    $('.btn').first().addClass('active');

    $('.btn').click(function() {
        var tabname = $(this).attr("href");
        $('.tab-content').hide();
        $(tabname).show();

        $('.btn').removeClass('active');
        $(this).addClass('active');

    });
});