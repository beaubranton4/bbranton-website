const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 mt-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} Beau Branton. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://twitter.com/beaubranton" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
            >
              Twitter
            </a>
            <a 
              href="https://linkedin.com/in/beaubranton" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/beaubranton" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
