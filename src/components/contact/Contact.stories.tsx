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

export const Person: Story = {
  parameters: {
    viewport: {
      width: 770,
      height: 200,
    },
  },
  args: pack({
    subtitle: "CEO at Company",
    title: "Jane Smith",
    image: {
      src: "img/people/author-emily.png",
      width: 300,
    },
    links: [
      {
        icon: "twitter",
        href: "#",
        label: "@jane_smith",
      },
      {
        href: "mailto:mail@example.com",
        icon: "email",
        label: "jane.smith@example.com",
        newTab: false,
      },
    ],
  }),
};
