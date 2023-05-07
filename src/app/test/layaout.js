import NavBar from "../../components/navBar";

export default function TestLayout({ children }) {
    return (
      <section>
        <NavBar/>
        {children}
      </section>
    );
  }