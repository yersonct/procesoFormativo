"use client"; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './layout.module.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); 

  return (
    <div className={styles.layoutWrapper}>
      
      <aside className={styles.sidebar}>
        
        <div className={styles.sidebarTop}>
          <div className={styles.sidebarHeader}>
            <div className={styles.logoIcon}>S</div>
            <div className={styles.logoText}>SENA-SYS</div>
          </div>
          
          <nav className={styles.nav}>
            <Link 
              href="/admin/programas" 
              className={`${styles.navLink} ${pathname.includes('/admin/programas') ? styles.navLinkActive : ''}`}
            >
              <span>📚</span> Programas
            </Link>
            
            <Link 
              href="/admin/proyectos" 
              className={`${styles.navLink} ${pathname.includes('/admin/proyectos') ? styles.navLinkActive : ''}`}
            >
              <span>🎯</span> Proyectos
            </Link>
            
            <Link 
              href="/admin/fichas" 
              className={`${styles.navLink} ${pathname.includes('/admin/fichas') ? styles.navLinkActive : ''}`}
            >
              <span>👥</span> Gestión de Fichas
            </Link>
            
            <Link 
              href="/admin/aprendices" 
              className={`${styles.navLink} ${pathname.includes('/admin/aprendices') ? styles.navLinkActive : ''}`}
            >
              <span>👤</span> Aprendices
            </Link>
          </nav>
        </div>

        <div className={styles.logoutWrapper}>
          <Link href="/login" className={styles.logoutLink}>
            <span>🚪</span> Cerrar Sesión
          </Link>
        </div>

      </aside>

      <main className={styles.mainContent}>
        {children}
      </main>
      
    </div>
  );
}