export default function Card({ children }) {
  return (
    <div className="rounded-lg border border-gray-300 bg-white px-5 py-6 shadow-lg">
      {children}
    </div>
  );
}
