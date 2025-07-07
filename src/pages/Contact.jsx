import { useState } from "react";

function Contact() {
  // Tạo state cho form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // state lưu lỗi
  const [errors, setErrors] = useState({});

  // Hàm kiểm tra tính hợp lệ của form
  // Trả về true nếu form hợp lệ, false nếu không
  const validateForm = () => {
  const newErrors = {};
  if (!formData.name.trim()) {
    newErrors.name = "Name is required.";
  }
  if (!formData.email.trim()) {
    newErrors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Email is not valid.";
  }
  if (!formData.message.trim()) {
    newErrors.message = "Message is required.";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
  };


  // Xử lý khi người dùng gõ vào các ô
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Xử lý khi form được submit
  const handleSubmit = (e) => {
  e.preventDefault(); // Ngăn reload trang

  if (!validateForm()) {
    return; // Ngưng nếu form không hợp lệ
  }

  console.log("Form data:", formData);
  alert("Thanks! Your message has been received.");
  setFormData({ name: "", email: "", message: "" });
  setErrors({}); // Xoá lỗi nếu có
  };


  return (
    <section className="px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 shadow rounded-lg"
      >
        {/* Tên */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Write your message here..."
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
