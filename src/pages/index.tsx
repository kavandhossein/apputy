import { Loader, TableScreen } from "@/components";
import { useGetAllUsers } from "@/services";

export default function Apputy() {
  const { data, isLoading } = useGetAllUsers();

  return (
    <div className="w-full flex justify-center">
      {isLoading && <Loader />}
      {data?.data && <TableScreen data={data.data} isLoading={isLoading} />}
    </div>
  );
}
