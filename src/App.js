import DebouncedInput from "./useEffect/components/DebouncedInput";
import DomManipulation from "./useEffect/components/DomManipulation";
import EventListnerComponent from "./useEffect/components/EventListnerComponent";
import ExternalDataComponent from "./useEffect/components/ExternalDataComponent";
import GeoChartComponent from "./useEffect/components/GeoChartComponent";
import UseFetch from "./useEffect/components/UseFetch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./useEffect/components/Header";
import UseCallbackParent from "./useCallback/components/UseCallbackParent";
import ParentComponent from "./useCallback/components/ParentComponent";
import WithoutUseMemo from "./useMemo/components/WithoutUseMemo";
import WithUseMemo from "./useMemo/components/WithUseMemo";
import ColorPicker from "./useState/ColorPicker";
import ParentWithMemo from "./memo/ParentWithMemo";
import ParentWithoutMemo from "./memo/ParentWithoutMemo";
import Users from "./useContext/components/Users";

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
          <Route
            path="/with-usecallback-hook"
            element={<UseCallbackParent />}
          />
          <Route
            path="/without-usecallback-hook"
            element={<ParentComponent />}
          />
          <Route path="/without-usememo-hook" element={<WithoutUseMemo />} />
          <Route path="/with-usememo-hook" element={<WithUseMemo />} />
          <Route path="/usestate-colorpicker" element={<ColorPicker />} />
          <Route path="/with-memo" element={<ParentWithMemo />} />
          <Route path="/without-memo" element={<ParentWithoutMemo />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
