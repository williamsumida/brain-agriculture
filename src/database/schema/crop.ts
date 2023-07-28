import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const crop = pgTable('crop', {
  id: text("id").primaryKey(),
  name: text('name'),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});

