import { 
  users, 
  contacts, 
  newsletterSubscribers,
  type User, 
  type InsertUser,
  type Contact,
  type InsertContact,
  type NewsletterSubscriber,
  type InsertNewsletter
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContact(contact: InsertContact): Promise<Contact>;
  subscribeNewsletter(subscriber: InsertNewsletter): Promise<NewsletterSubscriber>;
  getNewsletterSubscriber(email: string): Promise<NewsletterSubscriber | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private newsletterSubscribers: Map<number, NewsletterSubscriber>;
  private currentUserId: number;
  private currentContactId: number;
  private currentSubscriberId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.newsletterSubscribers = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentSubscriberId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async subscribeNewsletter(insertSubscriber: InsertNewsletter): Promise<NewsletterSubscriber> {
    // Check if email already exists
    const existing = Array.from(this.newsletterSubscribers.values()).find(
      (subscriber) => subscriber.email === insertSubscriber.email
    );
    
    if (existing) {
      throw new Error("Email already subscribed");
    }

    const id = this.currentSubscriberId++;
    const subscriber: NewsletterSubscriber = { 
      ...insertSubscriber, 
      id, 
      createdAt: new Date()
    };
    this.newsletterSubscribers.set(id, subscriber);
    return subscriber;
  }

  async getNewsletterSubscriber(email: string): Promise<NewsletterSubscriber | undefined> {
    return Array.from(this.newsletterSubscribers.values()).find(
      (subscriber) => subscriber.email === email
    );
  }
}

export const storage = new MemStorage();
