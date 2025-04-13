
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp } from "lucide-react";

const CaseStudySection = () => {
  return (
    <section id="case-study" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results, Real Impact</h2>
          <p className="text-lg text-homywork-gray max-w-2xl mx-auto">
            See how Homywork transforms listings from zero sales to top performers
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative animate-fade-up">
            <div className="flex flex-col space-y-4">
              <img 
                src="/public/lovable-uploads/bc24322e-f1ae-4f1f-a0f4-10f380595624.png" 
                alt="Before: HomyCasa product listing at $25.00" 
                className="rounded-lg shadow-md"
              />
              <img 
                src="/public/lovable-uploads/4fe7b7e3-cd8e-44e7-9215-32a94b8b7e56.png" 
                alt="After: HomyCasa product listing at $27.00" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="absolute top-1/2 -right-4 bg-green-500 rounded-full p-2 shadow-lg">
              <ArrowUp className="h-5 w-5 text-white" />
            </div>
          </div>
          
          <Card className="border-none shadow-lg animate-fade-up">
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2 text-homywork-darkPurple">Client: HomyCasa</h3>
                <p className="text-homywork-gray">A U.S.-based Walmart furniture seller, and one of our first users.</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-1 text-homywork-purple">Problem:</h4>
                  <p>They manually listed a black foldable table under "Living Room" for $25. The process took 2+ hours — editing images, writing descriptions, filling forms.</p>
                  <p className="mt-2 font-bold">Result: 0 sales.</p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-1 text-homywork-purple">Our Intervention:</h4>
                  <p>Homywork analyzed product context + marketplace data. We repositioned it under "Dining & Party Tables", auto-generated AI images, SEO content, and pushed the listing live in minutes.</p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-1 text-homywork-purple">Outcome:</h4>
                  <p>Now one of their top-selling SKUs — 65 units sold in 30 days, at a higher price ($27).</p>
                </div>
              </div>
              
              <blockquote className="mt-6 p-4 bg-homywork-lightPurple/20 rounded-lg border-l-4 border-homywork-purple italic">
                "Homywork's AI didn't just list our product; it understood where it would actually sell. The difference was immediate and measurable."
              </blockquote>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <img 
            src="/public/lovable-uploads/1db73a78-e2af-4c2c-80d3-d44c4392b089.png" 
            alt="Case Study Summary" 
            className="max-w-3xl mx-auto rounded-lg shadow-md animate-fade-up" 
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
