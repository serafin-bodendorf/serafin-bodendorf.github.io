---
title: Wie diese Seite funktioniert
description: ""
date: 2025-08-21T10:21:26.711Z
preview: ""
tags: []
categories: ["Projekte"]
hide-description: false
keywords: ""
---

Serafin entdeckt die weite Welt der Webframeworks! 



<section>
    {% capture my_markdown %}

## TLDR (die 'Hard Facts')

Ich verwende...
- GitHub Pages, um die Seite zu hosten
- Jekyll als Static Site Generator
- Markdown, um Blogposts zu verfassen
- Simple.css als Basis für mein Styling
- VSCodium mit dem Plugin Frontmatter, um Posts und Pages zu erstellen und zu verwalten

Wenn du wissen willst, was das alles bedeutet oder warum ich genau das verwende, ließ weiter.

    {% endcapture %}

    {{ my_markdown | markdownify }}
</section>

Ich habe schon länger mit der Idee gespielt, [einen Blog zu starten]({% post_url 2025-08-18-warum-bloggen %}), aber war mir bei der technischen Umsetzung immer unsicher. Es gibt eine riesige Welt an verschiedenen Frameworks und Plattformen, von denen manche viel zu begrenzend sind und andere wieder viel zu viele Features haben, die ich nicht brauche.

### Was ich brauche:
- Einfaches, unkompliziertes und günstiges Webhosting
- Gestaltungsfreiheit und Kontrolle über die Website (eigenes HTML, CSS und JavaScript)
- Einfaches und flexibles Erstellen von Blogposts, am besten mit Markdown
- Unterstützung einer Template-Sprache wie Liquid

### Was ich nicht brauche:
- Eine dynamische Website
- Einbindung von Werbung
- Onlineshop
- Analytics
- usw.

Ich habe das Gefühl, dass ich für meine konkreten Bedürfnisse das perfekte Setup gefunden habe. Nicht übermäßig kompliziert mit einem angenehmen Workflow für "Standart"-Blogposts, aber trotzdem flexibel genug, um alles zuzulassen, was ich machen will.

## Die Website wohnt auf GitHub Pages

Damit du `serafinsblog.de` in die Adresszeile deines Browsers kannst und diese Website erscheint, muss (grob gesagt) folgendes passieren:

1. Dein Computer fragt deinen lokalen [DNS-Server (**D**omain **N**ame **S**ystem)](https://de.wikipedia.org/wiki/Domain_Name_System), wofür diese URL denn steht. Der DNS-Server findet das heraus (entweder weiß er es selbst oder er fragt seine Kollegen) schickt eine IP-Adresse zurück.

2. Dein Computer verbindet sich mit dem Server, zu dem die IP-Adresse gehört, und nachdem sie sich die Hände geschüttelt haben, bittet er ihn, mal die gesuchte Seite rauszurücken.

3. Der Server kramt die angeforderte HTML-Datei heraus und wenn dabei nichts schief geht, schickt er sie deinem Computer zurück und der kann sie dann auf den Bildschirm pinseln. (Oft geht das danach auch noch ein paar mal hin und her, um z.B. Bilder Stylesheets, die in separaten Dateien gespeichert sind, nachzuladen.)

Ich brauche also einen Server, der jederzeit meine Seite losschicken kann, und einen Eintrag im DNS, der auf diesen Server verweist. Die Domain serafinsblog.de habe ich relativ günstig bei Ionos bekommen – da gibt es aber auch jede Menge anderer Anbieter, die wahrscheinlich genau so gut sind. Über Ionos kann ich jetzt was immer ich will unter meiner Domain ins DNS Eintragen.

Interessanter wird es beim Host, also dem Server, auf dem meine Seite gespeichert ist. Das kann normalerweise schon ein bisschen was kosten – evtl. mehr, als ich für so ein kleines Hobby-Projekt ausgeben wollen würde. Aber dann habe ich erfahren, dass GitHub kostenloses Hosting im kleinen Rahmen anbietet. Natürlich gibt es einige Begrenzungen, man kann nicht das nächste Amazon auf deren Servern aufbauen, aber für einen Blog wie diesen ist es perfekt geeignet!

GitHub ist ja eigentlich eine Plattform für die Verwaltung von Code, besonders in Teams. Die gleiche Infrastruktur lässt sich aber auch ganz gut verwenden, um eine Website zu verwalten. Ein "Nachteil" ist, dass ich ein öffentliches Repository verwenden muss, das heißt, [jeder kann meinen hässlichen Code sehen](https://github.com/serafin-bodendorf/serafin-bodendorf.github.io). Das macht mir letztendlich aber nicht viel aus – ich habe nichts zu verstecken! Und wer weiß, vielleicht habe ich an genau dieser Stelle ja eine geheime Nachricht versteckt, die man nur im Quelltext sehen kann...

{% if false %}
-------------------- GEHEIME NACHRICHT ------------------------
WOW, DU HAST DIE GEHEIME NACHRICHT GEFUNDEN!

...

Ich muss etwas gestehen: Ich bin irgendwie davon ausgegangen, 
dass niemand sich wirklich die Mühe machen wird, in den 
Quellcode zu schauen und nach dieser Nachricht zu suchen. 
Jetzt bist du da und ich habe überhaupt nichts zu bieten. Wie peinlich...
Aber hey, danke fürs vorbei schauen und generell danke fürs 
Lesen!
Und der HTML-Kommentar unter dieser Nachricht ist übrigens 
nicht an dich gerichtet, sondern an Leute, die sich nur den 
Quellcode der fertigen Seite angeschaut haben.
---------------------------------------------------------------
{% endif %}

<!-- Du hältst dich wohl für ganz schlau, was? Aber du findest die Nachricht nicht hier im HTML Quelltext, du musst schon in mein Repository gehen und dort suchen. -->

## Jekyll baut die Seite zusammen

Der einfachste Weg, eine Website zu bauen, ist, einfach "per Hand" alle HTML Dateien anzulegen. Das kann aber schnell zu Problemen führen.

Sagen wir zum Beispiel, du hast schon 20 Seiten erstellt. Alle Seiten haben einen Header, auf dem dein Name steht. Plötzlich fällt dir auf, dass dein eigener Name im Header auf JEDER EINZELNEN SEITE FALSCH GESCHRIEBEN IST. Jetzt musst du alle 20 Seiten einzeln öffnen und 20 mal den Typo korrigieren.

Oder sagen wir, du willst am Ende deiner Blogposts immer eine Liste mit deinen fünf neuesten Posts haben. Jetzt musst du JEDES MAL, WENN DU EINEN NEUEN POST SCHREIBST, JEDEN BISHERIGEN POST ÖFFNEN UND DIE LISTE AKTUALISIEREN! Entschuldigung fürs Schreien, dieses Thema macht mich einfach emotional.

Aber es gibt für all das eine bessere Lösung: Einen [Static Site Generator](https://de.wikipedia.org/wiki/Statische_Webseite#Statische-Website-Generatoren) wie [Jekyll](https://jekyllrb.com/) (das ist der, den ich verwende).

### Was ist ein Static Site Generator?

Ein Static Site Generator (SSG) baut dir deine HTML-Dateien nach deinen Anweisungen automatisch zusammen. Das heißt z.B., anstatt manuell den Header in jede einzelne Seite zu kopieren, könntest du ihn einzeln in eine eigene HTML-Datei schreiben und in deine Seite so einen Befehl einfügen:

```
{% raw %}{% include header.html %}{% endraw %}
```

Wenn du dann Jekyll ausführst, baut es dir automatisch komplette HTML-Dokumente mit dem Header (und allem was du sonst noch eingefügt hast). Und wenn du in header.html etwas veränderst, kann die neue Version mit nur einem Befehl wieder in alle Files eingefügt werden.

Nach dem gleichen Prinzip lassen sich auch komplexere Aufgaben lösen, zum Beispiel die oben genannte Liste der fünf neusten Blogposts. Der Code für die Liste am Ende dieser Seite sieht dann beispielsweise so aus:

{% highlight html %} {% raw %} <section>
    <h2>Neuste Posts</h2>
    <ul>
        {% for post in site.posts limit:5 %}
        <li>
            <strong><a href="{{ post.url | relative_url }}">{{ post.title }}</a></strong> | 
            <span>{{ post.date | date: "%d. %B %Y" }}</span>
        </li>
        {% endfor %}
    </ul>
    <a href="{{ '/posts' | relative_url }}" class="button">→ Alle Posts</a>
</section> {% endraw %} {% endhighlight %}

Nach all diesen Anweisungen baut Jekyll also einen Haufen HTML-Dateien und verpackt das alles zusammen mit sonstigen relevanten Dateien (Bilder, Stylesheets, JavaScript-Dateien, Schriftarten, ...) in ein Ordnersystem. Die entstandenen Dateien liegen dann auf dem Server bereit, bis sie abgerufen werden.

Im Gegensatz zu statischen Webseiten gibt es übrigens auch [dynamische Webseiten](https://de.wikipedia.org/wiki/Webseite#Dynamische_Webseiten), bei denen das HTML für jede Anfrage neu generiert werden kann. Wenn ich zum Beispiel auf Google nach dem Emu War suche (was man übrigens mal machen sollte), dann hat Google die Seite mit den Ergebnissen nicht schon bei sich auf dem Server herumliegen. Sie wird basierend auf meiner Anfrage extra zusammengestellt und mir als HTML geschickt. So etwas kann ein SSG wie Jekyll also nicht.

Jekyll hat aber noch eine weitere Funktion, die mir fast genauso wichtig ist: Es ist auf das Arbeiten mit Markdown ausgelegt.

### I ❤️ MD

[Markdown](https://de.wikipedia.org/wiki/Markdown) ist genau wie HTML eine *Markup-Language*, das heißt sie speichert formatierten Text. Dabei hat Markdown im Gegensatz zu HTML allerdings einen Fokus auf Lesbarkeit und Einfachheit.

Sagen wir zum Beispiel, ich will folgenden Text erzeugen:

<div class="notice">
    {% capture beispieltext %}
## Top 3 Enten

Hier sind meine **absoluten Lieblingsenten**:

1. [Stockente](https://de.wikipedia.org/wiki/Stockente)
2. [Citroën 2CV (Ente)](https://de.wikipedia.org/wiki/Citroën_2CV)
3. [Falschmeldung in der Zeitung (Zeitungsente)](https://de.wikipedia.org/wiki/Zeitungsente){% endcapture %}

    {{ beispieltext | markdownify }}
</div>

Das HTML dafür sieht so aus:

{% highlight html %}
{{ beispieltext | markdownify | remove: ' id="top-3-enten"' }}
{% endhighlight %}

Im Vergleich dazu, hier das Gleiche in Markdown:

{% highlight markdown %}
{{ beispieltext }}
{% endhighlight %}

Viel übersichtlicher, oder?

Das heißt nicht, dass HTML nicht auch seine Berechtigung hätte. Es ist perfekt dazu geeignet, Inhalte in komplexe Webseiten-Layouts einzufügen und mit CSS und JavaScript zu kommunizieren. Wenn es aber darum geht, Texte zu schreiben und dabei 'on the fly' zu formatieren, ist Markdown meilenweit überlegen.

<style>
    #fancy-text {
        font-family: 'Times New Roman', Serif;
        font-style: italic;
        color: var(--code);
        transform: rotate(3deg);
        animation: wiggle 3s infinite;
        display: inline-block;
    }

    @keyframes wiggle {
        0%   {transform: rotate(3deg);}
        50%  {transform: rotate(-3deg);}
        100% {transform: rotate(3deg);}
    }
</style>

Deswegen bin ich froh, dass man mit Jekyll komplett mühelos HTML und Markdown kombinieren kann. So liegt zum Beispiel das Template für meine Blogposts in HTML vor, die Texte selber schreibe ich aber in Markdown. Und wenn ich innerhalb eines Posts doch mal <span id="fancy-text">✨ etwas komplizierteres ✨</span> machen will, das mit Markdown nicht funktioniert, kann ich sogar innerhalb der Markdown-Datei einen Block HTML einfügen. 

Weil Markdown so einfach zu schreiben ist, brauche ich auch gar nicht zwingend irgendwelche besondere Software und kann Blogposts sogar [vom Handy aus]({% post_url 2025-08-21-posten-vom-handy %}) schreiben und veröffentlichen. 

## Simple.css macht alles schick!

Doch auch das beste Markup bringt nichts ohne gutes Styling! Wenn HTML und Markdown sagen, "Das ist eine Überschrift", dann kann der Browser damit erstmal nichts anfangen. Bzw. er rendert es in einem hässlichen Non-Design:

<button id="toggleStyles">Stylesheets deaktivieren</button>





<script>
    let stylesDisabled = false;

    const toggleStylesButton = document.getElementById("toggleStyles");
    toggleStylesButton.addEventListener("click", () => {
    for (let sheet of document.styleSheets) {
        sheet.disabled = !stylesDisabled;
    }
    toggleStylesButton.innerText = stylesDisabled ? "Stylesheets deaktivieren" : "Stylesheets aktivieren";
    stylesDisabled = !stylesDisabled;
    });
</script>