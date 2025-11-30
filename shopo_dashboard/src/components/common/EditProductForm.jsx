import { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { FaLock } from "react-icons/fa";

const EditProductForm = ({ initialProduct }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    discountPercentage: "",
    stock: "",
    tags: "",
    brand: "",
    sku: "",
    condition: "",
    weight: "",
    width: "",
    height: "",
    depth: "",
    warrantyInformation: "",
    shippingInformation: "",
    availabilityStatus: "",
    returnPolicy: "",
    minimumOrderQuantity: "",
    barcode: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct);
    }
  }, [initialProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "title",
      "description",
      "category",
      "price",
      "stock",
      "sku",
      "brand",
    ];

    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!product[field]) {
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);
    if( Object.keys(newErrors).length === 0) {
      // Here you would typically send the product data to your API
      console.log("Product Submitted:", product);
      navigate("/inventory/manage-inventory"); // Redirect after submission
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white border border-gray-200 rounded shadow-sm">
      <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-6">
        Add / Edit Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <FormSection title="Basic Info">
          <FormField
            name="title"
            label="Product Title"
            value={product.title}
            onChange={handleChange}
            error={errors.title}
            required
          />
          <FormField
            name="category"
            label="Category"
            value={product.category}
            onChange={handleChange}
            error={errors.category}
            required
          />
          <FormField
            name="brand"
            label="Brand"
            value={product.brand}
            onChange={handleChange}
            error={errors.brand}
            required
          />
          <FormField
            name="sku"
            label="SKU"
            value={product.sku}
            readOnly
            locked
            error={errors.sku}
            required
          />
          <FormField
            name="condition"
            label="Condition"
            value={product.condition}
            readOnly
            locked
          />
          <FormField
            name="tags"
            label="Tags (comma separated)"
            value={product.tags}
            onChange={handleChange}
          />
          <FormTextarea
            name="description"
            label="Description"
            value={product.description}
            onChange={handleChange}
            error={errors.description}
            required
          />
        </FormSection>

        {/* Pricing & Inventory */}
        <FormSection title="Pricing & Inventory">
          <FormField
            type="number"
            name="price"
            label="Price ($)"
            value={product.price}
            onChange={handleChange}
            error={errors.price}
            required
          />
          <FormField
            type="number"
            name="discountPercentage"
            label="Discount (%)"
            value={product.discountPercentage}
            onChange={handleChange}
          />
          <FormField
            type="number"
            name="stock"
            label="Stock"
            value={product.stock}
            onChange={handleChange}
            error={errors.stock}
            required
          />
          <FormField
            type="number"
            name="minimumOrderQuantity"
            label="Minimum Order Quantity"
            value={product.minimumOrderQuantity}
            onChange={handleChange}
          />
        </FormSection>

        {/* Dimensions & Weight */}
        <FormSection title="Dimensions & Weight">
          <FormField
            type="number"
            name="weight"
            label="Weight (kg)"
            value={product.weight}
            onChange={handleChange}
          />
          <FormField
            type="number"
            name="width"
            label="Width (cm)"
            value={product.width}
            onChange={handleChange}
          />
          <FormField
            type="number"
            name="height"
            label="Height (cm)"
            value={product.height}
            onChange={handleChange}
          />
          <FormField
            type="number"
            name="depth"
            label="Depth (cm)"
            value={product.depth}
            onChange={handleChange}
          />
        </FormSection>

        {/* Shipping & Warranty */}
        <FormSection title="Shipping & Warranty">
          <FormField
            name="availabilityStatus"
            label="Availability Status"
            value={product.availabilityStatus}
            onChange={handleChange}
          />
          <FormField
            name="warrantyInformation"
            label="Warranty Info"
            value={product.warrantyInformation}
            onChange={handleChange}
          />
          <FormField
            name="shippingInformation"
            label="Shipping Info"
            value={product.shippingInformation}
            onChange={handleChange}
          />
          <FormField
            name="returnPolicy"
            label="Return Policy"
            value={product.returnPolicy}
            onChange={handleChange}
          />
          <FormField
            name="barcode"
            label="Barcode"
            value={product.barcode}
            onChange={handleChange}
          />
        </FormSection>

        {/* Submit */}
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-[#6176FE] text-white rounded hover:bg-[#4a5edc] transition"
          >
            Save Product
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
  readOnly,
  locked,
}) => (
  <div className="flex flex-col relative">
    <label htmlFor={name} className="text-sm text-gray-600 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      className={`px-3 py-2 border rounded text-sm outline-none focus:ring-2 focus:ring-[#6176FE] ${
        error ? "border-red-500" : "border-[#6176FE]"
      } ${readOnly ? "bg-gray-100 cursor-not-allowed" : ""}`}
    />
    {locked && (
      <span className="absolute right-2 top-8 text-gray-400">
        <FaLock />
      </span>
    )}
    {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
  </div>
);

const FormTextarea = ({ name, label, value, onChange, required, error }) => (
  <div className="md:col-span-2 flex flex-col">
    <label htmlFor={name} className="text-sm text-gray-600 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      rows={4}
      className={`w-full px-3 py-2 border border-[#6176FE] rounded text-sm resize-none focus:ring-2 focus:ring-[#6176FE] outline-none ${
        error ? "border-red-500" : ""
      }`}
    />
    {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
  </div>
);

export default EditProductForm;
