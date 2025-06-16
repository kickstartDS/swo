import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { ContentNavCard } from "./ContentNavCardComponent";
import schema from "./content-nav-card.schema.dereffed.json";
import customProperties from "./content-nav-card-tokens.json";

const meta: Meta<typeof ContentNavCard> = {
  title: "Components/Content Nav Card",
  component: ContentNavCard,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof ContentNavCard>;

export const SingleLink: Story = {
  parameters: {
    viewport: {
      width: 650,
      height: 653,
    },
  },
  args: pack({
    topic: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    label: "Lorem Ipsum",
    image: {
      src: "img/swo/waermepumpe-ohne-menschen_final.webp",
    },
    link: {
      label: "Go to page",
      target: "#",
    },
  }),
};

export const WithoutLabel: Story = {
  parameters: {
    viewport: {
      width: 650,
      height: 653,
    },
  },
  args: pack({
    topic: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: {
      src: "img/swo/waermepumpe-ohne-menschen_final.webp",
    },
    link: {
      label: "Go to page",
      target: "#",
    },
  }),
};

export const DuoLink: Story = {
  parameters: {
    viewport: {
      width: 650,
      height: 653,
    },
  },
  args: pack({
    topic: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    label: "Lorem Ipsum",
    image: {
      src: "img/swo/waermepumpe-ohne-menschen_final.webp",
    },
    link: {
      label: "Go to page",
      target: "#",
    },
    secondaryLink: {
      label: "Learn more",
      target: "#",
    },
  }),
};

export const CampaignGreen: Story = {
  parameters: {
    viewport: {
      width: 650,
      height: 653,
    },
  },
  args: pack({
    topic: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    label: "Lorem Ipsum",
    campaignGreen: true,
    image: {
      src: "img/swo/waermepumpe-ohne-menschen_final.webp",
    },
    link: {
      label: "Go to page",
      target: "#",
    },
  }),
};
