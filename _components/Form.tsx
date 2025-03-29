"use client";

import { createUser } from "@/utils/actions";
import { useFormState, useFormStatus } from "react-dom";

const formStyle = "max-w-lg flex flex-col gap-y-4 shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded capitalize";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className={btnStyle} type="submit" disabled={pending}>
      {pending ? "submitting" : "submit"}
    </button>
  );
};

const Form = () => {
  const [message, formAction] = useFormState(createUser, null);

  return (
    <form action={formAction} className={formStyle}>
      {message && <p>{message}</p>}
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
      <SubmitButton />
    </form>
  );
};

export default Form;
