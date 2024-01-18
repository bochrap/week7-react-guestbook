export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer>
      &copy;<a href="https://github.com/bochrap/">Filip Lada</a> for TechEducators {year}
    </footer>
  );
}
