import { FC, PropsWithChildren, useMemo, useRef, useState } from "react";
import { traverse as objectTraverse } from "object-traversal";
import { defaultObjectForSchema } from "@kickstartds/cambria";
import { unpack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema } from "json-schema-typed/draft-07";
import { JSONSchema7 } from "json-schema";
import schemaTraverse from "json-schema-traverse";
import merge from "deepmerge";

import { Section } from "../components/section/SectionComponent";
import { Html } from "../components/html/HtmlComponent";
import { Button } from "../components/button/ButtonComponent";
import { Faq } from "../components/faq/FaqComponent";

import { PageProps } from "../components/cms";
import { Contact } from "../components/contact/ContactComponent";
import { Cta } from "../components/cta/CtaComponent";
import { Features } from "../components/features/FeaturesComponent";
import { Stats } from "../components/stats/StatsComponent";
import { TeaserCard } from "../components/teaser-card/TeaserCardComponent";
import { Text } from "../components/text/TextComponent";
import { Hero } from "../components/hero/HeroComponent";
import { TextArea } from "@kickstartds/form/lib/text-area";
import { Header } from "../components/header/HeaderComponent";
import { Footer } from "../components/footer/FooterComponent";

import * as themes from "../themes";

import pageSchema from "../components/cms/page.schema.dereffed.json";
import headerSchema from "../components/header/header.schema.dereffed.json";
import footerSchema from "../components/footer/footer.schema.dereffed.json";
import { Testimonials } from "../components/testimonials/TestimonialsComponent";

const { args: headerArgs } = getArgsShared(headerSchema as JSONSchema7);
const headerProps = {
  ...unpack(headerArgs),
  logo: themes.dsa.logo,
};
const { args: footerArgs } = getArgsShared(footerSchema as JSONSchema7);
const footerProps = {
  ...unpack(footerArgs),
  logo: themes.dsa.logo,
};

// import { Gallery } from "../components/gallery/GalleryComponent";
// import { ImageStory } from "../components/image-story/ImageStoryComponent";
// import { ImageText } from "../components/image-text/ImageTextComponent";
// import { Logos } from "../components/logos/LogosComponent";
// import { Mosaic } from "../components/mosaic/MosaicComponent";
// import { Slider } from "../components/slider/SliderComponent";
// import { VideoCurtain } from "../components/video-curtain/VideoCurtainComponent";

const systemPrompt =
  "You are a Design System marketing specialist. You excel in creating engaging and informative content for your audience. You are using a page schema to generate content for your website. You answer with a page containing at least 5 sections, which themselves should have an average of 2 components (1-3) added to them.";

const userPrompt =
  "Detail the 5 key reasons to use a Design System, include examples and benefits for each key reason. Where possible, add a call to action to encourage further engagement with the content.";

