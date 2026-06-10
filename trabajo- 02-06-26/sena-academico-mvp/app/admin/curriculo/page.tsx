"use client";
import { useSearchParams } from 'next/navigation';
import styles from '../proyectos/proyectos.module.css';

export default function CurriculoPage() {
  const searchParams = useSearchParams();
  const proyecto = searchParams.get('proyecto');

  return (
    <div>
      <h1 className={styles.title}>Diseño Curricular: {proyecto}</h1>
      <p className={styles.subtitle}>Competencias y resultados de aprendizaje.</p>

      <div className={styles.card} style={{ marginTop: '20px' }}>
        <h2 className={styles.projTitle}>Competencia General</h2>
        <p className={styles.info}>"Especificar los requisitos necesarios para el desarrollo de software de acuerdo con las necesidades del cliente."</p>
        
        <h3 className={styles.projTitle} style={{ fontSize: '1.1rem', marginTop: '20px' }}>Resultados de Aprendizaje:</h3>
        <ul style={{ color: '#94a3b8', lineHeight: '1.8' }}>
          <li>✓ Analizar las necesidades del usuario final.</li>
          <li>✓ Modelar los procesos de negocio.</li>
          <li>✓ Elaborar el documento de especificación técnica.</li>
        </ul>
      </div>
    </div>
  );
}