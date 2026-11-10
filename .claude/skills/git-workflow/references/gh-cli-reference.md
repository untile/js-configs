# GitHub CLI (gh) Reference

## Authentication

```bash
gh auth login
gh auth status
gh auth logout
```

## Repository Operations

```bash
gh repo view
gh repo view --web
gh repo clone owner/repo
gh repo fork owner/repo
```

## Pull Requests

### Creating PRs

```bash
gh pr create
gh pr create --title "Add feature" --body "Description"
gh pr create --base development --head feature/new-feature
gh pr create --draft
gh pr create --reviewer username1,username2
```

### Viewing PRs

```bash
gh pr list
gh pr view 123
gh pr view 123 --web
gh pr diff 123
gh pr status
```

### Reviewing PRs

```bash
gh pr checkout 123
gh pr review 123
gh pr review 123 --approve
gh pr review 123 --request-changes --body "Comments"
gh pr review 123 --comment --body "Looks good!"
```

### Commenting on PRs

```bash
gh pr comment 123 --body "Great work!"
```

### Merging PRs

```bash
gh pr merge 123 --rebase
gh pr merge 123 --rebase --delete-branch
gh pr merge 123 --auto --rebase
```

### PR Checks

```bash
gh pr checks 123
gh pr checks 123 --watch
```

## Issues

```bash
gh issue list
gh issue view 456
gh issue create --title "Bug report" --body "Description"
gh issue close 456
gh issue reopen 456
gh issue comment 456 --body "Comment text"
```

### Linking Issues to PRs

Use these keywords in PR body to auto-close issues on merge:
- `Closes #123`
- `Fixes #123`
- `Resolves #123`
- `Related to #123` (links without closing)

## Releases

Releases are not created with `gh release create`: they run through the Release workflow, which tags `release/<package>/v<version>`. See [Release Process](docs/architecture/global/release.md).

## Workflow Runs

```bash
gh run list
gh run view <run-id>
gh run view <run-id> --web
```

## Essential Git Commands

```bash
# Branch operations
git checkout -b feature/name
git branch -d feature/name
git fetch origin
git rebase origin/master
git push -u origin feature/name

# Commit operations
git add .
git commit -m "Add feature"
git commit --amend
git commit --fixup <hash>

# History management
git rebase -i HEAD~3
git rebase -i --autosquash HEAD~5
git log --oneline -10
git reflog

# Sync operations
git pull
git push
git push --force-with-lease  # Safe force push (feature branches only)
```
