export default function CardDescription({ children, className }) {
  return (
    <p className={`medium:text-sm text-xs text-gray-600 ${className}`}>
      {children}
    </p>
  );
}
