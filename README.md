# bff-server-utils

Contains simple utilities I find useful when writing BFF servers.

**Install**
```bash
npx jsr add @mikael/bff-server-utils
```

**Use**
```ts
import { validate } from "@mikael/bff-server-utils";

validate(mobileNumberRegex.test(userMobileNumber), "Please use a valid phone number, 555-555-5555")
```
