import React from "react";
import { Link } from "react-router-dom";

function TermsPage() {
  return (
    <section className="terms-main">
      <h1>Våra köpvillkor</h1>
      <h2 className="terms-main__heading">1. Om Sara Fox barnkläder</h2>
      <ul classname="terms-main__list">
          <li classname="terms-main__item">Företaget har sitt säte i Göteborg. Företagets postadress är Silverkällegatan 2B.</li>
          <li classname="terms-main__item">Önskar du att komma i kontakt med oss, skicka ett mail till sarafox.barnklader@gmail.com med ditt ärende och dina kontaktuppgifter så hör vi av oss inom kort.</li>
      </ul>

      <h2 className="terms-main__heading">2. Beställning</h2>
      <ul classname="terms-main__list">
          <li classname="terms-main__item">När du slutfört din beställning skickas en orderbekräftelse till din e-postadress. I bekräftelsen finner du alla uppgifter om produkter, pris, fakturerings- och leveransadress.</li>
          <li classname="terms-main__item">Är något fel i orderbekräftelsen ska du omedelbart kontakta oss via e-post till sarafox.barnklader@gmail.com.</li>
      </ul>

      <h2 className="terms-main__heading">3. Leverans</h2>
      <ul classname="terms-main__list">
          <li classname="terms-main__item">Våra normala leveranstider är 14 dagar. </li>
          <li classname="terms-main__item">Om förseningar i leveransen skulle uppstå (utan att vi har meddelat dig om längre leveranstid) ska du kontakta oss på e-postadress: sarafox.barnklader@gmail.com.</li>
      </ul>

      <h2 className="terms-main__heading">4. Priser</h2>
      <ul classname="terms-main__list">
          <li classname="terms-main__item">Alla priser i butiken anges i SEK och alla priser är inklusive 25% moms.</li>
          <li classname="terms-main__item">Vi reserverar oss för prisändringar orsakat av prisändring från leverantör, feltryck i prislistan samt felaktigheter i priser beroende på felaktig information och förbehåller oss rätten att justera priset.</li>
      </ul>

      <h2 className="terms-main__heading">5. Ångerrätt</h2>
      <ul classname="terms-main__list">
          <li classname="terms-main__item">Vid köp av varor på webbplatsen har du som kund en lagstiftad 14 dagars ångerrätt som gäller från det att du har tagit emot en vara som du har beställt.</li>
      </ul>

      <h3 className="terms-main__heading__lower">5.1 Vid nyttjande av din ångerrätt:</h3>
      <ul classname="terms-main__list">
          <li classname="terms-main__item">Du måste meddela att du ångrar dig. Meddelandet ska skickas till oss sarafox.barnklader@gmail.com. I ditt meddelande ska ditt namn, din adress, e-postadress, ordernumret samt vilka varor som returneringen gäller framgå klart och tydligt.</li>
          <li classname="terms-main__item">Du bör omedelbart och senast inom lagstiftad 14 dagar efter ångermeddelandet returnera produkterna till oss.</li>
          <li classname="terms-main__item">Du står för returfrakt, leverans och skick på produkterna vid retur, produkterna bör därför skickas välpaketerade och i ursprunglig förpackning.</li>
          <li classname="terms-main__item">På återbetalningsbeloppet förbehåller vi oss rätten att dra av en summa motsvarande värdeminskningen jämfört med varans ursprungliga värde vid använd eller skadad produkt.</li>
      </ul>

      <h3 className="terms-main__heading__lower">5.2 Ångerrätten gäller inte vid:</h3>
      <ul classname="terms-main__list">
          <li classname="terms-main__item">Produkter som på grund av hälso- eller hygienskäl har förseglats (plomberats) och där förseglingen (plomberingen) har brutits av dig.</li>
          <li classname="terms-main__item">Produkter som har karaktär av förseglad ljud- eller bildupptagning och där förseglingen har brutits av dig.</li>
          <li classname="terms-main__item terms-main__item__bold">Specialtillverkad produkt, som har skräddarsytts särskilt åt dig eller har en tydlig personlig prägel efter dina önskemål.</li>
          <li classname="terms-main__item">Tjänster som har fullgjorts och där du uttryckligen har samtyckt till att tjänsten påbörjas utan ångerrätt.</li>
      </ul>

      För mer om den lagstiftade ångerrätten, se <Link to="https://www.konsumentverket.se/for-foretag/konsumentratt-for-foretagare/om-kunden-angrar-sitt-kop/">här.</Link>

      <h2 className="terms-main__heading">6. Reklamation och klagomål</h2>
      <ul classname="terms-main__list">
          <li classname="terms-main__item"></li>
          <li classname="terms-main__item"></li>
          <li classname="terms-main__item"></li>
      </ul>

      <h3 className="terms-main__heading__lower">6.1 Hur går du tillväga vid reklamtion?</h3>
      <ul classname="terms-main__list">
          <li classname="terms-main__item"></li>
          <li classname="terms-main__item"></li>
          <li classname="terms-main__item terms-main__item__bold"></li>
      </ul>

      <h2 className="terms-main__heading">7. Ansvarsbegränsning</h2>
      <ul classname="terms-main__list">
          <li classname="terms-main__item"></li>
          <li classname="terms-main__item"></li>
          <li classname="terms-main__item"></li>
      </ul>

      <h2 className="terms-main__heading">8. Produktinformation</h2>
      <ul classname="terms-main__list">
          <li classname="terms-main__item"></li>
          <li classname="terms-main__item"></li>
          <li classname="terms-main__item"></li>
      </ul>

      <h2 className="terms-main__heading">9. Information om Cookies</h2>
      <ul classname="terms-main__list">
          <li classname="terms-main__item"></li>
          <li classname="terms-main__item"></li>
          <li classname="terms-main__item"></li>
      </ul>

      <h2 className="terms-main__heading">10. Personuppgifter</h2>
      <ul classname="terms-main__list">
          <li classname="terms-main__item"></li>
          <li classname="terms-main__item"></li>
          <li classname="terms-main__item"></li>
      </ul>
    </section>
  );
}

export default TermsPage;
