import Alert from "../../../components/ui/alert/Alert";
import CardHeader from "../../../components/ui/card/CardHeader";

export default function PatientAlert({ patientData, getSeverityColor }) {
  return (
    <Alert variant="destructive" styling={`p-4 border-2 flex w-full`}>
      {/* icon is to be here */}
      <div className="h-5 w-5 text-red-600" />

      <div className="w-full text-red-800">
        <CardHeader className="flex items-center justify-between">
          <span className="text-lg font-semibold">⚠️ CRITICAL ALLERGIES</span>
          <p className="bg-red-600 text-white">
            {patientData.allergies.length} Active Alert
            {patientData.allergies.length > 1 ? "s" : ""}
          </p>
        </CardHeader>

        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
          {patientData.allergies.map((allergy, index) => (
            <div
              key={index}
              className="rounded-lg border border-red-200 bg-white p-3"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-bold text-red-900">
                  {allergy.allergen}
                </span>
                <h1
                  className={getSeverityColor(allergy.severity)}
                  variant="outline"
                >
                  {allergy.severity}
                </h1>
              </div>
              <p className="text-sm text-red-700">
                Reaction: {allergy.reaction}
              </p>
              <p className="mt-1 text-xs text-red-600">
                Reported: {allergy.dateReported}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Alert>
  );
}
