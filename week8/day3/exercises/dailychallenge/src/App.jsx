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

  return (
    <>
      <FormComponent
        handleChange={handleChange}
        formData={formData}
      />
    </>
  );
}

export default App;
