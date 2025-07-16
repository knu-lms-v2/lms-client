import styles from "./Calender.module.css";

type CalenderProps = {
  className?: string;
};

const Calender = ({ className }: CalenderProps) => {
  return (
    <div className={`${styles.calenderContainer} ${className || ""}`}>
      Calender
    </div>
  );
};

export default Calender;
