---
layout: photolist
title: Home
menu: no
order: 1
---

<!-- Picture and heading -->

![profile](./img/people/profile.pdf){: style="display:block; margin-left: auto; margin-right: auto; width: 350px; height: auto" name="fox"}

<p style="text-align: center; font-size: 24px; font-weight: 300; font-family: montserrat, sans-serif;">Postdoctoral Researcher</p>

<p style="text-align: center; font-size: 24px; font-weight: 300; font-family: montserrat, sans-serif;">ENSAE Paris</p>


<!-- About section -->

<br><span style="font-size: 30px; font-weight: 350">About</span><br>

I am a postdoctoral researcher in the <a href="https://crest.science/research/research-fields/statistics/" target="_blank" rel="noopener">Statistics Department</a> of ENSAE Paris and CREST, working with <a href="https://akorba.github.io" target="_blank" rel="noopener">Anna Korba</a>.

I received my PhD in Mathematical Computer Science at <a href="https://www.inria.fr/en" target="_blank" rel="noopener">Inria</a>, where I was advised by <a href="https://www.cs.helsinki.fi/u/ahyvarin/" target="_blank" rel="noopener">Aapo Hyvärinen</a> and <a href="http://alexandre.gramfort.net" target="_blank" rel="noopener">Alexandre Gramfort</a>. I also hold a Master's in Applied Mathematics and Engineering from  <a href="https://www.ensta-paris.fr/en/node" target="_blank" rel="noopener">ENSTA Paris</a> and another in Mathematics, Vision and Learning (MVA) from <a href="https://ens-paris-saclay.fr/en/school/ens-paris-saclay" target="_blank" rel="noopener">Ecole Normale Superieure Paris-Saclay</a>.

My research is in machine learning, particularly on efficient algorithms for estimating and sampling from probabilistic models, as well as on learning useful representations of brain activity.

<!-- questions of  statistical theory to optimize the design of modern generative A.I. . -->
<!-- More specifically, I work on estimating and sampling energy-based models, on density-ratio estimation, and on representation learning for brain imaging data. -->
<!-- My latest publications are on optimal distribution paths for estimation and sampling problems. -->

You can reach me at <i>emir.chehab [AT] ensae.fr</i>

<!-- Publications section -->

<br><span style="font-size: 30px; font-weight: 350">Publications</span><br> 


#### <span style="color:darkblue"> Sampling from Energy-Based Probabilistic Models<span>

{% assign hashes = (site.data.publications) %}
{% for hash in hashes %}

{% if hash.category == "sampling" %}

<div class="flex-container">
    <div class="flex-left">
        <img src="/img/paper/{{ hash.img_file }}" class="z-depth-1 rounded" alt="" style="width:auto; height:auto; max-width:100%;">
    </div>
    <div class="flex-right">
        <b style="font-weight: 500; letter-spacing:normal;">{{ hash.title }}</b>
        <br>
        {{ hash.authors }}
        <br>
        <!-- Venue and year of paper (if exists)  -->
        <i>{{ hash.venue_name }}, {{ hash.year }}.</i>
        <!-- Distinction for paper (if exists)  -->
        {% if hash.distinction %}
        <span style="color: red">{{ hash.distinction }}</span>.
        {% endif %}
        <br>
        <!-- Links to paper (if exists)  -->
        {% if hash.url_paper %}
        <a href="{{ hash.url_paper }}" class="btn" role="button" rel="external nofollow noopener" target="_blank">PAPER</a>
        &nbsp;
        {% endif %}
        <!-- Links to poster (if exists)  -->
        {% if hash.poster_file %}
        <a href="/documents/posters/{{ hash.poster_file }}" class="btn" role="button" rel="external nofollow noopener" target="_blank">POSTER</a>
        &nbsp;
        {% endif %}
        <!-- Links to code (if exists)  -->
        {% if hash.url_code %}
        <a href="{{ hash.url_code }}" class="btn" role="button" rel="external nofollow noopener" target="_blank">CODE</a>
        &nbsp;
        {% endif %}
        <!-- Copy bibtex (if exists) -->
        <!-- {% if hash.bibtex %} -->
        <!-- <button onclick="copyText()">Bibtex</button> -->
        <!-- {% endif %} -->
        <!-- One-sentence summary  -->
        <!-- <div class="flex-right-standard">
            <p style="margin-top:10px;">
            {{ hash.summary }}
            </p>
        </div> -->
    </div>
