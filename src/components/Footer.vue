<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__left">
        <span class="footer__logo">
          <span class="footer__logo-bracket">&lt;</span>
          MrFantasma
          <span class="footer__logo-bracket">&#47;&gt;</span>
        </span>
        <p class="footer__tagline">Backend Developer · Chile · Available for remote work</p>
      </div>
      <div class="footer__right">
        <nav class="footer__links">
          <a class="footer__link" href="https://github.com/FantaCovid-19">GitHub</a>
          <a class="footer__link" href="mailto:contact@mrfantasma.com">Email</a>
        </nav>
        <p class="footer__copyright">© {{ new Date().getFullYear() }} MrFantasma. Build with Vue + Vite</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg);
  border-top: 1px solid var(--muted);
  padding: 3.5rem clamp(1.5rem, 5%, 3rem);
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--highlight), transparent);
  opacity: 0.3;
}

.footer__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer__logo {
  font-family: var(--font-monospace);
  font-weight: var(--fw-bold);
  font-size: var(--text-md);
  color: var(--t4);
  letter-spacing: -0.02em;
  white-space: nowrap;
  display: block;
  margin-bottom: 0.5rem;
  transition: color var(--ease);
}

.footer__logo:hover,
.footer__logo-bracket {
  color: var(--t2);
}

.footer__tagline {
  font-family: var(--font-body);
  color: var(--t3);
  font-size: var(--text-base);
}

.footer__right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
}

.footer__links {
  display: flex;
  gap: 1.5rem;
}

.footer__link {
  font-family: var(--font-body);
  color: var(--t5);
  font-size: var(--text-base);
  font-weight: var(--fw-medium);
  text-decoration: none;
  transition: color var(--ease);
}

.footer__link:hover {
  color: var(--t6);
}

.footer__copyright {
  font-family: var(--font-monospace);
  color: var(--t4);
  font-size: var(--text-xs);
  opacity: 0.5;
}

@media (max-width: 768px) {
  .footer__inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer__right {
    align-items: flex-start;
  }
}
</style>
