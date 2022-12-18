$(document).ready(function () {
    var callData = new CallData();

    renderHTML()

    function renderHTML() {
        callData.getListData()
            .done(function (result) {
                // console.log(result.navPills)
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
        var elmItem = null;
        switch (tabName) {
            case "tabTopClothes":
                tempArr = getTypeArr("topclothes", arrTabPane)
                elmItem = getElmItem(tempArr)
                break;
            case "tabBotClothes":
                tempArr = getTypeArr("botclothes", arrTabPane)
                elmItem = getElmItem(tempArr)
                break;
            case "tabShoes":
                tempArr = getTypeArr("shoes", arrTabPane)
                elmItem = getElmItem(tempArr)
                break;
            case "tabHandBags":
                tempArr = getTypeArr("handbags", arrTabPane)
                elmItem = getElmItem(tempArr)
                break;
            case "tabNecklaces":
                tempArr = getTypeArr("necklaces", arrTabPane)
                elmItem = getElmItem(tempArr)
                break;
            case "tabHairStyle":
                tempArr = getTypeArr("hairstyle", arrTabPane)
                elmItem = getElmItem(tempArr)
                break;
            case "tabBackground":
                tempArr = getTypeArr("background", arrTabPane)
                elmItem = getElmItem(tempArr)
                break;
            default:
                break;
        }
        return elmItem;
    }

    function getTypeArr(tabType, data) {
        var tempArr = [];
        data.forEach(function (item) {
            if (item.type === tabType) {
                tempArr.push(item)
            }
        })
        return tempArr;
    }

    function getElmItem(tempArr) {
        var elmItem = ""
        tempArr.forEach(function (item) {
            elmItem += `
                <div class="col-md-3">
                    <div class="card text-center">
                        <img
                        src="${item.imgSrc_jpg}"
                        />
                        <h4><b>${item.name}</b></h4>
<!--                        gan nhung du lieu vao nut-->
                        <button 
                        data-id="${item.id}" 
                        data-type="${item.type}"
                        data-name="${item.name}"
                        data-desc="${item.desc}"
                        data-imgsrcjpg="${item.imgSrc_jpg}"
                        data-imgsrcpng="${item.imgSrc_png}"
                        class="changeStyle"
                        >Thử đồ
                        </button>
                    </div>
                </div>
            `
        })
        return elmItem;
    }

    // vì class changeStyle được tạo sau khi render xong giao diện nên không thể làm
    // như những bước ở trên để thử chức năng click của nút thử đồ được
    $("body").delegate(".changeStyle", "click", function () {
        // xác định đang bấm vào nút đó, lấy thuộc tính của nút đang bấm
        var id = $(this).data("id")
        var type = $(this).data("type")
        var name = $(this).data("name")
        var desc = $(this).data("desc")
        var imgsrc_jpg = $(this).data("imgsrcjpg")
        var imgsrc_png = $(this).data("imgsrcpng")


    })
})