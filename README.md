# Github Proxy

This is a simple proxy server that allows you to expose private repositories to the public internet.

## Usage

1. Create a new repository on Github.
2. Get a personal access token from Github.
3. via deno:

    ```bash
    deno run -A https://raw.githubusercontent.com/$GITHUB_USER/$GITHUB_PROJECT $GITHUB_TOKEN
    ```

    or via docker:

    ```bash
    docker run -p 8001:8001 ghcr.io/lucsoft/github-proxy https://raw.githubusercontent.com/$GITHUB_USER/$GITHUB_PROJECT $GITHUB_TOKEN
    ```
