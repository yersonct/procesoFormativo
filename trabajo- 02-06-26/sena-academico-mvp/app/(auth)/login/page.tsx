"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

export default function LoginPage() {
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); 
    setError('');

    if (email === 'admin@sena.edu.co' && password === 'admin123') {
      router.push('/admin');
      return;
    }

    if (email === 'aprendiz@soy.sena.edu.co' && password === 'aprendiz123') {
      router.push('/aprendiz/horario');
      return;
    }

    setError('Correo o contraseña incorrectos. Verifica tus credenciales.');
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        
        <div className={styles.logoIcon}>S</div>
        <h1 className={styles.title}>SENA</h1>
        <p className={styles.subtitle}>Inicia sesión en tu cuenta</p>
        
        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleLogin} className={styles.form}>
          
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Correo Electrónico</label>
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="ejemplo@sena.edu.co"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Contraseña</label>
            <input 
              type="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className={styles.btnSubmit}>
            Ingresar al Sistema
          </button>
        </form>

      </div>
    </div>
  );
}