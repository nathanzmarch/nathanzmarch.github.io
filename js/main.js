$(document).ready(() => {
  $('.devicon').on('mouseenter', event => {
    $(event.currentTarget).addClass('change-icon-color path')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('change-icon-color path')
  })
  $('#about-nav').on('click', () => {
    $('html, body').animate({
      scrollTop: ($('#aboutme').offset().top)
    },500);
  })
  $('#edu-nav').on('click', () => {
    $('html, body').animate({
      scrollTop: ($('#education').offset().top)
    },500);
  })
  $('#skills-nav').on('click', () => {
    $('html, body').animate({
      scrollTop: ($('#skills').offset().top)
    },500);
  })
  $('#exp-nav').on('click', () => {
    $('html, body').animate({
      scrollTop: ($('#experience').offset().top)
    },500);
  })
  $('#proj-nav').on('click', () => {
    $('html, body').animate({
      scrollTop: ($('#projects').offset().top)
    },500);

  })

})
