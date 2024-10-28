import  { useState, ChangeEvent, FormEvent } from 'react';
import { X, ImagePlus } from 'lucide-react';

interface ProductData {
  name: string;
  description: string;
  regularPrice: string;
  discountPrice: string;
  colors: string[];
  stock: string;
  isInStock: boolean;
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
    stock: '',
    isInStock: true,
    images: [],
    tags: []
  });

  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [colorName, setColorName] = useState('');
  const [currentTag, setCurrentTag] = useState('');

  // Handle basic input changes
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle color addition
  const handleAddColor = () => {
    if (colorName.trim() && !productData.colors.includes(currentColor)) {
      setProductData(prev => ({
        ...prev,
        colors: [...prev.colors, currentColor]
      }));
      setColorName('');
      setCurrentColor('#000000');
      setColorPickerVisible(false);
    }
  };

  // Handle color removal
  const removeColor = (colorToRemove: string) => {
    setProductData(prev => ({
      ...prev,
      colors: prev.colors.filter(color => color !== colorToRemove)
    }));
  };

  // Handle tag addition
  const handleAddTag = (e: any) => {
    if (e.key === 'Enter' && currentTag.trim() && !productData.tags.includes(currentTag.trim())) {
      setProductData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  // Handle tag removal
  const removeTag = (tagToRemove: string) => {
    setProductData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imageUrls = Array.from(files).map(file => URL.createObjectURL(file));
      setProductData(prev => ({
        ...prev,
        images: [...prev.images, ...imageUrls]
      }));
    }
  };

  const removeImage = (index: number) => {
    setProductData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Product Data:', productData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 pt-40">
      <div className="">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Create New Product</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Product Name</label>
              <input
                type="text"
                name="name"
                value={productData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md"
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
                className="w-full px-3 py-2 border rounded-md h-32"
                placeholder="Enter product description"
              />
            </div>

            {/* Pricing */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium">Regular Price</label>
                <input
                  type="number"
                  name="regularPrice"
                  value={productData.regularPrice}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="0.00"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium">Discount Price</label>
                <input
                  type="number"
                  name="discountPrice"
                  value={productData.discountPrice}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Custom Color Picker */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Colors</label>
              <div className="flex flex-wrap gap-2">
                {productData.colors.map((color, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-100 rounded-full px-3 py-1"
                  >
                    <div
                      className="w-4 h-4 rounded-full mr-2"
                      style={{ backgroundColor: color }}
                    />
                    <button
                      type="button"
                      onClick={() => removeColor(color)}
                      className="ml-2 text-gray-500 hover:text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setColorPickerVisible(!colorPickerVisible)}
                  className="px-3 py-1 border rounded-md hover:bg-gray-50"
                >
                  Add Color
                </button>
              </div>
              
              {colorPickerVisible && (
                <div className="mt-2 p-4 border rounded-md">
                  <input
                    type="color"
                    value={currentColor}
                    onChange={(e) => setCurrentColor(e.target.value)}
                    className="w-full h-10 mb-2"
                  />
                  <input
                    type="text"
                    value={colorName}
                    onChange={(e) => setColorName(e.target.value)}
                    placeholder="Color name"
                    className="w-full px-3 py-2 border rounded-md mb-2"
                  />
                  <button
                    type="button"
                    onClick={handleAddColor}
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Add Color
                  </button>
                </div>
              )}
            </div>

            {/* Tag Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium">Tags</label>
              <div className="border rounded-md p-2">
                <div className="flex flex-wrap gap-2 mb-2">
                  {productData.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-100 rounded-full px-3 py-1"
                    >
                      <span>{tag}</span>
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-gray-500 hover:text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <input
                  type="text"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  onKeyDown={(e) => handleAddTag(e)}
                  placeholder="Type and press Enter to add tags"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>

            {/* Stock Management */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">In Stock</label>
                <div
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    productData.isInStock ? 'bg-blue-500' : 'bg-gray-200'
                  }`}
                  onClick={() =>
                    setProductData(prev => ({ ...prev, isInStock: !prev.isInStock }))
                  }
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      productData.isInStock ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </div>
              </div>
              {productData.isInStock && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Stock Quantity</label>
                  <input
                    type="number"
                    name="stock"
                    value={productData.stock}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter stock quantity"
                  />
                </div>
              )}
            </div>

            {/* Image Upload */}
            <div className="space-y-4">
              <label className="block text-sm font-medium">Product Images</label>
              <div className="grid grid-cols-4 gap-4">
                {productData.images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-24 object-cover rounded"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <label className="border-2 border-dashed rounded p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
                  <ImagePlus className="w-8 h-8 text-gray-400" />
                  <span className="mt-2 text-sm text-gray-500">Add Image</span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Create Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;