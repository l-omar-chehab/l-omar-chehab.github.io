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
{
<hr>
<h1 style="font-size:28px;">{title}</h1>
<a class="pull-right" href="/posts/{title}.html" onMouseOver="document.readmore3.src='../resources/posts/buttons/button_read_more_push-min.png';" onMouseOut="document.readmore3.src='../resources/posts/buttons/button_read_more-min.png';">
<p></p>
}
{% endfor %}





