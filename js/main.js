// Đoạn này sẽ chạy khi mà phần giao diện được render xong
$(document).ready(function () {
    var content = $("#myId").html();
    console.log(content)

    var contentClass = $(".myClass").html()
    console.log(contentClass)

    var contentInput = $("#txtInput").val()
    console.log(contentInput)

    $("#btnClick").click(function () {
        console.log($("#txtInput").val())
    })

    $("#btnShow").click(function () {
        // $("#divHi").css({display: "block"})
        $("#divHi").show();
    })
    $("#btnHide").click(function () {
        // $("#divHi").css({display: "none"})
        $("#divHi").hide()
    })
})