Universal **_SOCIAL_** [model](https://aping.readme.io/docs/models) for [apiNG](https://github.com/JohnnyTheTank/apiNG)

# Supported apiNG Plugins
- [x] **Youtube** ([apiNG-plugin-youtube](https://github.com/JohnnyTheTank/apiNG-plugin-youtube))
- [x] **Facebook** ([apiNG-plugin-facebook](https://github.com/JohnnyTheTank/apiNG-plugin-facebook))
- [x] **Vimeo** ([apiNG-plugin-vimeo](https://github.com/JohnnyTheTank/apiNG-plugin-vimeo))
- [x] **Dailymotion** ([apiNG-plugin-dailymotion](https://github.com/JohnnyTheTank/apiNG-plugin-dailymotion))
- [x] **Tumblr** ([apiNG-plugin-tumblr](https://github.com/JohnnyTheTank/apiNG-plugin-tumblr))
- [x] **Twitter** ([apiNG-plugin-codebird](https://github.com/JohnnyTheTank/apiNG-plugin-codebird))
- [x] **Flickr** ([apiNG-plugin-flickr](https://github.com/JohnnyTheTank/apiNG-plugin-flickr))
- [x] **RSS** ([apiNG-plugin-rss](https://github.com/JohnnyTheTank/apiNG-plugin-rss))
- [x] **Wikipedia** ([apiNG-plugin-wikipedia](https://github.com/JohnnyTheTank/apiNG-plugin-wikipedia))


# JavaScript
```JavaScript
var social = {
    platform: undefined, //NAME of platform ( "youtube" / "facebook", "instagram" , ...)
    blog_name: undefined, //NAME of blog (channel / youtube uploader / facebook page, instagram account, ..)
    blog_id: undefined, //ID of blog / page / account, ...
    blog_link: undefined, //link to channel / uploader / page / account, ...
    type: undefined, //"video", "image", "post", "audio", "link", "event", ...
    timestamp: undefined, //timestamp of created_at
    date_time: undefined, //datetime of created_at
    post_url: undefined, //URL to the post / video / tweet ...
    intern_id: undefined, // INTERN ID of post / video / tweet / ... (facebook id, youtube id, ...)
    caption: undefined, //post title
    text: undefined, //post description
    thumb_url: undefined, // best case 200px (min)
    img_url: undefined, //preview image url (best case 700px)
    native_url: undefined, // best quality
    source: undefined, //different payload
    comments: undefined, //comments_count
    likes: undefined, //likes_count
    shares: undefined, //shares_count
    position: undefined //position in playlist
};
```

# JSON

```JSON
{
  "platform": false,
  "blog_name": false,
  "blog_id": false,
  "blog_link": false,
  "type": false,
  "timestamp": false,
  "date_time": false,
  "post_url": false,
  "intern_id": false,
  "caption": false,
  "text": false,
  "thumb_url": false,
  "img_url": false,
  "native_url": false,
  "source": false,
  "comments": false,
  "likes": false,
  "shares": false,
  "position": false
}
```