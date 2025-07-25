import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/EditCollege.tsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function EditCollege() {
    const { id } = useParams();
    const [college, setCollege] = useState(null);
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
    if (!college)
        return _jsx("div", { children: "Loading..." }); // Show loading if college data is not yet fetched
    return (_jsxs("div", { children: [_jsx("h1", { children: "Edit College" }), _jsxs("div", { children: [_jsx("label", { children: "Name" }), _jsx("input", { type: "text", value: college.title, onChange: (e) => setCollege({ ...college, title: e.target.value }) })] }), _jsxs("div", { children: [_jsx("label", { children: "CRICOS Code" }), _jsx("input", { type: "text", value: college.cricos, onChange: (e) => setCollege({ ...college, cricos: e.target.value }) })] }), _jsxs("div", { children: [_jsx("label", { children: "Status" }), _jsxs("select", { value: college.status, onChange: (e) => setCollege({ ...college, status: e.target.value }), children: [_jsx("option", { value: "Active", children: "Active" }), _jsx("option", { value: "Inactive", children: "Inactive" })] })] }), _jsx("button", { onClick: handleSave, children: "Save" })] }));
}
