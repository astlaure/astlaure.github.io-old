---
layout: page.njk
pagination:
  data: collections.architecture
  size: 20
  reverse: true
  alias: posts
permalink: "/posts/architecture/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}"
title: Architecture
---

{% for post in posts %}
{% include 'components/post-card.njk' %}
{% endfor %}
