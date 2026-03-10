---
layout: blank
title: Probabilistic Graphical Models Zoo
permalink: /notes/pgm.html
---

<style>
  .pgm-note {
    max-width: 980px;
    margin: 24px auto 48px;
    padding: 0 14px;
  }

  .pgm-title {
    margin: 0 0 24px;
    font-size: 34px;
    color: #13263b;
  }

  .pgm-subtitle {
    margin: 0 0 18px;
    color: #4b6077;
    font-size: 16px;
    line-height: 1.6;
  }

  .pgm-row {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 18px;
    align-items: start;
    margin-bottom: 18px;
    border: 1px solid #dfe8f2;
    border-radius: 14px;
    background: #fff;
    padding: 16px;
    box-shadow: 0 6px 20px rgba(20, 49, 79, 0.06);
  }

  .pgm-left h2 {
    display: block;
    margin: 0 0 8px;
    font-size: 24px;
    color: #16304a;
  }

  .pgm-left p,
  .pgm-left li,
  .pgm-left td,
  .pgm-left th {
    color: #2d4158;
    line-height: 1.55;
  }

  .pgm-left ul {
    margin: 8px 0;
    padding-left: 20px;
  }

  .pgm-right {
    position: sticky;
    top: 14px;
  }

  .pgm-right .pgm-diagram {
    width: 100%;
    max-width: 300px;
    display: block;
    margin: 0 auto;
    border-radius: 12px;
    border: 1px solid #d5e1ee;
    background: #ffffff;
  }

  .pgm-caption {
    margin: 8px 0 0;
    font-size: 13px;
    color: #667a90;
    text-align: center;
  }

  .pgm-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 8px;
  }

  .pgm-table th,
  .pgm-table td {
    border: 1px solid #d9e4f0;
    padding: 8px 10px;
    vertical-align: top;
  }

  .pgm-table th {
    background: #f3f8fe;
    color: #1e334a;
  }

  .pgm-row-center .pgm-left {
    display: flex;
    align-items: center;
  }

  @media (max-width: 900px) {
    .pgm-row {
      grid-template-columns: 1fr;
    }

    .pgm-right {
      position: static;
    }
  }
</style>

<div class="pgm-note">
  <h1 class="pgm-title">Probabilistic Graphical Models (PGM) Zoo</h1>

  <section class="pgm-row pgm-row-center">
    <div class="pgm-left">
      <h2>Offline Bandits</h2>
    </div>
    <div class="pgm-right">
      <img class="pgm-diagram" src="/images/pgm_offline_bandit.png" alt="Two-step graphical model with latent and observed variables" />
    </div>
  </section>

  <section class="pgm-row pgm-row-center">
    <div class="pgm-left">
      <h2>Offline Contextual Bandits</h2>
    </div>
    <div class="pgm-right">
      <img class="pgm-diagram" src="/images/offline_contextual_bandits.png" alt="Offline contextual bandit graphical model" />
    </div>
  </section>

  <section class="pgm-row pgm-row-center">
    <div class="pgm-left">
      <h2>Online Bandit</h2>
    </div>
    <div class="pgm-right">
      <img class="pgm-diagram" src="/images/pgm_online_bandit.png" alt="Online bandit graphical model" />
    </div>
  </section>

  <section class="pgm-row pgm-row-center">
    <div class="pgm-left">
      <h2>Online Contextual Bandits</h2>
    </div>
    <div class="pgm-right">
      <img class="pgm-diagram" src="/images/pgm_online_contextual_bandits.png" alt="Online contextual bandits graphical model" />
    </div>
  </section>

  <section class="pgm-row pgm-row-center">
    <div class="pgm-left">
      <h2>Reinforcement Learning</h2>
    </div>
    <div class="pgm-right">
      <img class="pgm-diagram" src="/images/pgm_reinforcement_learning.png" alt="Reinforcement learning graphical model" />
    </div>
  </section>
</div>
