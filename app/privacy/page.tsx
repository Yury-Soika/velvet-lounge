import type { Metadata } from "next";
import ConceptLegalPage from "../components/ConceptLegalPage";

export const metadata: Metadata = {
  title: "Privacy Notice | Velvet Lounge Concept",
  description: "Privacy information for the fictional Velvet Lounge interactive portfolio concept by Plex.",
  alternates: { canonical: "https://velvet.plex.ee/privacy" },
};

export default function PrivacyPage() {
  return (
    <ConceptLegalPage
      title="Privacy Notice"
      intro="Velvet Lounge is a fictional interactive concept created by Plex. The reservation experience demonstrates interface behaviour and is not connected to a venue or booking database."
      sections={[
        {
          title: "Reservation form",
          body: "Information entered in the reservation form is validated only in your browser. It is not transmitted, stored or used to create a reservation.",
        },
        {
          title: "External links",
          body: "Portfolio, social and developer links may lead to third-party services with their own privacy practices. The fictional venue contact details shown in this concept should not be used.",
        },
        {
          title: "Portfolio context",
          body: "This site exists to demonstrate visual design, responsive behaviour and a hospitality customer journey. Contact Plex through plex.ee if you have a genuine project enquiry.",
        },
      ]}
    />
  );
}