const demoResponse = `
{
  "type__page": "page",
  "section": [
    {
      "type__section": "section",
      "style": "horizontalGradient",
      "headline": {
        "text": "Consistency Across Platforms",
        "large": true,
        "sub": "Ensure uniform design across all your products"
      },
      "components": [
        {
          "type__text": "text",
          "text": "A design system provides a single source of truth for your brand’s design language. By utilizing consistent styles, components, and patterns, you can guarantee that your product delivers a cohesive experience across different devices and platforms.",
          "layout": "singleColumn"
        },
        {
          "type__cta": "cta",
          "headline": "Want to learn more about maintaining consistency?",
          "sub": "Reach out to explore how a design system can unify your brand vision.",
          "text": "Consistency breeds familiarity with users, enhancing user experience and satisfaction.",
          "buttons": [{ "label": "Contact Us" }]
        }
      ],
      "buttons": []
    },
    {
      "type__section": "section",
      "style": "accentTransition",
      "headline": {
        "text": "Efficiency Improvements",
        "large": true,
        "sub": "Streamline workflows with reusable components"
      },
      "components": [
        {
          "type__text": "text",
          "text": "A well-defined design system allows teams to work faster by reusing components rather than creating them from scratch for each project. This not only speeds up development but also reduces errors and ensures high-quality standards are met consistently.",
          "layout": "singleColumn"
        },
        {
          "type__features": "features",
          "layout": "largeTiles",
          "style": "centered",
          "ctas": { "toggle": true, "style": "button" },
          "feature": [
            {
              "type__feature": "feature",
              "title": "Save Time",
              "text": "Cut design time by up to 50% through reusability.",
              "style": "centered",
              "cta": { "label": "Learn More", "toggle": true, "style": "link" }
            },
            {
              "type__feature": "feature",
              "title": "Reduce Toil",
              "text": "Focus on innovation instead of repetitive design tasks.",
              "style": "centered",
              "cta": {
                "label": "Explore Case Studies",
                "toggle": true,
                "style": "link"
              }
            }
          ]
        }
      ],
      "buttons": [
        {
          "type__button": "button",
          "label": "Read More",
          "variant": "secondary",
          "size": "medium",
          "disabled": false
        }
      ]
    },
    {
      "type__section": "section",
      "style": "boldTransition",
      "headline": {
        "text": "Facilitating Collaboration",
        "large": false,
        "sub": "Enhance team communication with a shared language"
      },
      "components": [
        {
          "type__faq": "faq",
          "questions": [
            {
              "question": "How does a design system support cross-functional teams?",
              "answer": "By offering a shared language that aligns design and development teams, fostering smoother handoffs and reducing miscommunications."
            },
            {
              "question": "What tools can streamline this process?",
              "answer": "Tools like Figma and Storybook integrate well with design systems to ease this collaborative effort."
            }
          ]
        },
        {
          "type__text": "text",
          "text": "Adopting a design system invites seamless collaboration between designers, developers, and product managers. By establishing a common design language, it breaks down silos and promotes efficiency.",
          "layout": "multiColumn"
        }
      ],
      "buttons": [
        {
          "type__button": "button",
          "label": "Join Our Webinar",
          "variant": "primary",
          "size": "large",
          "disabled": false
        }
      ]
    },
    {
      "type__section": "section",
      "style": "symmetricGlow",
      "headline": {
        "text": "Scalability",
        "large": false,
        "sub": "Support growth without losing quality or consistency"
      },
      "components": [
        {
          "type__stats": "stats",
          "stat": [
            {
              "type__stat": "stat",
              "number": 70,
              "description": "of companies see improved scalability with design systems",
              "title": "Scalable Design"
            },
            {
              "type__stat": "stat",
              "number": 85,
              "description": "agree that scalability is crucial for long-term success",
              "title": "Long-term Benefits"
            }
          ]
        },
        {
          "type__cta": "cta",
          "headline": "Scale with Confidence",
          "sub": "Design systems allow you to maintain brand integrity, whether you're creating a single landing page or launching a multisite platform.",
          "text": "Talk to our experts about scaling your business efficiently without compromising on quality.",
          "buttons": [{ "label": "Contact Sales" }]
        }
      ],
      "buttons": []
    },
    {
      "type__section": "section",
      "style": "symmetricGlow",
      "headline": {
        "text": "Accessibility and Inclusivity",
        "large": false,
        "sub": "Build products that everyone can use"
      },
      "components": [
        {
          "type__features": "features",
          "layout": "list",
          "style": "stack",
          "ctas": { "toggle": true, "style": "link" },
          "feature": [
            {
              "type__feature": "feature",
              "title": "Predefined Accessibility",
              "text": "Design systems come equipped with accessible components, which helps further inclusivity in design.",
              "style": "intext",
              "cta": {
                "label": "More About Inclusive Design",
                "toggle": true,
                "style": "link"
              }
            },
            {
              "type__feature": "feature",
              "title": "Regulatory Compliance",
              "text": "Have confidence that your product meets necessary accessibility standards and regulations.",
              "style": "stack",
              "cta": {
                "label": "Start a Conversation",
                "toggle": true,
                "style": "link"
              }
            }
          ]
        }
      ],
      "buttons": [
        {
          "type__button": "button",
          "label": "Get Started",
          "variant": "primary",
          "size": "medium",
          "disabled": false
        }
      ]
    }
  ],
  "seo": {
    "type__seo": "seo",
    "title": "5 Key Reasons to Adopt a Design System",
    "description": "Explore the essential benefits of using a design system to enhance consistency, efficiency, collaboration, scalability, and accessibility.",
    "keywords": "Design System, Consistency, Efficiency, Collaboration, Scalability, Accessibility"
  }
}
`;

