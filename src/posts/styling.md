---
layout: page.njk
pagination:
  data: collections.styling
  size: 20
  reverse: true
  alias: posts
permalink: "/posts/styling/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}"
title: Styling
---

{% for post in posts %}
{% include 'components/post-card.njk' %}
{% endfor %}
