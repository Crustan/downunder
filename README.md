# Söderberg Down Under

## Git strategy

Work with feature branches. Do not squash merge.

### Branch names

The goal is to have one "feature" branch and pull request per issue.

A branch should have the correct prefix for the issue (`fix`, `feat`, `test`), correct issue number (`1`), and description (usually issue title).

| Prefix | Meaning                                           |
| ------ | ------------------------------------------------- |
| fix    | for fixing a bug                                  |
| feat   | for adding, removing or modifying a feature       |
| test   | for experimenting something which is not an issue |

```sh
git branch <category/reference/description-in-kebab-case>

# e.g.
fix/1/remove-rss
feat/2/add-high-res-images
```

### Commit names

A git commit message should start with a category of change. Pick one of these: `feat`, `fix` or `test`.

| Prefix   | Meaning                                                 |
| -------- | ------------------------------------------------------- |
| fix      | for fixing a bug                                        |
| feat     | for adding, removing or modifying a feature             |
| refactor | for changing code for peformance or convenience purpose |
| chore    | for everything else (docs, formatting, tests, cleanup)  |

```sh
git commit -m '<category: do something; do some other things>'
```