const demoResponse2 = `
{"type__page":"page","section":[{"type__section":"section","style":"stagelights","headline":{"text":"Introduction to MACH Architecture and Design Systems","large":true,"sub":"Unlocking the power of modern web development"},"components":[{"type__text":"text","text":"MACH architecture is an approach to software development that stands for Microservices, API-first, Cloud-native, and Headless. This architecture enables organizations to create flexible, scalable, and rapid digital experiences. At the heart of this model lies the design system, which acts as a blueprint for creating cohesive and consistent user interfaces. By integrating a design system into a MACH architecture, companies can effectively streamline the design and development process, ensuring that all components are built on a shared foundation of styles and guidelines." ,"layout":"singleColumn"},{"type__faq":"faq","questions":[{"question":"What is a Design System?","answer":"A design system is a comprehensive guide or set of standards used by developers and designers to ensure consistency and quality in the user interface and experience. It typically includes guidelines on typography, color palettes, components, and more."},{"question":"Why is MACH architecture important?","answer":"MACH architecture allows businesses to adapt swiftly to new technologies and user demands by decoupling front-end and back-end operations. It supports quick updates and improvements without disrupting overall functionality."}]}] ,"buttons":[{"type__button":"button","label":"Learn More","variant":"secondary","size":"medium","disabled":false}]},{"type__section":"section","style":"horizontalGradient","headline":{"text":"Streamlining Development with Design Systems","large":false,"sub":"Boost efficiency and maintain consistency"},"components":[{"type__features":"features","layout":"largeTiles","style":"centered","ctas":{"toggle":true,"style":"button"},"feature":[{"type__feature":"feature","title":"Consistency Across Platforms","text":"Design systems ensure that all digital products hold a consistent look and feel, regardless of the technology stack or team working on them. This consistency is crucial in maintaining brand identity across multiple platforms.","style":"stack","cta":{"label":"Explore Consistency","toggle":true,"style":"link"}},{"type__feature":"feature","title":"Reduced Time to Market","text":"By using predefined components from a design system, developers can significantly reduce the time it takes to bring a product to market. This allows for rapid deployment of features and updates across all digital channels.","style":"stack","cta":{"label":"See How","toggle":true,"style":"link"}}]}] ,"buttons":[{"type__button":"button","label":"Get Started","variant":"primary","size":"large","disabled":false}]},{"type__section":"section","style":"verticalGradient","headline":{"text":"The Role of Headless CMS in MACH","large":false,"sub":"Decoupled power for seamless experiences"},"components":[{"type__teaser-card":"teaser-card","headline":"Decoupling Content Management","text":"A headless CMS allows for content to be managed independently of how it is displayed. This separation empowers developers to use modern frameworks and techniques to present content, improving flexibility and scalability.","label":"Headless CMS","layout":"row","button":{"label":"Discover Headless","chevron":true,"hidden":false}},{"type__features":"features","layout":"smallTiles","style":"centered","ctas":{"toggle":false,"style":"link"},"feature":[{"type__feature":"feature","title":"Tailored User Experiences","text":"With a headless CMS, content delivery is flexible and adaptable, allowing for personalized and dynamic user experiences tailored to individual users' needs.","style":"intext","cta":{"label":"Learn More","toggle":false,"style":"button"}},{"type__feature":"feature","title":"Scalability at Core","text":"Headless CMS can efficiently scale as the business grows, supporting a wide array of digital touchpoints without bottlenecks.","style":"intext","cta":{"label":"Get Insights","toggle":false,"style":"button"}}]}] ,"buttons":[{"type__button":"button","label":"Contact Us","variant":"secondary","size":"medium","disabled":false}]},{"type__section":"section","style":"accentTransition","headline":{"text":"Testimonials from Industry Experts","large":false,"sub":"Hear from the best in the field"},"components":[{"type__testimonials":"testimonials","layout":"slider","testimonial":[{"type__testimonial":"testimonial","quote":"Implementing a robust design system within our MACH architecture has drastically improved our product development cycles and ensured consistency across our platforms.","name":"John Doe","title":"CTO, Tech Innovations","rating":5},{"type__testimonial":"testimonial","quote":"The switch to a headless CMS was transformative, allowing our team to focus on delivering unmatched user experiences using the latest technologies.","name":"Jane Smith","title":"Product Manager, Digital Solutions","rating":4}]}] ,"buttons":[{"type__button":"button","label":"View More","variant":"tertiary","size":"small","disabled":false}]},{"type__section":"section","style":"boldTransition","headline":{"text":"Ready to Revolutionize Your Tech Stack?","large":true,"sub":"Explore the next steps in your digital transformation"},"components":[{"type__cta":"cta","headline":"Embrace MACH Architecture","sub":"Future-proof your business","text":"Adopt MACH architecture to enable agility, promote innovation, and scale your digital offerings effortlessly. Begin by integrating a design system into your development process and discover how a headless CMS can elevate your content management strategies. Join the growing community of businesses moving towards more flexible, modern solutions.","buttons":[{"label":"Start Your Journey"},{"label":"Talk to an Expert"}]},{"type__stats":"stats","stat":[{"type__stat":"stat","number":85,"description":"Average reduction in UI/UX development time","title":"Efficient Development"},{"type__stat":"stat","number":100,"description":"Customer satisfaction improvement","title":"Incredible Impact"},{"type__stat":"stat","number":75,"description":"Increase in business agility and adaptiveness","title":"Enhanced Agility"}]}] ,"buttons":[{"type__button":"button","label":"Join Us","variant":"primary","size":"large","disabled":false}]}],"seo":{"type__seo":"seo","title":"Advantages of Design Systems in MACH Architectures","description":"Explore the advantages of integrating Design Systems within MACH architectures, particularly focusing on headless CMS applications.","keywords":"Design Systems, MACH Architecture, Headless CMS, Flexibility, Scalability, Consistency"}}`;

