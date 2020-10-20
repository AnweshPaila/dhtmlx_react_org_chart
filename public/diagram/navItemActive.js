function navAcitve() {
    $('.nav-link').removeClass('active');
    let routePath = location.pathname;
    let enitrePath = routePath.split('/');
    let path = enitrePath[2];
    switch (path) {
        case "Index":
            $('.nav-link').eq(0).addClass('active');
            break;
        case "AdminLogin":
            $('.nav-link').eq(1).addClass('active');
            break;
        case "ReportingUsers":
            $('.nav-link').eq(1).addClass('active');
            break;
        default:
            $('.nav-link').eq(0).addClass('active');
            break;
    }
}
    