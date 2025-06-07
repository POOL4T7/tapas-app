import styles from './styles.module.css';
export const OurPolicy = (props: any) => {
  const langData = props.langData;
  const data = {
    leftTitle: langData.leftTitle,
    leftArticle: langData.leftArticle,
    leftArticle1: langData.leftArticle1,
    rightArticle: langData.rightArticle,
    rightArticle1: langData.rightArticle1,
    rightTitle: langData.rightTitle,
  };
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.left}>
            <h3 className={styles.header}>{data.leftTitle}</h3>
            <div className={styles.desc}>{data.leftArticle}</div>
            <div className={styles.desc1}>{data.leftArticle1}</div>
          </div>
          <div className={styles.right}>
            <h3 className={styles.header}>{data.rightTitle}</h3>
            <div className={styles.desc}>{data.rightArticle}</div>
            <div className={styles.desc1}>{data.rightArticle1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
