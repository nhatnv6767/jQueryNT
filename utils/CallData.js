function CallData() {
    this.getListData = function () {
        // ajax get data from json
        $.getJSON("./../data/Data.json")
    }
}