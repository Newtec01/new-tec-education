import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 rounded-2xl flex justify-between items-center">
      <h1 className="text-xl font-bold">New Tec Education</h1>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">Dashboard</Link>
        <Link href="/library" className="hover:underline">Biblioteca</Link>
        <Link href="/pomodoro" className="hover:underline">Pomodoro</Link>
        <Link href="/chatbot" className="hover:underline">Chatbot</Link>
      </div>
      <Menu size={24} />
    </nav>
  );
}