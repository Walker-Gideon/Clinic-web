import Card from "../card/Card";

export default function Alert({ children, variant, className }) {
  if (variant === "destructive")
    return (
      <Card className={`border border-red-400 bg-red-300 p-2 ${className}`}>
        {children}
      </Card>
    );

  //   default
  return <div>{children}</div>;
}
