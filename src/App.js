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
import CounterComponent from "./userReducer/components/CounterComponent";
import TodoComponent from "./userReducer/components/TodoComponent";
import Tooltip from "./useLayoutEffect/Tooltip";
import HoverComponent from "./useRef/HoverComponent";
import TrackPreviousValue from "./useRef/TrackPreviousValue";
import LayoutComponent from "./useLayoutEffect/LayoutComponent";
import UseTransitionExample from "./useTransition/UseTransitionExample";
import WithoutTransition from "./useTransition/WithoutTransition";
import WithTransition from "./useTransition/WithTransition";
import BooksApp from "./useContext/books-context/components/BooksApp";
import { ParentComponent as ForwareRefComp } from "./react-apis/forwardRef/ParentComponent";
import LazyComponent from "./react-apis/lazy/LazyComponent";
import MemoParent from "./react-apis/memo/MemoParent";

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
          <Route path="/counter-reducer" element={<CounterComponent />} />
          <Route path="/todo-reducer" element={<TodoComponent />} />
          <Route path="/use-layout-effect" element={<Tooltip />} />
          <Route path="/use-ref" element={<HoverComponent />} />
          <Route
            path="/use-ref-track-previous"
            element={<TrackPreviousValue />}
          />
          <Route path="/use-layout-effect" element={<LayoutComponent />} />
          <Route path="/use-transition" element={<UseTransitionExample />} />
          <Route
            path="/without-use-transition"
            element={<WithoutTransition />}
          />
          <Route path="/with-use-transition" element={<WithTransition />} />
          <Route path="/context-books-app" element={<BooksApp />} />
          <Route path="/foward-ref-exp" element={<ForwareRefComp />} />
          <Route path="/lazy-loading" element={<LazyComponent />} />
          <Route path="/memo-api-exp" element={<MemoParent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
