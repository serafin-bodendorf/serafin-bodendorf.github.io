---
layout: default
title: Hi!
---

# Hi, ich bin Serafin!

Willkommen auf meinem Blog! Ich bin ein Kreativling aus München und schreibe mir hier alles Mögliche von der Seele – sei es über Projekte, an denen ich arbeite, Themen, die mich beschäftigen, und vielleicht zwischendurch ja sogar mal eine Kurzgeschichte oder ein Gedicht.

Das hier ist keine aufpolierte Portfolioseite (an der arbeite ich noch), sondern einfach ein kleiner, experimentelle Ort, um schnell, einfach und ohne großen Druck Dinge veröffentlichen zu können. [Normalize Sharing Scrappy Fiddles!](https://www.todepond.com/wikiblogarden/scrappy-fiddles/sharing/normalising/live/)

## Und sonst so?

Ich studiere gerade [Interkative Medien](https://www.tha.de/Gestaltung/Interaktive-Medien.html) an der Technischen Hochschule Augsburg und unterstütze als studentische Hilfskraft die Jugendredaktion [DEiN LiFE](https://www.deinlife.net/) im Medienzentrum München. Außerdem mache ich sporadisch Videos auf [YouTube](https://www.youtube.de/@serafilmyt).

## Neuste Posts

<ul>
  {% for post in site.posts limit:5 %}
    <li>
      <strong><a href="{{ post.url | relative_url }}">{{ post.title }}</a></strong> | 
      <span>{{ post.date | date: "%d. %B %Y" }}</span>
    </li>
  {% endfor %}
</ul>

<a href="{{ '/posts' | relative_url }}">→ Alle Posts</a>