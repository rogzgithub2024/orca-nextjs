import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Rental Consultation - Newbiz Organic",
  description: "Get a free rental consultation from Orca Realty. Expert property management advice at no cost. Complete property location and information to receive your personalized rental evaluation.",
  keywords: ["free rental consultation", "property rental", "orca realty", "property management", "rental evaluation", "newbiz organic"],
  openGraph: {
    title: "Free Rental Consultation - Newbiz Organic | Orca Realty",
    description: "Get expert property management advice at no cost. Complete property information to receive your personalized rental evaluation.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NewbizOrganicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

