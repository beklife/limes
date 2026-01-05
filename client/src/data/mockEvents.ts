import type { Event } from "@shared/schema";

export const mockEvents: Event[] = [
  {
    id: 1,
    bandName: "The Midnight Riders",
    genre: "Rock / Alternative",
    date: new Date("2026-02-15T20:00:00"),
    doorTime: "19:30",
    ticketPrice: "€12",
    description: "High-energy rock night with local favorites The Midnight Riders. Expect loud guitars and good vibes!",
    imageUrl: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=800&q=80",
  },
  {
    id: 2,
    bandName: "Jazz Collective",
    genre: "Jazz / Soul",
    date: new Date("2026-02-22T21:00:00"),
    doorTime: "20:30",
    ticketPrice: "€10",
    description: "Smooth jazz evening with the talented Jazz Collective. Perfect for a relaxed night out.",
    imageUrl: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80",
  },
  {
    id: 3,
    bandName: "Electronic Dreams",
    genre: "Electronic / Techno",
    date: new Date("2026-03-01T22:00:00"),
    doorTime: "21:30",
    ticketPrice: "€15",
    description: "Dance the night away with Electronic Dreams. Bring your energy!",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
  },
];
