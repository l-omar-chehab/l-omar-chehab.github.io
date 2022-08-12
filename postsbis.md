
---
layout: default
---

Tryout. <br><br>

{% assign hashes = (site.posts) %}
{% capture titles %}
{% for hash in hashes %}
{{ hash[0] }}
{% endfor %}
{% endcapture %}

{% for post in hashes[title] %}
{% include teaching_omar.html course=post %}
{% endfor %}
