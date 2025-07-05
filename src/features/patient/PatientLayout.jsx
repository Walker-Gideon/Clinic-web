import PatientFooter from "./PatientFooter";
import PatientHeader from "./PatientHeader";
import PatientMain from "./PatientMain";
import PatientAlert from "./patientMain/PatientAlert";
import PatientHistory from "./patientMain/PatientHistory";
import PatientSummary from "./patientMain/PatientSummary";

// Mock patient data
const patientData = {
  id: "P001234",
  name: "Sarah Johnson",
  dateOfBirth: "1985-03-15",
  age: 39,
  gender: "Female",
  phone: "(555) 123-4567",
  email: "sarah.johnson@email.com",
  address: "123 Main Street, Springfield, IL 62701",
  emergencyContact: {
    name: "Michael Johnson",
    relationship: "Spouse",
    phone: "(555) 987-6543",
  },
  mrn: "MRN-789456123",
  bloodType: "A+",
  allergies: [
    {
      allergen: "Penicillin",
      severity: "Severe",
      reaction: "Anaphylaxis",
      dateReported: "2020-01-15",
    },
    {
      allergen: "Shellfish",
      severity: "Moderate",
      reaction: "Hives, Swelling",
      dateReported: "2018-06-22",
    },
    {
      allergen: "Latex",
      severity: "Mild",
      reaction: "Contact Dermatitis",
      dateReported: "2019-11-08",
    },
  ],
  vitals: {
    lastUpdated: "2024-01-15",
    bloodPressure: "118/76",
    heartRate: "72",
    temperature: "98.6°F",
    weight: "145 lbs",
    height: "5'6\"",
    bmi: "23.4",
  },
  visits: [
    {
      id: "V001",
      date: "2024-01-15",
      time: "10:30 AM",
      doctor: "Dr. Emily Chen",
      specialty: "Family Medicine",
      diagnosis: "Annual Physical Exam",
      status: "Completed",
      notes: "Routine checkup, all vitals normal",
    },
    {
      id: "V002",
      date: "2023-11-22",
      time: "2:15 PM",
      doctor: "Dr. Michael Rodriguez",
      specialty: "Cardiology",
      diagnosis: "Hypertension Follow-up",
      status: "Completed",
      notes: "Blood pressure well controlled",
    },
    {
      id: "V003",
      date: "2023-09-08",
      time: "9:00 AM",
      doctor: "Dr. Sarah Williams",
      specialty: "Dermatology",
      diagnosis: "Skin Rash Evaluation",
      status: "Completed",
      notes: "Allergic reaction to new detergent",
    },
    {
      id: "V004",
      date: "2023-06-12",
      time: "11:45 AM",
      doctor: "Dr. Emily Chen",
      specialty: "Family Medicine",
      diagnosis: "Upper Respiratory Infection",
      status: "Completed",
      notes: "Prescribed antibiotics, full recovery",
    },
    {
      id: "V005",
      date: "2023-03-20",
      time: "3:30 PM",
      doctor: "Dr. James Park",
      specialty: "Orthopedics",
      diagnosis: "Knee Pain Assessment",
      status: "Completed",
      notes: "Minor strain, physical therapy recommended",
    },
  ],
};

