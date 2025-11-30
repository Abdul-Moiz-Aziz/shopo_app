// src/pages/Users.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUsers,
  deleteUser,
  changeUserRole,
  applyUserFiltersAndSort,
} from "../../store/users/usersSlice";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.sorted);
  const [searchField, setSearchField] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("all");
  const [sortKey, setSortKey] = useState("");

  useEffect(() => {
    const dummyUsers = [
      {
        id: 1,
        name: "Moiz Aziz",
        email: "moiz@example.com",
        role: "Admin",
        status: "Active",
        createdAt: "2024-04-20",
        lastLogin: "2025-06-22",
      },
      {
        id: 2,
        name: "Ayesha Khan",
        email: "ayesha@example.com",
        role: "Editor",
        status: "Inactive",
        createdAt: "2023-11-10",
        lastLogin: "2025-04-15",
      },
    ];
    dispatch(setUsers(dummyUsers));
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleRoleChange = (id, newRole) => {
    dispatch(changeUserRole({ id, role: newRole }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(
      applyUserFiltersAndSort({
        search: searchTerm,
        field: searchField,
        status,
        sort: sortKey,
      })
    );
  };

  const handleSort = (key) => {
    setSortKey(key);
    dispatch(
      applyUserFiltersAndSort({
        search: searchTerm,
        field: searchField,
        status,
        sort: key,
      })
    );
  };

  return (
    <div className="mt-10">
      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="bg-white border border-[#E2E7F1] rounded-md p-4 mb-6 grid grid-cols-1 md:grid-cols-6 gap-4"
      >
        <select
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          className="border px-3 py-2 rounded text-sm"
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>
        <input
          type="text"
          placeholder={`Search by ${searchField}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-3 py-2 rounded text-sm col-span-2"
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border px-3 py-2 rounded text-sm"
        >
          <option value="all">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button
          type="submit"
          className="bg-[#6176FE] text-white px-4 py-2 rounded hover:bg-[#4a5edc] text-sm col-span-2"
        >
          Search
        </button>
      </form>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-[#E2E7F1] bg-white">
          <thead className="bg-gray-100 text-left text-[#222222] text-sm border-b border-[#E2E7F1]">
            <tr>
              {[
                { key: "name", label: "Name" },
                { key: "email", label: "Email" },
                { key: "role", label: "Role" },
                { key: "status", label: "Status" },
                { key: "createdAt", label: "Created At" },
                { key: "lastLogin", label: "Last Login" },
              ].map(({ key, label }) => (
                <th
                  key={key}
                  onClick={() => handleSort(key)}
                  className="cursor-pointer md:p-4 px-2 hover:underline"
                >
                  {label} {sortKey === key ? "↓" : ""}
                </th>
              ))}
              <th className="md:p-4 px-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-[#5a5a5a]">
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="border-b border-[#E2E7F1]">
                  <td className="md:p-4 px-2 font-medium text-[#222222]">
                    {user.name}
                  </td>
                  <td className="md:p-4 px-2">{user.email}</td>
                  <td className="md:p-4 px-2">
                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user.id, e.target.value)
                      }
                      className="border border-gray-300 rounded px-2 py-1 text-sm"
                    >
                      <option value="Admin">Admin</option>
                      <option value="Editor">Editor</option>
                      <option value="Manager">Manager</option>
                    </select>
                  </td>
                  <td className="md:p-4 px-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="md:p-4 px-2">{user.createdAt}</td>
                  <td className="md:p-4 px-2">{user.lastLogin}</td>
                  <td className="md:p-4 px-2 text-right">
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-500 hover:underline text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-6 text-[#222222] font-semibold"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
