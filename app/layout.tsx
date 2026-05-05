import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoShow Predictor – Predict Patient Appointment No-Shows",
  description: "ML-powered no-show prediction for medical practices. Reduce missed appointments and improve patient care with actionable intervention recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="021a42cf-787f-43a1-bb82-5f30bbe267a5"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
