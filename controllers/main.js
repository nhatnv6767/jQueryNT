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

                    contentNavPills += getElmTabPill(item, activeClass)
                    contentTabPanes += `
                        <div class="tab-pane container active" id="tabTopClothes">
                            <div class="row">
                                ${item.showName}
                            </div>
                        </div>
                    `
                })
                $(".nav-pills").html(contentNavPills)
                // $(".tab-content").html(contentTabPanes)
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
})