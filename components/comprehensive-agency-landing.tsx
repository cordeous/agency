'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Flame, Code, Zap, Rocket, CheckCircle, ArrowRight, Calendar } from 'lucide-react'

export function ComprehensiveAgencyLandingComponent() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const projects = [
    { 
      id: 1, 
      title: "TechFlow", 
      description: "AI-powered project management", 
      summary: "Streamlined project management with AI-driven insights and automation.",
      services: ["Web Development", "AI Integration", "UI/UX Design"],
      image: "/placeholder.svg?height=200&width=300" 
    },
    { 
      id: 2, 
      title: "EcoTrack", 
      description: "Sustainability monitoring platform", 
      summary: "Real-time environmental impact tracking for businesses committed to sustainability.",
      services: ["Web Development", "Mobile Apps", "Data Visualization"],
      image: "/placeholder.svg?height=200&width=300" 
    },
    { 
      id: 3, 
      title: "MindWave", 
      description: "Mental health analytics app", 
      summary: "Personalized mental health insights and recommendations powered by machine learning.",
      services: ["Mobile Apps", "AI Integration", "UI/UX Design"],
      image: "/placeholder.svg?height=200&width=300" 
    },
  ]

  const processSteps = [
    { icon: <Flame className="h-8 w-8 text-blue-500" />, title: "Ignite", description: "We spark your idea into a clear vision" },
    { icon: <Code className="h-8 w-8 text-green-500" />, title: "Develop", description: "Rapid prototyping and agile development" },
    { icon: <Zap className="h-8 w-8 text-yellow-500" />, title: "Optimize", description: "Performance tuning and user testing" },
    { icon: <Rocket className="h-8 w-8 text-purple-500" />, title: "Launch", description: "Seamless deployment and market entry" },
  ]

  const services = [
    { title: "Web Development", description: "Custom web applications tailored to your needs" },
    { title: "Mobile Apps", description: "Native and cross-platform mobile solutions" },
    { title: "AI Integration", description: "Implement cutting-edge AI to enhance your products" },
    { title: "UI/UX Design", description: "Create intuitive and engaging user experiences" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Flame className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">NexusForge</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('process')} 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Pricing
            </button>
          </nav>
          <Button className="bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
        </div>
      </header>

      <main className="pt-24">
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-gray-900">
            Forge Your Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Masterpiece</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            We blend cutting-edge technology with creative brilliance to craft digital experiences that captivate, engage, and inspire.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Explore Our Work
            </Button>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-gray-50 border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-white rounded-full shadow-md">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card 
                  key={project.id} 
                  className="bg-gray-50 border-none overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  onMouseEnter={() => setHoveredCard(project.title)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                          {service}
                        </span>
                      ))}
                    </div>
                    {hoveredCard === project.title && (
                      <Button variant="link" className="mt-4 text-blue-600 p-0">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Ready to Ignite Your Idea?</h2>
            <p className="text-center text-gray-600 mb-8">Choose the perfect package for your project and get started today</p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white border-2 border-blue-100 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">MVP Development Package</CardTitle>
                  <p className="text-3xl font-semibold text-blue-600">Starting at $2,497</p>
                  <p className="text-sm text-red-500">1 Spot left for November</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">What&apos;s Included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Complete MVP development in 2-3 weeks</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Web application / Mobile App</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Modern, scalable tech stack</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Seamless integrations (payments, auth, etc.)</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> 30 days of free maintenance</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Personalized, founder-led development</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Regular updates and transparent process</li>
                  </ul>
                  <Button className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-700">Get Started Now</Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 text-white border-2 border-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Growth Retainer Package</CardTitle>
                  <p className="text-3xl font-semibold">$2,997<span className="text-xl">/month</span></p>
                  <p className="text-sm text-gray-400">No commitment, cancel anytime</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Dedicated Monthly Services:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" /> 60 hours of development time per month</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" /> Flexible hours allocation</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" /> Weekly strategy calls</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" /> Priority feature development</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" /> Continuous maintenance & optimization</li>
                    <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-400 mr-2" /> Same-day emergency support</li>
                  </ul>
                  <Button className="w-full mt-6 bg-white text-gray-900 hover:bg-gray-100">Schedule a Call</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="founder" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:w-48" src="/placeholder.svg?height=300&width=300" alt="Founder" />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Meet The Founder</div>
                  <h2 className="mt-2 text-2xl leading-tight font-bold text-gray-900">John Doe</h2>
                  <p className="mt-2 text-gray-600">
                    I&apos;m John, the founder of NexusForge, a dev agency dedicated to turning your vision into reality. With experience building solutions for Fortune 500 companies, I&apos;ve learned what it takes to create something valuable and effective. I now focus on working closely with startups and businesses to develop MVPs that move their ideas forward.
                  </p>
                  <p className="mt-4 text-gray-600">
                    To ensure I give each project the attention it needs, I only take on 4 clients a month. This allows me to really focus on delivering quality work and providing the best possible service. If you&apos;re looking for someone who&apos;s dedicated to your success and ready to bring your vision to life, let&apos;s talk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="schedule-meeting" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Schedule a Meeting</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Ready to discuss your project? Let&apos;s set up a time to chat about your vision and how we can bring it to life.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                  <Calendar className="mr-2 h-4 w-4" /> Book a Call
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Schedule a Meeting</DialogTitle>
                  <DialogDescription>
                    Fill out the form below and we&apos;ll get back to you within 24 hours to confirm your appointment.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input id="email" type="email" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="project" className="text-right">
                      Project
                    </Label>
                    <Textarea id="project" className="col-span-3" />
                  </div>
                </div>
                <Button type="submit" className="w-full">Submit</Button>
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">NexusForge</h3>
            <p className="text-gray-600">Forging digital masterpieces that ignite innovation and drive success.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>AI Integration</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Connect</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Dribbble</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; 2023 NexusForge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}