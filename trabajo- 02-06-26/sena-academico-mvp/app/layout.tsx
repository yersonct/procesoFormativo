import "./globals.css";

export const metadata = {
  title: "SENA-SYS MVP",
  description: "Sistema de Gestión Académica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}