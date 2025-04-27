interface Tool { name: string; link: string; }
export default function LibraryList({ tools }: { tools: Tool[] }) {
  return (
    <div className="space-y-2">
      {tools.map((tool) => (
        <a key={tool.name} href={tool.link} target="_blank" rel="noopener" className="block p-3 bg-white rounded-2xl shadow hover:bg-gray-50">
          {tool.name}
        </a>
      ))}
    </div>
  );
}