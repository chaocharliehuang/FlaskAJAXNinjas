$('.btn').click(function() {
    var color = $(this).attr('id');
    displayInfo(color);
});

$('#form-color').submit(function(e) {
    var color = $('#customcolor').val();
    displayInfo(color);
    $('#customcolor').val('');
    e.preventDefault();
});

function displayInfo(color) {
    $.get('/' + color, function(res) {
        headingHTML = '<h1>' + res.text + '</h1>';
        $('#heading').html(headingHTML);
        imgHTML = '<img src="static/imgs/' + res.img + '" alt="ninja" height=300px>';
        $('#img-div').html(imgHTML);
    }, 'json');
}