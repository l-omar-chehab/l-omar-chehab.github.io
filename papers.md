---
layout: photolist
title: Publications
menu: yes
order: 3
---

{% assign hashes = (site.data.publications) %}
{% for hash in hashes %}
{% include paper_in_box_wide.html paper=hash %}
{% endfor %}

<br>

I was selected to be in the pool of Top Reviewers for AISTATS (2022) and NeurIPS (2022).
