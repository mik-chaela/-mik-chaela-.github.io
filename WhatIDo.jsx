export default function WhatIDo() {
  const projects = [
    {
      title: 'Portfolio Website',
      desc: 'A sleek React + Tailwind portfolio showcasing work and skills.',
      link: '#',
    },
    {
      title: 'Task Manager App',
      desc: 'Productivity app built with React, Zustand, and Vite.',
      link: '#',
    },
    {
      title: 'Blog Platform',
      desc: 'A markdown-powered blog with Next.js and Tailwind CSS.',
      link: '#',
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6 text-center">Projects & Skills</h2>
      <div className="space-y-6">
        {projects.map(({ title, desc, link }, idx) => (
          <article key={idx} className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mb-2 text-gray-700">{desc}</p>
            <a href={link} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
              View Project
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
