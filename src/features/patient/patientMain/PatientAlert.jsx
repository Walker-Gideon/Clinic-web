import Alert from "../../../components/ui/alert/Alert";
import Card from "../../../components/ui/card/Card";
import CardDescription from "../../../components/ui/card/CardDescription";
import CardHeader from "../../../components/ui/card/CardHeader";

export default function PatientAlert({ patientData, getSeverityColor }) {
  return (
    <Alert
      variant="destructive"
      className={`flex w-full border-2 border-red-200 bg-red-50 p-4`}
    >
      {/* icon is to be here */}
      <div className="h-5 w-5 text-red-600" />

      <div className="w-full text-red-800">
        <CardHeader className="flex items-center justify-between">
          <span className="text-lg font-semibold">⚠️ CRITICAL ALLERGIES</span>
          <CardDescription
            className={"bg-red-600 text-white"}
            variant="outline"
          >
            {patientData.allergies.length} Active Alert
            {patientData.allergies.length > 1 ? "s" : ""}
          </CardDescription>
        </CardHeader>

        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
          {patientData.allergies.map((allergy, index) => (
            <Card key={index} className="border-red-200 bg-white p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-bold text-red-900">
                  {allergy.allergen}
                </span>
                <CardDescription
                  className={getSeverityColor(allergy.severity)}
                  variant="outline"
                >
                  {allergy.severity}
                </CardDescription>
              </div>
              <p className="text-sm text-red-700">
                Reaction: {allergy.reaction}
              </p>
              <p className="mt-1 text-xs text-red-600">
                Reported: {allergy.dateReported}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Alert>
  );
}
