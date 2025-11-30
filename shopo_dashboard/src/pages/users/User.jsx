const User = ({user}) => {
  return (
    <tr key={user.id} className="border-b border-[#E2E7F1]">
      <td className="md:p-4 px-2 font-medium text-[#222222]">{user.name}</td>
      <td className="md:p-4 px-2">{user.email}</td>
      <td className="md:p-4 px-2">{user.role}</td>
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
        <button className="text-sm text-[#6176FE] hover:underline">
          Manage
        </button>
      </td>
    </tr>
  );
}
export default User;