interface NavigationItem {
  name: string;
  href: string;
}

export default function Footer({
  footerNavigation,
}: {
  footerNavigation: {
    company: NavigationItem[];
    legal: NavigationItem[];
  };
}) {
  return (
    <div className="dark:bg-boxdark-2 mx-auto mt-6 max-w-7xl px-6 lg:px-8">
      <footer
        aria-labelledby="footer-heading"
        className="relative border-t border-gray-900/10 py-24 sm:mt-32 dark:border-gray-200/10"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-foreground text-sm font-semibold">Rigan Studios</p>
            <p className="text-muted-foreground mt-2 max-w-xs text-xs leading-5">
              Bespoke automation engineering and AI integration for ambitious businesses.
            </p>
          </div>
          <div className="flex gap-20">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Navigation
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                Legal
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900 dark:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
