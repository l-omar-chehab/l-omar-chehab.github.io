---
layout: photolist
---

<!-- ![i_am_a_fox](./img/people/profile_pic.jpeg){: style="float: right; margin: 0px 20px; width: 204px; height: 300px" name="fox"} -->


<!-- ![i_am_a_fox](./img/people/profile_pic.jpeg){: style="display:block; margin-left: auto; margin-right: auto; width: 204px; height: 300px" name="fox"} -->



<!-- <a href= onMouseOver="document.readmore_1.src='/img/people/foxie.jpeg';" onMouseOut="document.readmore_1.src='/img/people/lena-min.png';">
<img src="/img/people/lena-min.png" name="readmore_1" width=204px height=240px></a> -->

<!--
Twitter: 
Incoming PhD student @INRIA Parietal team, Machine Learning and Computational Neuro. 
Former intern @FacebookAI. 
-->

<!-- I am a PhD student in machine learning at Inria Paris-Saclay. I currently work on efficient estimation of energy-based models and self-supervised learning. -->

<!--
More generally, I am interested in the inferential and dynamics-with-control viewpoints on learning and computation in the brain, and what they suggest about how the brain encodes and processes (visual, auditory, linguistic) stimuli. We use neuroimaging data as a proxy for the neural code, investigating its structure (grammar) in a top-down approach, using unsupervised representation learning, or conversely emulating it using mechanistic biophysical models in a bottom-up approach.

I furthermore believe the Machine Learning community has much to gain from leveraging a more precise understanding of neuroscience topics, such as synaptic intelligence, stochastic dynamics, neural code, memory, and the different strata of analyses (from cellular to network to whole-brain), for example. 

I've previously interned at Facebook AI Research, ENS Paris, U of Toronto with <a href="http://probability.ca/jeff/" target="_blank">Jeff Rosenthal</a>, Inria Parietal and AXA France.
-->

<!--
## <span style="color:darkblue">News </span>

* 03/2021 _Our work is featured in towardsdatascience, as_ <a href="https://towardsdatascience.com/stay-updated-with-neuroscience-march-2021-must-reads-bf19bd73560e" target="_blank">March Must-Reads</a>

* 08/2020 _Our work is featured in Andrew Ng's Deep Learning Newsletter_ <a href="https://blog.deeplearning.ai/blog/the-batch-training-1-trillion-parameters-medical-ai-gets-a-shot-in-the-arm-does-bert-have-common-sense-revitalizing-chess" target="_blank">The Batch!</a>, as 'Unlabeled Brain Waves Spill Secrets'
-->

I am a last-year Ph.D. student at <a href="https://www.inria.fr/en" target="_blank">Inria</a>, in the <a href="https://team.inria.fr/parietal/" target="_blank">Mind team</a> (formerly Parietal). I work with <a href="https://www.cs.helsinki.fi/u/ahyvarin/" target="_blank">Aapo Hyvärinen</a> and <a href="http://alexandre.gramfort.net" target="_blank">Alexandre Gramfort</a> on statistical estimation of energy-based models, with an applicative interest in neuroscience.

<!-- My work is funded by European (ERC) and French (ANR) grants "Signal And Learning Applied To Brain Data" and "Bridging Artificial Intelligence and Neuroscience". I am also affiliated to <a href="http://joliot.cea.fr/drf/joliot/en/Pages/research_entities/NeuroSpin/unicog.aspx" target="_blank">NeuroSpin</a>. -->

I hold a master’s degree in applied mathematics and engineering from **ENSTA Paris**, and a master’s degree in machine learning from **ENS Paris-Saclay**.

You can reach me at <i>l-emir-omar.chehab [AT] inria.fr</i>

<br>

### <span style="color:darkblue"> Publications </span>

<!-- (See also my <a href="https://scholar.google.com/citations?user={{site.scholar_id}}" target="_blank">google scholar</a>) -->

<!-- #### <span style="color:darkblue"> Optimization and Sampling </span> -->


#### <span style="color:darkblue"> Self-Supervised Learning and Statistical Estimation </span>

<!-- Provable benefits of annealing for estimating normalizing constants 
<br>
<b>O. Chehab</b>,  A. Hyvärinen, A. Risteski
<br>
<i>Submitted</i> -->


Optimizing the Noise: from Importance Sampling to Noise-Contrastive Estimation
<br>
<b>O. Chehab</b>, A. Gramfort, A. Hyvärinen
<br>
<i>Submitted</i>

The Optimal Noise in Noise-Contrastive Learning Is Not What You Think
<br>
<b>O. Chehab</b>, A. Gramfort, A. Hyvärinen
<br>
<i>Uncertainty in Artificial Intelligence (UAI), 2022</i>

#### <span style="color:darkblue"> Deep Learning and Cognitive Neuroscience </span>

Deep Recurrent Encoder: A scalable end-to-end network to model brain signals
<br>
<b>O. Chehab</b>*, A. Defossez\*, J.C. Loiseau, A. Gramfort, J.R. King
<br>
<i>Journal of Neurons, Behavior, Data analysis, and Theory, 2022</i>

Uncovering the structure of clinical EEG signals with self-supervised learning
<br>
H. Banville, <b>O. Chehab</b>, A. Hyvärinen, D. Engemann, A. Gramfort
<br>
<i>Journal of Neural Engineering, 2021</i>

A mean-field approach to the dynamics of networks of complex neurons, from nonlinear Integrate-and-Fire to Hodgkin-Huxley models
<br>
M. Carlu\*, <b>O. Chehab</b>\*, L. Dalla Porta\*, D. Depannemaecker\*, C. Héricé\*, M. Jedynak\*, E. Köksal Ersöz\*, P. Muratore\*, S. Souihel\*, C. Capone, Y. Zerlaut, A. Destexhe, M. di Volo
<br>
<i>Journal of Neurophysiology, 2020</i>

<br>

<!-- ### <span style="color:darkblue"> Selected Talks </span>

* 03/2023 <span style="color:#5a8f3b">_Optimizing the Noise: from Importance Sampling to Noise-Contrastive Estimation_</span>, for the Self-Supervised Learning Reading Group at the University of Toronto

* 02/2020 <span style="color:#5a8f3b">_Principles of Self-Supervised Learning_</span>, for the <a href="https://team.inria.fr/parietal/first-international-workshop-on-nonlinear-ica/" target="_blank">Nonlinear ICA workshop</a> at Inria
 -->

### <span style="color:darkblue"> Teaching </span>

I am Teacher's Assistant ('chargé de TD') for the following Masters courses. <br>

{% assign hashes = (site.data.courses) %}
{% for hash in hashes %}
{% include teaching_omar.html course=hash %}
{% endfor %}