import React from "react";
import { deleteUser, removeUser } from "@/utils/actions";

const DeleteButton = ({ id }: { id: string }) => {
  return (
    <form>
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="bg-red-500  text-xs rounded p-2">
        delete
      </button>
    </form>
  );
};

export default DeleteButton;
