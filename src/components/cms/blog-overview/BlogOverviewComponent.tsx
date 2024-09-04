import { Section } from "../../section/SectionComponent";
import { BlogTeaser } from "../../blog-teaser/BlogTeaserComponent";
import { BlogOverviewProps } from "../BlogOverviewProps";
import { FC, PropsWithChildren } from "react";
import { Contact } from "../../contact/ContactComponent";
import { Divider } from "@kickstartds/base/lib/divider";

export const BlogOverview: FC<PropsWithChildren<BlogOverviewProps>> = ({
  latestTitle,
  latest,
  contact,
  listTitle,
  list,
  children,
  moreTitle,
  more,
}) => {
  return (
    <>
      {children}
      {latest && (
        <Section width="wide" headline={{ text: latestTitle }}>
          <BlogTeaser {...latest} />
        </Section>
      )}
      {list && list.length > 0 && (
        <Section headline={{ text: listTitle }}>
          {list.map((article) => (
            <BlogTeaser {...article} key={article.headline} />
          ))}
        </Section>
      )}
      <Section spaceAfter="none" spaceBefore="none">
        <Divider />
      </Section>
      {more && more.length > 0 && (
        <Section headline={{ text: moreTitle }}>
          {more.map((article) => (
            <BlogTeaser {...article} key={article.headline} />
          ))}
        </Section>
      )}

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
};
BlogOverview.displayName = "BlogOverview";
