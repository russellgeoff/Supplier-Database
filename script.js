$(document).ready(function(){
     $('button').click(function () {
     	var supplierName = $('input[name=supplierName]').val();
     	$('.supplierList').append('<div class="item">Supplier: '+ supplierName + '</div>');
     });
     $('input').focus(function () {
          $(this).css('outline-color', '#FF0000');
     });
});
