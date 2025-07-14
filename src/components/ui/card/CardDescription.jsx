export default function CardDescription({ children, className }) {
  return <p className={`medium:text-sm text-xs ${className}`}>{children}</p>;
}