const demoResponse3 = `
{"type__page":"page","section":[{"type__section":"section","style":"stagelights","headline":{"text":"Introduction to MACH Architecture and Design Systems","large":true,"sub":"Unlocking the power of modern web development"},"components":[{"type__text":"text","text":"MACH architecture is an approach to software development that stands for Microservices, API-first, Cloud-native, and Headless. This architecture enables organizations to create flexible, scalable, and rapid digital experiences. At the heart of this model lies the design system, which acts as a blueprint for creating cohesive and consistent user interfaces. By integrating a design system into a MACH architecture, companies can effectively streamline the design and development process, ensuring that all components are built on a shared foundation of styles and guidelines." ,"layout":"singleColumn"},{"type__faq":"faq","questions":[{"question":"What is a Design System?","answer":"A design system is a comprehensive guide or set of standards used by developers and designers to ensure consistency and quality in the user interface and experience. It typically includes guidelines on typography, color palettes, components, and more."},{"question":"Why is MACH architecture important?","answer":"MACH architecture allows businesses to adapt swiftly to new technologies and user demands by decoupling front-end and back-end operations. It supports quick updates and improvements without disrupting overall functionality."}]}] ,"buttons":[{"type__button":"button","label":"Learn More","variant":"secondary","size":"medium","disabled":false}]},{"type__section":"section","style":"horizontalGradient","headline":{"text":"Streamlining Development with Design Systems","large":false,"sub":"Boost efficiency and maintain consistency"},"components":[{"type__features":"features","layout":"largeTiles","style":"centered","ctas":{"toggle":true,"style":"button"},"feature":[{"type__feature":"feature","title":"Consistency Across Platforms","text":"Design systems ensure that all digital products hold a consistent look and feel, regardless of the technology stack or team working on them. This consistency is crucial in maintaining brand identity across multiple platforms.","style":"stack","cta":{"label":"Explore Consistency","toggle":true,"style":"link"}},{"type__feature":"feature","title":"Reduced Time to Market","text":"By using predefined components from a design system, developers can significantly reduce the time it takes to bring a product to market. This allows for rapid deployment of features and updates across all digital channels.","style":"stack","cta":{"label":"See How","toggle":true,"style":"link"}}]}] ,"buttons":[{"type__button":"button","label":"Get Started","variant":"primary","size":"large","disabled":false}]},{"type__section":"section","style":"verticalGradient","headline":{"text":"The Role of Headless CMS in MACH","large":false,"sub":"Decoupled power for seamless experiences"},"components":[{"type__teaser-card":"teaser-card","headline":"Decoupling Content Management","text":"A headless CMS allows for content to be managed independently of how it is displayed. This separation empowers developers to use modern frameworks and techniques to present content, improving flexibility and scalability.","label":"Headless CMS","layout":"row","button":{"label":"Discover Headless","chevron":true,"hidden":false}},{"type__features":"features","layout":"smallTiles","style":"centered","ctas":{"toggle":false,"style":"link"},"feature":[{"type__feature":"feature","title":"Tailored User Experiences","text":"With a headless CMS, content delivery is flexible and adaptable, allowing for personalized and dynamic user experiences tailored to individual users' needs.","style":"intext","cta":{"label":"Learn More","toggle":false,"style":"button"}},{"type__feature":"feature","title":"Scalability at Core","text":"Headless CMS can efficiently scale as the business grows, supporting a wide array of digital touchpoints without bottlenecks.","style":"intext","cta":{"label":"Get Insights","toggle":false,"style":"button"}}]}] ,"buttons":[{"type__button":"button","label":"Contact Us","variant":"secondary","size":"medium","disabled":false}]},{"type__section":"section","style":"accentTransition","headline":{"text":"Testimonials from Industry Experts","large":false,"sub":"Hear from the best in the field"},"components":[{"type__testimonials":"testimonials","layout":"slider","testimonial":[{"type__testimonial":"testimonial","quote":"Implementing a robust design system within our MACH architecture has drastically improved our product development cycles and ensured consistency across our platforms.","name":"John Doe","title":"CTO, Tech Innovations","rating":5},{"type__testimonial":"testimonial","quote":"The switch to a headless CMS was transformative, allowing our team to focus on delivering unmatched user experiences using the latest technologies.","name":"Jane Smith","title":"Product Manager, Digital Solutions","rating":4}]}] ,"buttons":[{"type__button":"button","label":"View More","variant":"tertiary","size":"small","disabled":false}]},{"type__section":"section","style":"boldTransition","headline":{"text":"Ready to Revolutionize Your Tech Stack?","large":true,"sub":"Explore the next steps in your digital transformation"},"components":[{"type__cta":"cta","headline":"Embrace MACH Architecture","sub":"Future-proof your business","text":"Adopt MACH architecture to enable agility, promote innovation, and scale your digital offerings effortlessly. Begin by integrating a design system into your development process and discover how a headless CMS can elevate your content management strategies. Join the growing community of businesses moving towards more flexible, modern solutions.","buttons":[{"label":"Start Your Journey"},{"label":"Talk to an Expert"}]},{"type__stats":"stats","stat":[{"type__stat":"stat","number":85,"description":"Average reduction in UI/UX development time","title":"Efficient Development"},{"type__stat":"stat","number":100,"description":"Customer satisfaction improvement","title":"Incredible Impact"},{"type__stat":"stat","number":75,"description":"Increase in business agility and adaptiveness","title":"Enhanced Agility"}]}] ,"buttons":[{"type__button":"button","label":"Join Us","variant":"primary","size":"large","disabled":false}]}],"seo":{"type__seo":"seo","title":"Advantages of Design Systems in MACH Architectures","description":"Explore the advantages of integrating Design Systems within MACH architectures, particularly focusing on headless CMS applications.","keywords":"Design Systems, MACH Architecture, Headless CMS, Flexibility, Scalability, Consistency"}}`;

