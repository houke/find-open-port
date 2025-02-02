<!-- Generated by generator-nlm -->

# Contributing

🎉🏅 Thanks for helping us improve this project! 🙏

This document outlines some of the practices we care about.
If you have any questions or suggestions about the process,
feel free to [open an issue](#reporting-issues)
 or [reach out to us directly](#contact).
## How Can I Contribute?

### Reporting Issues

If you find any mistakes in the docs or a bug in the code,
please [open an issue in Github](https://github.com/testiumjs/find-open-port/issues/new) so we can look into it.
You can also [create a PR](#contributing-code) fixing it yourself, or course.

If you report a bug, please follow these guidelines:

* Make sure the bug exists in the latest version.
* Include instructions on how to reproduce the issue.
  The instructions should be as minimal as possible
  and answer the three big questions:
  1. What are the exact steps you took? This includes the exact versions of node, npm, and any packages involved.
  1. What result are you expecting?
  1. What is the actual result?

### Improving Documentation

For small documentation changes, you can use [Github's editing feature](https://help.github.com/articles/editing-files-in-another-user-s-repository/).
The only thing to keep in mind is to prefix the commit message with "docs: ".
The detault commit message generated by Github will lead to a failing CI build.

For larger updates to the documentation
it might be better to follow the [instructions for contributing code below](#contributing-code).

### Contributing Code

**Note:** If you're planning on making substantial changes,
please [open an issue first to discuss your idea](#reporting-issues).
Otherwise you might end up investing a lot of work
only to discover that it conflicts with plans the maintainers might have.

The general steps for creating a pull request are:

1. Create a branch for your change.
   Always start your branch from the latest `master`.
   We often prefix the branch name with our initials, e.g. `jk-a-change`.
1. Run `npm install` to install the dependencies.
1. If you're fixing a bug, be sure to write a test *first*.
   That way you can validate that the test actually catches the bug and doesn't pass.
1. Make your changes to the code.
   Remember to update the tests if you add new features or change behavior. 
1. Run the tests via `npm test`. This will also run style checks and other validations.
   You might see errors about uncommitted files.
   This is expected until you commit your changes.
1. Once you're done, `git add .` and `git commit`.
   Please follow the [commit message conventions](#commits--commit-messages) described below.
1. Push your branch to Github & create a PR.

#### Code Style

In addition to any linting rules the project might include,
a few general rules of thumb:

* Try to match the style of the rest of the code.
* We prefer simple code that is easy to understand over terse, expressive code.
* We try to structure projects by semantics instead of role.
  E.g. we'd rather have a `tree.js` module that contains tree traversal-related helpers
  than a `helpers.js` module.
* Actually, if you create helpers you might want to put those into a separate package.
  That way it's easier to reuse them.

#### Commits & Commit Messages

Please follow the [angular commit message conventions](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#-git-commit-guidelines).
We use an automated tool for generating releases
that depends on the conventions to determine the next version and the content of the changelog.
Commit messages that don't follow the conventions will cause `npm test` (and thus CI) to fail.

The short summary - a commit message should look like this:

```
<type>: <subject>

<body>

<references>

<footer>
```

Everything but the first line is optional.
The empty lines between the different parts are required.

* `<type>`: One of the following:
  - **feat:** Introduces a new feature. This will cause the minor version to go up.
  - **fix:** A bug fix. Causes a patch version bump.
  - **docs:** Changes to the documentation.
    This will also cause an increase of the patch version so that the changes show up in the npm registry.
  - **style:** Cleanup & lint rule fixes.
    Note that often it's better to just amend the previous commit if it introduced lint errors.
  - **refactor:** Changes to the code structure without fixing bugs or adding features.
  - **perf:** Performance optimizations.
  - **test:** Fixing existing tests or adding missing ones.
    Just like with **style**, if you add tests to a feature you just introduced in the previous commit,
    consider keeping the tests and the feature in the same commit instead.
  - **chore:** Changes to the project setup and tools, dependency bumps, house-keeping.
* `<subject>`: A [good git commit message subject](http://chris.beams.io/posts/git-commit/#limit-50).
  - Keep it brief. If possible the whole first line should have at most 50 characters.
  - Use imperative mood. "Create" instead of "creates" or "created".
  - No period (".") at the end.
* `<body>`: Motivation for the change and any context required for understanding the choices made.
  Just like the subject, it should use imperative mood.
* `<references>`: Any URLs relevant to the PR go here.
  Use one line per URL and prefix it with the kind of relationship, e.g. "Closes: " or "See: ".
  If you are referencing an issue in your commit body or PR description,
  never use `#123` but the full URL to the issue or PR you are referencing.
  That way the reference is easy to resolve from the git history without having to "guess" the correct link
  even if the commit got cherry-picked or merged into a different project.
* `<footer>`: This part only applies if your commit introduces a breaking change.
  It's important this is present, otherwise the major version will not increase.
  See below for an example.

##### Examples

A feature that introduces a breaking change:

```
feat: Support --yes CLI option

For existing projects all prompts can be inferred automatically.
Manual confirmation for each default provides no value in that case.

Closes https://github.com/my/project/issues/123

BREAKING CHANGE: This removes support for interactive password entry.
Users will have to login beforehand.
```

A simple bug fix:

```
fix: Handle multi-byte characters in search logic
```

## Contact

* Chat: [http://signup.testiumjs.com/](http://signup.testiumjs.com/)
