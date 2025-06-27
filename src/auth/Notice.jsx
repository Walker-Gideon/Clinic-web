import { LuShield } from "react-icons/lu";

export default function Notice() {
  return (
    <div className="border-yellow-200 bg-yellow-50">
      {/* <CardContent className="pt-4"> */}
      <div className="pt-4">
        <div className="flex items-start space-x-2">
          <LuShield className="mt-0.5 h-4 w-4 text-yellow-600" />
          <div className="text-xs text-yellow-800">
            <p className="mb-1 font-medium">Security Notice</p>
            <p>
              This system contains confidential patient information protected by
              HIPAA. Unauthorized access is prohibited.
            </p>
          </div>
        </div>
        {/* </CardContent> */}
      </div>
    </div>
  );
}