const unsupportedKeywords = [
  "format",
  "minItems",
  "maxItems",
  "minimum",
  "maximum",
  "examples",
  "default",
  "$id",
  "$schema",
];

const propertiesToDrop = [
  "backgroundColor",
  "spotlight",
  "headerSpacing",
  "switchOrder",
  "align",
  "textAlign",
  "colorNeutral",
  "target",
  "contentAlign",
  "textColor",
  "highlightText",
  "fullWidth",
  "padding",
  "mobileImageLast",
  "desktopImageLast",
  "overlay",
  "indent",
  "imageRatio",
  "image",
  "width",
  "inverted",
  "spaceBefore",
  "spaceAfter",
  "height",
];

const components = [
  "page",
  "section",
  "contact",
  "cta",
  "faq",
  "features",
  // "gallery",
  "stats",
  "teaser-card",
  "testimonials",
  "text",
  // "image-story",
  // "image-text",
  // "logos",
  "hero",
  // "mosaic",
  // "slider",
  "seo",
  // "video-curtain",
];

const componentMap = {
  contact: Contact,
  cta: Cta,
  faq: Faq,
  features: Features,
  // gallery: Gallery,
  stats: Stats,
  "teaser-card": TeaserCard,
  testimonials: Testimonials,
  text: Text,
  // "image-story": ImageStory,
  // "image-text": ImageText,
  // logos: Logos,
  hero: Hero,
  // mosaic: Mosaic,
  // slider: Slider,
  // "video-curtain": VideoCurtain,
};

