import { LuShield } from "react-icons/lu";
import Card from "../components/ui/card/Card";
import CardContent from "../components/ui/card/CardContent";

export default function Notice() {
  return (
    <Card className="border-yellow-200 bg-yellow-50 p-3">
      <CardContent>
        <div className="flex items-start space-x-2">
          <LuShield className="medium:h-4 medium:w-5 smest:mt-[0.1.5px] w-7 text-yellow-600" />
          <div className="text-xs text-yellow-800">
            <p className="mb-2 font-medium">Security Notice</p>
            <p>
              This system contains confidential patient information protected by
              HIPAA. Unauthorized access is prohibited.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
