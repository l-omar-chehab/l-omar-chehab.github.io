---
layout: default
title: Posts
menu: yes
order: 5
---

Tryout. <br><br>

{% assign hashes = (site.blogposts) %}
{% capture titles %}
{% for hash in hashes %}
{{ hash[0] }}
{% endfor %}
{% endcapture %}

{% for post in hashes[title] %}
<h1 style="font-size:28px;">{title}</h1>
<a class="pull-right" href="/posts/{title}.html" onMouseOver="document.readmore3.src='../resources/posts/buttons/button_read_more_push-min.png';" onMouseOut="document.readmore3.src='../resources/posts/buttons/button_read_more-min.png';">

<-- <img src="../resources/posts/buttons/button_read_more-min.png" name="readmore3" width=120px class="pull-right"></a>
<span style="font-size:15px; text-align: right; float: right; color:gray">March 2020</span> -->

<-- {% include teaching_omar.html course=post %} -->

{% endfor %}

<hr>



<p></p>
