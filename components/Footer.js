// components/Footer.js
function Footer({ nlocation }) {
  return (
    <footer className="bg-green-500 text-black-200 p-4">
      <p className="text-center">{nlocation.length} South of the North Pole</p>
    </footer>
  );
}

export default Footer;
