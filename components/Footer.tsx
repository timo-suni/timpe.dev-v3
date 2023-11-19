import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] rounded-lg text-white mt-8 p-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="flex space-x-4">
          <Link href="https://www.linkedin.com/in/yourusername" target="_blank" className="hover:text-[#00e7ba] transition-colors duration-300">
              <FaLinkedin size={24} />
          </Link>
          <Link href="https://github.com/yourusername" target="_blank" className="hover:text-[#00e7ba] transition-colors duration-300">
              <FaGithub size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
