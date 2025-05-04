import React from 'react';
import styles from './styles.module.css';

export default function Homepage(): React.ReactNode {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>AtWish</h1>
        <p className={styles.tagline}>Docs, tutorials & setups for real-world tools. Built for developers & data engineers.</p>
        <a href="#tools" className={styles.cta}>Explore Tools</a>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Why AtWish?</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>✅ Simplified Install & Setup</div>
          <div className={styles.featureCard}>📘 Real-world Use Cases</div>
          <div className={styles.featureCard}>🛠️ Tool-by-tool Breakdown</div>
          <div className={styles.featureCard}>🌐 Dedicated Sub-sites</div>
        </div>
      </section>

      {/* Tools Section */}
      <section className={styles.tools} id="tools">
        <h2>Available Tool Docs</h2>
        <div className={styles.toolGrid}>
          <a className={styles.toolCard} href="https://superset.atwish.org">
            <img src="/img/tool_logos/superset.png" alt="Superset" />
            <span>Apache Superset</span>
          </a>
          <a className={styles.toolCard} href="https://airflow.atwish.org">
            <img src="/img/tool_logos/airflow.jpg" alt="Airflow" />
            <span>Apache Airflow</span>
          </a>
          <a className={styles.toolCard} href="#">
            <img src="/img/tool_logos/kafka.png" alt="Kafka" />
            <span>Apache Kafka</span>
            <span>(Coming soon....)</span>
          </a>
          <a className={styles.toolCard} href="#">
            <img src="/img/tool_logos/spark.png" alt="Spark" />
            <span>Apache Spark</span>
            <span>(Coming soon....)</span>
          </a>
          <a className={styles.toolCard} href="#">
            <img src="/img/tool_logos/valkey.png" alt="Valkey" />
            <span>Valkey</span>
            <span>(Migration in progress..)</span>
          </a>
          <a className={styles.toolCard} href="#">
            <img src="/img/tool_logos/keycloak.png" alt="Keycloak" />
            <span>Keycloak</span>
            <span>(Migration in progress..)</span>
          </a>
          <a className={styles.toolCard} href="#">
            <img src="/img/tool_logos/druid.jpeg" alt="Druid" />
            <span>Apache Druid</span>
            <span>(Migration in progress..)</span>
          </a>

        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <h2>About This Project</h2>
        <p>
          AtWish was started by <a href="https://shantanukhond.me">Shantanu Khond</a> to make it easier for others to work with powerful open-source tools.
          It's a learning-driven documentation platform aimed at sharing practical knowledge.
        </p>
      </section>

      {/* YouTube Promotion */}
      <section className={styles.promo}>
        <h2>Watch Tutorials on YouTube</h2>
        <p>We share quick guides, walkthroughs, and real demos of tools covered on AtWish.</p>
        <a href="https://www.youtube.com/@shantanukhond" target="_blank" rel="noopener" className={styles.subscribe}>Subscribe on YouTube →</a>
      </section>
    </main>
  );
}