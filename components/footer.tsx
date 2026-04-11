export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-muted sm:pb-0">
      <p>
        Designed and coded by yours truly. Built with{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent hover:text-muted transition-colors"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent hover:text-muted transition-colors"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent hover:text-muted transition-colors"
        >
          Vercel
        </a>
        .
      </p>
    </footer>
  );
}
