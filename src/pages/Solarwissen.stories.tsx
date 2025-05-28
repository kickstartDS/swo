import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { Text } from "../components/text/TextComponent";
import { Hero } from "../components/hero/HeroComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { ContentNavCard } from "../components/content-nav-card/ContentNavCardComponent";
import { Button } from "../components/button/ButtonComponent";
import { Faq } from "../components/faq/FaqComponent";
import { Logos } from "../components/logos/LogosComponent";

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
        label="Wir bringen den Ausbau voran"
        headline="Photovoltaikanlagen in Osnabrück und der Region"
        image="https://media.stadtwerke-osnabrueck.de/bdb0948c5f2f08c2bf790d179cf42cba/cb966ace58b03b46/524b60eaf7de/v/725e6432444f/Photovoltaikanlage-Flachdach-Unternehmen.jpg"
        imageRatio="landscape"
        target="#"
        button={{
          label: "Mehr Infos",
        }}
      />
      <TeaserCard
        headline="Sonnenstrom vom eigenen Dach"
        image="https://media.stadtwerke-osnabrueck.de/bdb0948c5f2f08c2bf790d179cf42cba/44ba16630830b852/1fc879687f7b/v/efa71d51e475/haus-solar-anlage-photovoltaik.jpg"
        imageRatio="landscape"
        label="Ein Überblick"
        target="#"
        button={{
          label: "Zu unseren Solarlösungen",
        }}
      />
      <TeaserCard
        headline="Die richtige Photovoltaikanlage für Ihr Unternehmen"
        label="Sie sind Geschäftskunde?"
        image="https://media.stadtwerke-osnabrueck.de/bdb0948c5f2f08c2bf790d179cf42cba/efbf799d1397cac1/5ba44ac7add3/v/373831494c47/Photovoltaikanlage-Solaranlage-Buerogebaeude.jpg"
        imageRatio="landscape"
        target="#"
        button={{
          label: "Zu unseren Solarlösungen",
        }}
      />
    </Section>
    <Section>
      <Text
        text={` ### Dach-Eignungsprüfung durch die Stadt Osnabrück
Die Stadt Osnabrück hat mittels Laserscanner-Daten für seine Bürger eine Standortanalyse und Potenzialberechnung für Photovoltaikanlagen und thermische Solaranlagen erstellen lassen. [Informieren Sie sich über die Ergebnisse Ihres Dachs!](#)`}
      />
    </Section>
    <Section
      content={{
        align: "left",
      }}
      backgroundColor="accent"
      headline={{
        text: "Sie sind auf der Suche nach einem Installateur für Ihre Photovoltaikanlage?",
        sub: "Das Installateurverzeichnis der SWO Netz",
        switchOrder: true,
      }}
    >
      <Button label={"Jetzt finden!"} />
    </Section>
    <Section>
      <Faq
        questions={[
          {
            question:
              "Welche Dachflächen eignen sich für die Installation einer Photovoltaik-Anlage?",
            answer: `Alle herkömmlichen Dachformen sind für die Installation einer Photovoltaik-Anlage geeignet. Von hoher Bedeutung sind die Faktoren Dachneigung, verfügbare Dachfläche und Dachausrichtung.

Falls das Gebäude unter Denkmalschutz steht, prüfen Sie bitte zunächst, ob eine Photovoltaik-Anlage installiert werden darf!`,
          },
          {
            question: "Was ist der Autarkiegrad?",
            answer: `Alle herkömmlichen Dachformen sind für die Installation einer Photovoltaik-Anlage geeignet. Von hoher Bedeutung sind die Faktoren Dachneigung, verfügbare Dachfläche und Dachausrichtung.

Falls das Gebäude unter Denkmalschutz steht, prüfen Sie bitte zunächst, ob eine Photovoltaik-Anlage installiert werden darf!`,
          },
          {
            question: "Bleibt die Höhe der Einspeisevergütung konstant?",
            answer: `Die Stromautarkie entspricht dem Verhältnis von PV-Strom-Eigenverbrauch zum gesamten Stromverbrauch des Kunden. Beträgt der jährliche Stromverbrauch z.B. 6.000 kWh pro Jahr und werden 2.100 kWh des durch die Photovoltaik-Anlage produzierten Solarstroms direkt im Gebäude genutzt, so wird ein Autarkiegrad von 35 % erreicht.

Der Autarkiegrad ist immer abhängig davon, zu welchen Zeiten Sie den Strom vorrangig verbrauchen und wieviel Strom die PV-Anlage zum gleichen Zeitpunkt erzeugt. Verbrauchen Sie den Strom beispielsweise am stärksten in den Morgen- und Abendstunden, weil Sie tagsüber außer Haus sind, wird der hauptsächlich am Tag erzeugte Strom ins Netz eingespeist. In den Morgen- und Abendstunden ist es für Sie somit i.d.R. erforderlich, zusätzlichen Strom aus dem Netz hinzuzukaufen. Veränderte Verbrauchszeiten haben somit einen Einfluss auf den Autarkiegrad, genauso wie der Einsatz eines Stromspeichers, da der produzierte und ungenutzte Strom zu anderen Zeiten verwendet werden kann.`,
          },
          {
            question:
              "Warum kann ich meinen Haushalt trotz eines Energiespeichers nicht zu 100% autark mit eigenem Sonnenstrom versorgen?",
            answer: `Alle herkömmlichen Dachformen sind für die Installation einer Photovoltaik-Anlage geeignet.`,
          },
          {
            question: "Ab welcher Anlagengröße werden EEG-Abgaben fällig?",
            answer: `Alle herkömmlichen Dachformen sind für die Installation einer Photovoltaik-Anlage geeignet.`,
          },
        ]}
      />
    </Section>
    <Section
      backgroundColor="accent"
      headline={{
        text: "\\#machwasdraus - so machen Mats, Marlene und Tobi mehr aus Sonne",
      }}
    >
      <TeaserCard
        label="#machwasdraus"
        headline="Mach´s wie Mats - Sonnenenergie für nächtliche Abenteuer"
        image="https://media.stadtwerke-osnabrueck.de/bdb0948c5f2f08c2bf790d179cf42cba/cb966ace58b03b46/524b60eaf7de/v/725e6432444f/Photovoltaikanlage-Flachdach-Unternehmen.jpg"
        imageRatio="landscape"
        target="#"
        button={{
          label: "Zu Mats",
        }}
        campaignGreen
      />
      <TeaserCard
        headline="Mach´s wie Marlene: Sonnenenergie für den grünen Daumen"
        image="https://media.stadtwerke-osnabrueck.de/bdb0948c5f2f08c2bf790d179cf42cba/44ba16630830b852/1fc879687f7b/v/efa71d51e475/haus-solar-anlage-photovoltaik.jpg"
        imageRatio="landscape"
        label="#machwasdraus"
        target="#"
        button={{
          label: "Zu Marlene",
        }}
        campaignGreen
      />
      <TeaserCard
        headline="Mach´s wie Tobi: Sonnenenergie für den schönsten Platz der Welt"
        label="#machwasdraus"
        image="https://media.stadtwerke-osnabrueck.de/bdb0948c5f2f08c2bf790d179cf42cba/efbf799d1397cac1/5ba44ac7add3/v/373831494c47/Photovoltaikanlage-Solaranlage-Buerogebaeude.jpg"
        imageRatio="landscape"
        target="#"
        button={{
          label: "Zu Tobi",
        }}
      />
    </Section>
    <Section>
      <Logos
        logo={[
          {
            src: "https://www.stadtwerke-osnabrueck.de/rm-frontend/swo/images/cachets/H.png",
            alt: "Siegel Herausragender Regionalversorger Strom und Erdgas",
          },
          {
            src: "https://www.stadtwerke-osnabrueck.de/rm-frontend/swo/images/cachets/G.png",
            alt: "Siegel Familienfreundlicher Arbeitgeber",
          },
          {
            src: "https://www.stadtwerke-osnabrueck.de/rm-frontend/swo/images/cachets/D.png",
            alt: "Siegel Schlichtungsstelle Niedersachsen und Bremen",
          },
          {
            src: "https://www.stadtwerke-osnabrueck.de/rm-frontend/swo/images/cachets/I.png",
            alt: "Siegel IHK Top-Ausbilder",
          },
          {
            src: "https://www.stadtwerke-osnabrueck.de/rm-frontend/swo/images/cachets/TUEV.png",
            alt: "Siegel TÜV zertifiziert",
          },
        ]}
      />
    </Section>
    <Footer {...footerProps} inverted />
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
