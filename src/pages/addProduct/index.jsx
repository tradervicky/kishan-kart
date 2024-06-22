import React, { useState, useRef } from "react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineCloudUpload } from "react-icons/md";
import { API_URLS } from "../../api/auth";
import { makeApiRequest } from "../../api/function";
import InputBox from "../../components/input";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [productDetails, setProductDetails] = useState({
    title: "",
    vendor: "",
    vendorName: "",
    vendorMobile: "",
    image: "",
    price: "",
    category: "",
    subCategory: "",
    quantity: "",
    description: "",
  });
  const [vendorList, setVendorList] = useState([])
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      setProductDetails({
        ...productDetails,
        [name]: file,
      });

      // Create a preview URL for the selected image file
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setProductDetails({
        ...productDetails,
        [name]: value,
      });
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleAdd = async () => {
    setLoading(true);
    toast.loading("Adding product...");
    const formData = new FormData();

    formData.append("title", productDetails.title);
    formData.append("vendor", productDetails.vendor);
    formData.append("vendorName", productDetails.vendorName);
    formData.append("vendorMobile", productDetails.vendorMobile);
    formData.append("image", productDetails.image);
    formData.append("price", productDetails.price);
    formData.append("category", productDetails.category);
    formData.append("subCategory", productDetails.subCategory);
    formData.append("quantity", productDetails.quantity);
    formData.append("description", productDetails.description);
    try {
      const response = await makeApiRequest(
        "POST",
        API_URLS.ADD_PRODUCT,
        formData,
        null,
        {
          "Content-Type": "multipart/form-data",
        }
      );
      toast.dismiss();
      toast.success("Product added successfully!");
      navigate("/products");
    } catch (error) {
      toast.dismiss();
      toast.error("Error adding product. Please try again.");
      setLoading(false);
    }
  };
  console.log(productDetails)
// vendor data
const handleVendorChange = (e) => {
  const selectedVendorId = e.target.value;
  const selectedVendor = vendorList.find(vendor => vendor._id === selectedVendorId);
  setProductDetails({
    ...productDetails,
    vendor: selectedVendorId,
    vendorName: selectedVendor ? selectedVendor.name : "",
    vendorMobile: selectedVendor ? selectedVendor.mobile:  "",
  });
};

// fetch vendor list
const fetchVendors = async ()=>{
  try {
    const response = await makeApiRequest("GET", API_URLS.GET_VENDOR_LIST)
    setVendorList(response)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
useEffect(()=>{
  fetchVendors()
},[])
console.log(productDetails)
  return (
    <div className=" mx-6 shadow-2xl h-[84vh]">
      <Toaster/>
      <div className="flex justify-between px-4 pt-4 h-[98%]">
        <div className="w-[29%] h-full">
          <div className="flex flex-col justify-center items-center h-[50%] bg-white rounded-lg shadow-lg">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Product Preview"
                className="h-full w-full object-contain rounded-lg"
              />
            ) : (
              <>
                <div className="text-blue-500">
                  <MdOutlineCloudUpload size={50} />
                </div>
                <p className="text-lg font-semibold">Upload product Image</p>
                <span className="text-dark-600">
                  Image size must be less than 1MB
                </span>
              </>
            )}
          </div>
          <input
            type="file"
            name="image"
            ref={fileInputRef}
            onChange={handleChange}
            className="hidden"
          />
          <button
            className="px-4 py-2 bg-blue-600 w-full mt-4 text-lg font-semibold text-white rounded-xl hover:bg-blue-400 duration-300 ease-in-out"
            onClick={handleButtonClick}
          >
            Select image
          </button>
        </div>
        <div className="w-[70%] rounded-xl pt-2 px-2 bg-mixed-300">
          <div className="flex gap-4 mt-4">
            <InputBox
              label="Product Name"
              value={productDetails.title}
              onChange={handleChange}
              placeholder="Enter Product title"
              customStyle="outline-none text-lg"
              name="title"
            />
            <div className="w-full flex flex-col gap-2">
              <label
                htmlFor="vendor"
                className="text-lg font-medium text-white">
                Select Vendor
              </label>
              <select
                name="vendor"
                onChange={handleVendorChange}
                value={productDetails.vendor}
                className="py-2 border-b bg-dark-400 text-lg text-white outline-none">
                <option value="">Select Vendor</option>
                {vendorList && vendorList.map((data, index)=>(
                <option value={data._id} key={index}>{data.name}</option> ))}              
              </select>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <InputBox
              label="Product Category"
              value={productDetails.category}
              onChange={handleChange}
              placeholder="Enter Product category"
              customStyle="outline-none text-lg"
              name="category"
            />
            <InputBox
              label="Product Sub-Category"
              value={productDetails.subCategory}
              onChange={handleChange}
              placeholder="Enter Product sub-category"
              customStyle="outline-none text-lg"
              name="subCategory"
            />
          </div>
          <div className="mt-4">
            <InputBox
              label="Description"
              value={productDetails.description}
              onChange={handleChange}
              placeholder="Enter Product description"
              customStyle="outline-none text-lg"
              name="description"
            />
          </div>
          <div className="flex gap-4 mt-4">
            <InputBox
              label="Price"
              value={productDetails.price}
              onChange={handleChange}
              placeholder="Enter Product price"
              customStyle="outline-none text-lg"
              name="price"
            />
            <InputBox
              label="Quantity"
              value={productDetails.quantity}
              onChange={handleChange}
              placeholder="Enter Product quantity"
              customStyle="outline-none text-lg"
              name="quantity"
            />
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="px-4 py-2 bg-blue-600 w-[50%] text-lg font-semi-bold text-white hover:bg-blue-500 mt-4 duration-300 ease-in-out"
              onClick={handleAdd}
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Product"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
