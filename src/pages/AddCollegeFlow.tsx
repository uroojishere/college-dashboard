// src/pages/AddCollegeFlow.tsx
import { useState } from "react";
import AddCollege from "./AddCollege";
import AddCampuses from "./AddCampuses";
import IntroVideo from "./IntroVideo";
import { useNavigate } from "react-router-dom";

export default function AddCollegeFlow() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);
  const cancel = () => navigate("/colleges");
  const publish = () => navigate("/colleges/add/success");

  return (
    <div className="p-6 space-y-6">
      {/* Top Header for all steps */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Add New College</h1>
          <p className="text-sm text-gray-500">
            Add college details to manage courses.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-10">
        {step === 1 && <AddCollege hideActions />}
        {step === 2 && <AddCampuses hideActions />}
        {step === 3 && <IntroVideo hideActions />}
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-between items-center pt-6 border-t mt-10">
        <div className="text-xs text-gray-500">
          Step {step} of 3 <br />
          {step === 1 && <span className="text-sm font-semibold text-black">College Info</span>}
          {step === 2 && <span className="text-sm font-semibold text-black">Campus Info</span>}
          {step === 3 && <span className="text-sm font-semibold text-black">Introduction Video</span>}
        </div>

        <div className="flex gap-3">
          {step > 1 && (
            <button
              onClick={back}
              className="border border-gray-300 text-gray-700 px-5 py-2 rounded-md text-sm"
            >
              ← Back
            </button>
          )}
          {step < 3 && (
            <button
              onClick={next}
              className="bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-medium"
            >
              Next →
            </button>
          )}
          {step === 3 && (
            <button
              onClick={publish}
              className="bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-medium"
            >
              Publish College
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
