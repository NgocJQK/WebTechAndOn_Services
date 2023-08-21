import styles from "../styles/Blog.module.css";

export default function Blog(props) {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>{props.title?props.title:"Untitled"}</p>
        <p className={styles.body}>{props.body?props.body:"Empty"}</p>
        <div>
          <img
            className={styles.image}
            src={props.img?props.img:"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"}
            alt="Image failed to load"
          />
        </div>
        <button className={styles.deleteButton} onClick={props.handleDelete}>Delete</button>
      </div>
    </>
  );
}
