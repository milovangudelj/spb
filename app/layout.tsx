import { Karla, Lora } from "next/font/google";

const karla = Karla({ subsets: ["latin"], variable: "--font-karla" });
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} ${lora.variable} bg-zinc-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
