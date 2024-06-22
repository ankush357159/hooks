import React, { Suspense, lazy } from "react";
import "./LazyComponent.css";
const MarkdownPreview = lazy(() => import("./MarkdownPreview"));

const LazyComponent = () => {
  return (
    <div className="app">
      <h2>Lazy loading example</h2>
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <MarkdownPreview />
      </Suspense>
    </div>
  );
};

export default LazyComponent;
