"use client";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link'; 
import styles from './proyectos.module.css';

export default function ProyectosPage() {
  const searchParams = useSearchParams();
  const programaKey = searchParams.get('programa');

  const data: any = {
    ADSO: {
      nombre: "Análisis y Desarrollo de Software",
      proyectos: [
        { titulo: "Desarrollo de software orientado a servicios" },
        { titulo: "Sistema de información para Pymes" }
      ]
    },
    Programacion: {
      nombre: "Programación de Software",
      proyectos: [
        { titulo: "Aplicaciones móviles multiplataforma" }
      ]
    }
  };

  const info = programaKey ? data[programaKey] : null;

  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Proyectos: {info ? info.nombre : "Selecciona un programa"}</h1>
        <p className={styles.subtitle}>Gestión de diseños curriculares y entregables asociados.</p>
      </div>

      <div className={styles.list}>
        {info ? (
          info.proyectos.map((p: any, index: number) => (
            <div key={index} className={styles.card}>
              <div>
                <h2 className={styles.projTitle}>{p.titulo}</h2>
                <p className={styles.programLink}>Vinculado a: {info.nombre}</p>
              </div>

              <div className={styles.actions}>
                <Link href={`/admin/entregables?proyecto=${encodeURIComponent(p.titulo)}`}>
                  <button className={styles.btnPrimary}>📋 Lista de Entregables</button>
                </Link>

                <Link href={`/admin/curriculo?proyecto=${encodeURIComponent(p.titulo)}`}>
                  <button className={styles.btnSecondary}>📖 Diseño Curricular</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.card}>
            <p>Por favor, regresa a la sección de Programas y selecciona uno para visualizar sus proyectos.</p>
          </div>
        )}
      </div>
    </div>
  );
}