import { Facebook, Instagram, Twitter, LinkedinIcon } from 'lucide-react';

const Footer = () => {
    const navigationLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
        { name: 'Blog', href: '/blog' },
    ];

    const socialLinks = [
        { name: 'Facebook', href: 'https://facebook.com', icon: <Facebook className="w-5 h-5" /> },
        { name: 'Instagram', href: 'https://instagram.com', icon: <Instagram className="w-5 h-5" /> },
        { name: 'Twitter', href: 'https://twitter.com', icon: <Twitter className="w-5 h-5" /> },
        { name: 'LinkedIn', href: 'https://linkedin.com', icon: <LinkedinIcon className="w-5 h-5" /> },
    ];

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Navigation Links */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2">Navigation</h3>
                    <ul className="flex flex-wrap gap-4">
                        {navigationLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="hover:underline">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="mb-6">
                    <h3 className="text-lg font-bold mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        {socialLinks.map((social) => (
                            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright Information */}
                <div className="text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
