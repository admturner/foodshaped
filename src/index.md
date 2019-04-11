---
layout: "layouts/home.njk"
---

### [Posts]({{ site.url | url }}blog/)

{%- for post in collections.posts | slice(10) %}

- [{{ post.data.title }}]({{ post.url | url }})

{%- endfor %}

### [Recipes]({{ site.url | url }}recipes/)

{%- for recipe in collections.recipes | slice(10) %}

- [{{ recipe.data.title }}]({{ recipe.url | url }})

{%- endfor %}
