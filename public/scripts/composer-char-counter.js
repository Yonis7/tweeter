$(document).ready(function() {
  $('.new-tweet textarea').on('input', function() {
    var textareaValue = $(this).val();
    var textareaLength = textareaValue.length;
    var charactersLeft = 140 - textareaLength;

    var counter = $(this).closest('.new-tweet').find('.counter');
    counter.text(charactersLeft + ' characters left');

    if (charactersLeft < 0) {
      counter.addClass('invalid');
    } else {
      counter.removeClass('invalid');
    }
  });
});
