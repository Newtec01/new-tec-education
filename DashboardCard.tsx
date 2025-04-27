import Link from 'next/link';

interface Props { title: string; description: string; href: string; }
export default function DashboardCard({ title, description, href }: Props) {
  return (
    <Link href={href} className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );
}