import { Loader, UserEditScreen } from "@/components";
import { useGetOneUsersQuery } from "@/services";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Apputy() {
  const router = useRouter();

  const { id } = router.query;
  const { data, isLoading } = useGetOneUsersQuery(Number(id), {
    enabled: id ? true : false,
  });

  return (
    <div className="w-full flex justify-center">
      {isLoading && <Loader />}
      {data?.data && <UserEditScreen data={data.data} isLoading={isLoading} />}
    </div>
  );
}
