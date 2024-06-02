import DebouncedInput from "./components/DebouncedInput";
import DomManipulation from "./components/DomManipulation";
import EventListnerComponent from "./components/EventListnerComponent";
import ExternalDataComponent from "./components/ExternalDataComponent";
import GeoChartComponent from "./components/GeoChartComponent";
import UseFetch from "./components/UseFetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ExternalDataComponent />} />
          <Route path="/dom-manipulation" element={<DomManipulation />} />
          <Route path="/chart" element={<GeoChartComponent />} />
          <Route path="/event-listener" element={<EventListnerComponent />} />
          <Route path="/debounce" element={<DebouncedInput />} />
          <Route path="/custom-hook" element={<UseFetch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
