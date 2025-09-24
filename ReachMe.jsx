export default function ReachMe() {
  return (
    <section className="text-center space-y-6">
      <h2 className="text-3xl font-semibold">Reach Me</h2>

      <div className="space-y-1">
        <p>
          <strong>GitHub: </strong>
          <a href="https://github.com/username" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
            github.com/username
          </a>
        </p>
        <p>
          <strong>Email: </strong>
          <a href="mailto:example@email.com" className="text-blue-600 hover:underline">
            example@email.com
          </a>
        </p>
        <p>
          <strong>LinkedIn: </strong>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
            linkedin.com/in/username
          </a>
        </p>
      </div>

      <div className="mx-auto w-32 h-32">
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://linkedin.com/in/username"
          alt="QR Code LinkedIn"
          className="mx-auto"
        />
      </div>
    </section>
  );
}
