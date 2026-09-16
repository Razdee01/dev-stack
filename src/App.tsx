import { Suspense } from "react";
import "./App.css";
import ExploreTech from "./components/exploreTech/ExploreTech";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import type { iTech } from "./type";
import Footer from "./components/Footer";

const technologiesFetch=async():Promise<iTech[]>=>{
  const res=await fetch("/data.json")
  const data=await res.json()
  return data

}

function App() {
  const technologiesPromise=technologiesFetch()

  
  
  return (
    <>
    <NavBar></NavBar>
    <Hero></Hero>
    <Suspense fallback={<p>Loading...</p>}>
        <ExploreTech technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer></Footer>
      </>
  );
}

export default App;
