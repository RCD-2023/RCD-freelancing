---
name: feature
description: Manage current feature workflow - start, review, explain or complete
argument-hint: load|start|review|explain|complete
---

# Feature Workflow

Manages the full lifecycle of a feature from spec to merge.

## Working File

@context/current-feature.md

### File Structure

current-feature.md has these sections:

- `# Current Feature` - H1 heading with feature name when active
- `## Status` - Not Started | In Progress | Complete
- `## Goals` - Bullet points of what success looks like
- `## Notes` - Additional context, constraints, or details from spec
- `## History` - Completed features (append only!). The last one should be added at the end of the list. Add number to every item in the list to know their order.

## Task

Execute the requested action: $ARGUMENTS

| Action     | Description                                               |
| ---------- | --------------------------------------------------------- |
| `load`     | Load a feature spec or inline description                 |
| `start`    | Begin implementation, create branch                       |
| `review`   | Check goals met, code quality                             |
| `explain`  | Document what changed and why                             |
| `complete` | Commit, push, merge, reset                                |

See [actions/](actions/) for detailed instructions.

If no action provided, explain the available options.