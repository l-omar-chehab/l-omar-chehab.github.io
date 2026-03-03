---
layout: blank
title: My Post
permalink: /notes/cheatsheet.html
---

This was written with a macOS system in mind.

## 💻 Useful Tricks in an Editor (Visual Studio Code)

| **Action** | **Shortcut / Command** | **Notes** |
|------------|------------------------|-----------|
| Block indent | `Tab` | |
| Block unindent | `Shift + Tab` | |
| Single-space indent | `Tab` | Requires extension: indent-one-space |
| Move cursor quickly | `Cmd + Arrow` | Jump to start/end of line |
| Select text | `Shift + Arrow` | |
| Multi-select next occurrence | `Cmd + D` | Select and edit repeated text |
| Comment / uncomment | `Cmd + /` | |
| Search in entire project | `Shift + Cmd + F` | |
| Go to definition | `Cmd + Click` | Click on function name |

## 🖥 Useful Terminal Tricks (Bash)

| **Goal** | **Command** | **Notes** |
|----------|------------|-----------|
| Export filenames containing an expression | `ls | grep expression > output.txt` | Save results to file |
| Delete all files with a specific extension | `find . -name "*.bak" -type f -delete` | Recursive |
| Interrupt running process | `Ctrl + C` | |
| List open processes in a directory | `lsof +D /path` | Shows PID numbers |
| Kill a process | `kill <pid>` | Replace `<pid>` with process ID |
| Clear line before cursor | `Ctrl + U` | Deletes current command |
| Clear terminal screen | `Ctrl + L` | |
| Search command history | `Ctrl + R` | |
| Autocomplete command | `Tab` | Extremely useful |

When working on a remote server or cluster, graphical file browsing disappears.  
Being comfortable with the terminal becomes essential.

## 📁 Using the Terminal for Files

| **Goal** | **Command** | **Notes** |
|----------|------------|-----------|
| Show folder disk usage | `du -sh *` | `-s` summary, `-h` human-readable |
| Show filesystem disk usage | `df -h` | |
| Create empty file | `touch myfile` | |
| Edit file | `vim myfile` | Or `code myfile` for VS Code |
| → Enter insert mode (vim) | `I` | |
| → Search in vim | `/word` | Press `n` for next match |
| → Save and quit (vim) | `:wq` | |
| → Quit without saving | `:q!` | |
| Display file content | `cat myfile` | |
| Scroll through file | `less myfile` | Press `q` to quit |
| Show beginning of file | `head myfile` | |
| Show end of file | `tail myfile` | Useful for logs |

This is particularly useful when monitoring a log file that updates during execution.

## 🍏 Useful macOS Visual Tricks

| **Action** | **Shortcut** | **Notes** |
|------------|-------------|-----------|
| Preview file without opening | `Spacebar` | Quick Look |
| Split screen | Hold green window button → drag | |
