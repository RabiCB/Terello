
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

export function Footercomp() {
  return (
   
     <Footer className="mt-6 "  container>
      <FooterCopyright href="#" by="Terello™" year={2024} />
      <FooterLinkGroup>
        <FooterLink href="#">About Us</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Outlets</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
   
  );
}


