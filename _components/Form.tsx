import React from "react";

// Server Action (should be in a separate server component file)
const createUser = async (formData: FormData) => {
  "use server";
  console.log("creating user...");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  console.log(`Creating user: ${firstName} ${lastName}`);
};

const formStyle = "max-w-lg flex flex-col gap-y-4 shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded capitalize";

const Form = () => {
  return (
    <form action={createUser} className={formStyle}>
      <h2 className="text-xl capitalize">create user</h2>
      <input
        type="text"
        name="firstName"
        defaultValue="peter"
        required
        className={inputStyle}
      />
      <input
        type="text"
        name="lastName"
        defaultValue="smith"
        required
        className={inputStyle}
      />
      <button className={btnStyle} type="submit">
        submit
      </button>
    </form>
  );
};

export default Form;
