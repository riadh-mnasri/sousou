export function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 py-6 text-center text-xs text-foreground/40">
      © {new Date().getFullYear()}{" "}
      <a href="https://riadh-mnasri.pro" className="hover:underline">
        Riadh MNASRI
      </a>
    </footer>
  );
}
