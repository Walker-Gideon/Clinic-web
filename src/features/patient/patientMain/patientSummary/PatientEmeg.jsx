export default function PatientEmeg({ patientData }) {
  return (
    <div className="pt-2">
      <h4 className="mb-2 font-semibold">Emergency Contact</h4>
      <div className="rounded-lg bg-gray-50 p-3">
        <p className="font-medium">{patientData.emergencyContact.name}</p>
        <p className="text-sm text-gray-600">
          {patientData.emergencyContact.relationship}
        </p>
        <p className="text-sm font-medium">
          {patientData.emergencyContact.phone}
        </p>
      </div>
    </div>
  );
}
