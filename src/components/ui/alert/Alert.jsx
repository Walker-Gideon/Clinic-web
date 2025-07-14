import Card from "../card/Card";

export default function Alert({ children, variant, className }) {
  if (variant === "destructive")
    return <Card className={`border ${className}`}>{children}</Card>;

  //   default
  return <div>{children}</div>;
}
