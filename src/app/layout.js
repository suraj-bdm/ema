import "./globals.css";

export const metadata = {
  title: "The Electric Merchants' Association (EMA Mumbai) — Estd. 1937 | Apex Electrical Trade Body",
  description:
    "Official digital portal of The Electric Merchants' Association (EMA), Mumbai. Founded in 1937, representing manufacturers, dealers, distributors, stockists, suppliers, importers, exporters, and contractors within the electrical industry. Headquartered at Ajmera Midtown, Kalbadevi Road, Mumbai.",
  keywords: [
    "EMA",
    "EMA Mumbai",
    "The Electric Merchants Association",
    "Electric Merchants Association Mumbai",
    "EMA Kalbadevi",
    "Electrical Traders Mumbai",
    "Electrical Goods Manufacturers India",
    "EMA Mumbai App",
    "Electrical Trade Directory",
    "Estd 1937",
    "Granite Jubilee",
  ],
  icons: {
    icon: "/images/ema-logo.png",
    apple: "/images/ema-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/ema-logo.png" />
        <link rel="apple-touch-icon" href="/images/ema-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F8FAFC] text-[#181C32] antialiased">{children}</body>
    </html>
  );
}
