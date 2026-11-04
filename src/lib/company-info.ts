// Preferred canonical origin (the bare domain 308-redirects here)
export const SITE_URL = "https://www.vmsquaresecurity.com";

export interface SocialProfile {
  label: "Facebook" | "Instagram" | "LinkedIn";
  url: string;
}

export const COMPANY_INFO = {
  name: "VM SQUARE SECURITY & MANPOWER SERVICES PVT. LTD.",
  shortName: "VM SQUARE",
  phone: {
    raw: "+918073246094",
    display: "+91 80732 46094",
    tel: "tel:+918073246094",
  },
  whatsapp: {
    number: "918073246094",
    display: "+91 80732 46094",
    link: "https://wa.me/918073246094?text=Hello%20VM%20SQUARE,%20I%20would%20like%20to%20inquire%20about%20security%20services.",
  },
  email: {
    address: "drakshayani@vmsquaresecurity.com",
    mailto: "mailto:drakshayani@vmsquaresecurity.com",
  },
  address: {
    building: "KBS ARCADE, No.1AA-124-D",
    street: "East of NGEF, Near Bengaluru One Office, Kasturinagar",
    area: "Bengaluru, Karnataka - 560043, India",
    pincode: "560043",
    city: "Bengaluru",
    state: "Karnataka",
    full: "KBS ARCADE, No.1AA-124-D, East of NGEF, Near Bengaluru One Office, Kasturinagar, Bengaluru, Karnataka - 560043, India",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=KBS+Arcade%2C+East+of+NGEF%2C+Kasturi+Nagar%2C+Bengaluru%2C+Karnataka+560043",
    embedUrl: "https://maps.google.com/maps?q=KBS+Arcade%2C+East+of+NGEF%2C+Kasturi+Nagar%2C+Bengaluru%2C+Karnataka+560043&t=&z=17&ie=UTF8&iwloc=B&output=embed",
  },
  // Official social profiles. The footer icons and the structured data "sameAs" list only use
  // entries added here; the footer previously linked to "#" placeholders.
  socialProfiles: [] as SocialProfile[],
};
