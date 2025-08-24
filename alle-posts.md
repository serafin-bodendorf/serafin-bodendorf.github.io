---
layout: default
title: Alle Posts
description: Alle Posts von Serafins Blog
---

# Alle Posts

<ul class="postlist">
    {% for post in site.posts %}
        {% if post.description and post.description != "" %}
            {% assign custom_description = post.description %}
        {% else %}
            {% assign custom_description = post.excerpt | strip_html | truncate: 160 %}
        {% endif %}
        <a href="{{ post.url | relative_url }}">
            <li>
                <h3>{{ post.title }}</h3>
                
                <p class="post-meta">{{ post.date | date: "%d. %B %Y" }} • {{post.categories.first}}</p>
                <p class="post-description">{{ custom_description }}</p>
            </li>
        </a>
  {% endfor %}
</ul>


