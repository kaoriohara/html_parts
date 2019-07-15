$(window).load(function () {
  $.get('../csv/table2_csv.csv', function (data) {
    var csv = $.csv.toArrays(data);
    var itemlist = '';

    $(csv).each(function (index) {
      itemlist += '<tr><th>' + this[0] + '</th><td>' + this[1] + '</td></tr>';
    })
    $('.demo01').html(itemlist);
  });
});
