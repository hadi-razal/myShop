import { useState, ChangeEvent, FormEvent } from 'react';
import { Plus, X } from 'lucide-react';

interface ProductData {
  name: string;
  description: string;
  regularPrice: string;
  discountPrice: string;
  colors: string[];
  category: string;
  sizes: string[];
  isInStock: boolean;
  stock: string;
  images: string[];
  tags: string[];
}


const CreateProduct = () => {

  const [productData, setProductData] = useState<ProductData>({
    name: '',
    description: '',
    regularPrice: '',
    discountPrice: '',
    colors: [],
    category: '',
    sizes: [],
    isInStock: true,
    stock: '',
    images: [],
    tags: []
  });

  const [currentTag, setCurrentTag] = useState('');

  // Handle basic input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle category change
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setProductData(prev => ({
      ...prev,
      category: e.target.value
    }));
  };


  // Handle tag addition and removal
  const handleAddTag = () => {
    if (currentTag.trim()) {
      const tags = currentTag.split(',').map(t => t.trim());
      setProductData(prev => ({
        ...prev,
        tags: [...prev.tags, ...tags.filter(t => !prev.tags.includes(t))]
      }));
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setProductData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleImageUpload = (event: any) => {
    const files: any = Array.from(event.target.files);
    const newImages = files.map((file: any) => URL.createObjectURL(file));
    setProductData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...newImages],
    }));
  };

  const removeImage = (index: any) => {
    setProductData((prevData) => ({
      ...prevData,
      images: prevData.images.filter((_, i) => i !== index),
    }));
  };

  // Submit form
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Product Data:', productData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-3 pb-10 pt-40">
      <div>
        <h2 className="text-2xl font-bold mb-6">Create New Product</h2>
      </div>
      <div className='space-y-6'>
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Product Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Product Name</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border bg-gray-200 rounded-md"
              placeholder="Enter product name"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md h-32 bg-gray-200"
              placeholder="Enter product description"
            />
          </div>

          {/* Pricing */}
          <div className="space-y-3">
           

            <div className="space-y-2">
              <label className="block text-sm font-medium">Regular Price</label>
              <input
                type="text"
                name="regularPrice"
                value={productData.regularPrice}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border bg-gray-200 rounded-md"
                placeholder="₹0.00"
              />
            </div>


            <div className="space-y-2">
              <label className="block text-sm font-medium">Discount Price (optional)</label>
              <input
                type="text"
                name="discountPrice"
                value={productData.discountPrice}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border bg-gray-200 rounded-md"
                placeholder="₹0.00"
              />
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Category</label>
            <select
              name="category"
              value={productData.category}
              onChange={handleCategoryChange}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="home">Home</option>
              <option value="sports">Sports</option>
            </select>
          </div>


          {/* Tag Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium">Tags</label>
            <div className="flex flex-wrap gap-2">
              {productData.tags.map((tag, index) => (
                <div key={index} className="flex items-center space-x-2 border rounded-md px-3 py-1">
                  <span>{tag}</span>
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <input
                type="text"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
                onBlur={() => handleAddTag()}
                placeholder="Add tags (separate with commas)"
                className="w-full px-3 py-2 border rounded-md bg-gray-200"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="space-y-4">
            <label className="block text-sm font-medium">Product Images</label>
            <div className="flex flex-wrap gap-2 mb-4">
              {productData.images.map((image, index) => (
                <div key={index} className="relative w-24 h-24">
                  <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 text-gray-500 hover:text-red-500"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Add Image Button */}
              <label className="flex items-center justify-center w-24 h-24 border rounded-md cursor-pointer hover:bg-gray-50">
                <Plus className="w-8 h-8 text-gray-400" />
                <input
                  type="file"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="w-full px-4 py-2 text-white bg-gray-950 rounded-md hover:bg-gray-950/90">
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
