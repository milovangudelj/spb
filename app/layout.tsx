import localFont from "next/font/local";

const grtsk = localFont({
  src: "../public/fonts/Grtsk-Variable.ttf",
  weight: "100 700",
  variable: "--font-grtsk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${grtsk.variable} bg-zinc-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
