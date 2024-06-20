# Setup PKL Action

Composite action to setup a PKL CLI and make it available on PATH.

## Example usage

```yaml
jobs:
  pkl:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup PKL
        uses: Drafteame/setup-pkl-action@main

      - name: Eval
        run: pkl eval -f json test.pkl > test.json

      - name: Print config
        run: cat test.json
```
