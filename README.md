## What I Learned

1. Regex Statefullness: I learned that using the `/g` flag with `.test()` inside a loop is a common bug because the `lastIndex` property doesn't reset automatically.

2. Replace Callbacks: I practised using a function as the second argument to `.replace()`. This is incredibly powerful for "conditional" replacements.

3. Character Filtering: I reinforced that `/[a-z]/gi` is a safe way to ensure we only transform letters and leave numbers or special symbols (like underscores) alone.
