import axios from 'axios';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const newURL = 'https://myapp-25758-default-rtdb.firebaseio.com/employees.json';

export default function AddEmployee() {
  const [image, setImage] = useState(null);
  const { theme } = useContext(ThemeContext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let val = e.target;
    let obj = {
      name: val[0].value,
      email: val[1].value,
      department: val[2].value,
      date: val[3].value,
      salary: val[4].value,
      image: image || '',
    };

    axios
      .post(newURL, obj)
      .then(() => alert('Data Added!'))
      .catch((err) => console.log(err));
  };

  return (
    <div
      className={`${theme ? 'dark' : 'light'
        }  flex items-center justify-center transition-colors duration-300`}
    >
      <form
        onSubmit={handleSubmit}
        className={`${theme ? 'dark' : 'light'
          } p-6 rounded-lg shadow-md w-full  max-w-md`}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Employee Form
        </h2>
        <div className="mb-4 ">
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
            Department
          </label>
          <select
            className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          >
            <option value="">Select a department</option>
            <option value="Tech">Tech</option>
            <option value="Finance">Finance</option>
            <option value="Operations">Operations</option>
            <option value="HR">HR</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
            Date of Joining
          </label>
          <input
            type="date"
            className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
            Salary
          </label>
          <input
            type="number"
            placeholder="Enter salary"
            className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            required
          />
        </div>

        {/* Image Upload Section */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
            Profile Picture
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          />
          {image && (
            <div className="mt-2">
              <img
                src={image}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-slate-500 text-white font-medium p-2 rounded-lg hover:bg-slate-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
