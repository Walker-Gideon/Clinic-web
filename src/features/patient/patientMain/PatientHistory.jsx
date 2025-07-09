import { LuFileText } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { LuStethoscope } from "react-icons/lu";

export default function PatientHistory({ patientData, getStatusColor }) {
  return (
    <div>
      {/* CardHeader */}
      <header>
        {/* CardTitle */}
        <h1 className="flex items-center gap-2">
          <LuFileText className="h-5 w-5 text-gray-600" />
          Visit History
        </h1>

        {/* CardDescription */}
        <p>Your recent medical appointments and consultations</p>
      </header>

      {/* CardContent */}
      <div>
        <div className="overflow-x-auto">
          <table>
            <th>
              <tr>
                <thead className="w-[120px]">Date</thead>
                <thead className="w-[100px]">Time</thead>
                <thead>Doctor</thead>
                <thead>Specialty</thead>
                <thead>Diagnosis</thead>
                <thead className="w-[100px]">Status</thead>
                <thead className="w-[50px]">
                  <LuEye className="h-4 w-4" />
                </thead>
              </tr>
            </th>

            <tbody>
              {patientData.visits.map((visit) => (
                <tr key={visit.id} className="hover:bg-gray-50">
                  <td className="font-medium">{visit.date}</td>
                  <td className="text-gray-600">{visit.time}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <LuStethoscope className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">{visit.doctor}</span>
                    </div>
                  </td>
                  <td>
                    <h1 className="text-xs">{visit.specialty}</h1>
                  </td>
                  <td>
                    <div>
                      <p className="font-medium">{visit.diagnosis}</p>
                      <p className="mt-1 text-sm text-gray-500">
                        {visit.notes}
                      </p>
                    </div>
                  </td>
                  <td>
                    <h2 className={getStatusColor(visit.status)}>
                      {visit.status}
                    </h2>
                  </td>
                  <td>
                    <button className="rounded p-1 text-blue-600 hover:text-blue-800">
                      <LuEye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
