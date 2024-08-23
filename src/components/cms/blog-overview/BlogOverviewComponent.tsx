import { Section } from "../../section/SectionComponent";
import { BlogTeaser } from "../../blog-teaser/BlogTeaserComponent";
import { BlogOverviewProps } from "../BlogOverviewProps";
import { FC, PropsWithChildren } from "react";
import { Cta } from "../../cta/CtaComponent";

export const BlogOverview: FC<PropsWithChildren<BlogOverviewProps>> = ({
  latestTitle,
  latest,
  cta,
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
      <hr />
      {more && more.length > 0 && (
        <Section headline={{ text: moreTitle }}>
          {more.map((article) => (
            <BlogTeaser {...article} key={article.headline} />
          ))}
        </Section>
      )}
      {cta && (
        <Section content={{ mode: "list" }}>
          <Cta {...cta} />
        </Section>
      )}
    </>
  );
};
BlogOverview.displayName = "BlogOverview";
