$(document).ready(function(){
     $('button').click(function () {
     	var supplierName = $('input[name=supplierName]').val();
     	var industryName = $('input[name=industry]').val();
     	/*jshint multistr: true */
     	var itemData = "<div class='item' style='display:none'> \
     		Supplier: " + supplierName + "\
     		Industry: " + industryName + "</div>";
     	$(itemData).appendTo('.supplierList').fadeIn('slow');
     });
     $('input').focus(function () {
          $(this).css('outline-color', '#FF0000');
     });
});
