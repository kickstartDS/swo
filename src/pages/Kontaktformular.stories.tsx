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
      spaceBefore="none"
      spaceAfter="none"
    >
      <TextField inputMode="text" label="Name" type="text" />
      <TextField inputMode="text" label="Betreff" type="text" />
    </Section>
    <Section spaceBefore="none" spaceAfter="none" content={{ mode: "list" }}>
      <TextArea inputMode="text" label="Ihre Nachricht" />
    </Section>
    <Section
      spaceBefore="small"
      spaceAfter="none"
      content={{ mode: "list", gutter: "none" }}
    >
      <Radio label="Option 1" />
      <Radio label="Option 2" />
      <Radio label="Option 3" />
    </Section>
    <Section spaceBefore="small">
      <Checkbox label="Ich stimme den Datenschutzbestimmungen zu." />
    </Section>
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
