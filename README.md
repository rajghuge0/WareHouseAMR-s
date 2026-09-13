# AMR Fleet Coordination Platform — Frontend Prototype

**Edge-AI Based Distributed Fleet Coordination for Autonomous Mobile Robots (AMRs) in Smart Warehouses**
SIH 2026 · PS ID 26123 · Organization: Bharat Electronics Limited (BEL)

This is a **software-only** browser prototype — a warehouse digital twin and simulation
platform that visually demonstrates decentralized, peer-to-peer AMR coordination. No
physical robot hardware is represented; every robot, sensor reading and event in this
app is a client-side simulation.

## Run it locally

\`\`\`bash
npm install
npm run dev
\`\`\`

Then open the printed local URL (usually http://localhost:5173).

To build a production bundle:

\`\`\`bash
npm run build
npm run preview
\`\`\`

## What to demo

- **Dashboard** (/) — control-room overview: KPIs, live digital twin, comms topology,
  fleet table, recent tasks, alerts, quick actions.
- **Digital Twin** (/digital-twin) — full-size warehouse view with live conflict,
  re-routing, failure and network-loss narration panels.
- **Simulation Center** (/simulation) — pick a scripted scenario (Normal, Traffic
  Conflict, Blocked Aisle, Robot Failure, Network Loss) and Start / Pause / Reset it.
- **Conflict Monitor**, **Network Topology**, **Fleet/Task Management**,
  **Analytics & Reports**, **Audit & Logs** — supporting deep-dive views.

### Live interactive demos (buttons on Dashboard / Digital Twin)

| Button | What it shows |
|---|---|
| Block Aisle (Test) | Blocks the shared aisle, AMR-02 automatically re-routes; old vs. new route shown |
| Simulate Robot Failure | AMR-03 drops offline; its task is reassigned to a healthy robot ("TASK REASSIGNED") |
| Network Loss Test | AMR-02 loses its peer link and enters "LOCAL FALLBACK MODE ACTIVE"; other robots keep working |
| Conflict detection | Runs automatically whenever AMR-01 and AMR-02 approach the shared intersection |

All performance numbers are explicitly labelled **Demo Data** / **Simulation Result**.

## Tech stack

React 19 + Vite, React Router, Tailwind CSS, Recharts, lucide-react. State is managed
with a single SimulationContext (src/state/SimulationContext.jsx) driving a
90ms simulation tick — this is the seam where a real backend/WebSocket feed would plug
in later (swap the tick's mock updates for incoming socket messages).

## Project structure

\`\`\`
src/
  data/            mock warehouse layout, robots, tasks, path-interpolation helpers
  state/           SimulationContext (reducer + tick loop + demo actions)
  components/
    layout/        Sidebar, Topbar, page Layout
    ui/             Panel, Badge, Button, Sparkline, StatusDot
    twin/           DigitalTwin (SVG warehouse), CommsTopology
    dashboard/      KPI cards, tables, alerts, quick actions, performance strip
  pages/           one file per sidebar route
\`\`\`
