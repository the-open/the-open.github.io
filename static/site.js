$(function(){
  $('body').removeClass('no_js');

  if ($('#markdown-toc').length) {
    $('#markdown-toc').appendTo('#toc-container');
    $('#markdown-toc').addClass('list-group');
    $('#markdown-toc ul').addClass('list-group list-group-item list-group-flush py-0 border-top-0 border-bottom-0');
    $('#markdown-toc li').css('list-style-type', 'none');
    $('#markdown-toc a').addClass('list-group-item list-group-item-action');

    $('#toc-container').addClass('toc-sidebar');

  }

});
