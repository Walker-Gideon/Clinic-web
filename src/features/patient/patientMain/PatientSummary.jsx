import { LuUser } from "react-icons/lu";
import { LuCircleUser } from "react-icons/lu";
import Card from "../../../components/ui/card/Card";
import CardHeader from "../../../components/ui/card/CardHeader";
import CardTitle from "../../../components/ui/card/CardTitle";
import CardContent from "../../../components/ui/card/CardContent";
import Separator from "../../../components/ui/Separator";
import SummaryHeader from "./patientSummary/SummaryHeader";
import PatientPersonalInfo from "./patientSummary/PatientPersonalInfo";
import PatientEmeg from "./patientSummary/PatientEmeg";

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
          <SummaryHeader patientData={patientData} />
          <Separator />
          <PatientPersonalInfo patientData={patientData} />
          <Separator />
          <PatientEmeg patientData={patientData} />
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
