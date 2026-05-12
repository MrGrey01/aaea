// ── Relations ────────────────────────────────────────────
import { relations } from "drizzle-orm";
import { users } from "./user";
import { accounts } from "./account";
import { sessions } from "./session";
import { sections, statItems, featureItems } from "./components";
import { blogPosts, blogCategories, blogTags, blogPostTags } from "./blog";
import {
  bookings,
  bookingSlotReservations,
  bookingTimeSlots,
} from "./bookings";

export const userRelations = relations(users, ({ many }) => ({}));

export const usersRelations = relations(users, ({ many }) => ({
  sessions: many(sessions),
  accounts: many(accounts),
}));

export const sectionsRelations = relations(sections, ({ many }) => ({
  statItems: many(statItems),
  featureItems: many(featureItems),
}));

export const statItemsRelations = relations(statItems, ({ one }) => ({
  section: one(sections, {
    fields: [statItems.sectionId],
    references: [sections.id],
  }),
}));

export const featureItemsRelations = relations(featureItems, ({ one }) => ({
  section: one(sections, {
    fields: [featureItems.sectionId],
    references: [sections.id],
  }),
}));

// blog
// lib/db/schema/relations.ts — add these

export const blogPostsRelations = relations(blogPosts, ({ one, many }) => ({
  author: one(users, { fields: [blogPosts.authorId], references: [users.id] }),
  category: one(blogCategories, {
    fields: [blogPosts.categoryId],
    references: [blogCategories.id],
  }),
  postTags: many(blogPostTags),
}));

export const blogCategoriesRelations = relations(
  blogCategories,
  ({ many }) => ({
    posts: many(blogPosts),
  }),
);

export const blogTagsRelations = relations(blogTags, ({ many }) => ({
  postTags: many(blogPostTags),
}));

export const blogPostTagsRelations = relations(blogPostTags, ({ one }) => ({
  post: one(blogPosts, {
    fields: [blogPostTags.postId],
    references: [blogPosts.id],
  }),
  tag: one(blogTags, {
    fields: [blogPostTags.tagId],
    references: [blogTags.id],
  }),
}));

export const bookingSlotReservationsRelations = relations(
  bookingSlotReservations,
  ({ one }) => ({
    booking: one(bookings, {
      fields: [bookingSlotReservations.bookingId],
      references: [bookings.id],
    }),
    timeSlot: one(bookingTimeSlots, {
      fields: [bookingSlotReservations.timeSlotId],
      references: [bookingTimeSlots.id],
    }),
  }),
);
