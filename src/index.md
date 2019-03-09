---
layout: "layouts/home.njk"
---

### Latest Posts

{%- for post in collections.posts | slice(10) %}

- {{ post.data.title }}

{%- endfor %}
