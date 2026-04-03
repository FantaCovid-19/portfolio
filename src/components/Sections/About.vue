<template>
  <section class="about" id="about">
    <div class="about__container">
      <div class="about__header">
        <h2 class="about__title-header">About Me</h2>
        <div class="about__line-header" />
      </div>

      <div class="about__content">
        <div class="about__description">
          <p class="about__intoduction">Technical Degree in Computer Science · Chile</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempora cum assumenda temporibus eveniet nemo deserunt aliquid, veritatis voluptate, repellat incidunt
            et minima eius similique blanditiis autem iure quas cumque!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempora cum assumenda temporibus eveniet nemo deserunt aliquid, veritatis voluptate, repellat incidunt
            et minima eius similique blanditiis autem iure quas cumque!
          </p>

          <div class="about__tags">
            <span class="stag">Web Development</span>
            <span class="stag">Frontend</span>
            <span class="stag">JavaScript</span>
            <span class="stag">Vue.js</span>
          </div>
        </div>

        <div class="about__statistics">
          <div class="about__statistic">
            <span class="about__statistic-value">+5</span>
            <span class="about__statistic-label">Years of Experience</span>
            <span class="about__statistic-description">Building responsive and user-friendly websites.</span>
          </div>

          <div class="about__statistic">
            <span class="about__statistic-value">+20</span>
            <span class="about__statistic-label">Projects Completed</span>
            <span class="about__statistic-description">Successfully delivered a variety of web development projects.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--surface);
  border-top: var(--border-thin) solid var(--accent);
  position: relative;
}

.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--highlight), transparent);
  opacity: 0.3;
}

.about__container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 4rem 2rem;
}

.about__header {
  margin-bottom: 3rem;
}

.about__title-header {
  font-size: var(--text-4xl);
  font-weight: var(--fw-bold);
  color: var(--t1);
  letter-spacing: -0.03em;
}

.about__line-header {
  width: 50px;
  height: 3px;
  background: var(--accent);
  margin-top: 0.5rem;
  border-radius: 2px;
  box-shadow: 0 0 12px var(--highlight);
}

.about__content {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 5rem;
  align-items: start;
}

.about__content p {
  margin-bottom: 1.25rem;
}

.about__description {
  font-family: var(--font-body);
  font-size: var(--text-md);
  line-height: 1.8;
  color: var(--t2);
  max-width: 600px;
}

.about__intoduction {
  font-family: var(--font-monospace);
  font-size: var(--text-base);
  font-weight: var(--fw-regular);
  color: var(--t2);
  letter-spacing: 0.1em;
}

.about__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
}

.about__statistics {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 200px;
}

.about__statistic {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding-left: 1.5rem;
  border-left: 2px solid var(--highlight);
  position: relative;
}

.about__statistic::before {
  content: '';
  position: absolute;
  top: 0;
  left: -4px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--highlight);
  box-shadow: 0 0 8px var(--highlight);
}

.about__statistic-value {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--t1);
  letter-spacing: -0.04em;
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.about__statistic-label {
  font-family: var(--font-monospace);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--t3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.about__statistic-description {
  font-family: var(--font-body);
  font-size: 0.82rem;
  color: var(--t4);
}
</style>
