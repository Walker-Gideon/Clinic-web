import { LuUser } from "react-icons/lu";
import { LuCircleUser } from "react-icons/lu";
import Card from "../../../components/ui/card/Card";
import CardHeader from "../../../components/ui/card/CardHeader";
import CardTitle from "../../../components/ui/card/CardTitle";
import CardContent from "../../../components/ui/card/CardContent";

export default function PatientSummary({ patientData }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <Card className="border-2 border-gray-300 bg-white p-6 shadow-lg lg:col-span-1">
        <CardHeader className="pb-4">
          <CardTitle className="middle:text-3xl flex items-center gap-2 text-2xl">
            <LuUser className="h-5 w-5 text-blue-600" />
            Patient Information
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
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
              <p className="font-medium">{patientData.emergencyContact.name}</p>
              <p className="text-sm text-gray-600">
                {patientData.emergencyContact.relationship}
              </p>
              <p className="text-sm font-medium">
                {patientData.emergencyContact.phone}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

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
  );
}
