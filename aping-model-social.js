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