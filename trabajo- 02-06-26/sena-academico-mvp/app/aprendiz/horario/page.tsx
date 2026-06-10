import styles from './horario.module.css';

export default function HorarioAprendizPage() {
  return (
    <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
      
      {/* Tarjeta de Perfil Superior (Efecto Gradiente) */}
      <header className={styles.headerCard}>
        <h1 className={styles.welcomeText}>Hola, Yerson Cuellar 👋</h1>
        <p className={styles.subtitleText}>Ficha: 2854321 | Centro de la Industria, la Empresa y los Servicios</p>
      </header>

      <div className={styles.gridContainer}>
        
        {/* =========================================
            COLUMNA IZQUIERDA (Proyecto y Horario)
        ========================================= */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div className={styles.card}>
            <h3 className={styles.sectionTitle}>🎯 Proyecto Actual</h3>
            <p className={styles.projectTitle}>Desarrollo de software orientado a servicios</p>
          </div>

          <div className={`${styles.card} ${styles.cardHighlight}`}>
            <h3 className={styles.sectionTitle}>📅 Mi Próxima Clase</h3>
            <span className={styles.timeBadge}>LUNES 08:00 AM - 12:00 PM</span>
            <p className={styles.infoRow}>👨‍🏫 <b>Instructor:</b> Herley Antonio Puentes</p>
            <p className={styles.infoRow}>📍 <b>Ambiente:</b> Sala de Sistemas 3</p>
            <hr style={{ border: 'none', borderTop: '1px solid rgba(128,128,128,0.2)', margin: '16px 0' }} />
            <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '0 0 4px 0', fontWeight: 'bold' }}>COMPETENCIA A EVALUAR:</p>
            <p className={styles.infoRow}>Especificación de requisitos del software</p>
          </div>
          
        </div>

        {/* =========================================
            COLUMNA DERECHA (Entregables)
        ========================================= */}
        <div>
          <div className={styles.card} style={{ height: '100%' }}>
            <h3 className={styles.sectionTitle}>📦 Mis Entregables Pendientes</h3>
            
            {/* Tarea 1: Pendiente */}
            <div className={styles.taskItem}>
              <div>
                <span className={styles.statusPending}>⏳ Pendiente</span>
                <h4 className={styles.taskTitle}>Informe de especificación de requisitos</h4>
                <p className={styles.taskDate}>Vence: Próximo Viernes, 23:59</p>
              </div>
              <button className={styles.btnAction}>Subir Archivo ⬆️</button>
            </div>

            {/* Tarea 2: Aprobada */}
            <div className={styles.taskItem}>
              <div>
                <span className={styles.statusApproved}>✅ Aprobado</span>
                <h4 className={styles.taskTitle} style={{ textDecoration: 'line-through', opacity: 0.6 }}>Mapa conceptual del software</h4>
                <p className={styles.taskDate}>Calificado el 12 de Mayo</p>
              </div>
              <button className={styles.btnOutline}>Ver Nota ⭐</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}