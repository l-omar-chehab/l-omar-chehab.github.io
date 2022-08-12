---
layout: default
title: Posts
menu: yes
order: 1
---


{% assign hashes = (site.data.posts) %}
{% for hash in hashes %}
<a style="color:darkblue;font-size:28px;" href="/blogposts/{{ hash.filename }}.html">
{{ hash.name }}
</a>  
<span style="font-size:15px; text-align: right; float: bottom; color:gray">
{{ hash.date }}
</span>
<hr>
{% endfor %}




