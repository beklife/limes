import { useQuery } from "@tanstack/react-query";
import { mockEvents } from "@/data/mockEvents";

export function useEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));
      return mockEvents;
    },
  });
}
