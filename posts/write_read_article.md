All of these suggestions are conceptually obvious, but easy to forget in practice, where you're immersed in the production. Taking a step back and framing your to-do list in terms of these questions is immensely beneficial.

## How to write a scientific article

*The following, succint advice owes largely to Alex Gramfort.*


**Introduction**

<!---
% Motivation: how and to what neurons respond
% General challenges
% Rapid SotA
% Proposal
-->

*Why should I care?* (1 paragraph)

*What do others do?* (1 paragraph)

*Why is it not enough? What is the remaining problem?*  (1 paragraph)
Choose 3 points.

**Experiment**

...

**Results**

It is good practice to benchmark:

-- against previous literature
ask for their dataset and/or reproduce their method on yours.  

-- against simpler models 
for ex, if you're doing Deep Learning, how well does a tuned linear regression perform?


Tables with numbers are horrible: prefer graphs.

When in the middle of results coming in and different research directions popping up, force yourself to write down the in 3 points the main added value you think you make. Summarize them in one or two key figures: you'll now know which ones are important.

**Conclusion**

Answer the 3 points in the 'Why is it not enough?' from the intro.
Show how this advances the state of the art.
State drawbacks and possible directions for future bettering.


**Bibliography**

Clean up the BibTeX by deleting elusive parts (ex: website, numeric code references, etc.). 

--------------

*On Writing Style:*

Be clear, avoid verbosity.

If things are shady: say it, don't mask it. 

Ease the reader into the subject before the technical artillery, with intuitive language (e.g. "it is good hygiene to", "well-behaved function") that frames the situation. 

Let the article be self-contained: avoid uncostly things that would alienate an audience, if possible (ex: acronyms).

At the very end, verify spelling consistency (ex: s or z if UK / US Journal).

<!-- "If our eyes can do better, the model(s) can too": understand why they are not performing well enough. -->

--------------

*Seasons in Machine Learning Submissions:*

January: ICML <br /> 
February: COLT <br /> <br /> 

May: NeurIPS <br /> <br /> 

September: ICLR <br /> 
October: AI Stats <br /> 


## How to give a presentation

*The following, succint advice owes largely to Denis Engemann.*

Try answering the following questions:

- What problem did you address
- Why is it interesting?
- Why is it hard?
- What was the key to your approach?
- How well did it work?




## How to read a scientific article

1. **Read** Abstract, Conclusion, Graphs in "Results section". This is the backbone of the article.

2. **Check** where the data comes from? Its size and general descriptors? Its reproducibility?

3. **Inspect** methods in more detail, if interested.












