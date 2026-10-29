# Git and GitHub Workflow

This document describes a practical Git workflow for maintaining projects, tracking changes, and collaborating through GitHub.

## 1. Before Starting Work

- [ ] Confirm the repository and current branch.
- [ ] Check the working tree for existing changes.
- [ ] Pull the latest changes when working with a shared repository.
- [ ] Create a branch for a new feature or fix when appropriate.

Useful commands:

```bash
git status
git branch
git pull
```

Run `git pull` only after checking your current branch and local changes.

## 2. Branch Naming

Use descriptive branch names that communicate the purpose of the work.

Examples:

```text
feature/add-user-authentication
fix/handle-invalid-input
docs/update-readme
refactor/simplify-validation
```

Choose a branching strategy that matches the project's size and collaboration requirements.

## 3. Making Changes

1. Make a small, focused change.
2. Run the application or relevant tests.
3. Review the modified files.
4. Check for accidental files, secrets, and unrelated changes.

Useful commands:

```bash
git status
git diff
git diff --check
```

## 4. Staging and Committing

Stage only the files intended for the commit.

```bash
git add path/to/file
git diff --cached
git commit -m "Add descriptive commit message"
```

Avoid committing secrets, generated files, temporary files, or unrelated changes.

## 5. Pushing Changes

Push the branch to GitHub.

```bash
git push -u origin feature/your-branch-name
```

Replace the example branch name with the actual branch.

## 6. Pull Requests

When using pull requests:

- [ ] Explain the purpose of the change.
- [ ] Summarize the main modifications.
- [ ] Include relevant screenshots for UI changes.
- [ ] Describe the tests performed.
- [ ] Link related issues when applicable.
- [ ] Review automated checks and resolve failures.
- [ ] Address review comments before merging.

Do not merge until required reviews and repository rules are satisfied.

## 7. Keeping the Repository Updated

Before beginning new work, check the repository status and synchronize with the appropriate branch.

When a branch has diverged, inspect the situation before choosing to merge or rebase.

Do not force-push to shared branches unless the team workflow explicitly permits it.

## 8. Resolving Conflicts

1. Inspect the conflicted files.
2. Understand the changes from both sides.
3. Resolve the conflict intentionally.
4. Run relevant tests.
5. Review the final diff.
6. Commit the resolution when appropriate.

Never resolve conflicts by blindly accepting one side without reviewing the consequences.

## 9. Before Finishing

- [ ] Changes are committed and pushed as intended.
- [ ] Tests and relevant checks have been run.
- [ ] The working tree is in the expected state.
- [ ] The branch or pull request has the correct status.
- [ ] Documentation has been updated when necessary.

**Principle:** inspect before changing, test before committing, and review before merging.

