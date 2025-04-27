import DashboardCard from '@/components/DashboardCard';

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <DashboardCard title="Trilhas de Aprendizagem" description="Acesse seus cursos e quizzes." href="/trilhas" />
      <DashboardCard title="Desafios Mensais" description="Cumprir missões e ganhar badges." href="/desafios" />
      <DashboardCard title="Relatórios" description="Veja seu progresso e hábitos de uso." href="/relatorios" />
      <DashboardCard title="Dica do Dia" description="Aprenda uma nova ferramenta em 5 minutos." href="/dica" />
    </div>
  );
}