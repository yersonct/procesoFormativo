import styles from './adminHome.module.css';

export default function AdminDashboardPage() {
  return (
    <div className={styles.container}>
      
      <div className={styles.welcomeCard}>
        <h1 className={styles.title}>Bienvenido, Coordinador</h1>
        <p className={styles.subtitle}>Panel de Control y Coordinación Académica. Aquí tienes un resumen del sistema.</p>
      </div>

      <div className={styles.statsGrid}>
        
        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statIcon}>👥</span>
            <h2 className={styles.statTitle}>Fichas Activas</h2>
          </div>
          <p className={styles.statValue}>12</p>
          <p className={styles.statDesc}>+2 creadas este mes</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statIcon}>👨‍🎓</span>
            <h2 className={styles.statTitle}>Aprendices Totales</h2>
          </div>
          <p className={styles.statValue}>348</p>
          <p className={styles.statDesc}>En proceso de formación</p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statIcon}>🎯</span>
            <h2 className={styles.statTitle}>Proyectos Formativos</h2>
          </div>
          <p className={styles.statValue}>5</p>
          <p style={{ color: '#f59e0b', fontSize: '0.85rem', fontWeight: 'bold', margin: 0 }}>1 requiere actualización</p>
        </div>

      </div>
      
    </div>
  );
}