import { useEffect, useState } from "react";
import { LuShield } from "react-icons/lu";

export default function PatientHeader({ patientData }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-blue-600 p-2">
            <LuShield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Patient Portal</h1>
            <p className="text-gray-600">Welcome back, {patientData.name}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Last Login</p>
          <p className="font-medium">{currentTime.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
