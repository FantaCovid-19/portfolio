<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, File } from 'lucide-vue-next'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  if (isMenuOpen.value) closeMenu()
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['navbar', { navbar__scrolled: isScrolled }]">
    <div class="navbar__inner">
      <a class="navbar__logo" href="/"><span class="navbar__logo-bracket">&lt;</span> MrFantasma <span class="navbar__logo-bracket">&#47;&gt;</span></a>

      <nav class="navbar__nav">
        <ul class="navbar__nav-links">
          <li v-for="link in navLinks" :key="link.href">
            <a class="navbar__nav-link" :href="link.href"> {{ link.label }} </a>
          </li>
        </ul>
      </nav>

      <div class="navbar__actions">
        <a class="btn btn-primary btn-sm navbar__cv-button" href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          <File style="height: 15px; width: 15px" />
          Ver CV
        </a>

        <button class="navbar__mobile-btn" @click="toggleMenu">
          <Transition name="icon" mode="out-in">
            <Menu v-if="!isMenuOpen" key="menu" />
            <X v-else key="close" />
          </Transition>
        </button>
      </div>
    </div>
  </header>

  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isMenuOpen" class="navbar__overlay" @click="closeMenu" />
    </Transition>

    <Transition name="slide">
      <nav v-if="isMenuOpen" class="navbar__mobile">
        <button class="navbar__mobile-close" @click="closeMenu">
          <X />
        </button>
        <ul class="navbar__mobile-links">
          <li v-for="link in navLinks" :key="link.href">
            <a class="navbar__mobile-link" :href="link.href" @click="closeMenu"> {{ link.label }} </a>
          </li>
          <li>
            <a class="navbar__mobile-link navbar__mobile-cv-button" href="/cv.pdf" target="_blank" rel="noopener noreferrer" @click="closeMenu"> Ver CV ↗ </a>
          </li>
        </ul>
      </nav>
    </Transition>
  </Teleport>
</template>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  z-index: var(--z-navbar);
  background: transparent;
  border-bottom: var(--border-thin) solid transparent;
  transition:
    background var(--ease-md),
    border-color var(--ease-md),
    box-shadow var(--ease-md);
}

.navbar__scrolled {
  border-bottom-color: var(--muted);
  background: var(--surface);
  box-shadow: 0 1px 20px #00000080;
}

.navbar__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1.1rem clamp(1.5rem, 5%, 3rem);
  gap: 2rem;
}

.navbar__logo {
  font-family: var(--font-monospace);
  font-weight: var(--fw-bold);
  font-size: var(--text-md);
  color: var(--t4);
  letter-spacing: -0.02em;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: color var(--ease);
}

.navbar__logo:hover,
.navbar__logo-bracket {
  color: var(--t2);
}

.navbar__nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.navbar__nav-links {
  display: flex;
  gap: var(--space-1);
  list-style: none;
}

.navbar__nav-link {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--fw-medium);
  color: var(--t4);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  position: relative;
  text-decoration: none;
  transition:
    color var(--ease),
    background var(--ease);
}

.navbar__nav-link::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 50%;
  width: 20px;
  height: 2px;
  background: var(--t5);
  border-radius: 1px;
  transform: translate(-50%) scaleX(0);
  transition: transform var(--ease-out);
}

.navbar__nav-link:hover {
  color: var(--t2);
  background: var(--muted);
}

.navbar__nav-link.active {
  color: var(--t2);
  background: var(--accent);
  font-weight: var(--fw-medium);
}

.navbar__nav-link:hover::after {
  transform: translate(-50%) scaleX(1);
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-shrink: 0;
}

.navbar__mobile-btn {
  display: none;
  gap: var(--space-1);
  border: none;
  background: none;
  color: var(--t1);
  padding: 0.5rem;
  cursor: pointer;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .navbar__nav,
  .navbar__cv-button {
    display: none;
  }

  .navbar__mobile-btn {
    display: flex;
  }
}

/* Animation overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--ease-md);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animation slide menu */
.slide-enter-active,
.slide-leave-active {
  transition:
    transform var(--ease-md),
    opacity var(--ease-md);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Animation icon */
.icon-enter-active,
.icon-leave-active {
  transition:
    opacity var(--ease),
    transform var(--ease);
}

.icon-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
}

.icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}
</style>

<style>
.navbar__overlay {
  position: fixed;
  inset: 0;
  z-index: var(--z-overlay);
  background: var(--overlay-sm);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.navbar__mobile {
  position: fixed;
  top: 0;
  right: 0;
  width: min(320px, 85vw);
  height: 100dvh;
  background: var(--surface);
  border-left: var(--border-thin) solid var(--muted);
  z-index: var(--z-drawer);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  box-shadow: var(--shadow-lg);
}

.navbar__mobile-close {
  align-self: flex-end;
  background: none;
  border: none;
  color: var(--t4);
  cursor: pointer;
  padding: var(--space-2);
  margin-bottom: 2rem;
  transition: color var(--ease);
}

.navbar__mobile-close:hover {
  color: var(--t1);
}

.navbar__mobile-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.navbar__mobile-link {
  display: block;
  font-family: var(--font-body);
  font-size: var(--text-md);
  font-weight: var(--fw-medium);
  color: var(--t4);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition:
    color var(--ease),
    background var(--ease);
}

.navbar__mobile-link:hover {
  color: var(--t2);
  background: var(--muted);
}

.navbar__mobile-cv-button {
  margin-top: var(--space-4);
  color: var(--t2);
  border: var(--border-thin) solid var(--muted);
}
</style>
