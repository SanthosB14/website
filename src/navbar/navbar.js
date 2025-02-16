import React, { useState } from 'react';
import './navbar.css'
const Navbar = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically make an API call to your backend
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover" 
         style={{ backgroundImage: "url('https://i.postimg.cc/nz6YzMPg/background.jpgs')" }}>
      <div className="w-full max-w-4xl h-[500px] bg-white rounded-lg shadow-md flex overflow-hidden relative border-[10px] border-white">
        <div className="hidden md:block w-1/2 h-full bg-cover rounded-l-lg relative"
             style={{ backgroundImage: "url('https://i.postimg.cc/nz6YzMPg/background.jpgs')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-orange-500/50"></div>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 p-8 relative">
          <h2 className="text-4xl capitalize mb-16 text-center">Login Here</h2>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-base capitalize mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-[90%] text-base border-b border-black pb-1 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-base capitalize mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-[90%] text-base border-b border-black pb-1 ${errors.password ? 'border-red-500' : ''}`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-32 h-8 bg-orange-500 text-white rounded-full capitalize block mx-auto mt-12 cursor-pointer hover:bg-orange-600 transition-colors"
          >
            Login
          </button>
          
          <span className="absolute bottom-5 right-5 text-sm text-gray-500 capitalize cursor-pointer hover:text-gray-700">
            Don't have an account?
          </span>
        </form>
      </div>
    </div>
  );
};

export default Navbar;