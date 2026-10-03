export const metadata = {
  title: "AYLIVO",
  description: "AI-powered WhatsApp business assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
