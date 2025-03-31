import { useState } from "react";
import FormComponent from "./components/FormComponent";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    Age: "",
    gender: "",
    destination: "",
    nutFree: false,
    lactoseFree: false,
    isVegan: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams();
    for (const key in formData) {
      if (typeof formData[key] === "boolean") {
        if (formData[key]) {
          queryParams.append(key, true);
        }
      } else {
        queryParams.append(key, formData[key]);
      }
    }

    // Redirect to the URL with query params
    window.location.href = `/?${queryParams.toString()}`;
  };

  return (
    <>
      <FormComponent
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
