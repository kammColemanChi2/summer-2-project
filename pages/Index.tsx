
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import LawyerCareers from "@/components/LawyerCareers";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <LawyerCareers />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
