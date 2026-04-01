<script setup lang="ts">
import { Rocket, Download } from 'lucide-vue-next'
</script>

<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <div class="hero__available">
          <span class="hero__dot"></span>
          <span>Available for opportunities</span>
        </div>

        <h1 class="hero__title">Hi, I'm MrFantasma</h1>

        <p class="hero__role"><span class="hero__role-highlight">Backend</span> Developer</p>

        <p class="hero__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nesciunt facilis maxime laborum voluptas iure veritatis culpa nihil ad rem, voluptatem quidem ipsum
          officia ea eligendi consequatur vel qui numquam.
        </p>

        <div class="hero__actions">
          <a href="#projects" class="btn btn-primary btn-lg"><Rocket style="width: 14px; height: 14px" />View Projects</a>
          <a href="/cv.pdf" class="btn btn-outline btn-lg" target="_blank" rel="noopener noreferrer"> <Download style="width: 14px; height: 14px" />Download CV</a>
        </div>
      </div>

      <div class="hero__terminal">
        <div class="hero__terminal-title">
          <div class="hero__terminal-dots">
            <span class="hero__terminal-dot-1" />
            <span class="hero__terminal-dot-2" />
            <span class="hero__terminal-dot-3" />
          </div>
          <span class="hero__terminal-title-text">bash</span>
          <div class="hero__terminal-tech">
            <span class="hero__terminal-tech-item">pnpm</span>
            <span class="hero__terminal-tech-item">git</span>
          </div>
        </div>
        <div class="hero__terminal-output">
          <div>
            <span class="term-ok">mrfantasma</span>@<span class="term-str">archbook</span> <span class="term-fn">~/portfolio</span> <span class="term-kw">$</span> echo "Hello,
            World!"
          </div>

          <div>
            <span class="term-ok">Hello, World!</span>
          </div>

          <div>
            <span class="term-ok">mrfantasma</span>@<span class="term-str">archbook</span> <span class="term-fn">~/portfolio</span> <span class="term-kw">$</span> cat profile.json
          </div>
          <div>
            { <br />
            &nbsp; <span class="term-prop">"name"</span>: <span class="term-str">"MrFantasma"</span>,<br />
            &nbsp; <span class="term-prop">"age"</span>: <span class="term-num">25</span>, <br />
            &nbsp; <span class="term-prop">"skills"</span>: [ <br />
            &nbsp; &nbsp; <span class="term-str">"TypeScript"</span>, <br />
            &nbsp; &nbsp; <span class="term-str">"JavaScript"</span>, <br />
            &nbsp; &nbsp; <span class="term-str">"C#"</span> <br />
            &nbsp;], <br />
            &nbsp; <span class="term-prop">"location"</span>: <span class="term-str">"Earth"</span> <br />
            &nbsp; <span class="term-prop">"email"</span>: <span class="term-str">"contact@mrfantasma.com"</span> <br />
            }
          </div>

          <div>
            <span class="term-ok">mrfantasma</span>@<span class="term-str">archbook</span> <span class="term-fn">~/portfolio</span> <span class="term-kw">$</span> ./available.sh
          </div>
          <div><span class="term-ok">Status:</span> <span class="term-ok">Available for new opportunities</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--bg);
  padding: 7rem clamp(1.5rem, 5%, 3rem) 4rem;
  position: relative;
  overflow: hidden;
}

.hero__container {
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3rem;
  position: relative;
}

.hero__available {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-monospace);
  font-size: var(--text-xs);
  font-weight: var(--fw-regular);
  color: #86efac;
  margin-bottom: 2rem;
  padding: 0.4rem 1rem;
  background: rgba(34, 197, 94, 0.12);
  border: var(--border-thin) solid rgba(34, 197, 94, 0.25);
  border-radius: var(--radius-pill);
  letter-spacing: 0.02em;
}

.hero__dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.5);
  animation: PulseHeroDot 2s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes PulseHeroDot {
  0%,
  to {
    box-shadow: 0 0 4px rgba(34, 197, 94, 0.5);
  }
  50% {
    box-shadow: 0 0 12px rgba(34, 197, 94, 0.8);
  }
  100% {
    box-shadow: 0 0 4px rgba(34, 197, 94, 0.5);
  }
}

.hero__title {
  font-family: var(--font-display);
  font-size: var(--hero-title);
  font-weight: var(--fw-bold);
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--t1);
  margin-bottom: 1rem;
}

.hero__role {
  font-family: var(--font-body);
  font-size: var(--hero-subtitle);
  font-weight: var(--fw-medium);
  color: var(--t2);
  margin-bottom: 1.75rem;
  letter-spacing: -0.01em;
}

.hero__role-highlight {
  color: var(--highlight);
  font-weight: var(--fw-bold);
}

.hero__description {
  font-family: var(--font-body);
  font-size: var(--body-fluid);
  line-height: 1.75;
  color: var(--t3);
  max-width: 460px;
  margin-bottom: 2.5rem;
}

.hero__actions {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.hero__terminal {
  background: #0d1117;
  border: var(--border-thin) solid #30363d;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}

.hero__terminal-title {
  background: #151b22;
  padding: 0 1rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: var(--border-thin) solid #30363d;
  position: relative;
}

.hero__terminal-dots {
  display: flex;
  gap: 0.4rem;
  align-items: center;
}

.hero__terminal-dot-1 {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: #ff5f56;
}

.hero__terminal-dot-2 {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: #ffbd2e;
}

.hero__terminal-dot-3 {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  background: #27c93f;
}

.hero__terminal-title-text {
  font-family: var(--font-monospace);
  font-size: var(--text-xs);
  color: #6e7681;
  letter-spacing: 0.02em;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.hero__terminal-tech {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.hero__terminal-tech-item {
  font-family: var(--font-monospace);
  font-size: var(--text-xs);
  color: #3d444d;
  border: var(--border-thin) solid #3d444d;
  padding: 0.1rem 0.4rem;
  border-radius: var(--radius-sm);
}

.hero__terminal-output {
  font-family: var(--font-monospace);
  font-size: var(--text-xs);
  line-height: 1.8;
  color: #cdd9e5;
  padding: 1rem 1.125rem;
}

.term-kw {
  color: #ff7b72;
}

.term-str {
  color: #a5d6ff;
}

.term-fn {
  color: #d2a8ff;
}

.term-num {
  color: #79c0ff;
}

.term-ok {
  color: #7ee787;
}

.term-err {
  color: #f78166;
}

.term-warn {
  color: #ffa657;
}

.term-type {
  color: #ffa657;
}

.term-prop {
  color: #e3b341;
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem clamp(1.25rem, 5%, 2.5rem) 3rem;
    min-height: auto;
  }

  .hero__container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__terminal {
    display: none;
  }
}
</style>
