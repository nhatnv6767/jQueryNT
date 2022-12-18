function CallData() {
    this.getListData = function () {
        // ajax get data from json
        return $.getJSON("./../data/Data.json")
    }
}