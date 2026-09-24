import { useState } from "react";
import Basic from "./1-Basic";
import FetchPosts from "./2-FetchPosts";
import Cleanup from "./3-Cleanup";
import AsyncPosts from "./4-AsyncPosts";
import Challenge from "./5-Challenge";

const phases = [
  { id: 1, name: "Basic useEffect", component: Basic },
  { id: 2, name: "Fetching Posts", component: FetchPosts },
  { id: 3, name: "Cleanup", component: Cleanup },
  { id: 4, name: "Async & Race Conditions", component: AsyncPosts },
  { id: 5, name: "Build a small Posts Explorer", component: Challenge },
];


export default function UseEffectTab() {
  const [activePhase, setActivePhase] = useState(1);
  const ActiveComponent = phases.find((p) => p.id === activePhase)?.component;

  return (
    <div className="hook-tab">
      <h2>useEffect - Learning Path</h2>
      <div className="phases-menu">
        {phases.map((phase) => (
          <button
            key={phase.id}
            className={`phase-btn ${activePhase === phase.id ? "active" : ""}`}
            onClick={() => setActivePhase(phase.id)}
          >
            Phase {phase.id}: {phase.name}
          </button>
        ))}
      </div>
      <div className="phases-content">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
}


// API SOURCE
// https://jsonplaceholder.typicode.com/guide/