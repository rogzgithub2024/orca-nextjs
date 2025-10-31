import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homeowner Detail - Advertising",
  description: "Complete your homeowner detail information for property rental evaluation. Enter your owner information, point of contact, and mailing details.",
  keywords: ["homeowner detail", "property rental", "orca realty", "property management", "rental evaluation"],
  openGraph: {
    title: "Homeowner Detail - Advertising | Orca Realty",
    description: "Complete your homeowner detail information for property rental evaluation.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AdvertisingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

