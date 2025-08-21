---
title: Wie diese Seite funktioniert
description: ""
date: 2025-08-21T10:21:26.711Z
preview: ""
tags: []
categories: []
hide-description: false
keywords: ""
---

<section>
    {% capture my_markdown %}

## TLDR (die 'Hard Facts')

Ich verwende...
- GitHub Pages, um die Seite zu hosten
- Jeckyll als Static Site Generator
- Simple.css als Basis für mein Styling
- VSCodium mit dem Plugin Frontmatter, um Posts und Pages zu erstellen und zu verwalten

Wenn du wissen willst, was das alles bedeutet oder warum ich genau das verwende, ließ weiter...

    {% endcapture %}

    {{ my_markdown | markdownify }}
</section>

Ich habe schon länger mit der Idee gespielt, [einen Blog zu starten]({% post_url 2025-08-18-warum-bloggen %}), aber war mir bei der technischen Umsetzung immer unsicher. Es gibt eine riesige Welt an verschiedenen Frameworks und Plattformen, von denen manche viel zu begrenzend sind und andere wieder viel zu viele Features haben, die ich nicht brauche.

### Was ich brauche:
- Einfaches, unkompliziertes und günstiges Webhosting
- Gestaltungsfreiheit und Kontrolle über die Website (eigenes HTML, CSS und JavaScript)
- Einfaches Erstellen von Blogposts, am besten mit Markdown
- Unterstützung einer Template-Sprache wie Liquid

### Was ich nicht brauche:
- Eine dynamische Website
- Einbindung von Werbung
- Onlineshop
- Analytics

Ich habe das Gefühl, dass ich für meine konkreten Bedürfnisse das perfekte Setup gefunden habe.