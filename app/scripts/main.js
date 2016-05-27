console.log('LucidWorks rocks!');

//----------------------------------------------------
//
// CONTENT ///////////////////////////////////////////
//
// 0) functions
//		0.1) PAUSE StickyFill (https://github.com/wilddeer/stickyfill)
//		0.2) FULLHEIGHT CARD
//		0.3) UNIVERSAL STATE EL `TOGGLER`
//
// 1) document.ready
//
//----------------------------------------------------

// 0) functions	
//	/.functions


// document.ready()
$(document).ready(function() {

  // BS popover
  $('.bs-component [data-toggle="popover"]').popover();

  // BS tooltip
  $('.bs-component [data-toggle="tooltip"]').tooltip();

  // DatePicker
  var now = moment().calendar();
  $('.datepicker').datetimepicker({
  	 defaultDate: 'now'
  });

  // Autosize
  autosize($('textarea'));

  // Tags 
  $('[id^="triggerTags"]').tagsinput({
    tagClass: 'label label-default'
  });

  $('.rules-list h2').on('click', function() {
    $(this).closest('tr').toggleClass('inactive');
  });

});
// /.document.ready()
