import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useMenuItems() {
  return useQuery({
    queryKey: [api.menuItems.list.path],
    queryFn: async () => {
      const res = await fetch(api.menuItems.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch menu items");
      return api.menuItems.list.responses[200].parse(await res.json());
    },
  });
}