const schemaMap = {
  page: {},
  section: {},
  contact: {},
  cta: {},
  faq: {},
  features: {},
  // gallery: {},
  stats: {},
  "teaser-card": {},
  testimonials: {},
  text: {},
  // "image-story": {},
  // "image-text": {},
  // logos: {},
  hero: {},
  // mosaic: {},
  // slider: {},
  seo: {},
  // "video-curtain": {},
};

// TODO type this, might involve pre-processing the schema to generate types in filesystem using `json-schema-to-typescript`
const processResponse = (response: Record<string, any>): PageProps => {
  objectTraverse(
    response,
    ({ value }) => {
      if (typeof value === "object" && !Array.isArray(value)) {
        const typePropKey = Object.keys(value).find((key) =>
          key.startsWith("type__")
        );

        if (typePropKey) {
          const type = typePropKey.split("type__")[1];
          const schema = schemaMap[type];

          if (schema) {
            const defaults = defaultObjectForSchema(
              schema as JSONSchema.Object
            );

            delete value[typePropKey];
            value.type = type;

            for (const prop of Object.keys(defaults)) {
              value[prop] = value[prop]
                ? typeof value[prop] === "object" && !Array.isArray(value[prop])
                  ? merge(value[prop], defaults[prop])
                  : value[prop]
                : defaults[prop];
            }
          }
        }
      }
    },
    { traversalType: "breadth-first" }
  );

  return response as PageProps;
};

/*

Compare flatten to this one from Starter `prepareProject.js`:

      traverse(preset.preset, ({ parent, key, value }) => {
        if (typeof value === "object" && isNaN(key) && !Array.isArray(value)) {
          for (const [propKey, propValue] of Object.entries(value)) {
            parent[`${key}_${propKey}`] = propValue;
          }
          delete parent[key];
        }
      });

*/

const processPage = (page: PageProps): Record<string, any> => {
  objectTraverse(
    page,
    ({ value }) => {
      if (typeof value === "object" && value.type) {
        value.component = value.type;

        for (const prop of Object.keys(value)) {
          if (
            !value[prop].type &&
            typeof value[prop] === "object" &&
            !Array.isArray(value[prop])
          ) {
            for (const nestedProp of Object.keys(value[prop])) {
              value[`${prop}_${nestedProp}`] = structuredClone(
                value[prop][nestedProp]
              );
            }
            delete value[prop];
          }
        }
      }
    },
    { traversalType: "breadth-first" }
  );

  return page as Record<string, any>;
};

// TODO handle `type` in props, currently just gets passed through
const Page: FC<PropsWithChildren<PageProps>> = ({ section }) => {
  return (
    <>
      <Header {...headerProps} />
      {section.map((section, index) => {
        const { components, ...props } = section;
        return (
          <Section key={index} {...props}>
            {components.map((component, index) => {
              const Component = componentMap[component.type];
              return <Component key={index} {...component} />;
            })}
          </Section>
        );
      })}
      <Footer {...footerProps} />
    </>
  );
};

