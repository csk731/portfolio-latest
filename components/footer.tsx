
import footerContent from '@/data/footer';

export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row md:gap-0">
        {/* Branding/Message */}
        <div className="text-center text-sm md:text-left">
          <p>{footerContent.copyright}</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          {footerContent.socialLinks.map(({ url, name, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="transition-transform hover:scale-110"
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
