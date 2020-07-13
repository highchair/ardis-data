// Any project-specific code — listeners and triggers for plugins

// Any project-specific code — listeners and triggers for plugins
jQuery(document).ready(function() {

  // Are JS and JQuery ready?
  $('html').removeClass('no-js').addClass('js');

  // Animate some scrolling for smoother transitions 
  $(function() {
    $('.js-smoothscroll').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
        }
      }
    });
  });

  $('body').scrollspy({ target: '#main-nav' });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
      $('body').addClass('scrolled');
    } else {
      $('body').removeClass('scrolled');
    }
  });
});

