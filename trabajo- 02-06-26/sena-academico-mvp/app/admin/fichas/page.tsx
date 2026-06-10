import styles from './fichas.module.css';

export default function FichasAdminPage() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Control de Fichas</h1>
        <p className={styles.pageSubtitle}>Panel de orquestación de grupos y proyectos formativos.</p>
        
        <div style={{ marginTop: '16px' }}>
          <button style={{
            background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
            color: 'white', border: 'none', padding: '10px 24px',
            borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(79, 70, 229, 0.4)'
          }}>
            + Desplegar Nueva Ficha
          </button>
        </div>
      </div>

      <div className={styles.cardGrid}>
        

        <div className={styles.card}>
          <div style={{ flex: 1 }}>
            <div className={styles.cardHeader}>
              <h2 className={styles.fichaTitle}>2854321</h2>
              <span className={styles.badgeSuccess}>
                <span style={{ display:'inline-block', width:'8px', height:'8px', backgroundColor:'#10b981', borderRadius:'50%', marginRight:'6px' }}></span>
                Operativa
              </span>
            </div>
            
            <div className={styles.infoGrid}>
              <div>
                <span className={styles.infoLabel}>Programa Vinculado</span>
                <p className={styles.infoValue}>💻 Análisis y Desarrollo de Software</p>
              </div>
              <div>
                <span className={styles.infoLabel}>Proyecto Específico</span>
                <p className={styles.infoValue} style={{ color: '#818cf8', fontWeight: 'bold' }}>
                  🚀 Desarrollo de software orientado a servicios
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.actionArea}>
            <div style={{ textAlign: 'right', width: '100%' }}>
              <p className={styles.statNumber}>30</p>
              <span className={styles.statLabel}>Aprendices</span>
              
              {/* Barra de progreso simulada */}
              <div style={{ width: '100%', height: '6px', backgroundColor: '#1e293b', borderRadius: '4px', marginTop: '12px' }}>
                <div style={{ width: '45%', height: '100%', background: 'linear-gradient(90deg, #6366f1, #a855f7)', borderRadius: '4px' }}></div>
              </div>
              <p style={{ fontSize: '10px', color: '#94a3b8', marginTop: '4px' }}>Avance: 45%</p>
            </div>
            <button className={styles.btnSecondary}>Abrir Entorno de Ficha ➡️</button>
          </div>
        </div>
        <div className={`${styles.card} ${styles.cardError}`}>
          <div style={{ flex: 1 }}>
            <div className={styles.cardHeader}>
              <h2 className={styles.fichaTitle}>2901122</h2>
              <span className={styles.badgeError}>
                ⚠️ Bloqueo Lógico
              </span>
            </div>
            
            <div className={styles.infoGrid} style={{ borderColor: 'rgba(239, 68, 68, 0.2)' }}>
              <div>
                <span className={styles.infoLabel}>Programa Vinculado</span>
                <p className={styles.infoValue}>💻 Análisis y Desarrollo de Software</p>
              </div>
              <div>
                <span className={styles.infoLabel} style={{ color: '#ef4444' }}>Proyecto Específico</span>
                <p className={styles.infoValueAlert}>ERROR: DEPENDENCY_NULL</p>
              </div>
            </div>
          </div>
          
          <div className={styles.actionArea}>
            <div style={{ textAlign: 'right', opacity: 0.5, width: '100%' }}>
              <p className={styles.statNumber}>0</p>
              <span className={styles.statLabel}>Aprendices<br/>(Matrícula Deshabilitada)</span>
            </div>
            <button className={styles.btnPrimary} style={{ background: 'linear-gradient(135deg, #ef4444, #b91c1c)' }}>
              🔗 Vincular Proyecto
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}