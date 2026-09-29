CREATE TABLE `contact_shares` (
	`match_id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`email` text NOT NULL,
	`shared_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `learning_events` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`kind` text NOT NULL,
	`detail` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `skill_history` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`skill` text NOT NULL,
	`level` integer NOT NULL,
	`source` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `skill_verifications` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`skill` text NOT NULL,
	`level` integer NOT NULL,
	`evidence` text NOT NULL,
	`kind` text NOT NULL,
	`reviewer_id` text NOT NULL,
	`organization_id` text NOT NULL,
	`notes` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
ALTER TABLE `opportunities` ADD `work_mode` text DEFAULT 'On-site' NOT NULL;--> statement-breakpoint
ALTER TABLE `opportunities` ADD `vacancies` integer DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE `opportunities` ADD `salary` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `opportunities` ADD `certifications` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `opportunities` ADD `category` text DEFAULT 'Other' NOT NULL;