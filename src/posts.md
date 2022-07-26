---
layout: page.njk

title: Posts
---

{% for post in collections.post | reverse %}
{% include 'components/post-card.njk' %}
{% endfor %}
