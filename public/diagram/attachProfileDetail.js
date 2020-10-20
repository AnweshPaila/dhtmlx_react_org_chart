function attachProfileUrl() {
    
    for (let i = 0; i < $('.dhx_diagram_item').length; i++) {
        var itemContainer = $('.dhx_shape-container .dhx_diagram_org_item .shape_content-container')[i];
        $(itemContainer).css('cursor', 'pointer');
        var item = $('.dhx_shape-container .dhx_diagram_org_item')[i];
        var itemContainerId = $(item).attr('dhx_id');
        var url = "location.href='/Home/Profile?id=" + itemContainerId + "'";//"'/Home/Profile?id=" + ItemContainerId +';
        $(itemContainer).attr("onclick", "location.href=" + url);
    }
}

