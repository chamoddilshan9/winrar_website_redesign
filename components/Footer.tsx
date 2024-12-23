import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/logo.png" // Ensure logo.png is placed in the public folder
              alt="WinRAR"
              className="w-32 mb-6"
            />
            <p className="text-gray-400 text-sm">
              Leading in file compression technology since 1995.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-indigo-500 transition duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-gray-400 hover:text-indigo-500 transition duration-300">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-indigo-500 transition duration-300">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-indigo-500 transition duration-300">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="tel:+1234567890" className="text-gray-400 hover:text-indigo-500 transition duration-300">
                  +1 234 567 890
                </Link>
              </li>
              <li>
                <Link href="mailto:info@company.com" className="text-gray-400 hover:text-indigo-500 transition duration-300">
                  info@company.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" className="text-gray-400 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22.5 0h-21A1.5 1.5 0 0 0 0 1.5v21a1.5 1.5 0 0 0 1.5 1.5h11v-9h-3v-3h3V9.6a6 6 0 0 1 6-6h3v3h-2c-1.1 0-2 .9-2 2v2h4l-1 3h-3v9h5.5a1.5 1.5 0 0 0 1.5-1.5V1.5A1.5 1.5 0 0 0 22.5 0z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M23 3c-.8.4-1.7.7-2.6.8 1-.6 1.7-1.6 2-2.7-.9.5-1.9.8-2.9 1-1-.9-2.2-1.4-3.5-1.4-2.8 0-5.1 2.3-5.1 5.1 0 .4 0 .7.1 1C9.8 6.1 7.4 5 5.5 3.4 4.5 4.5 4 5.9 4 7.4c0 1.8 1 3.3 2.5 4.2-.9 0-1.8-.3-2.5-.8v.1c0 2.4 1.7 4.5 4.2 5-.4.1-.8.1-1.2.1-.3 0-.7 0-1-.1 1.3 1 2.9 1.6 4.7 1.6 5.6 0 8.6-4.6 8.6-8.6 0-.1 0-.2-.1-.3C22.1 4.4 22.6 3.7 23 3z" />
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20 0h-16a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm-9 17H7v-9h4v9zm-2-10h-2V6h2v1zm10 10h-4v-5c0-1.4-.5-2.4-1.7-2.4-1 0-1.5.7-1.8 1.3-.1.2-.1.5-.1.8v5h-4V9h4v1h.1c.5-.7 1.5-1.2 2.5-1.2 2.2 0 3.7 1.4 3.7 3.6v4.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 WinRAR. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
