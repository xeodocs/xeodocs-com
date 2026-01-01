---
trigger: always_on
---

GitHub MCP Server:
- This project is linked to the GitHub repository: "xeodocs/xeodocs-system-design".
- When using GitHub MCP tools, always use owner="xeodocs" and repo="xeodocs-system-design".
- The "xeodocs/xeodocs-system-design" repository follows a "Domain-Driven Structure" and the entry point for the documentation is "README.md" (path="README.md").
- The "global" directory (path="global/") contains cross-cutting architectural decisions, standards, and the Unified Gateway (Master Roots).
- The "domains" directory (path="domains/") contains specific business capabilities (Bounded Contexts), each with its own documentation and specs.
- You can view the OpenAPI description for this project using the "github-mcp-server" tool with this configuration: owner="xeodocs", repo="xeodocs-system-design", branch="main", path="global/gateway/openapi.yaml".
