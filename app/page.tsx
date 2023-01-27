import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ShortenerForm from "./components/ShortenerForm";
import Stats from "./components/Stats";
import FeatureListBox from "./components/FeatureListBox";
import LinkList from "./components/LinkList";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
    return (
        <>
            <NavBar />
            {/* hero section */}
            <section id="hero">
                <Hero />
            </section>

            {/* shorten section */}
            <section id="shorten" className="relative bg-gray-100">
                {/* contianer */}
                <div className="max-w-4xl mx-auto p-6 space-y-6">
                    <ShortenerForm />
                    <LinkList />
                </div>
            </section>
            <section id="stats" className="py-24 bg-gray-100">
                <Stats />
            </section>
            <section id="feature-box" className="pb-32 bg-gray-100">
                <FeatureListBox />
            </section>
            <section id="cta" className="py-24 bg-darkViolet">
                <Cta />
            </section>

            <Footer />
        </>
    )
}