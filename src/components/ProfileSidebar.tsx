import Image from 'next/image';

interface ProfileSidebarProps {
  className?: string;
}

const ProfileSidebar = ({ className = '' }: ProfileSidebarProps) => {
  return (
    <div className={`lg:col-span-1 ${className}`}>
      <div className="sticky top-8">
        <div className="text-center lg:text-left">
          <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden">
            <Image 
              src="/images/Beau Emoji.jpeg" 
              alt="Beau Branton" 
              width={128} 
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Yo!
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            My name is Beau Branton.
            <br /><br />
            I'm an entrepreneur, data analyst, and former pro baseball player.
            <br /><br />
            Stanford Alum.
            <br /><br />
            <a href="/about" className="underline text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">More about me →</a>
          </p>
          
          {/* Social Links */}
          <div className="space-y-3">
            <a 
              href="https://twitter.com/beaubranton" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-blue-600 transition-colors"
            >
              • twitter
            </a>
            <a 
              href="https://github.com/beaubranton4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              • github
            </a>
            <a 
              href="https://linkedin.com/in/beaubranton" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              • linkedin
            </a>
            <a 
              href="mailto:bbranton@gmail.com" 
              className="block text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              • email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
