import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <Link href="/">
            <span className="text-2xl font-bold no-underline hover:text-gray-700 dark:hover:text-gray-300">
              Beau Branton
            </span>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <span
                    className={`no-underline ${
                      router.pathname === item.path
                        ? 'font-semibold text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
