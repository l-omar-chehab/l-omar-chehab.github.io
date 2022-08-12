---
layout: photolist
title: Publications
menu: yes
order: 2
---

{% assign hashes = (site.data) %}
{% include paper_lena.html paper=hashes[{papers}] %}
<--
{% for paper in hashes[{papers.yml}] %}
{% include paper_lena.html paper=paper %}
{% endfor %}
-->

Reviewing duties: AISTATS (2022), ICLR (2022), NeurIPS (2022)
