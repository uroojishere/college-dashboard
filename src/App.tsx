import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

import CollegesList from "@/pages/CollegesList";
import CollegePage from "@/pages/CollegePage";
import EditCollege from "@/pages/EditCollege";
import AddCollege from "@/pages/AddCollege";
import AddCollegeFlow from "@/pages/AddCollegeFlow";
import AddCampuses from "@/pages/AddCampuses";
import IntroVideo from "@/pages/IntroVideo";
import Success from "@/pages/Success";
import ViewCollege from "@/pages/ViewCollege"; // ✅ NEW view screen import

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-50 font-sans">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <Topbar />
          <div className="p-6">
            <Routes>
              {/* College Routes */}
              <Route path="/colleges" element={<CollegesList />} />
              <Route path="/colleges/:id" element={<CollegePage />} />
              <Route path="/colleges/edit/:id" element={<EditCollege />} />
              <Route path="/colleges/view/:id" element={<ViewCollege />} /> {/* ✅ Added */}

              {/* Add College Flow */}
              <Route path="/colleges/add" element={<AddCollegeFlow />} />
              <Route path="/colleges/add/success" element={<Success />} />
              <Route path="/colleges/addnewcollege" element={<AddCollege />} />
              <Route path="/colleges/add/campuses" element={<AddCampuses />} />
              <Route path="/colleges/add/video" element={<IntroVideo />} />
              <Route path="/colleges/success" element={<Success />} />

            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
