function attachToolTips() {
    var mouseOnDiv = $('.shape_content');

    for (let i = 0; i < mouseOnDiv.length; i++) {
        let imageSrc = $(mouseOnDiv[i]).find('img').attr('src');
        let temp = imageSrc.split('/');
        //console.log('temp ->', temp[2].substr(0, temp[2].indexOf('.')));
        let redirectURL = '/Home/Profile?id=' + temp[2].substr(0, temp[2].indexOf('.'));
        let tipContent = $(
            '<p><a href="' + redirectURL + '" style="color:white;cursor:pointer;text-decoration:none">View Profile</a></p>'
        );
        $(mouseOnDiv[i]).data('powertipjq', tipContent);
        $(mouseOnDiv[i]).powerTip({
            placement: 'se',
            mouseOnToPopup: true
        });
    }
}