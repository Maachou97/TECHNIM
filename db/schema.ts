import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const quoteRequests = sqliteTable('quote_requests', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  company: text('company'),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  location: text('location').notNull(),
  need: text('need').notNull(),
  createdAt: text('created_at').notNull(),
});

export const quoteFiles = sqliteTable('quote_files', {
  id: text('id').primaryKey(),
  requestId: text('request_id').notNull().references(() => quoteRequests.id, { onDelete: 'cascade' }),
  storageKey: text('storage_key').notNull(),
  filename: text('filename').notNull(),
  contentType: text('content_type').notNull(),
  size: integer('size').notNull(),
}, (table) => [index('idx_quote_files_request_id').on(table.requestId)]);
