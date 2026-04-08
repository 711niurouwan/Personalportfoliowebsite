---
title: "Plant Watering System"
date: "Winter 2025"
status: "Planning"
role: "Full-Stack Dev"
type: "Prototype"
tech:
  - React
  - Three.js
  - WebSockets
  - Go
image: "https://placehold.co/600x600/1a232e/d9a7b0?text=Gears+Dashboard"
note: "Need to revisit the rotation math later..."
notePos: "-bottom-6 -left-6 -rotate-3"
excerpt: "Prototyping a real-time calibration dashboard for robotic joints with live torque and angle telemetry."
---

# Calibration Gears Dashboard

This project explores a real-time dashboard for mechanical calibration. It streams joint telemetry and visualizes torque and rotational metrics in a 3D workspace.

## What Worked

- Implemented live WebSocket telemetry updates.
- Built a responsive Three.js gear visualization.
- Created a calibration flow with data replay and annotated failure states.

## Follow Up

The rotation math needs another pass before this prototype can become an embedded UI component.
