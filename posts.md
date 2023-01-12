---
layout: photolist
title: Posts
menu: yes
order: 4
---

<!-- <object data="/img/resume.pdf" width="100%" height="800px" type="application/pdf">
</object> -->


<!-- {% assign hashes = (site.data.posts) %}
{% for hash in hashes %}
<a style="color:darkblue;font-size:21px;" href="/blogposts/{{ hash.filename }}.html">
{{ hash.name }}
</a>  
<span style="font-size:14px; text-align: right; color:gray">
{{ hash.date }}
</span>
<hr>
{% endfor %} -->


{% assign hashes = (site.data.posts) %}
{% for hash in hashes %}
<div>
    <!-- blogpost title -->
    <div style="display:inline-block; float:left">
        <a style="color:darkblue; font-size:21px;" href="/blogposts/{{ hash.filename }}.html">
        {{ hash.name }}
        </a>  
    </div>
    <!-- blogpost date -->
    <div style="display:inline-block; float:right">
        <span style="font-size:14px; color:gray">
        {{ hash.date }}
        </span>
    </div>
</div>
{% endfor %}







