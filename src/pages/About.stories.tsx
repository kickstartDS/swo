import { Header } from "../components/header/HeaderComponent";
import { headerProps } from "../components/header/Header.stories";
import { Footer } from "../components/footer/FooterComponent";
import { footerProps } from "../components/footer/Footer.stories";
import { Section } from "../components/section/SectionComponent";
import { Cta } from "../components/cta/CtaComponent";
import { ImageStory } from "../components/image-story/ImageStoryComponent";
import { ImageText } from "../components/image-text/ImageTextComponent";
import { Text } from "../components/text/TextComponent";
import { Slider } from "../components/slider/SliderComponent";
import { Features } from "../components/features/FeaturesComponent";
import { Hero } from "../components/hero/HeroComponent";

const Page = () => (
  <>
    <Header {...headerProps} />
    <Section
      spaceBefore="none"
      spaceAfter="none"
      width="full"
      content={{
        mode: "list",
      }}
    >
      <Hero
        highlightText
        textbox
        textPosition="left"
        headline="kickstartDS CMS Starter are here!"
        sub="Featuring a fully fledged, ready to use and easily themeable Design System"
        buttons={[
          {
            label: "Start here",
            target: "#starthere",
          },
        ]}
        image={{
          srcMobile: "img/people-brainstorming-work-meeting.png",
          srcTablet: "img/people-brainstorming-work-meeting.png",
          srcDesktop: "img/people-brainstorming-work-meeting.png",
          src: "https://picsum.photos/seed/kdsvisual/640/270",
          indent: "none",
        }}
      />
    </Section>

    <Section
      id="starthere"
      spaceBefore="none"
      spaceAfter="none"
      width="full"
      content={{
        mode: "list",
        align: "center",
      }}
    >
      <Cta
        headline="A Design System is nothing without a system applying it"
        sub="Take off with our Starters 🚀"
        text="
We bring you [CMS starter](/starter) to help setup your next professional website lighning fast. For the beginning you can choose between headless CMS backends like **Static CMS**, **Storyblok**, **Netlify Create** (formerly **Stackbit**) or you go with **11ty static site** generation.

**Dive into our demos, starter, components and discover the kickstartDS experience that suits you best!**"
        buttons={[
          {
            icon: "chevron-right",
            label: "Go with a starter",
            target: "/starter",
          },
        ]}
        textAlign="center"
        contentAlign="center"
      />
    </Section>
    <Section
      width="wide"
      headline={{
        text: "Highlights of the CMS Starter",
        sub: "Slide through our highlights",
        textAlign: "center",
      }}
    >
      <Slider autoplay equalHeight gap={15} arrows type="carousel">
        <ImageText
          text={""}
          image={{
            src: "/static/img/kickstartDS/CMS-Starter producthunt-slide-01.svg",
            alt: "A Slideshow - content of this slide: Connecting a Design System to a CMS has never been easier. And cheaper. Create your next digital experience faster, more consistent and sustainably than ever.",
          }}
          layout={"above"}
        />
        <ImageText
          image={{
            src: "/static/img/kickstartDS/CMS-Starter producthunt-slide-02.svg",
            alt: "A Slideshow - content of this slide: StaticCMS, Storyblok, Netlify Create (formerly Stackbit) and 11ty. Meet our Starters, low-code, open source, ready to start and batteries included",
          }}
          text={""}
          layout={"above"}
        />
        <ImageText
          image={{
            src: "/static/img/kickstartDS/CMS-Starter producthunt-slide-03.svg",
            alt: "A Slideshow - content of this slide: From zero to a deployed production website in less than 30 mins. For Storyblok, Stackbit (aka Netlify Create), StaticCMS or even as a static site with 11ty. Your choice!",
          }}
          text={""}
          layout={"above"}
        />
        <ImageText
          image={{
            src: "/static/img/kickstartDS/CMS-Starter producthunt-slide-05.svg",
            alt: "A Slideshow - content of this slide: Full Design System with branding layer included. Professional components, optimized for content & marketing websites to be used as a starting point for your very own Design System!",
          }}
          text={""}
          layout={"above"}
        />
        <ImageText
          image={{
            src: "/static/img/kickstartDS/CMS-Starter producthunt-slide-04.svg",
            alt: "A Slideshow - content of this slide: All component variants as presets in the CMS editor. Develop components once and reuse everywhere.",
          }}
          text={""}
          layout={"above"}
        />
        <ImageText
          image={{
            src: "/static/img/kickstartDS/CMS-Starter producthunt-slide-06.svg",
            alt: "A Slideshow - content of this slide: Automatic conversion with next-gen schema tooling! Use our transformers, or write your own one, based on an extensive library we wrote. Component screenshots, presets and configuration ... all automated!",
          }}
          text={""}
          layout={"above"}
        />
        <ImageText
          image={{
            src: "/static/img/kickstartDS/CMS-Starter producthunt-slide-07.svg",
            alt: "A Slideshow - content of this slide: Enter the world of headless CMS and start today. It's just one click away! We're on a mission to democratize Design Systems. Are you too?",
          }}
          text={""}
          layout={"above"}
        />
      </Slider>
    </Section>

    <Section
      spaceBefore="small"
      spaceAfter="none"
      width="wide"
      content={{
        mode: "list",
        width: "wide",
      }}
      headline={{
        text: "Open Source vs. Premium Experience",
        large: true,
        width: "wide",
      }}
    >
      <ImageStory
        layout="imageLeft"
        text={`
**We built two distinct demo websites to represent the range of possibilities with kickstartDS. Plus, You'll find website starters, to start your journey even faster.**

#### Basic Demo of an Agency Website
The Open Source Demo, built entirely on our [**open-source** modules](https://www.kickstartds.com/modules/), demonstrates the robust capabilities you can leverage at no cost. It highlights the immense value **kickstartDS** offers, without any investment.

#### Premium Experience Demo
For a more enhanced experience, check out the Premium Experience Demo. It demonstrates the potential of our [**premium** kickstartDS Content Component Module](https://www.kickstartds.com/content-module/). See how a modest and fair one time investment can significantly elevate the look and feel of your website or content-driven application, sustainably.
`}
        image={{
          src: "/img/full-shot-different-people-working-together.png",
          alt: "Digital art of two friendly girls standing in front of each other, playing with a huge pile of toy bricks in their center. the scene is surrounded by horizontal light stripes in motion creating a ring around them, light blue, violet and purple colors, light neon-lights, laser-light, wide-angle",
        }}
      />
    </Section>

    <Section
      spaceBefore="small"
      spaceAfter="small"
      content={{
        mode: "list",
        align: "center",
        width: "wide",
      }}
    >
      <Cta
        textAlign="left"
        buttons={[
          {
            label: "Contact us",
            target: "https://app.lemcal.com/@daniel-ley",
            icon: "person",
          },
        ]}
        headline="🤫 Spoiler!"
        highlightText
        text="Although this is just a website for demo purposes, if you are looking for an agency to serve your **headless** or **Design System** needs, contact us, we are real experts!"
      />
    </Section>

    <Section
      width="wide"
      content={{
        width: "default",
      }}
      headline={{
        width: "default",
        align: "left",
        text: "Comparing both demos, you can **gain** a clear understanding of the **value** proposition offered by **kickstartDS**",
        sub: "From Open Source solution to premium marketing experience",
        switchOrder: true,
      }}
    >
      <Features
        ctas={{
          style: "button",
          toggle: true,
        }}
        feature={[
          {
            cta: {
              label: "Browse basic Demo",
              target: "https://basic.design-system.agency/",
            },
            icon: "logout",
            text: "Compare what the free version, using Open Source components only, can already offer",
            title: "Basic Agency Website Demo",
          },
          {
            cta: {
              label: "Browse premium Demo",
              target: "https://design-system.agency",
            },
            icon: "browser",
            text: "Which is enriched with more complex components, based on the kickstartDS Content Module.",
            title: "Premium Content Experience",
          },
          {
            cta: {
              label: "Browse all Components",
              target: "/components",
            },
            icon: "search",
            text: "Flick through our component collection, switching themes or toggling inverted styles",
            title: "65+ Examples build on top of 18 components",
          },
          {
            cta: {
              label: "Explore Storybook",
              target: "https://main--64f08cbba622af835d382b4f.chromatic.com/",
            },
            icon: "share",
            text: "Browsing our Storybook will allow a look behind the scenes on what the kickstartDS Design System starter has to offer",
            title: "Check out the Storybook",
          },
        ]}
        layout="largeTiles"
        style="stack"
      />
    </Section>

    <Section width="narrow" spaceBefore="none">
      <Text
        text={`
### The purpose of this demo
This demo is intended to provide a firsthand experience of the capabilities of [**kickstartDS**](https://www.kickstartds.com). It's not just a website; it's a demonstration of how we can transform your digital landscape. Please note that while this demo represents a **Design System Agency**, the principles and techniques showcased are applicable to a wide range of industries and use cases.

### Important disclaimer
While we've strived to provide a comprehensive demonstration, please bear in mind that this is a simplified showcase of the potential of [**kickstartDS**](https://www.kickstartds.com). The actual implementation of a **Design System** and **headless CMS** like **Storyblok** or **Netlify Create** can be tailored to your specific needs and goals, ensuring a custom solution that drives your digital success.
        `}
      />
    </Section>

    <Section
      width="wide"
      spaceBefore="none"
      spaceAfter="none"
      backgroundColor="accent"
      inverted={true}
    >
      <Cta
        headline="Want to know more?"
        sub="Intrigued by what a kickstartDS-driven website can do for your brand?"
        text="Let's explore how we can shape your digital journey. Get in touch today!"
        fullWidth
        order={{
          desktopImageLast: false,
          mobileImageLast: false,
        }}
        image={{
          src: "/static/img/deco/contact-us_jul-dal.png",
        }}
        buttons={[
          {
            label: "Contact us",
            target: "https://app.lemcal.com/@daniel-ley",
            icon: "person",
          },
          {
            label: "Book a meeting",
            target: "https://app.lemcal.com/@daniel-ley",
            icon: "date",
          },
        ]}
      />
    </Section>

    <Footer {...footerProps} />
  </>
);

export default {
  title: "Page Archetypes/About",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const About = {};
