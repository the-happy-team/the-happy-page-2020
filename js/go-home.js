---
layout: none
---

document.addEventListener('DOMContentLoaded', () => {
  if(window.location.href.includes('404.html')) {
    window.location.href = '{{ site.baseurl }}/';
  }
});
