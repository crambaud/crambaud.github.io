$(document).ready(function () {
  $('.js-list-item__header').click(function () {
    let element = $(this).next('.list-item__content');
    if ($(element).is(':visible')) {
      $(element).slideUp();
      $(this).find('i').toggleClass('icon--up icon--down');
    } else {
      $('.list-item__content').slideUp();
      $('.js-list-item__header i').removeClass('icon--up').addClass('icon--down');
      $(element).slideToggle();
      $(this).find('i').toggleClass('icon--up icon--down');
    }
  });
});
