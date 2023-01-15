---
layout: photolist
title: Publications
menu: yes
order: 3
---

<!-- google scholar-->
<ul>
    <li style="display:inline-block">
        <p>My publications are listed here</p>
    </li>
    <li style="display:inline-block">
        <a href="https://scholar.google.com/citations?user={{site.scholar_id}}" target="_blank">
            <img src="/img/ico/gs-min-round.png" height="20" width="20" border="1px" alt=""/>
        </a>
    </li>
    <li style="display:inline-block">
        <p>and below</p>
    </li>
</ul>


{% assign hashes = (site.data.publications) %}
{% for hash in hashes %}
{% include paper_in_box_wide.html paper=hash %}
{% endfor %}

<br>

I was selected to be in the pool of Top Reviewers for AISTATS (2022) and NeurIPS (2022).
