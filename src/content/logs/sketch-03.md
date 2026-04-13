---
title: "Automatic 3D-Print Farm"
date: "Fall 2025"
status: "Published"
role: 
type: "Prototype"
note: "Need to revisit later..."
tech:
excerpt: "..."
---

# Distributed State Sync

...

## Design Notes

- ...

```js
function mergeState(local, remote) {
  return { ...local, ...remote, timestamp: Math.max(local.timestamp, remote.timestamp) };
}
```

## Next Steps

...