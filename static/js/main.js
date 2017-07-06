var colors = ['red', 'blue', 'orange', 'purple'];

colors.forEach(function(color) {
    $('#' + color).click(function() {
        $.get('/' + color, function(res) {
            headingHTML = '<h1>' + res.text + '</h1>';
            $('#heading').html(headingHTML);
            imgHTML = '<img src="static/imgs/' + res.img + '" alt="ninja" height=300px>';
            $('#img-div').html(imgHTML);
        }, 'json');
    });
});