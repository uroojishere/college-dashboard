// src/pages/EditCollege.tsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCollege() {
  const { id } = useParams();
  const [college, setCollege] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch college data based on the id (you can replace this with your actual fetching logic)
    const collegeData = {
      id: id,
      title: "Newton College",
      cricos: "0100818",
      rto: "0100818",
      campuses: ["Melbourne", "Brisbane"],
      status: "Active"
    };
    setCollege(collegeData);
  }, [id]);

  const handleSave = () => {
    // Logic to save the edited college (you can update this as needed)
    console.log("College saved:", college);
    navigate("/colleges"); // Redirect to the colleges list after saving
  };

  if (!college) return <div>Loading...</div>; // Show loading if college data is not yet fetched

  return (
    <div>
      <h1>Edit College</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={college.title}
          onChange={(e) => setCollege({ ...college, title: e.target.value })}
        />
      </div>
      <div>
        <label>CRICOS Code</label>
        <input
          type="text"
          value={college.cricos}
          onChange={(e) => setCollege({ ...college, cricos: e.target.value })}
        />
      </div>
      <div>
        <label>Status</label>
        <select
          value={college.status}
          onChange={(e) => setCollege({ ...college, status: e.target.value })}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
