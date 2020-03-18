
Git is an incredibly useful platform for collaborative projects: it tracks the changes each person makes, merges them in a principled way, and remembers the history of modifications. It is the preferred project management tool used by scientists who write code. 


## The Basic Relationship

When working on any project with *git*, there will two places where it is stored: 

- the *remote*, up there in Space (their servers)
- the *local*, down there on Earth (your computer)

Using *git* is essentially about people being able to work on the same project on earth and centralize those changes in space version in a legible way. 

Tricks of the trade:
git tig to make things easier!
https://johnkary.net/blog/git-add-p-the-most-powerful-git-feature-youre-not-using-yet/

## Initializing the relationship 

First, create a space for your project 'up there' from the git webpage. 

Then, to start working on it locally, a link is provided on the project page you created. Take note of it, place yourself on your computer in the repository where you wish to work in, and 


~~~sh
git clone https://github.com/l-omar-chehab/current.git 
~~~

The place in Space from which you've cloned is the *origin*. 

#### Contributing to an open-source project hosted in somebody else's Space spot

You first *fork* their version in Space (there's a button) to your git Space. Then you can clone your copy in Space as above.


## Working on Earth 

You're now able to make local modifications, that is to work naturally on your computer, as you would have prior to using git: add an image to the repository, make changed to a coding script, add or delete a Word file - whatever. 

After that, to keep track of these changes:

~~~sh
git add . 
~~~

(the point means 'all files' but you can instead type the name of a specific file, eg recipes.txt). This suggests the changes you made to these files, to your local git repistory, as a first step to ensure compatibility.

~~~sh
git commit -m 'recipes updated and code yet to be debugged'
~~~

This properly *commits* the changes you've *added* to your local git folder, with a *message* (hence -m) of your choice that will appear in the log track. 

~~~sh
git diff 
git log
~~~

allows you to see to *difference* between the version you just *commited* and its predecessor, or the history or *logging* of commits done.

At any point in your work, this command allows you to check where you're at:

~~~sh
git status
~~~

#### More advanced features on Earth

Until now, we've assumed that a project is one *master* entity, stored between Space and Earth. It can be useful though, for a same project, to want to test different developments or *branches* of it, without staging these experimentations to the *master* version, on Earth as in Space. 

Perhaps in the end, we will then retain a promising *branch* and then *merge* it with the *master* version. 

~~~sh
git branch
~~~

Tells you which branch of the project you're working on. By default, there is one branch: *master*. 

~~~sh
git checkout -b newbranch
~~~

Moves you to newbranch, which is created if not already existing. Once on this branch, the same logic (*git add, git commit*) applies. 

When you're ready to merge newbranch with the *master* version, 

~~~sh
git checkout master
~~~

Places you on the *master* branch.

~~~sh
git merge newbranch
~~~

Merges *newbranch* with the *master* branch you're on.


## Communicating from Earth to Space

Once you've finished your day and wish to store and share, or *push*, the changes in Space the changes made on Earth to its Space counterpart,  and share them with others on the same project, 

~~~sh
git push origin master
~~~

*Pushes* the changes from your local *master* version to its counterpart in Space. 

If you wanted to keep working on *newbranch* and save your work to date 'up there', then simply replace *master* with the name of the branch you're working with.

#### Contributing to an open-source project hosted in somebody else's Space spot

In that case, if you've properly *forked* that project unto your own Space, the origin will be your own copy. That is safer: when dozens of people are working on Earth to the same project in Space, you really want to be careful and sure when you decide to push your work unto the version in Space everyone is working on. 

However, when you are ready to do that, the command

~~~sh
git remote -v 
~~~

will show you what versions in Space your project on Earth is associated with. By default, that should be *origin*. Now to create another association *upstream* to your origin in Space,

~~~sh
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
~~~

Now when you're ready, you can 

~~~sh
git push upstream master
~~~


## Communicating from Space to Earth

Sometimes, changes will have been made 'up there' by collaborators that can substantially modify the project ahead your own version. Typically, when you try to *push* your local changes to Space, a message error might appear. This means you have to import in some way to most recent version of the project, solve competing changes between it and your own modifications on your machine, and then send it back up. 

~~~sh
git pull origin master  # does git fetch + git merge in one draw
~~~

Resolve manually merge issues on the scripts, between your and other's modifications. If you're working on a group project hosted on someone else's git, then you would git pull *upstream* (group space), instead of *origin* (your fork), as that is where the official changes are stored.


#### A note on an alternative  

~~~sh
git fetch upstream master
git rebase upstream/master
~~~

Difference between pull (preferred) and fetch rebase:
https://stackoverflow.com/questions/3357122/git-pull-vs-git-fetch-git-rebase

 
## Schematic

![](https://markdown.data-ensta.fr/uploads/upload_2972a94cc5fa69ff30e0ae4a044a0480.png)

