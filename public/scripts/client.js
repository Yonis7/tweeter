/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


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
        <p>${new Date(created_at).toLocaleString()}</p>
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
}

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var formData = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "/path/to/server",
      data: formData,
      success: function(data){
        console.log("Data sent to server: ", formData);
      }
    });
  });
});


$('form').submit(function(event){
  event.preventDefault();
  var data = $(this).serialize();
  console.log(data);
  // send the ajax request with the serialized data
});
