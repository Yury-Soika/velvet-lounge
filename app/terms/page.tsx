import type { Metadata } from "next";
import ConceptLegalPage from "../components/ConceptLegalPage";

export const metadata: Metadata = {
  title: "Concept Terms | Velvet Lounge",
  description: "Usage terms and concept status for the fictional Velvet Lounge portfolio demonstration by Plex.",
  alternates: { canonical: "https://velvet.plex.ee/terms" },
};

export default function TermsPage() {
  return (
    <ConceptLegalPage
      title="Concept Terms"
      intro="This website is a fictional portfolio demonstration. It is not the website of an operating nightclub and does not offer real reservations, events, products or services."
      sections={[
        {
          title: "Illustrative content",
          body: "Names, locations, schedules, prices, artists, menus and contact information are illustrative. They should not be interpreted as current commercial offers.",
        },
        {
          title: "No transaction or reservation",
          body: "Submitting the demonstrational form does not transmit a request, reserve a table, create an account or enter into a contract.",
        },
        {
          title: "Ownership and enquiries",
          body: "The concept is presented as portfolio work by Plex. For information about a real website, booking system or digital product, contact Plex through plex.ee.",
        },
      ]}
    />
  );
}
