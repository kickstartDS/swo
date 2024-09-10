import traverse from "json-schema-traverse";

import { Section } from "../components/section/SectionComponent";
import { Html } from "../components/html/HtmlComponent";

import pageSchema from "../components/cms/page.schema.dereffed.json";
import { useMemo, useState } from "react";
import { Button } from "../components/button/ButtonComponent";
import { Faq } from "../components/faq/FaqComponent";
import { Questions } from "../components/faq/FaqProps";

const systemPrompt =
  "You are a Design System marketing specialist. You excel in creating engaging and informative content for your audience. You are using a page schema to generate content for your website.";

const userPrompt = "Guide: How to build a Design System";

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
  // "video-curtain",
];

const Page = () => {
  const [generatedContent, setGeneratedContent] =
    useState<Record<string, any>>(null);
  const schema = useMemo(() => {
    const allProperties: Set<string> = new Set();
    let maxDepth = 0;

    const filterComponents = (
      schema,
      _jsonPtr,
      _rootSchema,
      _parentJsonPtr,
      _parentKeyword,
      parentSchema,
      keyIndex
    ) => {
      if (
        schema.$id &&
        schema.properties &&
        schema.properties.type &&
        schema.properties.type.const &&
        parentSchema &&
        parentSchema.anyOf
      ) {
        if (!components.includes(schema.properties.type.const)) {
          parentSchema.anyOf.splice(keyIndex, 1);
        }
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
      traverse(clonedSchema, fn);
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

  const handleGenerate = async () => {
    console.log("Generate content");

    fetch("https://deploy-preview-8--ruhmesmeile.netlify.app/api/content", {
      method: "POST",
      body: JSON.stringify({
        system: systemPrompt,
        prompt: userPrompt,
        schema,
      }),
    })
      .then((response) => {
        response.json().then((json) => {
          setGeneratedContent(JSON.parse(json.content));
        });
      })
      .catch((error) => console.error(error));
  };

  const questions: Questions = [
    { question: "System Prompt", answer: systemPrompt },
    { question: "User Prompt", answer: userPrompt },
    { question: "Input Model", answer: JSON.stringify(schema, null, 2) },
  ];

  return (
    <main>
      <Section
        width="full"
        spaceAfter="small"
        spaceBefore="none"
        content={{ mode: "list" }}
      >
        <Button label="Generate Content" onClick={handleGenerate} />
        <Faq questions={questions} />
      </Section>
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
    </main>
  );
};

export default {
  title: "Pages/Archetypes",
  render: Page,
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
