const FormComponent = ({ formData, handleChange, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Personal Info</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <h2>Gender</h2>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleChange}
        />
        Male
        <br />
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleChange}
        />
        Female
        <br />
        <h2>Destination</h2>
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        >
          <option value="">-- Choose a destination --</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
          <option value="USA">USA</option>
        </select>
        <h2>Dietary Restrictions</h2>
        <input
          type="checkbox"
          name="lactoseFree"
          checked={formData.lactoseFree}
          onChange={handleChange}
        />
        Lactose Free
        <br />
        <input
          type="checkbox"
          name="nutFree"
          checked={formData.nutFree}
          onChange={handleChange}
        />
        Nut Free
        <br />
        <input
          type="checkbox"
          name="isVegan"
          checked={formData.isVegan}
          onChange={handleChange}
        />
        Vegan
        <br />
        <button type="submit">Submit</button>
      </form>
      <div className="form-summary">
        <h3>Entered Information:</h3>
        <p>
          <strong>Name:</strong> {formData.firstName} {formData.lastName}
        </p>
        <p>
          <strong>Age:</strong> {formData.age}
        </p>
        <p>
          <strong>Gender:</strong> {formData.gender}
        </p>
        <p>
          <strong>Destination:</strong> {formData.destination}
        </p>
        <p>
          <strong>Dietary Restrictions:</strong>
          <ul>
            <li>Nut free: {formData.nutFree ? "Yes" : "No"}</li>
            <li>Lactose free: {formData.lactoseFree ? "Yes" : "No"}</li>
            <li>Vegan: {formData.isVegan ? "Yes" : "No"}</li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default FormComponent;
