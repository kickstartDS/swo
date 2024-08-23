import { Section } from "../../section/SectionComponent";
import { BlogTeaser } from "../../blog-teaser/BlogTeaserComponent";
import { BlogOverviewProps } from "../BlogOverviewProps";
import { FC, PropsWithChildren } from "react";
import { Cta } from "../../cta/CtaComponent";

export const BlogOverview: FC<PropsWithChildren<BlogOverviewProps>> = ({
  latest,
  cta,
  list,
  children,
  more,
}) => {
  return (
    <>
      {children}
      {latest && (
        <Section width="wide" headline={{ text: "Latest" }}>
          <BlogTeaser {...latest} />
        </Section>
      )}
      {list && list.length > 0 && (
        <Section headline={{ text: "Articles" }}>
          {list.map((article) => (
            <BlogTeaser {...article} key={article.headline} />
          ))}
        </Section>
      )}
      <hr />
      {more && more.length > 0 && (
        <Section headline={{ text: "Featured" }}>
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
