import styles from './style.module.scss'

function App() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>Header</header>
      <div className={styles.main}>
        <aside className={styles.sideBar}>
          <figure className={styles.heroImage}>
            <p>Hero</p>
            </figure>
          <nav className={styles.sideMenu}><p>SideBar</p></nav>
        </aside>
        <section className={styles.mainSection}>
          <main className={styles.mainContext}><p>Main Content</p></main>
          <article className={styles.extraContent}><p>Extra Content</p></article>
        </section>
      </div>
      <section className={styles.relatedContent}>
        <figure className={styles.relatedImages}><p>Related Images</p></figure>
        <article className={styles.relatedPosts}><p>Related Posts</p></article>
      </section>
      <footer className={styles.footerContent}><p>Footer</p></footer>
    </div>
  )
}

export default App
