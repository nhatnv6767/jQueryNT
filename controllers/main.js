$(document).ready(function () {
    var callData = new CallData();

    renderHTML()

    function renderHTML() {
        callData.getListData()
            .done(function (result) {
                console.log(result.navPills)
                var contentNavPills = ""
                result.navPills.forEach(function (item, index) {
                    contentNavPills += `
                        <li class="nav-item">
                        <a
                            class="nav-link active  btn-default"
                            data-toggle="pill"
                            href="#tabTopClothes"
                        >
                        Áo
                        </a>
                </li>
                    `
                })
            })
            .fail(function (err) {
                console.log(err)
            });
    }
})