import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Journal', path: '/blog' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 border-b border-slate-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Branding */}
          <Link href="/" className="no-underline group">
            <span
              className="text-cyan-400 group-hover:text-cyan-300 transition-colors"
              style={{ 
                fontFamily: "'Press Start 2P', system-ui, sans-serif", 
                fontSize: '16px',
                textShadow: '0 0 20px rgba(6, 182, 212, 0.4)'
              }}
            >
              Beau Branton
            </span>
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-4 sm:space-x-6">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <span
                      className={`no-underline relative text-sm ${
                        router.pathname === item.path || 
                        (item.path !== '/' && router.pathname.startsWith(item.path))
                          ? 'font-semibold text-cyan-400'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.name}
                      {(router.pathname === item.path || 
                        (item.path !== '/' && router.pathname.startsWith(item.path))) && (
                        <span
                          className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-pink-500"
                          style={{ boxShadow: '0 0 8px rgba(236, 72, 153, 0.6)' }}
                        />
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
