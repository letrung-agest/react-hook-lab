import { useState } from "react";
import BasicState from "./1-BasicState";
import MultipleStates from "./2-MultipleStates";
import UpdatingBasedOnPrevious from "./3-UpdatingBasedOnPrevious";
import ObjectState from "./4-ObjectState";
import ArrayState from "./5-ArrayState";
import InitializerFunction from "./6-InitializerFunction";
import KeyReset from "./7-KeyReset";
import TrackingChanges from "./8-TrackingChanges";

const phases = [
  { id: 1, name: "Adding a State Variable", component: BasicState },
  { id: 2, name: "Multiple State Variables", component: MultipleStates },
  { id: 3, name: "Updating Based on Previous", component: UpdatingBasedOnPrevious },
  { id: 4, name: "Updating Objects", component: ObjectState },
  { id: 5, name: "Updating Arrays", component: ArrayState },
  { id: 6, name: "Initializer Function", component: InitializerFunction },
  { id: 7, name: "Resetting State with Key", component: KeyReset },
  { id: 8, name: "Tracking Changes", component: TrackingChanges },
];

export default function UseStateTab() {
  const [activePhase, setActivePhase] = useState(1);
  const ActiveComponent = phases.find((p) => p.id === activePhase)?.component;

  return (
    <div className="hook-tab">
      <h2>useState - Learning Path</h2>
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
