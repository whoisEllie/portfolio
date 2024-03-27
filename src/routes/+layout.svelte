<div class="header">
  <div class="title">
    Ellie Kelemen
  </div>
  <div class="nav-links">
    <a href="/">[Home]</a>
    <a href="/projects">[Projects]</a>
    <a href="../static/cv.pdf">[CV]</a>
    <a href="mailto:contact@elliekelemen.com">[Contact]</a>
    <a href="/">[Site Map]</a>
  </div>
</div>
<slot></slot>

<style>

:global(body) {
  margin: 3rem;
  padding: 0;
}

.header {
  padding: 0 0 1rem 0;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  font-size: 1.125rem;
}

.title {
  font-size: 1.5rem;
}

.nav-links {
  padding: 0.5rem 5vw 0 5vw;
  display: flex;
  justify-content: space-between;
}

</style>
