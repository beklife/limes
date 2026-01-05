import {
  type InsertEvent,
  type InsertMenuItem,
  type InsertMessage,
  type Event,
  type MenuItem,
  type Message
} from "@shared/schema";

export interface IStorage {
  getEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  getMenuItems(): Promise<MenuItem[]>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class InMemoryStorage implements IStorage {
  private events: Event[] = [];
  private menuItems: MenuItem[] = [];
  private messages: Message[] = [];
  private eventIdCounter = 1;
  private menuItemIdCounter = 1;
  private messageIdCounter = 1;

  async getEvents(): Promise<Event[]> {
    return [...this.events].sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const event: Event = {
      id: this.eventIdCounter++,
      ...insertEvent,
      imageUrl: insertEvent.imageUrl ?? null,
    };
    this.events.push(event);
    return event;
  }

  async getMenuItems(): Promise<MenuItem[]> {
    return [...this.menuItems];
  }

  async createMenuItem(insertItem: InsertMenuItem): Promise<MenuItem> {
    const item: MenuItem = {
      id: this.menuItemIdCounter++,
      ...insertItem,
      description: insertItem.description ?? null,
    };
    this.menuItems.push(item);
    return item;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const message: Message = {
      id: this.messageIdCounter++,
      ...insertMessage,
      createdAt: new Date(),
    };
    this.messages.push(message);
    return message;
  }
}

export const storage = new InMemoryStorage();
