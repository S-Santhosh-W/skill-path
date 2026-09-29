CREATE TABLE `activity_logs` (
	`id` text PRIMARY KEY NOT NULL,
	`organization_id` text NOT NULL,
	`actor_id` text NOT NULL,
	`match_id` text,
	`action` text NOT NULL,
	`from_stage` text,
	`to_stage` text,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `applications` (
	`id` text PRIMARY KEY NOT NULL,
	`match_id` text NOT NULL,
	`user_id` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `candidate_interests` (
	`match_id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`response` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `candidate_matches` (
	`id` text PRIMARY KEY NOT NULL,
	`organization_id` text NOT NULL,
	`opportunity_id` text NOT NULL,
	`user_id` text NOT NULL,
	`score` integer NOT NULL,
	`stage` text DEFAULT 'matched' NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `interviews` (
	`id` text PRIMARY KEY NOT NULL,
	`match_id` text NOT NULL,
	`scheduled_at` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`notes` text DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `notifications` (
	`id` text PRIMARY KEY NOT NULL,
	`recipient_id` text NOT NULL,
	`organization_id` text,
	`type` text NOT NULL,
	`title` text NOT NULL,
	`body` text NOT NULL,
	`match_id` text,
	`read_at` text,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `offers` (
	`id` text PRIMARY KEY NOT NULL,
	`match_id` text NOT NULL,
	`details` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `officer_roles` (
	`user_id` text NOT NULL,
	`role` text NOT NULL,
	PRIMARY KEY(`user_id`, `role`)
);
--> statement-breakpoint
CREATE TABLE `officers` (
	`user_id` text PRIMARY KEY NOT NULL,
	`organization_id` text NOT NULL,
	`active` integer DEFAULT 1 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `opportunity_skills` (
	`opportunity_id` text NOT NULL,
	`skill` text NOT NULL,
	`level` integer DEFAULT 60 NOT NULL,
	`required` integer DEFAULT 1 NOT NULL,
	PRIMARY KEY(`opportunity_id`, `skill`)
);
--> statement-breakpoint
CREATE TABLE `organizations` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `placements` (
	`id` text PRIMARY KEY NOT NULL,
	`match_id` text NOT NULL,
	`placed_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `profile_visibility_settings` (
	`user_id` text PRIMARY KEY NOT NULL,
	`available` integer DEFAULT 0 NOT NULL,
	`visible` integer DEFAULT 0 NOT NULL,
	`location_visible` integer DEFAULT 0 NOT NULL,
	`contact_allowed` integer DEFAULT 0 NOT NULL,
	`visible_skills` text DEFAULT '[]' NOT NULL,
	`organization_id` text,
	`experience` text DEFAULT 'Entry level' NOT NULL,
	`is_demo` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
ALTER TABLE `opportunities` ADD `organization_id` text;--> statement-breakpoint
ALTER TABLE `opportunities` ADD `organization_name` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `opportunities` ADD `location` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `opportunities` ADD `employment_type` text DEFAULT 'Full-time' NOT NULL;--> statement-breakpoint
ALTER TABLE `opportunities` ADD `experience` text DEFAULT 'Entry level' NOT NULL;--> statement-breakpoint
ALTER TABLE `opportunities` ADD `education` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `opportunities` ADD `description` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `opportunities` ADD `deadline` text;--> statement-breakpoint
ALTER TABLE `opportunities` ADD `status` text DEFAULT 'open' NOT NULL;--> statement-breakpoint
ALTER TABLE `opportunities` ADD `created_at` text;