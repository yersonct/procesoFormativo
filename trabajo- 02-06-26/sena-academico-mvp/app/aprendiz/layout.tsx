import Link from 'next/link';
import styles from './layout.module.css';

export default function AprendizLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layoutWrapper}>
      {/* Menú Superior (Navbar) */}
      <nav className={styles.navbar}>
        <div className={styles.logoArea}>
          <h2 className={styles.logoText}>SENA-SYS</h2>
          <span className={styles.roleBadge}>Workspace: Aprendiz</span>
        </div>
        <div>
          <Link href="/login" className={styles.logoutBtn}>
            Cerrar Sesión 🚪
          </Link>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}