import { UseQueryOptions, useQuery } from "react-query";
import { BASE_URI } from ".";
import { ReponseType, User, UserOneResponse } from "@/types";

interface UsersAllResponse extends ReponseType<User[]> {
  errors?: Array<{ message?: string }>;
  page?: number;
  per_page?: number;
  total?: number;
  totla_page?: number;
}

export const useGetAllUsers = <TData = UsersAllResponse, TError = unknown>(
  page?: {
    page?: number;
    delay?: number;
  },
  options?: UseQueryOptions<UsersAllResponse, TError, TData, "users">
) => {
  const fetchAllUsers = async (): Promise<UsersAllResponse> => {
    const result = await fetch(
      `${BASE_URI}users?page=${page?.page}&delay=${page?.delay}`
    );
    return result.json();
  };
  return useQuery("users", fetchAllUsers, options);
};

export const useGetOneUsersQuery = <TData = UserOneResponse, TError = unknown>(
  id: number,
  options?: UseQueryOptions<UserOneResponse, TError, TData, "user">
) => {
  const fetchOneUser = async (): Promise<UserOneResponse> => {
    const result = await fetch(`${BASE_URI}users/${id}`);
    return result.json();
  };
  return useQuery("user", fetchOneUser, options);
};
