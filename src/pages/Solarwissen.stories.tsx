import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { Text } from "../components/text/TextComponent";
import { Hero } from "../components/hero/HeroComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { ContentNavCard } from "../components/content-nav-card/ContentNavCardComponent";

const Page = () => (
  <>
    <Header {...headerProps} />

    <Section inverted spaceBefore="none" spaceAfter="none" width="full">
      <Hero
        image={{
          srcDesktop: "/img/swo/solaranlage-dach-tobi.webp",
          srcMobile: "/img/swo/solaranlage-dach-tobi.webp",
          srcTablet: "/img/swo/solaranlage-dach-tobi.webp",
        }}
      />
    </Section>

    <Section
      headline={{
        text: "Wissenswertes rund um Ihre Solarenergie",
        sub: "Auf einen Blick für Sie zusammengefasst",
        switchOrder: true,
        large: true,
        align: "center",
      }}
      backgroundColor="accent"
    >
      <Text
        text={`
Bei der Planung und Installation einer Solaranlage gibt es Einiges zu beachten. Welche technischen Möglichkeiten gibt es? Welche Solarmodule sind die richtigen für mich? Kommen Kopplungsmöglichkeiten z.B. mit Ladeeinrichtungen für E-Autos oder einer Wärmepumpe für mich in Frage? Und auch die individuelle Finanzierungsplanung und die Wahl des Installationsunternehmens muss gut überlegt sein. Auf dieser Seite haben wir zahlreiche, anbieterunabhängige Infos zum Thema Photovoltaik für Sie zusammengestellt. `}
      />
    </Section>
    <Section
      content={{
        tileWidth: "large",
      }}
      headline={{
        text: "Unsere wichtigsten Angebote & Services im Überblick",
      }}
    >
      <ContentNavCard
        label="Energie für die Region"
        topic="Ökostrom- und Erdgas-Tarife mit Preisgarantien"
        image={{
          src: "https://media.stadtwerke-osnabrueck.de/bdb0948c5f2f08c2bf790d179cf42cba/40c54eda1fd5b3e2/83b7fe23b27e/v/823838563cd1/PK-Tarif-Grundrauschen_Mobil_950x633.jpg",
          alt: "Bild",
        }}
        link={{
          label: "Unsere Energietarife",
          target: "#",
        }}
      />
      <ContentNavCard
        label="Mission Glasfaser"
        topic="Glasfaserausbau für ganz Osnabrück"
        image={{
          src: "https://media.stadtwerke-osnabrueck.de/bdb0948c5f2f08c2bf790d179cf42cba/e230f2b1c9b1d483/34f053b018e8/v/e6338e707fab/mission-glasfaser-ausbau",
          alt: "Bild",
        }}
        link={{
          label: "Jetzt Verfügbarkeit prüfen",
          target: "#",
        }}
      />
      <ContentNavCard
        topic="Mit uns zur eigenen Wärmepumpe"
        label="Wärmewende für Ihr Zuhause"
        image={{
          src: "https://media.stadtwerke-osnabrueck.de/bdb0948c5f2f08c2bf790d179cf42cba/9a5df82d06dcc479/d04998cc97f8/v/d0c2d0196e4e/waermepumpe-ohne-menschen_final.jpg",
          alt: "Bild",
        }}
        link={{
          label: "Zun Angebot",
          target: "#",
        }}
      />
      <ContentNavCard
        label="Vorteilswelt"
        topic="Mehr drin für unsere Energiekunden"
        image={{
          src: "https://media.stadtwerke-osnabrueck.de/bdb0948c5f2f08c2bf790d179cf42cba/ec3da32f4deaa8ca/ca2f9eb010be/v/298731ee0430/Vorteilswelt-Loma-Sauna.jpg",
          alt: "Bild",
        }}
        link={{
          label: "Zur Vorteilswelt",
          target: "#",
        }}
        campaignGreen
      />
      <ContentNavCard
        label="Deutschlandticket"
        topic="Für 58 Euro quer durch's Land!"
        image={{
          src: "https://media.stadtwerke-osnabrueck.de/bdb0948c5f2f08c2bf790d179cf42cba/6db5e7eabc6d3fe3/f5501a06e12f/v/9164af296429/deutschland-ticket-swo-web-2000x665_Logo--2-.jpg",
          alt: "Bild",
        }}
        link={{
          label: "Infos zum D-Ticket",
          target: "#",
        }}
        campaignGreen
      />
      <ContentNavCard
        label="In Osnabrück leben"
        topic="Unsere Wohnungsangebote"
        image={{
          src: "https://media.stadtwerke-osnabrueck.de/bdb0948c5f2f08c2bf790d179cf42cba/342ca5291414ed67/b47b1cc736e1/v/ad56ee047f7c/wio-junges-paar-3089.jpg",
          alt: "Bild",
        }}
        link={{
          label: "Zu den Angeboten",
          target: "#",
        }}
      />
    </Section>
    <Section
      backgroundColor="accent"
      headline={{
        text: "Weitere Solar-Themen für Sie",
      }}
    >
      <TeaserCard
        button={{
          label: "Mehr Infos",
        }}
        headline="Transformation Love Story"
        image="/img/showcases/comp_tfe01.jpg"
        layout="row"
        target="#"
        text="See how we saved TechFusions a year's worth of development time"
      />
      <TeaserCard
        button={{
          label: "Zu unseren Solarlösungen",
        }}
        headline="Speed and Scale"
        image="/img/showcases/comp_audio01.jpg"
        label="Freshest Fruit"
        layout="row"
        target="#"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
      />
      <TeaserCard
        button={{
          label: "Zu unseren Solarlösungen",
        }}
        headline="Saving Time and Money"
        image="/img/showcases/comp_eco01.jpg"
        layout="row"
        target="#"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
      />
    </Section>
    <Footer {...footerProps} />
  </>
);

export default {
  title: "SWO Pages/Solarwissen",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Solarwissen = {};
