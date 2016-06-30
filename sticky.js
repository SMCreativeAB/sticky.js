$.fn.sticky = function(minY, stickyClass) {
  var $this = $(this);

  var update = function() {
    if (window.scrollY > minY) {
      $this.addClass(stickyClass);
    } else {
      $this.removeClass(stickyClass);
    }
  };

  $(document)
    .on('scroll', update)
    .on('ready', update);
};