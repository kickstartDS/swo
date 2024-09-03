import { forwardRef, createContext, useContext } from "react";
import { BlogAuthorProps } from "./BlogAuthorProps";
import { Contact } from "../contact/ContactComponent";

export const BlogAuthorContextDefault = forwardRef<
  HTMLDivElement,
  BlogAuthorProps
>(({ name, byline, image, links }) => {
  return (
    <Contact
      className="dsa-blog-aside__author"
      title={name}
      subtitle={byline}
      image={image}
      links={links}
    />
  );
});

export const BlogAuthorContext = createContext(BlogAuthorContextDefault);
export const BlogAuthor = forwardRef<HTMLDivElement, BlogAuthorProps>(
  (props, ref) => {
    const Component = useContext(BlogAuthorContext);
    return <Component {...props} ref={ref} />;
  }
);
BlogAuthor.displayName = "BlogAuthor";
