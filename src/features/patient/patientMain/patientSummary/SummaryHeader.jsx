export default function SummaryHeader({ patientData }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-400">
        {/* <AvatarImage src="/placeholder.svg?height=64&width=64" /> */}
        {/* bg-blue-100 */}
        <p className="text-xl font-semibold text-blue-600">
          {patientData.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold">{patientData.name}</h3>
        <p className="text-sm text-gray-600">MRN: {patientData.mrn}</p>
        <p
          variant="outline"
          className="mt-1 w-9 rounded-2xl border border-gray-200 px-2 text-sm font-semibold"
        >
          {patientData.bloodType}
        </p>
      </div>
    </div>
  );
}
