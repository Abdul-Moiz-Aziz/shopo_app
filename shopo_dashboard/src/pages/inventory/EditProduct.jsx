import { useParams } from "react-router";
import { useEffect, useState } from "react";
import EditProductForm from "../../components/common/EditProductForm";

const allProducts = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 7.17,
    stock: 5,
    tags: ["beauty", "mascara"],
    brand: "Essence",
    sku: "RCH45Q1A",
    weight: 2,
    dimensions: { width: 23.17, height: 14.43, depth: 28.01 },
    warrantyInformation: "1 month warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "Low Stock",
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 24,
    meta: { barcode: "9164035109868" },
  },
];

const EditProduct = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const product = allProducts.find((p) => p.id === Number(productId));
    if (product) {
      setProductData({
        ...product,
        tags: product.tags.join(", "),
        width: product.dimensions?.width || "",
        height: product.dimensions?.height || "",
        depth: product.dimensions?.depth || "",
        barcode: product.meta?.barcode || "",
      });
    }
  }, [productId]);

  if (!productData)
    return <div className="text-center p-10 text-gray-500">Loading...</div>;

  return <EditProductForm initialProduct={productData} />;
};

export default EditProduct;
