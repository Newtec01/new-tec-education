import { useState } from 'react';

export default function ChatbotWidget() {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    setHistory([...history, \`Você: \${input}\`]);
    setHistory((h) => [...h, \`Tutor: Aqui seria chamada à API de IA para responder: \${input}\`]);
    setInput('');
  };

  return (
    <div className="max-w-md mx-auto space-y-2">
      <div className="h-64 overflow-auto p-3 bg-white rounded-2xl shadow">
        {history.map((msg, i) => <p key={i} className="text-sm">{msg}</p>)}
      </div>
      <div className="flex">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Pergunte algo..." className="flex-1 p-2 rounded-l-2xl border border-gray-300" />
        <button onClick={send} className="px-4 rounded-r-2xl bg-white shadow hover:bg-gray-100">Enviar</button>
      </div>
    </div>
  );
}