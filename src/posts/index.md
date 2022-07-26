---
layout: page.njk
pagination:
  data: collections.post
  size: 20
  reverse: true
  alias: posts
permalink: "/posts/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}"
title: Posts
---

{% for post in posts %}
{% include 'components/post-card.njk' %}
{% endfor %}
