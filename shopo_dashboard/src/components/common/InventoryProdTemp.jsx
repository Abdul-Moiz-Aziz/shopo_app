import { TbDotsVertical } from "react-icons/tb";

const InventoryProdTemp = ({
  product,
  onEdit,
  dropdownOpenId,
  onToggleDropdown,
  onDelete,
  onCopy,
  onEditClick,
}) => {
  const { id, image, name, category, sku, price, stock, views, status } =
    product;

  return (
    <tr className="hover:bg-gray-50 transition min-h-20 relative border-b border-b-[#E2E7F1]">
      <td className="p-4 block items-center gap-4 md:flex">
        <img
          src={image}
          alt={name}
          className="h-14 w-14 object-cover rounded border border-[#E2E7F1]"
        />
        <div>
          <p className="font-medium text-[#1a1a1a] md:text-base text-xs">{name}</p>
          <p className="text-xs text-gray-400">{category}</p>
        </div>
      </td>

      <td className="p-4 font-medium">{sku}</td>

      <td className="p-4">
        <input
          type="number"
          value={price}
          onChange={(e) => onEdit(id, "price", e.target.value)}
          className="w-[80px] px-2 py-1 border rounded text-sm"
        />
      </td>

      <td className="p-4">
        <input
          type="number"
          value={stock}
          onChange={(e) => onEdit(id, "stock", e.target.value)}
          className="w-[80px] px-2 py-1 border rounded text-sm"
        />
      </td>

      <td className="p-4 font-medium">{views}</td>

      <td className="p-4">{status}</td>

      <td className="p-4 relative">
        <span onClick={() => onToggleDropdown(id)} className="cursor-pointer">
          <TbDotsVertical className="h-5 w-5" />
        </span>

        {dropdownOpenId === id && (
          <div className="absolute right-14 mt-2 z-10 w-[150px] bg-white shadow-md border border-gray-200 rounded">
            <button
              onClick={() => onEditClick(id)}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(id)}
              className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
            >
              Delete
            </button>
            <button
              onClick={() => onCopy(product)}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
            >
              Copy Listing
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default InventoryProdTemp;
