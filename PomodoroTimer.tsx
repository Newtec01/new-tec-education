import { useState, useEffect } from 'react';

export default function PomodoroTimer() {
  const [seconds, setSeconds] = useState(25 * 60);
  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="text-center">
      <div className="text-6xl font-mono mb-4">{\`\${minutes.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`}</div>
      <button onClick={() => setSeconds(25 * 60)} className="px-4 py-2 bg-white rounded-2xl shadow hover:bg-gray-100">Reiniciar</button>
    </div>
  );
}