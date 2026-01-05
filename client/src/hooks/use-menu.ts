import { useQuery } from "@tanstack/react-query";
import { mockMenuItems } from "@/data/mockMenu";

export function useMenuItems() {
  return useQuery({
    queryKey: ["menu-items"],
    queryFn: async () => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      return mockMenuItems;
    },
  });
}
