$(document).ready(function () {
    var callData = new CallData();

    renderHTML()

    function renderHTML() {
        callData.getListData()
            .done(function (result) {
                console.log(result.navPills)
                var contentNavPills = ""
                var contentTabPanes = ""
                result.navPills.forEach(function (item, index) {
                    var activeClass = item.tabName === "tabTopClothes" ? "active" : ""
                    var fadeClass = item.tabName !== "tabTopClothes" ? "fade" : ""

                    contentNavPills += getElmTabPill(item, activeClass)
                    contentTabPanes += `
                        <div class="tab-pane container ${fadeClass} ${activeClass}" id="${item.tabName}">
                            <div class="row">
                                ${renderTabPane(item.tabName, result.tabPanes)}
                            </div>
                        </div>
                    `
                })
                $(".nav-pills").html(contentNavPills)
                $(".tab-content").html(contentTabPanes)
            })
            .fail(function (err) {
                console.log(err)
            });
    }

    function getElmTabPill(item, activeClass) {
        return `
                <li class="nav-item">
                    <a
                        class="nav-link ${activeClass} btn-default"
                        data-toggle="pill"
                        href="#${item.tabName}"
                    >
                        ${item.showName}
                    </a>
                </li>
            `
    }

    function renderTabPane(tabName, arrTabPane) {
        var tempArr = null;
        switch (tabName) {
            case "tabTopClothes":
                break;
            default:
                break;
        }
    }
})