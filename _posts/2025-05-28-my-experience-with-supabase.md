---
layout: post
title: My Experience with Supabase
tags:
  - Supabase
  - Databases
---
I recently finished up a quick project for an assignment. I had to make a simple app that utilizes a database. I wrote the app in React Native using the Expo framework. The actual writing of the app I was not worried about. It was the database that I was worried about. I have a homelab with PostgreSQL running. I could have used that but I would have needed to figure out getting that accesible from outside of my home network. Instead of doing that I chose to use Supabase.

Since I was using the free plan of Supabase I thought that it was going to hurt me but actually it was very pleasant. I very quickly create two tables. The Supabase interface is very pleasant and easy to work with. I find it much better and easier to work with then the PGAdmin4 interface.

After creating my two tables I was able to very quickly setup foreign keys. Now it was time to setup my API key. To authenticate you just need the Supabase project URL and key.

Even with me wanting to use self hosted infrastructure I think there is a time and a place for IAaS. For example, this was just a simple project that took me about 10 hours to write. If I used my own self hosted database I would have increased the length of the project by at least a hour or two.

There are many platforms that offer a database. The reason that I went with Supabase over other competitors was because it is open source and self hostable. While I did not use the self hosted option I like having that flexibility so that if my needs grow and I want to continue using Supabase rather then my own database I am able to self host it rather then pay Supabase to host it.

Overall I am happy that I used Supabase because now I have experience with it. I think it is good practice to try new things because it not only teaches you more but it lets you maybe find something that works better. For now I am going to continue using PostgreSQL for all my projects but Supabase was a nice choice for this project and is a viable option for future projects.
