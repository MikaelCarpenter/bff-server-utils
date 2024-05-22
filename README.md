# bff-server-utils

Contains simple utilities I find useful when writing BFF servers.

**Install**
```bash
npx jsr add @mikael/bff-server-utils
```

**Use**
```ts
import { prove } from "@mikael/bff-server-utils";

prove(typeof email === "string", "CLIENT_ID is required.")
```
