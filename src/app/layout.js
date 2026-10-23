import "./globals.css";

export const metadata = {
  title: "Electrical Contractors' Association of Maharashtra (ECAM) — Estd. 1925 | India's Apex Electrical Contracting Body",
  description:
    "Official portal of Electrical Contractors' Association of Maharashtra (ECAM). Founded in 1925, representing 3,000+ Licensed Electrical Contractors, Traders, Manufacturers, Engineers & Consultants across Maharashtra & India. Headquartered at The Stock Exchange Towers, Fort, Mumbai.",
  keywords: [
    "ECAM",
    "ECAM India",
    "Electrical Contractors Association of Maharashtra",
    "ECAM Mumbai",
    "ECAMEX 2026",
    "Licensed Electrical Contractors Maharashtra",
    "Electrical Safety BIS",
    "IECT Magazine",
    "Stock Exchange Towers Dalal Street",
    "Electrical Contractors Pune Nashik Thane Kokan",
  ],
  icons: {
    icon: "/images/ecam-logo.png",
    apple: "/images/ecam-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/ecam-logo.png" />
        <link rel="apple-touch-icon" href="/images/ecam-logo.png" />
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
