---
layout: page.njk
pagination:
  data: collections.javascript
  size: 20
  reverse: true
  alias: posts
permalink: "/posts/javascript/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}"
title: Javascript
---

{% for post in posts %}
{% include 'components/post-card.njk' %}
{% endfor %}
