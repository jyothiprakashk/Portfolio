import styles from "../../styles/Blog.module.css";
export const Scroll = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    let button = document.getElementsByClassName("data");
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      button[0].style.display = "block";
    } else {
      button[0].style.display = "none";
    }
  }
  return <div onClick={scrollToTop}>Click</div>;
};
