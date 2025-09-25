export default function HowIWork() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold text-center mb-4">How I Work</h2>

      <div>
        <h3 className="text-xl font-bold mb-1">Workflow</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Plan with user stories and wireframes</li>
          <li>Implement responsive interfaces with React</li>
          <li>Test thoroughly and deploy continuously</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-1">Favorite Tools & Tech Stack</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>React, Vite, Tailwind CSS</li>
          <li>VS Code, Git, GitHub</li>
          <li>Figma, Postman</li>
        </ul>
      </div>
    </section>
  );
}
