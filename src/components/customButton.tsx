import styles from "../button.module.css";
type ButtonProp = {
  label?: string;
  variant?: "primary" | "secondary";
  onclick?: (value: string | undefined) => void;
} & React.ComponentProps<"button">;

export const Button = ({ variant, label, onclick, ...rest }: ButtonProp) => {
  const buttonVariant = variant || "primary";
  console.log(`class-with-${buttonVariant}`);
  return (
    <button
      className={`${styles[`${buttonVariant}`]}`}
      onClick={() => {
        onclick ? onclick(buttonVariant) : null;
      }}
      {...rest}
    >
      {label}
    </button>
  );
};