const getSeverityColor = (severity) => {
  switch (severity.toLowerCase()) {
    case "severe":
      return "bg-red-100 text-red-800 border-red-200";
    case "moderate":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "mild":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "completed":
      return "bg-green-100 text-green-800";
    case "scheduled":
      return "bg-blue-100 text-blue-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function PatientLayout() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <PatientHeader patientData={patientData} />

        {/* Critical Alerts - Allergies */}

        {/* Patient Summary Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Patient Information Card */}
          {/* Card */}
          <div className="lg:col-span-1">
            {/* CardHeader */}
            <header className="pb-4">
              {/* CardTitle */}
              <h1 className="flex items-center gap-2">
                {/*an icon <User className="h-5 w-5 text-blue-600" /> */}
                Patient Information
              </h1>
            </header>

            {/* CardContent */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="h-16 w-16">
                  {/* <AvatarImage src="/placeholder.svg?height=64&width=64" /> */}
                  {/* AvatarFallback */}
                  <p className="bg-blue-100 text-xl font-semibold text-blue-600">
                    {patientData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{patientData.name}</h3>
                  <p className="text-gray-600">MRN: {patientData.mrn}</p>
                  {/* Badge */}
                  <p variant="outline" className="mt-1">
                    {patientData.bloodType}
                  </p>
                </div>
              </div>

              {/* <Separator /> */}

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  {/* <Calendar className="h-4 w-4 text-gray-500" /> */}
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="font-medium">
                      {patientData.dateOfBirth} (Age {patientData.age})
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* <Phone className="h-4 w-4 text-gray-500" /> */}
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{patientData.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* <Mail className="h-4 w-4 text-gray-500" /> */}
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{patientData.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  {/* <MapPin className="mt-1 h-4 w-4 text-gray-500" /> */}
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium">{patientData.address}</p>
                  </div>
                </div>
              </div>

              {/* <Separator /> */}

              <div>
                <h4 className="mb-2 font-semibold">Emergency Contact</h4>
                <div className="rounded-lg bg-gray-50 p-3">
                  <p className="font-medium">
                    {patientData.emergencyContact.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {patientData.emergencyContact.relationship}
                  </p>
                  <p className="text-sm font-medium">
                    {patientData.emergencyContact.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vital Signs Card */}
          {/* Card */}
          <div className="lg:col-span-2">
            {/* CardHeader */}
            <header>
              {/* CardTitle */}
              <h1 className="flex items-center gap-2">
                {/* <Activity className="h-5 w-5 text-green-600" /> */}
                Latest Vital Signs
              </h1>

              {/* CardDescription */}
              <p>Last updated: {patientData.vitals.lastUpdated}</p>
            </header>

            {/* CardContent */}
            <div>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-red-50 p-4 text-center">
                  {/* <Heart className="mx-auto mb-2 h-8 w-8 text-red-600" /> */}
                  <p className="text-sm text-gray-600">Blood Pressure</p>
                  <p className="text-2xl font-bold text-red-600">
                    {patientData.vitals.bloodPressure}
                  </p>
                  <p className="text-xs text-gray-500">mmHg</p>
                </div>

                <div className="rounded-lg bg-blue-50 p-4 text-center">
                  {/* <Activity className="mx-auto mb-2 h-8 w-8 text-blue-600" /> */}
                  <p className="text-sm text-gray-600">Heart Rate</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {patientData.vitals.heartRate}
                  </p>
                  <p className="text-xs text-gray-500">bpm</p>
                </div>

                <div className="rounded-lg bg-orange-50 p-4 text-center">
                  {/* <Thermometer className="mx-auto mb-2 h-8 w-8 text-orange-600" /> */}
                  <p className="text-sm text-gray-600">Temperature</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {patientData.vitals.temperature}
                  </p>
                </div>

                <div className="rounded-lg bg-purple-50 p-4 text-center">
                  {/* <Weight className="mx-auto mb-2 h-8 w-8 text-purple-600" /> */}
                  <p className="text-sm text-gray-600">Weight</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {patientData.vitals.weight}
                  </p>
                </div>

                <div className="rounded-lg bg-green-50 p-4 text-center">
                  {/* <Ruler className="mx-auto mb-2 h-8 w-8 text-green-600" /> */}
                  <p className="text-sm text-gray-600">Height</p>
                  <p className="text-2xl font-bold text-green-600">
                    {patientData.vitals.height}
                  </p>
                </div>

                <div className="rounded-lg bg-indigo-50 p-4 text-center">
                  {/* <Activity className="mx-auto mb-2 h-8 w-8 text-indigo-600" /> */}
                  <p className="text-sm text-gray-600">BMI</p>
                  <p className="text-2xl font-bold text-indigo-600">
                    {patientData.vitals.bmi}
                  </p>
                  <p className="text-xs text-gray-500">Normal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visit History */}
        {/* Card */}
        <div>
          {/* CardHeader */}
          <header>
            {/* CardTitle */}
            <h1 className="flex items-center gap-2">
              {/* <FileText className="h-5 w-5 text-gray-600" /> */}
              Visit History
            </h1>

            {/* CardDescription */}
            <p>Your recent medical appointments and consultations</p>
          </header>

          {/* CardContent */}
          <div>
            <div className="overflow-x-auto">
              {/* <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[120px]">Date</TableHead>
                    <TableHead className="w-[100px]">Time</TableHead>
                    <TableHead>Doctor</TableHead>
                    <TableHead>Specialty</TableHead>
                    <TableHead>Diagnosis</TableHead>
                    <TableHead className="w-[100px]">Status</TableHead>
                    <TableHead className="w-[50px]">
                      <Eye className="h-4 w-4" />
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {patientData.visits.map((visit) => (
                    <TableRow key={visit.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">
                        {visit.date}
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {visit.time}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Stethoscope className="h-4 w-4 text-blue-600" />
                          <span className="font-medium">{visit.doctor}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {visit.specialty}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{visit.diagnosis}</p>
                          <p className="mt-1 text-sm text-gray-500">
                            {visit.notes}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={getStatusColor(visit.status)}
                          variant="secondary"
                        >
                          {visit.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <button className="rounded p-1 text-blue-600 hover:text-blue-800">
                          <Eye className="h-4 w-4" />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table> */}
            </div>
          </div>
        </div>

        <PatientMain>
          {patientData.allergies.length > 0 && (
            <PatientAlert
              patientData={patientData}
              getSeverityColor={getSeverityColor}
            />
          )}
          <PatientSummary />
          <PatientHistory />
        </PatientMain>

        <PatientFooter />
      </div>
    </div>
  );
}
