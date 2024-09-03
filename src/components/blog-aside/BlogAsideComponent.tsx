import classnames from "classnames";
import { forwardRef, createContext, useContext } from "react";
import { PostMeta } from "@kickstartds/blog/lib/post-meta";
import { PostShareBar } from "@kickstartds/blog/lib/post-share-bar";
import { Container } from "@kickstartds/core/lib/container";
import { BlogAsideProps } from "./BlogAsideProps";
import "./blog-aside.scss";
import { BlogAuthor } from "../blog-author/BlogAuthorComponent";
import { Headline } from "../headline/HeadlineComponent";

export const BlogAsideContextDefault = forwardRef<
  HTMLDivElement,
  BlogAsideProps
>(({ author, socialSharing, readingTime, date, className }) => {
  const socialLinks = socialSharing?.map((link) => {
    return {
      icon: link.icon,
      href: link.href,
      title: link.title,
    };
  });

  const metaItems = [
    {
      icon: "date",
      text: date,
    },
  ];

  if (readingTime)
    metaItems.push({
      icon: "time",
      text: readingTime,
    });

  return (
    <Container name="blog-aside">
      <div className={classnames(className, "dsa-blog-aside")}>
        <BlogAuthor {...author} />
        {metaItems && (
          <>
            <PostMeta className="dsa-blog-aside__meta" items={metaItems} />
          </>
        )}
        {socialLinks && (
          <div>
            <Headline
              text="Share this Article"
              level="p"
              style="p"
              spaceAfter="minimum"
            />
            <PostShareBar
              className="dsa-blog-aside__share-bar"
              links={socialLinks}
            />
          </div>
        )}
      </div>
    </Container>
  );
});

export const BlogAsideContext = createContext(BlogAsideContextDefault);
export const BlogAside = forwardRef<HTMLDivElement, BlogAsideProps>(
  (props, ref) => {
    const Component = useContext(BlogAsideContext);
    return <Component {...props} ref={ref} />;
  }
);
BlogAside.displayName = "BlogAside";
