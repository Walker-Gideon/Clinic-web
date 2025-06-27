export default function CardTitle({ children, className }) {
  return <h1 className={`font-bold text-gray-900 ${className}`}>{children}</h1>;
}
