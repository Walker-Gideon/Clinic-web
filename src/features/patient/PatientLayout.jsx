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

        {/* Visit History */}
        {/* Card */}

        <PatientMain>
          {patientData.allergies.length > 0 && (
            <PatientAlert
              patientData={patientData}
              getSeverityColor={getSeverityColor}
            />
          )}
          <PatientSummary patientData={patientData} />
          <PatientHistory
            patientData={patientData}
            getStatusColor={getStatusColor}
          />
        </PatientMain>

        <PatientFooter />
      </div>
    </div>
  );
}
