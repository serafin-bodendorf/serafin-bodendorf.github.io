---
layout: default
title: Alle Posts
---

# Alle Posts

<ul class="postlist">
    {% for post in site.posts %}
        <a href="{{ post.url | relative_url }}">
            <li>
                <h3>{{ post.title }}</h3>
                <div class="post-meta">{{ post.date | date: "%d. %B %Y" }}</div>
                <div class="post-preview">{{ post.preview }}</div>
            </li>
        </a>
  {% endfor %}
</ul>


