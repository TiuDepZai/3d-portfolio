const Footer = () => {
  return (
    <footer className="mt-20 py-6 border-t border-gray-700 text-center text-sm text-gray-400">
      <p className="mb-2">
        Built with ❤️ by <span className="font-semibold text-white">Nguyen Duong</span>
      </p>

      <div className="mb-2">
        Icons by{" "}
        <a
          href="https://www.flaticon.com/free-icons/solution"
          title="solution icons"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          Eucalyp
        </a>{" "}
        (Solution),{" "}
        <a
          href="https://www.flaticon.com/free-icons/table-tennis"
          title="table-tennis icons"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          Smashicons
        </a>{" "}
        (Table Tennis), and{" "}
        <a
          href="https://www.flaticon.com/free-icons/computer"
          title="computer icons"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          Freepik
        </a>{" "}
        (Computer) from{" "}
        <a
          href="https://www.flaticon.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-400"
        >
          Flaticon
        </a>.
      </div>

      <p>
        © {new Date().getFullYear()} Nguyen Duong. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
