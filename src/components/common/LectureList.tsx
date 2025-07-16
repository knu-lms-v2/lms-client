import styles from "./LectureList.module.css";

type LectureListProps = {
  className?: string;
};

const LectureList = ({ className }: LectureListProps) => {
  return (
    <div className={`${styles.lectureListContainer} ${className || ""}`}>
      LectureList
    </div>
  );
};

export default LectureList;
