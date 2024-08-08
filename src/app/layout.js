import { Inter } from "next/font/google";
import "./globals.css";
import { ImageSizeProvider } from "@/contexts/ImageSizeContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Heatmap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ImageSizeProvider>
          <Toaster position="top-center" />
          {children}
        </ImageSizeProvider>
      </body>
    </html>
  );
}