</div>

{% endif %}

{% endfor %}

#### <span style="color:darkblue"> Estimating Energy-Based Probabilistic Models<span>

{% assign hashes = (site.data.publications) %}
{% for hash in hashes %}

{% if hash.category == "estimation" %}

<div class="flex-container">
    <div class="flex-left">
        <img src="/img/paper/{{ hash.img_file }}" class="z-depth-1 rounded" alt="" style="width:auto; height:auto; max-width:100%;">
    </div>
    <div class="flex-right">
        <b style="font-weight: 500; letter-spacing:normal;">{{ hash.title }}</b>
        <br>
        {{ hash.authors }}
        <br>
        <!-- Venue and year of paper (if exists)  -->
        <i>{{ hash.venue_name }}, {{ hash.year }}.</i>
        <!-- Distinction for paper (if exists)  -->
        {% if hash.distinction %}
        <span style="color: red">{{ hash.distinction }}</span>.
        {% endif %}
        <br>
        <!-- Links to paper (if exists)  -->
        {% if hash.url_paper %}
        <a href="{{ hash.url_paper }}" class="btn" role="button" rel="external nofollow noopener" target="_blank">PAPER</a>
        &nbsp;
        {% endif %}
        <!-- Links to poster (if exists)  -->
        {% if hash.poster_file %}
        <a href="/documents/posters/{{ hash.poster_file }}" class="btn" role="button" rel="external nofollow noopener" target="_blank">POSTER</a>
        &nbsp;
        {% endif %}
        <!-- Links to code (if exists)  -->
        {% if hash.url_code %}
        <a href="{{ hash.url_code }}" class="btn" role="button" rel="external nofollow noopener" target="_blank">CODE</a>
        &nbsp;
        {% endif %}
        <!-- Copy bibtex (if exists) -->
        <!-- {% if hash.bibtex %} -->
        <!-- <button onclick="copyText()">Bibtex</button> -->
        <!-- {% endif %} -->
        <!-- One-sentence summary  -->
        <!-- <div class="flex-right-standard">
            <p style="margin-top:10px;">
            {{ hash.summary }}
            </p>
        </div> -->
    </div>
</div>

{% endif %}

{% endfor %}


<!-- 
<script>
    function copyText() {
    
        /* Copy text into clipboard */
        navigator.clipboard.writeText
            ("blabla");
    }
</script> -->

#### <span style="color:darkblue"> Learning Representations of Brain Activity </span>

<!-- #### <span style="color:darkblue"> Deep Learning for Cognitive Neuroscience </span> -->

{% assign hashes = (site.data.publications) %}
{% for hash in hashes %}

{% if hash.category == "neuro" %}

