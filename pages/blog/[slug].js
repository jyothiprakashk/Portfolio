import { useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import styles from "../../styles/Blog.module.css";
export default function PostPage({ frontmatter, content, slug }) {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  if (typeof window !== "undefined") {
    window.onscroll = function () {
      scrollFunction();
    };
  }

  useEffect(() => {
    scrollFunction();
  });

  function scrollFunction() {
    let button = document.getElementById("data");
    if (document.body.scrollTop > 350 || (document.documentElement.scrollTop > 350 && button !== null)) {
      button.style.display = "block";
    } else if (button) {
      button.style.display = "none";
    }
  }
  return (
    <div className={styles.BlogWrapper}>
      <img src={frontmatter.cover_image} alt='blog' />
      <div className={styles.BlogTitle}>{frontmatter.title}</div>
      <div className={styles.BlogDate}>
        {frontmatter.date}
        <span>{frontmatter.time}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} className={styles.blogContent}></div>
      <div onClick={scrollToTop} className={styles.Maindata} id='data'>
        &#8593;
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
