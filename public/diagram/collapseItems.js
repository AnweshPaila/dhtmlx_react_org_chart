function collapseItems() {
    var mouseOnDiv = $('.shape_content');

    for (let i = 0; i < mouseOnDiv.length; i++) {
        let imageSrc = $(mouseOnDiv[i]).find('img').attr('src');
        let temp = imageSrc.split('/');
        let id = temp[2].substr(0, temp[2].indexOf('.'));

        if (id !== managerOrgId) {
            diagram.collapseItem(id);
        }
    }
}

function expandItemOnSearch(id) {
    
        searchedEmployees.sort(sortByProperty("id"));

        for (let i = 0; i < searchedEmployees.length; i++) {
            searchDiagram.expandItem(searchedEmployees[i].id);
            if (id === searchedEmployees[i].id) {
                searchDiagram.collapseItem(id);
            }
        }
}


function collapseItemsUsingOrg(type) {
    if (orgData.length > 0) {
        orgData.filter(function (item) {
            if (item.from === undefined && item.to === undefined && item.id !== managerOrgId) {
                if (type !== "search") {
                    console.log('type ->', type);
                    diagram.collapseItem(item.id);
                }
                else {
                    searchDiagram.collapseItem(item.id);
                }
            }
        });
    }
}

function alignManagerCenter() {
    var element = document.getElementById(managerOrgId);

    if (element !== null) {

        element.scrollIntoView();
        element.scrollIntoView(true);
        element.scrollIntoView({ block: "end" });
        element.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });

    }
}