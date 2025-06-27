import { useAuth } from "./AuthContext";
import { LuHeart } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { LuStethoscope } from "react-icons/lu";
import Card from "../components/ui/card/Card";
import CardHeader from "../components/ui/card/CardHeader";
import CardTitle from "../components/ui/card/CardTitle";
import CardDescription from "../components/ui/card/CardDescription";
import CardContent from "../components/ui/card/CardContent";
import Badge from "../components/ui/badge/Badge";

const roles = [
  {
    id: "patient",
    label: "Patient",
    icon: LuUser,
    description: "Access your medical records and appointments",
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "nurse",
    label: "Nurse",
    icon: LuHeart,
    description: "Patient care and medical documentation",
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    id: "doctor",
    label: "Doctor",
    icon: LuStethoscope,
    description: "Full patient management and diagnosis",
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    id: "admin",
    label: "Administrator",
    icon: LuSettings,
    description: "System administration and user management",
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
];

export default function RoleSelection() {
  const { selectedRole, setSelectedRole } = useAuth();

  const selectedRoleData = roles.find((role) => role.id === selectedRole);

  return (
    <Card className="border-gray-300 bg-white px-5 py-6">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">Select Your Role</CardTitle>
        <CardDescription>Choose your access level to continue</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`rounded-lg border-2 p-3 transition-all hover:shadow-md ${
                  selectedRole === role.id
                    ? role.color
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <Icon className="h-6 w-6" />
                  <span className="text-sm font-medium">{role.label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {selectedRoleData && (
          <div className="mt-4 rounded-lg bg-gray-50 p-3">
            <div className="mb-1 flex items-center space-x-2">
              <selectedRoleData.icon className="h-4 w-4 text-gray-600" />
              <Badge variant="secondary" className="text-xs">
                {selectedRoleData.label}
              </Badge>
            </div>
            <p className="text-sm text-gray-600">
              {selectedRoleData.description}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
