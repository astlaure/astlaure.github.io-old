---
layout: page.njk
pagination:
  data: collections.java
  size: 20
  reverse: true
  alias: posts
permalink: "/posts/java/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}"
title: Java
---

{% for post in posts %}
{% include 'components/post-card.njk' %}
{% endfor %}
