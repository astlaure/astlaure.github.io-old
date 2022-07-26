---
layout: page.njk
pagination:
  data: collections
  size: 1
  alias: category
  filter:
    - all
    - post
    - posts
    - latest
    - postTags
permalink: '/posts/{{ category | slugify }}/'
title: Posts Category
---

{% set tag = category %}
{% for post in collections[category] | reverse %}
{% include 'components/post-card.njk' %}
{% endfor %}
