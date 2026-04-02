---
title: "Automatic Plant Farmer"
date: "Fall 2025"
status: "Ongoing"
role: "Backend Architect"
type: "Research"
tech:
  - Node.js
  - Redis
  - CRDTs
  - WebRTC
excerpt: "Designing a conflict-free replicated data type system for offline-first synchronization across edge devices."
---

# Distributed State Sync

This log captures the research into building robust offline-first sync for distributed edge devices. The goal is to ensure state converges correctly even when connections are intermittent.

## Design Notes

- Evaluating CRDT types for document state and command logs.
- Using WebRTC for peer-to-peer device discovery.
- Leveraging Redis for local checkpointing and reconciliation.

```js
function mergeState(local, remote) {
  return { ...local, ...remote, timestamp: Math.max(local.timestamp, remote.timestamp) };
}
```

## Next Steps

Integrate the CRDT model into the existing sync layer and write a fallback path for partial updates.
