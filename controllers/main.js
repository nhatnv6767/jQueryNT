$(document).ready(function () {
    var callData = new CallData();

    renderHTML()

    function renderHTML() {
        callData.getListData()
            .done(function (result) {
                console.log(result)
            })
            .fail(function (err) {
                console.log(err)
            });
    }
})