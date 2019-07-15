$(window).load(function () {
  $.get('../csv/table2_csv.csv', function (data) {
    var csv = $.csv.toArrays(data);
    var itemlist = '';

    $(csv).each(function (index) {
      itemlist += '<thead><tr><th>' + this[0] + '</th><th>' + this[1] + '</th><th>' + this[2] + '</th></tr><tbody><tr><td>' + this[0] + '</td><td>' + this[1] + '</td><td>' + this[2] + '</td></tr><tr><td>' + this[0] + '</td><td>' + this[1] + '</td><td>' + this[2] + '</td></tr></tbody></thead>';
    })
    $('.demo02').html(itemlist);
  });
});
