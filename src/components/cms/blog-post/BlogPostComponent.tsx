import { Split } from "../../split/SplitComponent";
import { BlogHead } from "../../blog-head/BlogHeadComponent";
import { Section } from "../../section/SectionComponent";
import { BlogAside } from "../../blog-aside/BlogAsideComponent";
import { Text } from "../../text/TextComponent";
import { Contact } from "../../contact/ContactComponent";
import { BlogPostProps } from "../BlogPostProps";
import { FC, PropsWithChildren } from "react";
import { Divider } from "@kickstartds/base/lib/divider";

export const BlogPost: FC<PropsWithChildren<BlogPostProps>> = ({
  head,
  content,
  aside,
  contact,
  children,
}) => (
  <>
    <Section width="wide">
      <Split mainSectionWidth="narrow" layout="sidebarRight">
        <div>
          {head && <BlogHead {...head} />}
          {content ? <Text text={content} /> : children}
        </div>
        <BlogAside {...aside} />
      </Split>
    </Section>
    {contact && (
      <>
        <Section spaceAfter="none" spaceBefore="none">
          <Divider />
        </Section>
        <Section content={{ mode: "list" }}>
          <Contact {...contact} />
        </Section>
      </>
    )}
  </>
);
BlogPost.displayName = "BlogPost";
