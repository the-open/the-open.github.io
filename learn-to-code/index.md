---
title: Learn To Code
layout: base
---

# Learn To Code

If you're reading this, you're probably a campaigner. You're probably busy but
feeling grateful to have carved out some time to learn a new skill. We have put
together this training to get you building interesting things ASAP and focus
on the kinds of tech we use the most: building a single page, making it
interactive and stylish,

- getting started # build a page like a petition
- cascading stylesheets # layout like a petition
- user interactions with js # dismiss form / show thanks, show modal
- importing css and js # import bootstrap
- publish with github app
- bootstrap markup modals accordions

1. Getting started. Getting set and taking the blackgirls.tech html guide
1. Build a barebones campaign page in HTML
1. Use CSS (stylesheets) to make it look good
1. Including assets and Bootstrap
1. Github pages
1. Templates
1. Index and Thankyou page
1. Google analytics, javascript events

## Okay


{# assign lessons = site.lessons | sort: 'order' #}
{# for lesson in lessons #}
{% for lesson in site.lessons %}
  1. [{{ lesson.title }}]({{ lesson.url }}): {{ lesson.summary }}
{% endfor %}
