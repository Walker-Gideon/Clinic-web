export default function PatientFooter() {
  return (
    <div className="py-6 text-center">
      <div className="mb-2 flex items-center justify-center gap-2 text-gray-500">
        {/* <Shield className="h-4 w-4" /> */}
        <span className="text-sm">
          Your health information is protected by HIPAA
        </span>
      </div>
      <p className="text-xs text-gray-400">
        This portal provides read-only access to your medical records. For
        updates or corrections, please contact your healthcare provider.
      </p>
    </div>
  );
}
