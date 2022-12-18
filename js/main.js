// Đoạn này sẽ chạy khi mà phần giao diện được render xong
$(document).ready(function () {
    var content = $("#myId").html();
    console.log(content)

    var contentClass = $(".myClass").html()
    console.log(contentClass)
})