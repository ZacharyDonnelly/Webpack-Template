import * as React from "react";
import { Suspense } from "react";

const Image = React.lazy(() =>
  import(/* webpackChunkName: "Lazy-Image" */ "./image")
);
const Test: React.FunctionComponent = () => {
  const [load, setLoad] = React.useState(false);
  const LazyComponent: Function = React.useMemo(
    () =>
      React.lazy(() =>
        import(/* webpackChunkName: "Tester-Lazy" */ "./tester")
      ),
    ["./tester"]
  );
  return (
    <div>
      <h2>Testing . . .</h2>
      <button onClick={() => setLoad(!load)}>Click me</button>
      {load ? <LazyComponent /> : null}
      <Suspense fallback="<div>Loading</div>">
        <Image />
      </Suspense>
    </div>
  );
};

export default Test;
