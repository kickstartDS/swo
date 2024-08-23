import { Meta, StoryObj } from "@storybook/react";
import { JSONSchema7 } from "json-schema";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";

import { Contact } from "./ContactComponent";
import schema from "./contact.schema.dereffed.json";
import customProperties from "./contact-tokens.json";

const meta: Meta = {
  title: "Components/Contact",
  component: Contact,
  parameters: {
    jsonschema: { schema },
    cssprops: { customProperties },
  },
  ...getArgsShared(schema as JSONSchema7),
};

export default meta;

type Story = StoryObj<typeof Contact>;

export const Default: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 200,
    },
  },
  args: pack({
    image: {
      height: 300,
      lazy: true,
      noscript: true,
      src: "https://picsum.photos/seed/kdspicture/300/300",
      width: 300,
    },
    links: [
      {
        href: "tel:+4922868896620",
        icon: "phone",
        label: "0228 / 688 966 20",
        newTab: false,
      },
      {
        href: "mailto:mail@example.com",
        icon: "email",
        label: "mail@example.com",
        newTab: false,
      },
    ],
    subtitle: "Geschäftsführer",
    title: "Max Mütze",
  }),
};
