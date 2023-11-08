"use client";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Builder } from "@/components/builder/builder.component";

export default function BuilderPage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Builder />
    </DndProvider>
  );
}
