import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const countriersPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

function App() {
  return (
    <>
      <section id="center">
        <h1>React World on the go....</h1>
        <Suspense fallback={<h3>All Countries Loading...</h3>}>
          <Countries countriersPromise={countriersPromise}></Countries>
        </Suspense>
      </section>
    </>
  );
}

export default App;
