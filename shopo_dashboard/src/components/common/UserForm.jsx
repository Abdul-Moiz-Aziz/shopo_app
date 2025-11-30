import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, setUsers } from "../../store/users/usersSlice";
import { useNavigate } from "react-router-dom";
const UserForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "viewer",
    status: "active",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ["name", "email", "role"];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!user[field]) {
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      dispatch(addUser({ id: Date.now(), ...user }));
      navigate("/users/manage-users");
      setUser({ name: "", email: "", role: "viewer", status: "active" });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white border border-gray-200 rounded shadow-sm">
      <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-6">Add User</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <FormSection title="User Info">
          <FormField
            name="name"
            label="Full Name"
            value={user.name}
            onChange={handleChange}
            error={errors.name}
            required
          />
          <FormField
            name="email"
            label="Email"
            value={user.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          <FormSelect
            name="role"
            label="Role"
            value={user.role}
            onChange={handleChange}
            options={["admin", "editor", "viewer"]}
            error={errors.role}
            required
          />
          <FormSelect
            name="status"
            label="Status"
            value={user.status}
            onChange={handleChange}
            options={["active", "inactive"]}
          />
        </FormSection>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-[#6176FE] text-white rounded hover:bg-[#4a5edc] transition"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

const FormSection = ({ title, children }) => (
  <div className="border border-gray-200 rounded-lg p-4">
    <h3 className="text-lg font-medium text-[#1a1a1a] mb-4">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  </div>
);

const FormField = ({
  name,
  label,
  value,
  onChange,
  type = "text",
  required,
  error,
}) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-sm text-gray-600 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`px-3 py-2 border rounded text-sm outline-none focus:ring-2 focus:ring-[#6176FE] ${
        error ? "border-red-500" : "border-[#6176FE]"
      }`}
    />
    {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
  </div>
);

const FormSelect = ({
  name,
  label,
  value,
  onChange,
  options,
  required,
  error,
}) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="text-sm text-gray-600 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`px-3 py-2 border rounded text-sm outline-none focus:ring-2 focus:ring-[#6176FE] ${
        error ? "border-red-500" : "border-[#6176FE]"
      }`}
    >
      <option value="">Select {label}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </option>
      ))}
    </select>
    {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
  </div>
);

export default UserForm;
