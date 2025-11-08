'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [backendMessage, setBackendMessage] = useState<string>('Loading...');
  const [health, setHealth] = useState<any>(null);

  useEffect(() => {
    // Fetch hello message from backend
    fetch('http://localhost:3001')
      .then((res) => res.text())
      .then((data) => setBackendMessage(data))
      .catch((err) => setBackendMessage('Error connecting to backend'));

    // Fetch health check
    fetch('http://localhost:3001/api/health')
      .then((res) => res.json())
      .then((data) => setHealth(data))
      .catch((err) => console.error('Health check failed:', err));
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Solana Monorepo</h1>
        <p>Next.js + NestJS with pnpm workspaces</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Frontend (Next.js)</h2>
          <p>Running on port 3000</p>
          <p>✅ Connected</p>
        </div>

        <div className={styles.card}>
          <h2>Backend (NestJS)</h2>
          <p>Running on port 3001</p>
          <p>{backendMessage}</p>
          {health && (
            <p style={{ fontSize: '0.9rem', marginTop: '8px' }}>Health: {health.status}</p>
          )}
        </div>
      </div>
    </main>
  );
}
