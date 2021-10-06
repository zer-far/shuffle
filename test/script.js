$(document).ready(function () {
  const $random = $('.nbr');
  const $timer = 30;
  let $it;
  let $data = 0;
  let index;
  let change;
  let letters = ['a', 'm', 'p', 'i', 's', '.', 'o', 'r', 'g'];

  $random.each(function () {
    change = Math.round(Math.random() * 100);
    $(this).attr('data-change', change);
  });

  function random() {
    return Math.round(Math.random() * 9);
  }

  function select() {
    return Math.round(Math.random() * $random.length + 1);
  }

  function value() {
    $('.nbr:nth-child(' + select() + ')').html('' + random() + '');
    $('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
    $data++;

    $random.each(function () {
      if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
        index = $('.ltr').index(this);
        $(this).html(letters[index]);
        $(this).removeClass('nbr');
      }
    });
  }

  $it = setInterval(value, $timer);
});
