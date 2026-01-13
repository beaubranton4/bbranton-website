import Image from 'next/image';

interface ProfileSidebarProps {
  className?: string;
}

const ProfileSidebar = ({ className = '' }: ProfileSidebarProps) => {
  return (
    <div className={`lg:col-span-1 ${className}`}>
      <div className="sticky top-24">
        <div className="text-center lg:text-left">
          <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto lg:mx-0 mb-6 overflow-hidden border-2 border-pink-500/60" style={{ boxShadow: '0 0 20px rgba(236, 72, 153, 0.4)' }}>
            <Image 
              src="/images/themed-selfie.png" 
              alt="Beau Branton" 
              width={128} 
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
            My name is <span className="text-white font-medium">Beau Branton</span>.
            <br /><br />
            I&apos;m an entrepreneur, data nerd, and former pro baseball player.
            <br /><br />
            <span className="text-cyan-400">Stanford Alum</span> • <span className="text-pink-400">Hawaii → SF</span>
          </p>
          
          {/* Social Links */}
          <div className="space-y-2">
            <a 
              href="https://twitter.com/beaubranton" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              ▸ twitter
            </a>
            <a 
              href="https://github.com/beaubranton4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-gray-400 hover:text-pink-400 transition-colors text-sm"
            >
              ▸ github
            </a>
            <a 
              href="https://linkedin.com/in/beaubranton" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-gray-400 hover:text-pink-400 transition-colors text-sm"
            >
              ▸ linkedin
            </a>
            <a 
              href="mailto:bbranton@gmail.com" 
              className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              ▸ email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
