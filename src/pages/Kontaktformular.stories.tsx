import { TextField } from "@kickstartds/form/lib/text-field";
import { Section } from "../components/section/SectionComponent";
import { TextArea } from "@kickstartds/form/lib/text-area";
import { Checkbox } from "@kickstartds/form/lib/checkbox";
import { Radio } from "@kickstartds/form/lib/radio";

const Page = () => (
  <>
    <Section
      headline={{
        text: "Kontaktformular",
      }}
      spaceAfter="small"
      width="narrow"
    >
      <TextField inputMode="text" label="Name" type="text" />
      <TextField inputMode="text" label="Betreff" type="text" />
    </Section>
    <Section
      content={{ mode: "list", gutter: "none" }}
      spaceBefore="small"
      spaceAfter="small"
      width="narrow"
    >
      <TextArea inputMode="text" label="Ihre Nachricht" />
      <TextArea inputMode="text" label="Ihre Nachricht" />
    </Section>

    <Section
      spaceBefore="small"
      spaceAfter="small"
      width="narrow"
      content={{ mode: "list", gutter: "none" }}
    >
      <Radio label="Option 1" />
      <Radio label="Option 2" />
      <Radio label="Option 3" />
    </Section>
    <Section
      spaceBefore="small"
      width="narrow"
      content={{ mode: "list", gutter: "none" }}
    >
      <Checkbox label="Ich stimme den Datenschutzbestimmungen zu." />
    </Section>
    <Section spaceBefore="small"></Section>
  </>
);

export default {
  title: "Formulare/Kontaktformular",
  render: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Kontaktformular = {};
