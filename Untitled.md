---
layout: post
title: My Homelab Experience After 13 Months
tags:
  - Homelab
---
I start my homelab journey on April 4th 2024. Well it started before that as I was researching stuff but that was the day that I installed Proxmox on my family's old desktop computer. The next few days I spent time installing different Linux VMs, Linux Containers and Windows 11 on Proxomx. It was a blast I was learning so much and I had so many things to setup. I started install docker containers on a VM.

Then I had this idea that I could use a physical monitor, keyboard, and mouse with a VM without a dedicated GPU. I ran some pretty devastating commands on the Proxmox host which made it completely unusable. That taught me one of the biggest lessons don't do breaking changes on a server that has not been having backups. After running a command Proxmox just completely broke leaving me with one option, reinstall losing all my data. After that I have been very careful even time I run commands on the Proxmox host. I have also tried to be better about taking backups of my VMs and data so that if I have a problem in the future I don't lose all my data. 

Another thing I quickly learned was host Docker worked. At first I was just running docker start commands and pasting random docker compose files and running them. After using Docker for a few months I had learned how to work with docker ports, images, and data. I still am no Docker expert but I know enough to ensure my containers are running safely and should not have any problems.

Then I started using PiHole a few months into using my homelab. I also setup Tailscale so that I can remotely reach my homelab. I also setup PiHole with custom DNS records and used Nginx to assign all my services there own domain name so that I do not need to memorize IPs and ports numbers.

Another thing I setup around this time was my PostgreSQL database. I install PostgreSQL along with PGAdmin to access my database from my web browser. I started to use this database to store data from random projects and also for my health data that I store in my homelab. 

n8n

Then very recently i started messing with Kubernetes and setting up my infrastructure as code (IaC). 