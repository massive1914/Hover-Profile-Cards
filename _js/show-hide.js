$(document).ready(function () {
    $('li.requirement').hover(function () {
        $(this).find('span').show();
    }, function () {
        $(this).find('span').hide();
    });
});