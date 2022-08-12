<h2>Introduction</h2>

This was written with a MacOS system in mind.

### Useful tricks in an editor (visual studio)


Navigate script using the keyboard | Bash command | Comments
--- | --- | ---
*block indent* | `Tab` | 
*block unindent* | `Shift+Tab` | 
*move quickly cursor through lines* | `Apple+arrow` | 
*select text* | `Shift+arrow` | 
l | then `Apple+D` to jointly select and modify other instances of the selected text| 
*comment out* | `Apple+/` | 



### Useful tricks in the terminal (bash)


Goal | Bash command | Comments
--- | --- | ---
*Export all file names contaning an expression* | `ls | grep expression > output.txt` | 
*Delete all files with a specific extension* | `find . -name "*.bak" -type f -delete` | 
*Interrupt running process* | `Ctrl+C ` | 
*Clears text until beginning of line * | `Ctrl+U ` | useful to delete a chuck of commands directly written in the terminal  
*Clears text until beginning * | `Ctrl+L ` | -
*Search terminal history* | `Ctrl+R ` | 
*Autocomplete command* | `Tab` | Super useful 


When using the remote server of your institution to stock data and run computations and clusters, the luxury to create, read, and edit files by clicking with your mouse on a visual interface is no more. Being comfortable using the terminal is a necessity.


Using the terminal for files | Bash command | Comments
--- | --- | ---
*create an empty file* | `touch myfile` | 
*edit a file* | `vim myfile` |
l | then `I` for insertion mode |
l | maybe `/` followed by a word to look for |
l | then `:wq` to quit editing mode + save | 
l | or `:q!` to quit editing mode + without saving | 
*display file content in terminal* | `cat myfile` 
l | or for better display control `less myfile` | 
l | or to specifically display parts `head myfile`  `tail myfile` | 

That last part is useful when a script is running and updates a log file at each iteration, which you'd like to consult without overwriting it as it is being updated!
