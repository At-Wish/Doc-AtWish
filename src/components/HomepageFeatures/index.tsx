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
        
        {/* Reporting & Visualization */}
        <div className={styles.toolCategory}>
          <h3 className={styles.categoryTitle}>📊 Reporting & Visualization</h3>
          <div className={styles.toolGrid}>
            <div className={styles.toolCard}>
              <div className={styles.cardHeader}>
                <h4 className={styles.toolTitle}>Apache Superset</h4>
                <span className={`${styles.statusBadge} ${styles.available}`}>Available</span>
              </div>
              <div className={styles.logoContainer}>
                <img src="/img/tool_logos/superset.png" alt="Superset" />
              </div>
              <div className={styles.cardActions}>
                <a href="https://superset.atwish.org" target="_blank" rel="noopener noreferrer" className={styles.actionButton}>
                  📖 Docs
                </a>
                <a href="https://www.youtube.com/playlist?list=PLH1gsHiD7JxiqIz88CGywds8jSMUEMcs6" target="_blank" rel="noopener noreferrer" className={styles.actionButton}>
                  ▶️ Video
                </a>
              </div>
            </div>
            <div className={styles.toolCard}>
              <div className={styles.cardHeader}>
                <h4 className={styles.toolTitle}>PowerBI</h4>
                <span className={`${styles.statusBadge} ${styles.comingSoon}`}>Coming Soon</span>
              </div>
              <div className={styles.logoContainer}>
                <img src="/img/tool_logos/powerbi.png" alt="PowerBI" />
              </div>
              <div className={styles.cardActions}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  📖 Docs
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  ▶️ Video
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Orchestration */}
        <div className={styles.toolCategory}>
          <h3 className={styles.categoryTitle}>⚙️ Orchestration</h3>
          <div className={styles.toolGrid}>
            <div className={styles.toolCard}>
              <div className={styles.cardHeader}>
                <h4 className={styles.toolTitle}>Apache Airflow</h4>
                <span className={`${styles.statusBadge} ${styles.available}`}>Available</span>
              </div>
              <div className={styles.logoContainer}>
                <img src="/img/tool_logos/airflow.jpg" alt="Airflow" />
              </div>
              <div className={styles.cardActions}>
                <a href="https://airflow.atwish.org" target="_blank" rel="noopener noreferrer" className={styles.actionButton}>
                  📖 Docs
                </a>
                <a href="https://www.youtube.com/playlist?list=PLH1gsHiD7Jxj0ZcYp5JFY0hXy-7KNFIGZ" target="_blank" rel="noopener noreferrer" className={styles.actionButton}>
                  ▶️ Video
                </a>
              </div>
            </div>
            <div className={styles.toolCard}>
              <div className={styles.cardHeader}>
                <h4 className={styles.toolTitle}>Prefect</h4>
                <span className={`${styles.statusBadge} ${styles.comingSoon}`}>Coming Soon</span>
              </div>
              <div className={styles.logoContainer}>
                <img src="/img/tool_logos/prefect.png" alt="Prefect" />
              </div>
              <div className={styles.cardActions}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  📖 Docs
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  ▶️ Video
                </a>
              </div>
            </div>
            <div className={styles.toolCard}>
              <div className={styles.cardHeader}>
                <h4 className={styles.toolTitle}>Dagster</h4>
                <span className={`${styles.statusBadge} ${styles.comingSoon}`}>Coming Soon</span>
              </div>
              <div className={styles.logoContainer}>
                <img src="/img/tool_logos/dagster.png" alt="Dagster" />
              </div>
              <div className={styles.cardActions}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  📖 Docs
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  ▶️ Video
                </a>
              </div>
            </div>
            <div className={styles.toolCard}>
              <div className={styles.cardHeader}>
                <h4 className={styles.toolTitle}>N8N</h4>
                <span className={`${styles.statusBadge} ${styles.comingSoon}`}>Coming Soon</span>
              </div>
              <div className={styles.logoContainer}>
                <img src="/img/tool_logos/n8n.png" alt="N8N" />
              </div>
              <div className={styles.cardActions}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  📖 Docs
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  ▶️ Video
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Streaming & Messaging */}
        <div className={styles.toolCategory}>
          <h3 className={styles.categoryTitle}>📡 Streaming & Messaging</h3>
          <div className={styles.toolGrid}>
            <div className={styles.toolCard}>
              <div className={styles.cardHeader}>
                <h4 className={styles.toolTitle}>Apache Kafka</h4>
                <span className={`${styles.statusBadge} ${styles.comingSoon}`}>Coming Soon</span>
              </div>
              <div className={styles.logoContainer}>
                <img src="/img/tool_logos/kafka.png" alt="Kafka" />
              </div>
              <div className={styles.cardActions}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  📖 Docs
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  ▶️ Video
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ETL & Data Processing */}
        <div className={styles.toolCategory}>
          <h3 className={styles.categoryTitle}>🔄 ETL & Data Processing</h3>
          <div className={styles.toolGrid}>
            <div className={styles.toolCard}>
              <div className={styles.cardHeader}>
                <h4 className={styles.toolTitle}>Apache Spark</h4>
                <span className={`${styles.statusBadge} ${styles.comingSoon}`}>Coming Soon</span>
              </div>
              <div className={styles.logoContainer}>
                <img src="/img/tool_logos/spark.png" alt="Spark" />
              </div>
              <div className={styles.cardActions}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  📖 Docs
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  ▶️ Video
                </a>
              </div>
            </div>
            <div className={styles.toolCard}>
              <div className={styles.cardHeader}>
                <h4 className={styles.toolTitle}>Apache Druid</h4>
                <span className={`${styles.statusBadge} ${styles.migrationProgress}`}>Migration in Progress</span>
              </div>
              <div className={styles.logoContainer}>
                <img src="/img/tool_logos/druid.jpeg" alt="Druid" />
              </div>
              <div className={styles.cardActions}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  📖 Docs
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  ▶️ Video
                </a>
              </div>
            </div>
            <div className={styles.toolCard}>
              <div className={styles.cardHeader}>
                <h4 className={styles.toolTitle}>Talend</h4>
                <span className={`${styles.statusBadge} ${styles.comingSoon}`}>Coming Soon</span>
              </div>
              <div className={styles.logoContainer}>
                <img src="/img/tool_logos/talend.png" alt="Talend" />
              </div>
              <div className={styles.cardActions}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  📖 Docs
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  ▶️ Video
                </a>
              </div>
            </div>
            <div className={styles.toolCard}>
              <div className={styles.cardHeader}>
                <h4 className={styles.toolTitle}>Alteryx</h4>
                <span className={`${styles.statusBadge} ${styles.comingSoon}`}>Coming Soon</span>
              </div>
              <div className={styles.logoContainer}>
                <img src="/img/tool_logos/alteryx.png" alt="Alteryx" />
              </div>
              <div className={styles.cardActions}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  📖 Docs
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  ▶️ Video
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Caching */}
        <div className={styles.toolCategory}>
          <h3 className={styles.categoryTitle}>⚡ Caching</h3>
          <div className={styles.toolGrid}>
            <div className={styles.toolCard}>
              <div className={styles.cardHeader}>
                <h4 className={styles.toolTitle}>Valkey</h4>
                <span className={`${styles.statusBadge} ${styles.migrationProgress}`}>Migration in Progress</span>
              </div>
              <div className={styles.logoContainer}>
                <img src="/img/tool_logos/valkey.png" alt="Valkey" />
              </div>
              <div className={styles.cardActions}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  📖 Docs
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  ▶️ Video
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Authentication & Security */}
        <div className={styles.toolCategory}>
          <h3 className={styles.categoryTitle}>🔐 Authentication & Security</h3>
          <div className={styles.toolGrid}>
            <div className={styles.toolCard}>
              <div className={styles.cardHeader}>
                <h4 className={styles.toolTitle}>Keycloak</h4>
                <span className={`${styles.statusBadge} ${styles.migrationProgress}`}>Migration in Progress</span>
              </div>
              <div className={styles.logoContainer}>
                <img src="/img/tool_logos/keycloak.png" alt="Keycloak" />
              </div>
              <div className={styles.cardActions}>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  📖 Docs
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.actionButton} ${styles.disabled}`}>
                  ▶️ Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <h2>About This Project</h2>
        <p>
          AtWish was started by <a href="https://shantanukhond.me" target="_blank" rel="noopener noreferrer">Shantanu Khond</a> to make it easier for others to work with powerful open-source tools.
          It's a learning-driven documentation platform aimed at sharing practical knowledge.
        </p>
      </section>

      {/* YouTube Promotion */}
      <section className={styles.promo}>
        <h2>Watch Tutorials on YouTube</h2>
        <p>We share quick guides, walkthroughs, and real demos of tools covered on AtWish.</p>
        <a href="https://www.youtube.com/@shantanukhond" target="_blank" rel="noopener noreferrer" className={styles.subscribe}>Subscribe on YouTube →</a>
      </section>
    </main>
  );
}