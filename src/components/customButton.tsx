import styles from "../button.module.css";
type ButtonProp = {
  label?: string;
  variant?: "primary" | "secondary";
  onclick?: (value: string | undefined) => void;
};

export const Button = ({ variant, label, onclick }: ButtonProp) => {
  const buttonVariant = variant ? variant : "primary";
  console.log(`class-with-${buttonVariant}`);
  return (
    <button
      className={`${styles[`${buttonVariant}`]}`}
      onClick={() => {
        onclick ? onclick(buttonVariant) : null;
      }}
    >
      {label}
    </button>
  );
};
