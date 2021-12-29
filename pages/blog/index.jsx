import Post from "../../components/Post";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import styles from "../../styles/Blog.module.css";

const Blog = ({ posts }) => {
  return (
    <div className={styles.postWrapper}>
      <h1>Blog</h1>

      <div className={styles.Container}>
        {posts?.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);
    return { slug, frontmatter };
  });
  return {
    props: {
      posts,
    },
  };
}
