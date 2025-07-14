export default function CardDescription({ children, className, variant }) {
  if (variant === "outline")
    return (
      <p className={`rounded-2xl px-2 py-1 text-sm ${className}`}>{children}</p>
    );

  return <p className={`medium:text-sm text-xs ${className}`}>{children}</p>;
}
