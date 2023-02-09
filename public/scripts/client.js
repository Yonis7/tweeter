const createTweetElement = function(tweet) {
  const { user, content, created_at } = tweet;
  const $tweet = $(`
    <article class="tweet">
      <header>
        <img src="${user.avatars}" />
        <h2>${user.name}</h2>
        <p>${user.handle}</p>
      </header>
      <p>${content.text}</p>
      <footer>
        <p class="tweet-created-at" data-time="${created_at}"></p>
      </footer>
    </article>
  `);
  return $tweet;
}

const renderTweets = function(tweets) {
  tweets.forEach(tweet => {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  });

  $('.tweet-created-at').each(function() {
    var time = $(this).attr('data-time');
    $(this).timeago(time);
  });
}

const loadTweets = function() {
  $.ajax({
    type: "GET",
    url: "/tweets",
    success: function(data) {
      renderTweets(data);
    }
  });
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var formData = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: formData,
      success: function(data){
        console.log("Data sent to server: ", formData);
      }
    });
  });

  loadTweets();
});
