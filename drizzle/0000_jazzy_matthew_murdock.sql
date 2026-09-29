CREATE TABLE `assessment_results` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`assessment_id` text NOT NULL,
	`score` integer NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `assessments` (
	`id` text PRIMARY KEY NOT NULL,
	`skill` text NOT NULL,
	`title` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `call_summaries` (
	`session_id` text PRIMARY KEY NOT NULL,
	`summary` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `career_goals` (
	`user_id` text PRIMARY KEY NOT NULL,
	`career_id` text,
	`onboarded` integer DEFAULT 0,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `career_matches` (
	`user_id` text NOT NULL,
	`career_id` text NOT NULL,
	`score` integer NOT NULL,
	`updated_at` text NOT NULL,
	PRIMARY KEY(`user_id`, `career_id`)
);
--> statement-breakpoint
CREATE TABLE `career_skill_requirements` (
	`career_id` text NOT NULL,
	`skill` text NOT NULL,
	`level` integer NOT NULL,
	PRIMARY KEY(`career_id`, `skill`)
);
--> statement-breakpoint
CREATE TABLE `careers` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `companies` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`location` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `confirmed_profile_updates` (
	`suggestion_id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`confirmed_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `ivr_sessions` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`duration` integer NOT NULL,
	`language` text NOT NULL,
	`category` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `learning_paths` (
	`id` text PRIMARY KEY NOT NULL,
	`career_id` text NOT NULL,
	`skill` text NOT NULL,
	`position` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `learning_progress` (
	`user_id` text NOT NULL,
	`path_id` text NOT NULL,
	`progress` integer NOT NULL,
	`updated_at` text NOT NULL,
	PRIMARY KEY(`user_id`, `path_id`)
);
--> statement-breakpoint
CREATE TABLE `opportunities` (
	`id` text PRIMARY KEY NOT NULL,
	`company_id` text NOT NULL,
	`title` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `profiles` (
	`user_id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`profile_picture` text,
	`location` text DEFAULT '',
	`preferred_language` text DEFAULT 'en',
	`education` text DEFAULT '',
	`interests` text DEFAULT '',
	`career_preferences` text DEFAULT '',
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `skills` (
	`name` text PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE `suggested_profile_updates` (
	`id` text PRIMARY KEY NOT NULL,
	`session_id` text NOT NULL,
	`user_id` text NOT NULL,
	`kind` text NOT NULL,
	`value` text NOT NULL,
	`level` integer
);
--> statement-breakpoint
CREATE TABLE `user_skills` (
	`user_id` text NOT NULL,
	`name` text NOT NULL,
	`level` integer NOT NULL,
	`source` text NOT NULL,
	`evidence` text NOT NULL,
	PRIMARY KEY(`user_id`, `name`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`name`) REFERENCES `skills`(`name`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`google_id` text,
	`email` text NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
