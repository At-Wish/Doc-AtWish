import React from 'react';
import styles from './styles.module.css';
import toolsData from '../../data/tools.json';

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
        
        {toolsData.categories.map((category, catIndex) => (
          <div key={catIndex} className={styles.toolCategory}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.toolGrid}>
              {category.tools.map((tool, toolIndex) => {
                const isDisabled = tool.status !== 'available';
                const buttonClass = `${styles.actionButton} ${isDisabled ? styles.disabled : ''}`;
                return (
                  <div key={toolIndex} className={styles.toolCard}>
                    <div className={styles.cardHeader}>
                      <h4 className={styles.toolTitle}>{tool.name}</h4>
                      <span className={`${styles.statusBadge} ${styles[tool.status]}`}>
                        {tool.status === 'available' ? 'Available' :
                         tool.status === 'comingSoon' ? 'Coming Soon' :
                         'Migration in Progress'}
                      </span>
                    </div>
                    <div className={styles.logoContainer}>
                      <img src={tool.logo} alt={tool.name} />
                    </div>
                    <div className={styles.cardActions}>
                      <a
                        href={tool.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonClass}
                      >
                        📖 Docs
                      </a>
                      <a
                        href={tool.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonClass}
                      >
                        ▶️ Video
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
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