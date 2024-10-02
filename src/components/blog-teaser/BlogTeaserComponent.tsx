import classnames from "classnames";
import { forwardRef, createContext, useContext, HTMLAttributes } from "react";
import { PostTeaserContextDefault } from "@kickstartds/blog/lib/post-teaser";
import { BlogTeaserProps } from "./BlogTeaserProps";
import "./blog-teaser.scss";
import { Container } from "@kickstartds/core/lib/container";

export { BlogTeaserProps };

export const BlogTeaserContextDefault = forwardRef<
  HTMLDivElement,
  BlogTeaserProps & HTMLAttributes<HTMLElement>
>(
  (
    {
      date,
      tags = [],
      headline,
      teaserText,
      image,
      link,
      readingTime,
      author,
      className,
      ...rest
    },
    ref
  ) => {
    const teaserMetaItems = [];

    if (date)
      teaserMetaItems.push({
        icon: "date",
        text:
          typeof date === "number" ? new Date(date).toLocaleDateString() : date,
      });

    if (readingTime)
      teaserMetaItems.push({
        icon: "time",
        text: readingTime,
      });

    return (
      <Container name="post-teaser">
        <PostTeaserContextDefault
          {...rest}
          className={classnames(className, "dsa-blog-teaser")}
          // @ts-expect-error
          image={{ src: image }}
          meta={{
            author: author
              ? {
                  image: author.image && { src: author.image },
                  name: author.name,
                }
              : undefined,
            items: teaserMetaItems,
          }}
          link={
            link
              ? {
                  // @ts-expect-error
                  target: link.url,
                }
              : undefined
          }
          title={headline}
          body={teaserText}
          categories={tags.map((tag) => {
            return { label: tag.entry };
          })}
          ref={ref}
        />
      </Container>
    );
  }
);

export const BlogTeaserContext = createContext(BlogTeaserContextDefault);
export const BlogTeaser = forwardRef<HTMLDivElement, BlogTeaserProps>(
  (props, ref) => {
    const Component = useContext(BlogTeaserContext);
    return <Component {...props} ref={ref} />;
  }
);
BlogTeaser.displayName = "BlogTeaser";
