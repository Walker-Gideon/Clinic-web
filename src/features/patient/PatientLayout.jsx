import { useEffect, useState } from "react";

export default function PatientLayout() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-blue-600 p-2">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Patient Portal
                </h1>
                <p className="text-gray-600">
                  Welcome back, {patientData.name}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Last Login</p>
              <p className="font-medium">{currentTime.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Critical Alerts - Allergies */}
        {patientData.allergies.length > 0 && (
          <Alert className="border-2 border-red-200 bg-red-50">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertDescription className="text-red-800">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">
                  ⚠️ CRITICAL ALLERGIES
                </span>
                <Badge className="bg-red-600 text-white">
                  {patientData.allergies.length} Active Alert
                  {patientData.allergies.length > 1 ? "s" : ""}
                </Badge>
              </div>
              <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
                {patientData.allergies.map((allergy, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-red-200 bg-white p-3"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-bold text-red-900">
                        {allergy.allergen}
                      </span>
                      <Badge
                        className={getSeverityColor(allergy.severity)}
                        variant="outline"
                      >
                        {allergy.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-red-700">
                      Reaction: {allergy.reaction}
                    </p>
                    <p className="mt-1 text-xs text-red-600">
                      Reported: {allergy.dateReported}
                    </p>
                  </div>
                ))}
              </div>
            </AlertDescription>
          </Alert>
        )}

        {/* Patient Summary Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Patient Information Card */}
          <Card className="lg:col-span-1">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Patient Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" />
                  <AvatarFallback className="bg-blue-100 text-xl font-semibold text-blue-600">
                    {patientData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">{patientData.name}</h3>
                  <p className="text-gray-600">MRN: {patientData.mrn}</p>
                  <Badge variant="outline" className="mt-1">
                    {patientData.bloodType}
                  </Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="font-medium">
                      {patientData.dateOfBirth} (Age {patientData.age})
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{patientData.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{patientData.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium">{patientData.address}</p>
                  </div>
                </div>
              </div>

              <Separator />

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
            </CardContent>
          </Card>

          {/* Vital Signs Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-green-600" />
                Latest Vital Signs
              </CardTitle>
              <CardDescription>
                Last updated: {patientData.vitals.lastUpdated}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-red-50 p-4 text-center">
                  <Heart className="mx-auto mb-2 h-8 w-8 text-red-600" />
                  <p className="text-sm text-gray-600">Blood Pressure</p>
                  <p className="text-2xl font-bold text-red-600">
                    {patientData.vitals.bloodPressure}
                  </p>
                  <p className="text-xs text-gray-500">mmHg</p>
                </div>

                <div className="rounded-lg bg-blue-50 p-4 text-center">
                  <Activity className="mx-auto mb-2 h-8 w-8 text-blue-600" />
                  <p className="text-sm text-gray-600">Heart Rate</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {patientData.vitals.heartRate}
                  </p>
                  <p className="text-xs text-gray-500">bpm</p>
                </div>

                <div className="rounded-lg bg-orange-50 p-4 text-center">
                  <Thermometer className="mx-auto mb-2 h-8 w-8 text-orange-600" />
                  <p className="text-sm text-gray-600">Temperature</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {patientData.vitals.temperature}
                  </p>
                </div>

                <div className="rounded-lg bg-purple-50 p-4 text-center">
                  <Weight className="mx-auto mb-2 h-8 w-8 text-purple-600" />
                  <p className="text-sm text-gray-600">Weight</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {patientData.vitals.weight}
                  </p>
                </div>

                <div className="rounded-lg bg-green-50 p-4 text-center">
                  <Ruler className="mx-auto mb-2 h-8 w-8 text-green-600" />
                  <p className="text-sm text-gray-600">Height</p>
                  <p className="text-2xl font-bold text-green-600">
                    {patientData.vitals.height}
                  </p>
                </div>

                <div className="rounded-lg bg-indigo-50 p-4 text-center">
                  <Activity className="mx-auto mb-2 h-8 w-8 text-indigo-600" />
                  <p className="text-sm text-gray-600">BMI</p>
                  <p className="text-2xl font-bold text-indigo-600">
                    {patientData.vitals.bmi}
                  </p>
                  <p className="text-xs text-gray-500">Normal</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visit History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-gray-600" />
              Visit History
            </CardTitle>
            <CardDescription>
              Your recent medical appointments and consultations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
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
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="py-6 text-center">
          <div className="mb-2 flex items-center justify-center gap-2 text-gray-500">
            <Shield className="h-4 w-4" />
            <span className="text-sm">
              Your health information is protected by HIPAA
            </span>
          </div>
          <p className="text-xs text-gray-400">
            This portal provides read-only access to your medical records. For
            updates or corrections, please contact your healthcare provider.
          </p>
        </div>
      </div>
    </div>
  );
}
