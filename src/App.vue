<script>
import { RouterLink, RouterView } from 'vue-router'
export default { //stocke des éléments que l'on pourra réutiliser plus tard
  name: 'App',
}
</script>

<template>

  <nav>
    <RouterLink to="/journal">Journal</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/clavier">Clavier</RouterLink>
  </nav>

  <RouterView />

</template>

<style>
nav {
  display: flex;
  flex-direction: column;
  /* width: 50%; */
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-size: 20px;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    /* margin-left: -1rem; */
    font-size: 1rem;
    /* padding: 1rem 0; */
    /* margin-top: 1rem; */
    margin-left: 90px;
  }
}
</style>
