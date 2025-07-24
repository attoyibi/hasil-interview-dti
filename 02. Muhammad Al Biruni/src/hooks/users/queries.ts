import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/users.service";

export const useUsers = ({ isEnabled }: { isEnabled: boolean }) => {
  return useQuery({
    queryKey: ["/users"],
    queryFn: () => getUsers(),
    enabled: isEnabled,
  });
};
