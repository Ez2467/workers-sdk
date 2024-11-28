import { defineNamespace } from "../core";
import "./object";
import "./bucket";
import "./sippy";
import "./notification";
import "./domain";
import "./public-dev-url";
import "./lifecycle";
import "./cors";

defineNamespace({
	command: "wrangler r2",
	metadata: {
		description: "📦 Manage R2 buckets & objects",
		status: "stable",
		owner: "Product: R2",
	},
});
