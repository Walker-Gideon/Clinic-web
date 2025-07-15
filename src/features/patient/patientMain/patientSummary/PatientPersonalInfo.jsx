export default function PatientPersonalInfo({ patientData }) {
  const className = {
    container: "flex items-center gap-3",
    headings: "text-xs text-gray-500",
    paragraph: "font-medium text-sm",
  };

  return (
    <div className="space-y-3 pt-2">
      <div className={className.container}>
        {/* <Calendar className="h-4 w-4 text-gray-500" /> */}
        <div>
          <p className={className.headings}>Date of Birth</p>
          <p className={className.paragraph}>
            {patientData.dateOfBirth} (Age {patientData.age})
          </p>
        </div>
      </div>

      <div className={className.container}>
        {/* <Phone className="h-4 w-4 text-gray-500" /> */}
        <div>
          <p className={className.headings}>Phone</p>
          <p className={className.paragraph}>{patientData.phone}</p>
        </div>
      </div>

      <div className={className.container}>
        {/* <Mail className="h-4 w-4 text-gray-500" /> */}
        <div>
          <p className={className.headings}>Email</p>
          <p className={className.paragraph}>{patientData.email}</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        {/* <MapPin className="mt-1 h-4 w-4 text-gray-500" /> */}
        <div>
          <p className={className.headings}>Address</p>
          <p className={className.paragraph}>{patientData.address}</p>
        </div>
      </div>
    </div>
  );
}
