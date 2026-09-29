CREATE TABLE `module_activities` (
	`user_id` text NOT NULL,
	`module_id` text NOT NULL,
	`activity` integer NOT NULL,
	`completed` integer DEFAULT 0 NOT NULL,
	PRIMARY KEY(`user_id`, `module_id`, `activity`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `resource_progress` (
	`user_id` text NOT NULL,
	`module_id` text NOT NULL,
	`resource_id` text NOT NULL,
	`status` text DEFAULT 'not-started' NOT NULL,
	`saved` integer DEFAULT 0 NOT NULL,
	`snapshot` text NOT NULL,
	`updated_at` text NOT NULL,
	PRIMARY KEY(`user_id`, `module_id`, `resource_id`),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
