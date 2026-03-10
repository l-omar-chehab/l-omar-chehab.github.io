---
layout: blank
title: My Post
permalink: /notes/parallelization.html
---

# Parallelization

<style>
  h2 {
    display: block;
    margin-top: 24px;
    padding-bottom: 6px;
    border-bottom: 2px solid #dbe7f5;
    color: #16304a;
    letter-spacing: 0.2px;
  }

  h3 {
    margin-top: 18px;
    color: #17314a;
  }

  p,
  li {
    line-height: 1.65;
  }

  pre,
  .highlight pre {
    background: rgba(23, 114, 208, 0.09);
    border: 1px solid rgba(23, 114, 208, 0.2);
    border-radius: 10px;
    padding: 12px 14px;
  }
</style>

## Your Code Multitasks

You can make code run faster by executing independent tasks in parallel. This is the core idea of *parallel computing*.

Suppose your Python code already supports parallelism (for example via `joblib` or `pytorch`) and you are connected to a remote cluster. The next step is to choose the hardware used for parallel execution:

- **CPU** (Central Processing Unit)
- **GPU** (Graphics Processing Unit, often much faster for large numerical workloads)

Check usage with:

```bash
htop     # CPU usage
gpustat  # GPU usage
```

### 1) GPU Parallelization

Select GPUs using:

```bash
export CUDA_VISIBLE_DEVICES=0,1  # use the first two GPUs
```

### 2) CPU Parallelization

Even when your code dispatches jobs, performance depends on *how* CPU threads are configured.

For large-scale workloads, it is often better to avoid heavy multithreading per process and run more single-threaded jobs in parallel. A common setup is:

```bash
# stop per-process multithreading
export MKL_NUM_THREADS=1
export NUMEXPR_NUM_THREADS=1
export OMP_NUM_THREADS=1
```

## You Multitask

Sometimes you want to launch several experiments and leave them running overnight. Three common options are `&`, `screen`, and `tmux`.

### 1) `&` (Background Job)

Simple and quick, but the process usually stops when the terminal/session is interrupted.

```bash
python3 main.py &
jobs  # check running background jobs
```

### 2) `screen`

`screen` is a complete and easy session manager.

Function | Command | Comments
--- | --- | ---
List sessions | `screen -ls` |
Enter or create a session | `screen -r nameofscreen` | Then run your code
Detach session | `Ctrl-A` then `Ctrl-D` | Leaves code running
Kill session (inside) | `Ctrl-A` then `Ctrl-K` | Close when done
Kill session (outside) | `screen -X -S [session #] kill` |
Kill all sessions | `killall screen` |

### 3) `tmux`

`tmux` is a powerful alternative. Useful reference: [https://tmuxcheatsheet.com](https://tmuxcheatsheet.com)

A `tmux` session contains windows, and windows can contain multiple panes.

Function | Command | Comments
--- | --- | ---
List sessions | `tmux ls` |
Create session | `tmux new -s mysession` | Then run your code
Attach to session | `tmux attach -t mysession` |
Detach session | `Ctrl-B` then `D` | Leaves code running
Kill session (inside) | `Ctrl-B` then `X` |
Kill session (outside) | `tmux kill-session -t mysession` |
Kill all sessions | `tmux kill-server` |
Split pane | `Ctrl-B` then `%` | Creates another terminal pane
Next pane | `Ctrl-B` then `O` |
Change layout | `Ctrl-B` then `space` |
Scroll mode | `Ctrl-B` then `[` |









