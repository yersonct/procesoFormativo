import Link from 'next/link';
import styles from './programas.module.css';

export default function ProgramasPage() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Oferta y Programas</h1>
        <p className={styles.subtitle}>Selecciona un programa para ver sus proyectos formativos.</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.badge}>Tecnólogo</span>
          <h2 className={styles.progTitle}>Análisis y Desarrollo de Software</h2>
          <p className={styles.info}>⏱️ Duración: 24 Meses</p>
          <p className={styles.info}>📍 Modalidad: Presencial</p>
          <Link href="/admin/proyectos?programa=ADSO" className={styles.btn}>
            Ver Diseño Curricular
          </Link>
        </div>

        <div className={styles.card}>
          <span className={styles.badge}>Técnico</span>
          <h2 className={styles.progTitle}>Programación de Software</h2>
          <p className={styles.info}>⏱️ Duración: 15 Meses</p>
          <p className={styles.info}>📍 Modalidad: Virtual</p>
          <Link href="/admin/proyectos?programa=Programacion" className={styles.btn}>
            Ver Diseño Curricular
          </Link>
        </div>
      </div>
    </div>
  );
}