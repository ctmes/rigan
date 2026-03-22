interface NavigationItem {
    name: string;
    href: string;
}
export default function Footer({ footerNavigation, }: {
    footerNavigation: {
        company: NavigationItem[];
        legal: NavigationItem[];
    };
}): import("react").JSX.Element;
export {};
//# sourceMappingURL=Footer.d.ts.map