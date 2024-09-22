---
layout: photolist
title: Home
menu: no
order: 1
---

<!-- ![i_am_a_fox](./img/people/profile_pic_2.jpg){: style="float: right; margin: 0px 20px; width: 70px; height: 250px" name="fox"} -->

<!-- ![i_am_a_fox](./img/people/profile_pic.jpeg){: style="float: right; margin: 0px 20px; width: 204px; height: 300px" name="fox"} -->

<!-- Picture and heading -->

![profile](./img/people/profile.pdf){: style="display:block; margin-left: auto; margin-right: auto; width: 350px; height: auto" name="fox"}

<p style="text-align: center; font-size: 24px; font-weight: 300; font-family: montserrat, sans-serif;">Postdoctoral Researcher</p>

<p style="text-align: center; font-size: 24px; font-weight: 300; font-family: montserrat, sans-serif;">ENSAE Paris</p>


<!-- <a href= onMouseOver="document.readmore_1.src='/img/people/foxie.jpeg';" onMouseOut="document.readmore_1.src='/img/people/lena-min.png';">
<img src="/img/people/lena-min.png" name="readmore_1" width=204px height=240px></a> -->

<!--
More generally, I am interested in the inferential and dynamics-with-control viewpoints on learning and computation in the brain, and what they suggest about how the brain encodes and processes (visual, auditory, linguistic) stimuli. We use neuroimaging data as a proxy for the neural code, investigating its structure (grammar) in a top-down approach, using unsupervised representation learning, or conversely emulating it using mechanistic biophysical models in a bottom-up approach.

I furthermore believe the Machine Learning community has much to gain from leveraging a more precise understanding of neuroscience topics, such as synaptic intelligence, stochastic dynamics, neural code, memory, and the different strata of analyses (from cellular to network to whole-brain), for example. 


<!--
## <span style="color:darkblue">News </span>

* 03/2021 _Our work is featured in towardsdatascience, as_ <a href="https://towardsdatascience.com/stay-updated-with-neuroscience-march-2021-must-reads-bf19bd73560e" target="_blank">March Must-Reads</a>

* 08/2020 _Our work is featured in Andrew Ng's Deep Learning Newsletter_ <a href="https://blog.deeplearning.ai/blog/the-batch-training-1-trillion-parameters-medical-ai-gets-a-shot-in-the-arm-does-bert-have-common-sense-revitalizing-chess" target="_blank">The Batch!</a>, as 'Unlabeled Brain Waves Spill Secrets'
-->


<!-- ### <span style="color:darkblue">About</span> -->
<span style="font-size: 30px; font-weight: 350">About</span>
<br> 


I am a postdoctoral researcher in the <a href="https://crest.science/research/research-fields/statistics/" target="_blank" rel="noopener">Statistics Department</a> of ENSAE Paris and CREST, working with <a href="https://akorba.github.io" target="_blank" rel="noopener">Anna Korba</a>.

Previously, I received my PhD in Mathematical Computer Science at <a href="https://www.inria.fr/en" target="_blank" rel="noopener">Inria</a>, where I was advised by <a href="https://www.cs.helsinki.fi/u/ahyvarin/" target="_blank" rel="noopener">Aapo Hyvärinen</a> and <a href="http://alexandre.gramfort.net" target="_blank" rel="noopener">Alexandre Gramfort</a>.

My research is in machine learning.
More specifically, I use statistical theory to optimize the design of modern generative A.I. and also learn useful representations of brain activity.
<!-- More specifically, I work on estimating and sampling energy-based models, on density-ratio estimation, and on representation learning for brain imaging data. -->
<!-- My latest publications are on optimal distribution paths for estimation and sampling problems. -->

<!-- I am a postdoctoral research fellow in the <a href="https://crest.science/research/research-fields/statistics/" target="_blank">Statistics Department</a> of the Center for Research in Economics and Statistics (CREST), working with <a href="https://akorba.github.io" target="_blank">Anna Korba</a> on the development and analysis of sampling algorithms <a href="https://simons.berkeley.edu/programs/geometric-methods-optimization-sampling" target="_blank">from an optimization perspective</a>.

I also hold a master’s degree in engineering from ENSTA Paris and another in machine learning (MVA) from ENS Paris-Saclay. -->

<!-- I am currently working on self-supervised learning which consists in having a machine learn patterns from data by solving a prediction task. 
I also have an applicative interest in neuroscience, namely in how to learn "good" representations of brain activity.  -->

<!-- For example, if the data is a book, one task you can give the machine is to recognize sentences of the book where the words are ordered from sentences where the words are scrambled. To solve this task, the machine might have to identify grammatical rules and writing style, and would therefore learn meaningful stuff from the book. I have been interested in two key questions: <i>what exactly is being learnt from such tasks? and what makes a task better than another?</i>  -->

You can reach me at <i>emir.chehab [AT] ensae.fr</i>

<!-- <br> -->

<!-- ### <span style="color:darkblue"> Research </span> -->

<!-- <b>What is being learnt from a self-supervised task?</b>  -->
<!-- We provide some answers in our recent work, using tools from energy-based modeling, asymptotic statistics, information geometry, and classification. For example, we <a href="https://arxiv.org/abs/2301.09696" target="_blank">here</a> connected a basic self-supervised task (classifying between data and noise) to a family of importance sampling estimators that are well-established in statistics. In some other work, we also look at the optimal way to break down an easy task (e.g. hot vs. cold) in a series of harder ones (e.g. hot vs. warm, warm vs. cold). -->

<!-- <b>How do we design self-supervised tasks to be sample-efficient?</b>  -->

<!-- My work is funded by European (ERC) and French (ANR) grants "Signal And Learning Applied To Brain Data" and "Bridging Artificial Intelligence and Neuroscience". I am also affiliated to <a href="http://joliot.cea.fr/drf/joliot/en/Pages/research_entities/NeuroSpin/unicog.aspx" target="_blank">NeuroSpin</a>. -->

<br>

<!-- ### <span style="color:darkblue"> Publications </span> -->
<span style="font-size: 30px; font-weight: 350">Publications</span>
<br> 

<!-- (See also my <a href="https://scholar.google.com/citations?user={{site.scholar_id}}" target="_blank">google scholar</a>) -->


#### <span style="color:darkblue"> Statistical Theory for Generative A.I. </span>

{% assign hashes = (site.data.publications) %}
{% for hash in hashes %}

{% if hash.category == "stats" %}

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