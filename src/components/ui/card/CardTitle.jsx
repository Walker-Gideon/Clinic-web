export default function CardTitle({ children, styling }) {
  return <h1 className={`font-bold text-gray-900 ${styling}`}>{children}</h1>;
}
