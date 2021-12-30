import styles from "../../styles/Blog.module.css";
import Link from "next/link";
import moment from "moment";
export default function Post({ post }) {
  var startDate = moment(post.frontmatter.date, "DD.MM.YYYY");
  var endDate = moment("16.12.2021", "DD.MM.YYYY");

  var result = endDate.diff(startDate, "months");
  var result1 = endDate.diff(startDate, "years");

  return (
    <div className={styles.flex}>
      <div className={styles.blogContainer}>
        <Link href={`/blog/${post.slug}`} passHref>
          <div className={styles.main}>
            <img src={post.frontmatter.cover_image} alt='blog' className={styles.blogImage} layout='fill' />
            <div className={styles.dataContainer}>
              <div className={styles.title}>{post.frontmatter.title}</div>
              <div className={styles.date}>
                {result1 >= 1 ? `over ${result1}year ago` : `${result} ${result > 1 ? "Months" : "Month"} ago`}
              </div>
              <div>{post.frontmatter.description}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
