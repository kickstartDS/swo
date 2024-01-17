import { Meta, StoryObj } from "@storybook/react";
import { pack, getArgsShared } from "@kickstartds/core/lib/storybook";
import { JSONSchema7 } from "json-schema";
import { Slider } from "./SliderComponent";
import schema from "./slider.schema.dereffed.json";
import { TeaserCard } from "../teaser-card/TeaserCardComponent";

const { args, argTypes } = getArgsShared(schema as JSONSchema7);
const meta: Meta = {
  title: "Layout/Slider",
  ...getArgsShared(schema as JSONSchema7),
  args,
  argTypes,
  component: Slider,
  parameters: {
    jsonschema: schema,
  },
  render: (args) => (
    <Slider {...args}>
      <TeaserCard
        imageRatio="unset"
        layout="row"
        // headline="Transformation Love Story"
        headline="This is a headline that spans over multiple lines, though making the element take up lots of vertical space"
        image="/img/showcases/comp_tfe01.jpg"
        target="#"
        text="See how we saved TechFusions a year's worth of development time"
      />
      <TeaserCard
        imageRatio="unset"
        layout="row"
        headline="Speed and Scale"
        image="/img/showcases/comp_audio01.jpg"
        target="#"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
      />
      <TeaserCard
        imageRatio="unset"
        layout="row"
        headline="Saving Time and Money"
        image="/img/showcases/comp_eco01.jpg"
        target="#"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
      />
    </Slider>
  ),
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const WithArrows: Story = {
  args: pack({
    gap: 15,
    arrows: true,
  }),
};

export const WithTeasedNeighbours: Story = {
  args: pack({
    gap: 15,
    teaseNeighbours: true,
    arrows: true,
    nav: true,
  }),
};

export const WithNav: Story = {
  args: pack({
    gap: 15,
    arrows: true,
    nav: true,
  }),
};

export const WithAutoplay: Story = {
  args: pack({
    gap: 15,
    nav: true,
    arrows: true,
    autoplay: true,
  }),
};
