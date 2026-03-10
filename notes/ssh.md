---
layout: blank
title: My Post
permalink: /notes/ssh.html
---

# How to connect to a remote cluster

The protocol used to connect to remote machines is called `SSH` — **S**ecure **Sh**ell.  
It allows you to log into remote servers and clusters securely from your computer.

<style>
  h1 {
    margin-bottom: 8px;
  }

  h3 {
    margin-top: 24px;
    margin-bottom: 10px;
    color: #16304a;
    letter-spacing: 0.15px;
  }

  p,
  li {
    line-height: 1.65;
  }

  hr {
    border: 0;
    border-top: 1px solid #e4ecf5;
    margin: 18px 0;
  }

  pre,
  .highlight pre {
    background: rgba(23, 114, 208, 0.09);
    border: 1px solid rgba(23, 114, 208, 0.2);
    border-radius: 10px;
    padding: 12px 14px;
  }
</style>

---

### Step 1: create a private/public key pair
 
SSH authentication is typically based on a **pair of cryptographic keys**: a private key and a public key. The public key is mathematically derived from the private key.  You keep the private key on your machine and never share it. The public key, on the other hand, can safely be sent to the administrator of a remote server.

These files live in the hidden directory `~/.ssh`, usually under the names `id_rsa` (private key) and `id_rsa.pub` (public key).

You can check whether these files already exist:

```bash
cd ~/.ssh
ls
```

If they are not present, generate them with:

```bash
ssh-keygen -t rsa
```

You can inspect their contents using:

```bash
cat id_rsa
cat id_rsa.pub
```

---

### Step 2: send your public key to the server administrator

To access a remote server, your **public key must be installed on that server**.

Typically, you simply send the content of `id_rsa.pub` to the administrators managing the cluster at your institution.

---

### Step 3: connect to the remote server

Once your public key has been registered, you can connect using:

```bash
ssh username@remoteserver.com
```

The first time you connect, SSH will ask whether you trust the host. Type yes. Behind the scenes, two things happen:

- The server verifies your identity by checking that your machine possesses the **private key** corresponding to the public key it received.
- Your computer verifies the server’s identity and stores its fingerprint in the file `known_hosts` inside `~/.ssh`.

---

### Step 4: simplify the connection

Typing

```bash
ssh username@remoteserver.com
```

can become tedious. Sometimes it is even more complicated: you may need to first connect to a **gateway server** at your institution before accessing the cluster.

SSH allows you to simplify this using a configuration file called `config`, stored in the `~/.ssh` directory.

For example, suppose your username is *ochehab* and you want to connect to a computing cluster called *dragon* at Harvard, which is accessed through a gateway server. Your configuration file could look like this:

```bash
Host *
  UseKeychain yes
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_rsa

##################################################
# Harvard gateway

Host harvard
  HostName ssh.harvard.edu
  User ochehab

##################################################
# Dragon cluster

Host dragon
  HostName dragon.harvard.edu
  User ochehab
  CheckHostIP no
  ProxyCommand ssh harvard /usr/bin/nc %h %p

##################################################
# General rule for Harvard machines

Host *.harvard.edu
  ProxyCommand ssh -q harvard /usr/bin/nc -w 1 %h 22
  IdentityFile ~/.ssh/id_rsa
  User ochehab
  ForwardAgent yes
  ForwardX11 no
```

With this configuration in place, connecting to the cluster becomes as simple as:

```bash
ssh dragon
```

instead of typing:

```bash
ssh ochehab@ssh.harvard.edu
ssh ochehab@dragon.harvard.edu
```
