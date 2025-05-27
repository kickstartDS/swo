import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { Text } from "../components/text/TextComponent";
import { Hero } from "../components/hero/HeroComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";

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
      backgroundColor="default"
      content={{
        align: "center",
        gutter: "default",
        tileWidth: "large",
        width: "unset",
      }}
      headline={{
        large: false,
        sub: "We can create something shining for you too!",
        text: "Happy Customers Showcases",
        width: "unset",
      }}
      spaceAfter="default"
      spaceBefore="default"
      width="default"
    >
      <TeaserCard
        button={{
          hidden: true,
          label: "Go to Page",
        }}
        headline="Transformation Love Story"
        image="/img/showcases/comp_tfe01.jpg"
        layout="row"
        target="#"
        text="See how we saved TechFusions a year's worth of development time"
      />
      <TeaserCard
        button={{
          hidden: true,
          label: "Go to Page",
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
          hidden: true,
          label: "Go to Page",
        }}
        headline="Saving Time and Money"
        image="/img/showcases/comp_eco01.jpg"
        layout="row"
        target="#"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
      />
      <TeaserCard
        button={{
          hidden: true,
          label: "Go to Page",
        }}
        headline="Transformation Love Story"
        image="/img/showcases/comp_tfe01.jpg"
        layout="row"
        target="#"
        text="See how we saved TechFusions a year's worth of development time"
      />
      <TeaserCard
        button={{
          hidden: true,
          label: "Go to Page",
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
          hidden: true,
          label: "Go to Page",
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
