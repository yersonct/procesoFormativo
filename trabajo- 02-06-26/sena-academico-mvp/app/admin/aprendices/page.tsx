import styles from './aprendices.module.css';

export default function AprendicesPage() {
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Directorio de Aprendices</h1>
        <p className={styles.subtitle}>Gestión de matrículas y estado de los estudiantes.</p>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Nombre del Estudiante</th>
              <th className={styles.th}>Documento</th>
              <th className={styles.th}>Ficha Asignada</th>
              <th className={styles.th}>Sede</th>
              <th className={styles.th}>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <div className={styles.nameCell}>
                  <span className={styles.avatar}>YC</span>
                  Yerson Stiven Cuellar Rubiano
                </div>
              </td>
              <td className={styles.td}>100XXXXXXX</td>
              <td className={styles.td}>2854321</td>
              <td className={styles.td}>Neiva, Huila</td>
              <td className={styles.td}>
                <span className={styles.statusActive}>En formación</span>
              </td>
            </tr>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <div className={styles.nameCell}>
                  <span className={styles.avatar} style={{background: '#059669'}}>AM</span>
                  Ana María Martínez
                </div>
              </td>
              <td className={styles.td}>101XXXXXXX</td>
              <td className={styles.td}>2854321</td>
              <td className={styles.td}>Neiva, Huila</td>
              <td className={styles.td}>
                <span className={styles.statusActive}>En formación</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}