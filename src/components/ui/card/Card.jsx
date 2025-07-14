export default function Card({ children, className }) {
  return (
    // bg-white px-5 py-6 border-gray-300 shadow-lg
    <div className={`rounded-lg border ${className}`}>{children}</div>
  );
}
