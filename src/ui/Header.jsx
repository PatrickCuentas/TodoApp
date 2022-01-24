import classnames from "classnames";

export const Header = ({ theme }) => {
  const className = classnames(
    {
      light: theme === "light",
      dark: theme === "dark",
    },
    "absolute","z-[-1]"
  );

  return <header className={className}></header>;
};
