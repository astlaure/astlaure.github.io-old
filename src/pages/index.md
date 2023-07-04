---
layout: home.njk

title: Homepage
---

### Recent posts

{% for post in collections.latest %}
{% include 'components/post-card.njk' %}
{% endfor %}
