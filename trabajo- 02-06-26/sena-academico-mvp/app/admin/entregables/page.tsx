"use client";
import { useSearchParams } from 'next/navigation';
import styles from '../proyectos/proyectos.module.css';

export default function EntregablesPage() {
  const searchParams = useSearchParams();
  const proyecto = searchParams.get('proyecto');

  return (
    <div>
      <h1 className={styles.title}>Entregables: {proyecto}</h1>
      <p className={styles.subtitle}>Define las evidencias que el aprendiz debe cargar.</p>
      
      <div className={styles.list} style={{ marginTop: '20px' }}>
        <div className={styles.card}>
          <h2 className={styles.projTitle}>1. Documento de Requisitos (SRS)</h2>
          <p className={styles.info}>Fecha límite: 15 días después de inicio</p>
          <button className={styles.btnPrimary}>Editar Entregable</button>
        </div>
        <div className={styles.card}>
          <h2 className={styles.projTitle}>2. Diagramas UML</h2>
          <p className={styles.info}>Fecha límite: 25 días después de inicio</p>
          <button className={styles.btnPrimary}>Editar Entregable</button>
        </div>
      </div>
    </div>
  );
}