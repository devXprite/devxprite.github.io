import NavBar from '@/components/NavBar';
import './globals.scss';
import Footer from '@/components/Footer';
import { AOSInit } from '@/components/AOSInit';

export const metadata = {
    title: {
        template: `%s - Prateek Singh`,
        default: 'Prateek Singh',
    },
    description:
        "I'm a dedicated full-stack developer with a strong expertise in web development. I specialize in building dynamic and intuitive web applications.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="color-scheme" content="dark" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className="dark">
                <AOSInit />
                <NavBar />
                <div className="px-4">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
