---
layout: default
title: Posts
menu: yes
order: 1
---

<hr>

{% assign hashes = (site.data.posts) %}
{% for hash in hashes %}
<h1 style="color:darkblue;font-size:28px;">{{ hash.name }}</h1>  
<a class="pull-right" href="/_blogposts/cheatsheet.md">
<!-- <a class="pull-right" href="/_blogposts/cheatsheet.md" onMouseOver="document.readmore3.src='../resources/posts/buttons/button_read_more_push-min.png';" onMouseOut="document.readmore3.src='../resources/posts/buttons/button_read_more-min.png';"> -->
<img src="../resources/posts/buttons/button_read_more-min.png" name="readmore3" width=120px class="pull-right"></a>
<!-- <span style="font-size:15px; text-align: right; float: right; color:gray">March 2020</span> -->
{% endfor %}

<!-- 
<a class="float-right">
    <img src="../img/paper/helloworld.png" alt="" style="max-width:350px; height:auto; float: right"/>
</a>


<span style="font-size:15px;">
This is a post for coding comfortably: it recapitulates useful commands.
</span> -->


<!-- <a class="pull-right" href="/posts/cheatsheet.html" onMouseOver="document.readmore3.src='../resources/posts/buttons/button_read_more_push-min.png';" onMouseOut="document.readmore3.src='../resources/posts/buttons/button_read_more-min.png';">
<img src="../resources/posts/buttons/button_read_more-min.png" name="readmore3" width=120px class="pull-right"></a>
<span style="font-size:15px; text-align: right; float: right; color:gray">March 2020</span> -->

<p></p>