const PrompterFrame = () => {
  const [generatedContent, setGeneratedContent] =
    useState<Record<string, any>>(null);
  const [storyblokContent, setStoryblokContent] =
    useState<Record<string, any>>(null);
  const schema = useMemo(() => {
    const allProperties: Set<string> = new Set();
    let maxDepth = 0;

    const collectSchemas = (schema) => {
      if (
        schema.properties &&
        schema.properties.type &&
        schema.properties.type.const
      ) {
        schemaMap[schema.properties.type.const] = structuredClone(schema);
      }
    };

    const filterComponents = (schema) => {
      if (schema && schema.anyOf) {
        schema.anyOf = schema.anyOf.filter((component) => {
          return components.includes(component.properties.type.const);
        });
      }
    };

    const deleteConsts = (
      schema,
      jsonPtr,
      _rootSchema,
      _parentJsonPtr,
      parentKeyword,
      parentSchema
    ) => {
      if (schema.const && parentKeyword === "properties") {
        const propName = jsonPtr.split("/").pop();

        if (propName === "type") {
          const type = { properties: {} };
          type.properties[`type__${schema.const}`] = {
            type: "string",
            title: "Type of component",
            description: `A field always being set to the value '${schema.const}'`,
          };
          parentSchema.properties = {
            ...type.properties,
            ...parentSchema.properties,
          };
        }

        delete parentSchema.properties[propName];
      }
    };

    const removeImageFormatProperties = (
      schema,
      _jsonPtr,
      _rootSchema,
      _parentJsonPtr,
      _parentKeyword,
      parentSchema,
      keyIndex
    ) => {
      if (
        (schema.format === "image" || schema.format === "video") &&
        parentSchema &&
        parentSchema.properties &&
        parentSchema.properties[keyIndex]
      ) {
        delete parentSchema.properties[keyIndex];
      }
    };

    const removeIconProperties = (
      _schema,
      _jsonPtr,
      _rootSchema,
      _parentJsonPtr,
      _parentKeyword,
      parentSchema,
      keyIndex
    ) => {
      if (
        keyIndex === "icon" &&
        parentSchema &&
        parentSchema.properties &&
        parentSchema.properties[keyIndex]
      ) {
        delete parentSchema.properties[keyIndex];
      }
    };

    const removeUnsupportedProperties = (
      _schema,
      _jsonPtr,
      _rootSchema,
      _parentJsonPtr,
      _parentKeyword,
      parentSchema,
      keyIndex
    ) => {
      if (
        propertiesToDrop.includes(keyIndex) &&
        parentSchema &&
        parentSchema.properties &&
        parentSchema.properties[keyIndex]
      ) {
        delete parentSchema.properties[keyIndex];
      }
    };

    const removeUnsupportedKeywords = (schema) => {
      for (const key of unsupportedKeywords) {
        if (schema.hasOwnProperty(key)) delete schema[key];
      }
    };

    const removeEmptyObjects = (
      schema,
      _jsonPtr,
      _rootSchema,
      _parentJsonPtr,
      _parentKeyword,
      parentSchema,
      keyIndex
    ) => {
      if (
        schema.type === "object" &&
        !Object.keys(schema.properties).length &&
        parentSchema &&
        parentSchema.properties &&
        parentSchema.properties[keyIndex]
      ) {
        delete parentSchema.properties[keyIndex];
      }
    };

    const denyAdditionalProperties = (schema) => {
      if (schema.type === "object") {
        schema.additionalProperties = false;
      }
    };

    const makeRequired = (schema) => {
      if (schema.type === "object") {
        schema.required = Object.keys(schema.properties);
      }
    };

    const collectProperties = (
      _schema,
      jsonPtr,
      _rootSchema,
      _parentJsonPtr,
      parentKeyword
    ) => {
      if (
        jsonPtr &&
        parentKeyword === "properties" &&
        !allProperties.has(jsonPtr)
      ) {
        allProperties.add(jsonPtr);
      }
    };

    const countDepth = (_schema, jsonPtr) => {
      maxDepth = Math.max(jsonPtr.split("/properties/").length, maxDepth);
      if (jsonPtr.split("/properties/").length > 6) {
        console.log("Max depth exceeded:", jsonPtr);
      }
    };

    schemaTraverse(pageSchema, collectSchemas);
    const clonedSchema = structuredClone(pageSchema);

    delete clonedSchema.properties.header;
    delete clonedSchema.properties.footer;
    delete clonedSchema.properties.section.items.properties.content;

    [
      filterComponents,
      deleteConsts,
      removeImageFormatProperties,
      removeIconProperties,
      removeUnsupportedProperties,
      removeUnsupportedKeywords,
      removeEmptyObjects,
      denyAdditionalProperties,
      makeRequired,
      collectProperties,
      countDepth,
    ].forEach((fn) => {
      schemaTraverse(clonedSchema, fn);
    });

    if (allProperties.size > 100) {
      console.log(
        "Need to reduce properties (<100 allowed), got:",
        allProperties.size,
        allProperties
      );
    }

    return {
      name: "page_response",
      strict: true,
      schema: clonedSchema,
    };
  }, []);

  const [system] = useState(systemPrompt);
  const [user] = useState(userPrompt);

  const systemTextareaRef = useRef(null);
  const userTextareaRef = useRef(null);

  const handleGenerate = async () => {
    fetch("https://pzdzoelitkqizxopmwfg.supabase.co/functions/v1/content", {
      method: "POST",
      body: JSON.stringify({
        system: systemTextareaRef.current.value,
        prompt: userTextareaRef.current.value,
        schema,
      }),
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6ZHpvZWxpdGtxaXp4b3Btd2ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0ODAzMzQsImV4cCI6MTk5NDA1NjMzNH0.FYWwK6ByCPr7clUJ66b_8njSQ1EOQQLrEujQnnIVeUo",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6ZHpvZWxpdGtxaXp4b3Btd2ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0ODAzMzQsImV4cCI6MTk5NDA1NjMzNH0.FYWwK6ByCPr7clUJ66b_8njSQ1EOQQLrEujQnnIVeUo",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        response.json().then((json) => {
          const pageProps = processResponse(JSON.parse(json.content));
          setGeneratedContent(pageProps);

          const storyblokProps = processPage(structuredClone(pageProps));
          setStoryblokContent(storyblokProps);
        });
      })
      .catch((error) => console.error(error));

    // const pageProps = processResponse(JSON.parse(demoResponse3));
    // setGeneratedContent(pageProps);

    // const storyblokProps = processPage(structuredClone(pageProps));
    // setStoryblokContent(storyblokProps);
  };

  const submitStory = async () => {
    fetch("https://deploy-preview-8--ruhmesmeile.netlify.app/api/import", {
      method: "POST",
      body: JSON.stringify({
        name: "Import",
        is_folder: false,
        content: storyblokContent,
        published: true,
        real_path: "/import",
        unpublished_changes: false,
        slug: "import",
        full_slug: "import",
        position: 0,
      }),
    })
      .then((response) => {
        response.json().then((json) => {
          console.log("STORYBLOK RESPONSE", json);
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <main>
      <Section
        width="full"
        spaceAfter="small"
        spaceBefore="none"
        content={{ mode: "list" }}
      >
        <TextArea ref={systemTextareaRef} rows={10} value={system} />
        <TextArea ref={userTextareaRef} rows={10} value={user} />
        <Button label="Generate Content" onClick={handleGenerate} />
        <Button label="Submit Story" onClick={submitStory} />
      </Section>
      {generatedContent && <Page {...generatedContent} />}
      {generatedContent && (
        <Section width="full" spaceAfter="small" spaceBefore="none">
          <Html
            style={{ background: "white" }}
            html={`<pre><code>${JSON.stringify(
              generatedContent,
              null,
              2
            )}</code></pre>`}
          />
        </Section>
      )}
      {storyblokContent && (
        <Section width="full" spaceAfter="small" spaceBefore="none">
          <Html
            style={{ background: "white" }}
            html={`<pre><code>${JSON.stringify(
              storyblokContent,
              null,
              2
            )}</code></pre>`}
          />
        </Section>
      )}
    </main>
  );
};

export default {
  title: "Pages/Archetypes",
  render: PrompterFrame,
  parameters: {
    layout: "fullscreen",
  },
};

export const Prompter = {};

// TODO:
//
// - add hints for removed fields to description, if applicable (e.g. `format: markdown` -> "this typically can include markdown formatting", `default` -> "..., typically set to 'value'")
// - collect used / removed fields, to clean up stories from API to use for additional context
// - merge result back to defaults of component
