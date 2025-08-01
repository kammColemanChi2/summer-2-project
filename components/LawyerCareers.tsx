
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, MapPin, Clock, GraduationCap } from "lucide-react";

const LawyerCareers = () => {
  const careers = [
    {
      title: "Corporate Lawyer",
      description: "Specialize in business law, mergers, acquisitions, and corporate compliance.",
      averageSalary: "$165,000",
      salaryRange: "$120k - $250k",
      demandLevel: "High",
      education: "JD + Business Experience",
      experience: "3-5 years",
      locations: ["New York", "San Francisco", "Chicago"],
      growth: "+12%",
      skills: ["Contract Law", "M&A", "Securities", "Compliance"],
      icon: "🏢"
    },
    {
      title: "Criminal Defense Attorney",
      description: "Defend individuals and organizations charged with criminal activity.",
      averageSalary: "$125,000",
      salaryRange: "$85k - $200k",
      demandLevel: "Moderate",
      education: "JD + Criminal Law Focus",
      experience: "2-4 years",
      locations: ["Los Angeles", "Miami", "Dallas"],
      growth: "+8%",
      skills: ["Trial Advocacy", "Criminal Law", "Investigation", "Negotiation"],
      icon: "⚖️"
    },
    {
      title: "Family Law Attorney",
      description: "Handle divorce, child custody, adoption, and other family-related legal matters.",
      averageSalary: "$115,000",
      salaryRange: "$75k - $175k",
      demandLevel: "Steady",
      education: "JD + Family Law Specialization",
      experience: "1-3 years",
      locations: ["Atlanta", "Phoenix", "Seattle"],
      growth: "+6%",
      skills: ["Mediation", "Family Law", "Child Advocacy", "Negotiation"],
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Intellectual Property Lawyer",
      description: "Protect and manage intellectual property rights including patents and trademarks.",
      averageSalary: "$180,000",
      salaryRange: "$140k - $280k",
      demandLevel: "Very High",
      education: "JD + Technical Background",
      experience: "3-6 years",
      locations: ["Silicon Valley", "Boston", "Austin"],
      growth: "+15%",
      skills: ["Patent Law", "Trademark", "IP Strategy", "Technology"],
      icon: "💡"
    },
    {
      title: "Personal Injury Lawyer",
      description: "Represent clients who have been injured due to negligence or wrongdoing.",
      averageSalary: "$135,000",
      salaryRange: "$90k - $220k",
      demandLevel: "High",
      education: "JD + Tort Law Focus",
      experience: "2-5 years",
      locations: ["Houston", "Philadelphia", "Detroit"],
      growth: "+10%",
      skills: ["Litigation", "Personal Injury", "Insurance Law", "Trial Skills"],
      icon: "🏥"
    },
    {
      title: "Environmental Lawyer",
      description: "Work on environmental regulations, sustainability, and climate change law.",
      averageSalary: "$145,000",
      salaryRange: "$110k - $200k",
      demandLevel: "Growing",
      education: "JD + Environmental Studies",
      experience: "2-4 years",
      locations: ["Washington DC", "Denver", "Portland"],
      growth: "+18%",
      skills: ["Environmental Law", "Regulations", "Policy", "Sustainability"],
      icon: "🌱"
    }
  ];

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "Very High": return "bg-green-500";
      case "High": return "bg-blue-500";
      case "Growing": return "bg-purple-500";
      case "Moderate": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section className="py-20 bg-navy-50">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-navy-900 border-navy-200">
            Career Center
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Legal Career Paths & Salaries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore different legal specializations with comprehensive salary data, requirements, and career insights to help you make informed decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careers.map((career, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{career.icon}</div>
                  <Badge className={`${getDemandColor(career.demandLevel)} text-white`}>
                    {career.demandLevel} Demand
                  </Badge>
                </div>
                <CardTitle className="text-xl text-navy-900 group-hover:text-navy-700 transition-colors">
                  {career.title}
                </CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {career.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Salary Information */}
                <div className="bg-navy-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Average Salary</span>
                    <div className="flex items-center space-x-1 text-green-600">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm font-medium">{career.growth}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-navy-900">{career.averageSalary}</div>
                  <div className="text-sm text-gray-500">Range: {career.salaryRange}</div>
                </div>

                {/* Requirements */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <GraduationCap className="h-4 w-4 text-navy-600" />
                    <span className="text-gray-600">{career.education}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-navy-600" />
                    <span className="text-gray-600">Experience: {career.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-navy-600" />
                    <span className="text-gray-600">{career.locations.slice(0, 2).join(", ")}</span>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {career.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {career.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{career.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white mt-4">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Need Personalized Career Guidance?
            </h3>
            <p className="text-gray-600 mb-6">
              Get one-on-one consultation with experienced legal professionals to plan your career path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-navy-900 hover:bg-navy-800 text-white">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white">
                View All Careers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerCareers;
