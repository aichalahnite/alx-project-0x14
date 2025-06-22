const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-center py-4 mt-12 border-t border-gray-700">
      <p className="text-sm">&copy; {new Date().getFullYear()} CineSeek. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
