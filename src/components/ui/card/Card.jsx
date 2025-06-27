export default function Card({ children, styling }) {
  return (
    // bg-white px-5 py-6 border-gray-300
    <div className={`rounded-lg border shadow-lg ${styling}`}>{children}</div>
  );
}
