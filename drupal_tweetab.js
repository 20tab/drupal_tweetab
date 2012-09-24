var $j = jQuery.noConflict();

$j(document).ready(function($j){
    var username = $j(".tweet").data('username');
    var avatar_size = $j(".tweet").data('avatar_size');
    var count = $j(".tweet").data('count');
    $j(".tweet").tweet({
        join_text: "auto",
        avatar_size: avatar_size,
        username:username,
        count: count,
        loading_text: "loading tweets..."
    });
});