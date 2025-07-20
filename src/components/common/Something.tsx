import styles from "./Something.module.css";

type SomethingProps = {
  className?: string;
};

const Something = ({ className }: SomethingProps) => {
  return (
    <div className={`${styles.SomethingContainer} ${className || ""}`}>
      Something
    </div>
  );
};

export default Something;
