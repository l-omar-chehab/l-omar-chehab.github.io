---
layout: photolist
title: Teaching
menu: yes
order: 4
---

I am Teacher's Assistant ('chargé de TD') for the following graduate courses. <br><br>

{% assign hashes = (site.data.teaching) %}
{% capture years %}
{% for hash in hashes %}
{{ hash[0] }}
{% endfor %}
{% endcapture %}

{% assign sortedyears = years | split:' ' | sort | reverse %}
{% for year in sortedyears %}
[comment]: <> (### {{ year }})
{% for course in hashes[year] %}
{% include teaching_omar.html course=course %}
{% endfor %}
{% endfor %}
