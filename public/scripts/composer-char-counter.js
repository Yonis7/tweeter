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


function createTweetElement(tweetData) {
  const { user, content, created_at } = tweetData;
  const $tweet = $(`
    <article class="tweet">
      <header>
        <img src="${user.avatars}" alt="${user.name} avatar">
        <h2>${user.name}</h2>
        <span>${user.handle}</span>
      </header>
      <section>
        <p>${content.text}</p>
      </section>
      <footer>
        <time>${new Date(created_at).toLocaleString()}</time>
        <div class="icons">
          <i class="fa fa-flag"></i>
          <i class="fa fa-retweet"></i>
          <i class="fa fa-heart"></i>
        </div>
      </footer>
    </article>
  `);

  return $tweet;
}

const renderTweets = function(tweets) {
  $('#tweets-container').empty();
  for (let tweet of tweets) {
  let $tweet = createTweetElement(tweet);
  $('#tweets-container').append($tweet);
  }
  };
  
  const createTweetElement = function(tweet) {
  const { user, content, created_at } = tweet;
  const $tweet = $( <article class="tweet"> <header> <h2>${user.name}</h2> <span>${user.handle}</span> </header> <section> <p>${content.text}</p> </section> <footer> <time>${new Date(created_at).toLocaleString()}</time> <div class="icons"> <i class="fa fa-flag"></i> <i class="fa fa-retweet"></i> <i class="fa fa-heart"></i> </div> </footer> </article> );
  
  return $tweet;
  };
  
  renderTweets(data);