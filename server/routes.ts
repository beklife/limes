import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.events.list.path, async (_req, res) => {
    const events = await storage.getEvents();
    res.json(events);
  });

  app.get(api.menuItems.list.path, async (_req, res) => {
    const items = await storage.getMenuItems();
    res.json(items);
  });

  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      await storage.createMessage(input);
      res.status(201).json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data if empty
  const events = await storage.getEvents();
  if (events.length === 0) {
    await storage.createEvent({
      bandName: "THE RATS",
      genre: "Punk Rock",
      date: new Date(Date.now() + 86400000 * 2), // 2 days from now
      doorTime: "19:00",
      ticketPrice: "5-10€ Donation",
      description: "Local legends return for a chaotic night.",
      imageUrl: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80"
    });
    await storage.createEvent({
      bandName: "NOISE COMPLAINT",
      genre: "Hardcore",
      date: new Date(Date.now() + 86400000 * 5),
      doorTime: "20:00",
      ticketPrice: "8€",
      description: "Loud, fast, and angry.",
      imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80"
    });
    await storage.createEvent({
      bandName: "SOLI-PARTY",
      genre: "DJ Set / Alternative",
      date: new Date(Date.now() + 86400000 * 9),
      doorTime: "20:00",
      ticketPrice: "Donation",
      description: "Solidarity party for local initiatives.",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80"
    });
  }

  const menuItems = await storage.getMenuItems();
  if (menuItems.length === 0) {
    // Drinks
    await storage.createMenuItem({ name: "Reissdorf Kölsch", description: "Fresh from tap", price: "1.60€", category: "drink" });
    await storage.createMenuItem({ name: "Pils", description: "Bottle", price: "2.50€", category: "drink" });
    await storage.createMenuItem({ name: "Mate", description: "Classic", price: "2.50€", category: "drink" });
    await storage.createMenuItem({ name: "Mexikaner", description: "Spicy & Homemade", price: "1.50€", category: "drink" });
    
    // Food
    await storage.createMenuItem({ name: "Vegan Currywurst", description: "With homemade sauce & bread", price: "5.50€", category: "food" });
    await storage.createMenuItem({ name: "Chili Sin Carne", description: "Spicy, with soy mince", price: "6.00€", category: "food" });
    await storage.createMenuItem({ name: "Homemade Cake", description: "Vegan options available", price: "2.50€", category: "food" });
  }

  return httpServer;
}
