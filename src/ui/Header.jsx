import classnames from "classnames";

export const Header = ({ theme }) => {
  const className = classnames(
    {
      light: theme === "LIGHT",
      dark: theme === "DARK",
    },
    "absolute",
  );

  return <header className={className}></header>;
};
