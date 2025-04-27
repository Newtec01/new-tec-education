import LibraryList from '@/components/LibraryList';

export default function Library() {
  const tools = [
    { name: 'Trello', link: 'https://trello.com' },
    { name: 'Notion', link: 'https://notion.so' },
    { name: 'Kahoot', link: 'https://kahoot.it' },
  ];

  return <LibraryList tools={tools} />;
}