$(':header').addClass('headline');$('li:lt(3)').hide();$('li').on('click', function() {  $(this).remove(); }); $('h1').on('click', function() {  $('li').fadeIn(300);});