---
layout: photolist
title: Teaching
menu: yes
order: 6
---

I am Teacher's Assistant ('chargé de TD') for the following Masters courses. <br><br>

{% assign hashes = (site.data.courses) %}
{% for hash in hashes %}
{% include teaching_omar.html course=hash %}
{% endfor %}