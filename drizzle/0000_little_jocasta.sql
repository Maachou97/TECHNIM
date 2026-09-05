CREATE TABLE `quote_files` (
	`id` text PRIMARY KEY NOT NULL,
	`request_id` text NOT NULL,
	`storage_key` text NOT NULL,
	`filename` text NOT NULL,
	`content_type` text NOT NULL,
	`size` integer NOT NULL,
	FOREIGN KEY (`request_id`) REFERENCES `quote_requests`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE INDEX `idx_quote_files_request_id` ON `quote_files` (`request_id`);--> statement-breakpoint
CREATE TABLE `quote_requests` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`company` text,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`location` text NOT NULL,
	`need` text NOT NULL,
	`created_at` text NOT NULL
);
