import Card from "../card/Card";

export default function Alert({ children, variant, styling }) {
  if (variant === "destructive")
    return (
      <Card className={`border-red-200 bg-red-50 ${styling}`}>{children}</Card>
    );

  //   default
  return <div>{children}</div>;
}
