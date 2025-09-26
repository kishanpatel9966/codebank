$(document).ready(function() {
    $('.accoradian__content').first().slideDown();
    $('.accoradian__trigger').first().addClass('active')

    $('.accoradian__trigger').click(function() {
        $('.accoradian__trigger').removeClass('active');
        $(this).addClass('active');

        $('.accoradian__content').slideUp();
        $(this).next().slideDown();

    });
});