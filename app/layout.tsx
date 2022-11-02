export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <head>
                <title>Kap - Capture your screen</title>
            </head>
            <body>{children}</body>
        </html>
    )
}