console.log('LucidWorks rocks!');

//----------------------------------------------------
//
// CONTENT ///////////////////////////////////////////
//
// 0) functions
//
// 1) document.ready
//
//----------------------------------------------------

// 0) functions	
// MODAL IMPROVE
  function setModalMaxHeight(element) {
    var $element = $(element),
      $content = $element.find('.modal-content');
    var borderWidth = $content.outerHeight() - $content.innerHeight();
    var dialogMargin = $(window).width() < 768 ? 20 : 60;
    var contentHeight = $(window).height() - (dialogMargin + borderWidth);
    var headerHeight = $element.find('.modal-header').outerHeight() || 0;
    var footerHeight = $element.find('.modal-footer').outerHeight() || 0;
    var maxHeight = contentHeight - (headerHeight + footerHeight);

    $content.css({
      'overflow': 'hidden'
    });

    $element
      .find('.modal-body').css({
        'max-height': maxHeight,
        'overflow-y': 'auto'
      });
  }
//	/.functions


// document.ready()
$(document).ready(function() {

  // BS popover
  $('.bs-component [data-toggle="popover"]').popover();

  // BS tooltip
  $('.bs-component [data-toggle="tooltip"]').tooltip();

  // BS dropdown (prevent unexpected menu close)
  $(document).on('click', '.dropdown-menu', function(e) {
    e.stopPropagation();
  });

  $('#applyFilters .btn-default').dropdown('toggle');

  // DatePicker
  var now = moment().calendar();
  $('.datepicker').datetimepicker({
    defaultDate: 'now' //,
    // collapse: false
    // debug: true
  });

  // Autosize
  autosize($('textarea'));

  // Tags 
  $('[id^="triggerTags"]').tagsinput({
    tagClass: 'label label-default'
  });

  // Row expand
  $('.rules-list .column-more').on('click', function() {
    var thisTR = $(this).closest('tr');
    if (thisTR.hasClass('inactive')) {
      thisTR.removeClass('inactive');
    }
  });

  // Row collapse
  $('.rules-list .btn-save').on('click', function() {
    var thisTR = $(this).closest('tr');
    if (!thisTR.hasClass('inactive')) {
      // ... save changes
      // ... and
      thisTR.addClass('inactive');
    }
  });

  // MODAL IMPROVE
  $('.modal').on('show.bs.modal', function() {
    // $(this).show();
    // setModalMaxHeight(this);
  });
  
  $('.modal').on('shown.bs.modal', function() {
    autosize.update($('textarea'));
  });

  // $(window).resize(function() {
  //   if ($('.modal.in').length != 0) {
  //     setModalMaxHeight($('.modal.in'));
  //   }
  // });


});
// /.document.ready()
