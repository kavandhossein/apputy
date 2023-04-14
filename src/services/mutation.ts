import { useMutation } from "react-query";
import { BASE_URI } from ".";
import { UpdateUserInput, UserOneResponse } from "@/types";

export const useUpdateUser = () => {
  const updateUser = async (id: number, body: UpdateUserInput) => {
    const result = await fetch(`${BASE_URI}users/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    return result.json();
  };
  return useMutation((post: { id: number; data: UpdateUserInput }) =>
    updateUser(post.id, post.data)
  );
};

export const useGetOneUsersMutation = () => {
  const fetchOneUser = async (id: number): Promise<UserOneResponse> => {
    const result = await fetch(`${BASE_URI}users/${id}`);
    return result.json();
  };
  return useMutation((id: number) => fetchOneUser(id));
};