<div class="flex-container">
    <div class="flex-left">
        <img src="/img/paper/{{ hash.img_file }}" class="z-depth-1 rounded" alt="" style="width:auto; height:auto; max-width:100%;">
    </div>
    <div class="flex-right">
        <b style="font-weight: 500; letter-spacing:normal;">{{ hash.title }}</b> 
        <br>
        {{ hash.authors }}
        <br>
        <!-- Venue and year of paper (if exists)  -->
        <i>{{ hash.venue_name }}, {{ hash.year }}.</i>
        <!-- Distinction for paper (if exists)  -->
        {% if hash.distinction %}
        <span style="color: red">{{ hash.distinction }}</span>.
        {% endif %}
        <br>
        <!-- Links to paper (if exists)  -->
        {% if hash.url_paper %}
        <a href="{{ hash.url_paper }}" class="btn" role="button" rel="external nofollow noopener" target="_blank">PAPER</a>
        &nbsp;
        {% endif %}
        <!-- Links to poster (if exists)  -->
        {% if hash.poster_file %}
        <a href="/documents/posters/{{ hash.poster_file }}" class="btn" role="button" rel="external nofollow noopener" target="_blank">POSTER</a>
        &nbsp;
        {% endif %}
        <!-- Links to code (if exists)  -->
        {% if hash.url_code %}
        <a href="{{ hash.url_code }}" class="btn" role="button" rel="external nofollow noopener" target="_blank">CODE</a>
        &nbsp;
        {% endif %}
        <!-- Copy bibtex (if exists)  -->
        <!-- {% if hash.bibtex %} -->
        <!-- <button onclick="copyText()">Bibtex</button> -->
        <!-- {% endif %} -->
        <!-- One-sentence summary  -->
        <!-- <div class="flex-right-standard">
            <p style="margin-top:10px;">
            {{ hash.summary }}
            </p>
        </div> -->
    </div>
</div>

{% endif %}

{% endfor %}

<!-- <div class="flex-container">
    <div class="flex-left">
        <img src="/img/paper/jnp_2019.png" alt="" style="width:auto; height:auto; max-width:100%;">
    </div>
    <div class="flex-right">
        <b style="letter-spacing:0.7px;">A mean-field approach to the dynamics of networks of complex neurons, from nonlinear Integrate-and-Fire to Hodgkin-Huxley models</b> <br>
        M. Carlu*, <i>O. Chehab</i>*, [...], A. Destexhe, M. di Volo <br>
        <i>Journal of Neurophysiology, 2020.</i>
        <br>
        <a href="https://www.biorxiv.org/content/10.1101/870345v1" target="_blank">Paper</a>
        <p style="margin-top:10px;">
        Mean-Field analysis can effectively summarize complex network dynamics that model neuronal activity.
        </p> 
    </div>
</div> -->

<br>
<span style="font-size: 30px; font-weight: 350">Talks</span>
<br> 

* 10/2024, <a href="https://sia.mit.edu" target="_blank">Gregory Wornell's team seminar</a>, MIT, USA

* 10/2024, <a href="https://uqgroup.mit.edu" target="_blank">Youssef Marzouk's team seminar</a>, MIT, USA

* 03/2024, <a href="https://www.riken.jp/en/research/labs/cbs/integr_comput_brainsci_collab/stat_math_collab/index.html" target="_blank">Takeru Matsuda's team seminar</a>, RIKEN, Japan
<!-- Statistical Mathematics Unit of the Center for Brain Science, RIKEN, Saitama -->

* --/2023, <a href="https://adnan1306.github.io" target="_blank">Self-Supervised Learning Reading Group</a>, Vector Institute, Canada

* 02/2020 <a href="https://team.inria.fr/parietal/first-international-workshop-on-nonlinear-ica/" target="_blank">Nonlinear ICA workshop</a>, Inria Saclay, France
<!-- <span style="color:#5a8f3b">_Principles of Self-Supervised Learning_</span>, for the  -->

<br>
<span style="font-size: 30px; font-weight: 350">Teaching</span>
<br> 

I was Teacher's Assistant for the following Masters courses.<br>

{% assign hashes = (site.data.courses) %}
{% for hash in hashes %}
{% include teaching_omar.html course=hash %}
{% endfor %}

<!--
## <span style="color:darkblue">News </span>

* 03/2021 _Our work is featured in towardsdatascience, as_ <a href="https://towardsdatascience.com/stay-updated-with-neuroscience-march-2021-must-reads-bf19bd73560e" target="_blank">March Must-Reads</a>

* 08/2020 _Our work is featured in Andrew Ng's Deep Learning Newsletter_ <a href="https://blog.deeplearning.ai/blog/the-batch-training-1-trillion-parameters-medical-ai-gets-a-shot-in-the-arm-does-bert-have-common-sense-revitalizing-chess" target="_blank">The Batch!</a>, as 'Unlabeled Brain Waves Spill Secrets'
-->
