"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, ArrowDown, Users, CheckCircle, Palette, Lightbulb, Rocket, Play, ImageIcon } from "lucide-react"

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 md:p-8 animate-fade-in backdrop-blur-sm bg-black/80 sticky top-0 z-50">
        <div className="text-xl font-bold hover:scale-110 transition-all duration-300 cursor-pointer">
          <span className="text-white">Designer Portfolio</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
          >
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
        <Button
          variant="outline"
          className="border-gray-600 text-white hover:bg-white hover:text-black bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
        >
          Hire Me
        </Button>
      </nav>

      <section id="portfolio" className="px-6 md:px-8 py-16 md:py-24 relative min-h-screen flex items-center">
        {/* existing code */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900/30"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-full mb-6 animate-fade-in-up backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-300 text-sm">Available for Freelance Projects</span>
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up leading-tight"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="text-white">Your Name</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-text">
                  Designer
                </span>
              </h1>
              <p
                className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up max-w-lg"
                style={{ animationDelay: "0.4s" }}
              >
                Professional <span className="text-purple-400">Graphic Designer</span> and{" "}
                <span className="text-pink-400">Visual Designer</span>. Freelance expert ready to bring your creative
                vision to life. <span className="text-blue-400">Let's Talk About Your Business!</span>
              </p>
              <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center space-x-2 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-700">
                  <Palette className="w-4 h-4 text-purple-400" />
                  <span className="text-white text-sm">Graphic Design</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-700">
                  <ImageIcon className="w-4 h-4 text-pink-400" />
                  <span className="text-white text-sm">Visual Design</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-700">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-white text-sm">Happy Clients</span>
                </div>
              </div>
              <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                <Button
                  onClick={() => scrollToSection("portfolio")}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 px-8 py-3"
                >
                  View Portfolio
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-white hover:text-black bg-transparent transition-all duration-300 px-8 py-3"
                >
                  Hire Me
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card className="bg-gray-900/80 border-gray-800 p-6 aspect-square hover:scale-105 hover:bg-gray-800/80 transition-all duration-500 group animate-float">
                    <img
                      src="https://images.pexels.com/photos/3826648/pexels-photo-3826648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Brand Identity Design"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                      <span className="text-white font-semibold">Startup</span>
                    </div>
                  </Card>
                  <Card className="bg-gray-900/80 border-gray-800 p-6 aspect-square hover:bg-gray-800/80 transition-all duration-500 animate-float">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-qTJp9xP_GujBm_L_IVIwT9hxpGHDeuhJQg&s"
                      alt="Visual Identity Design"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                      <span className="text-white font-semibold">Reviews</span>
                    </div>
                  </Card>
                </div>
                <div className="space-y-6 mt-12">
                  <Card className="bg-gray-900/80 border-gray-800 p-6 aspect-square hover:bg-gray-800/80 transition-all duration-500 hover:shadow-green-500/20 animate-float">
                    <img
                      src="https://images.pexels.com/photos/13791398/pexels-photo-13791398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="Packaging Design"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                      <span className="text-white font-semibold">LogoFolio</span>
                    </div>
                  </Card>
                  <Card className="bg-gray-900/80 border-gray-800 p-6 aspect-square hover:bg-gray-800/80 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20 animate-float">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtyr8m3sB4tTk0VHVTx3LWur_kcgbpI4oyYg&s"
                      alt="Strategic Video Content"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                      <span className="text-white font-semibold">Working</span>
                    </div>
                  </Card>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ArrowDown
            onClick={() => scrollToSection("stats")}
            className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="px-6 md:px-8 py-16 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div
              className="text-center animate-fade-in-up hover:scale-105 transition-all duration-300"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                50+
              </div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div
              className="text-center animate-fade-in-up group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                25+
              </div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div
              className="text-center animate-fade-in-up group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                3+
              </div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div
              className="text-center animate-fade-in-up group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                100%
              </div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-8 py-16 md:py-24 bg-gray-950 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative group">
                <div className="w-full max-w-md h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg hover:scale-105 transition-transform duration-500 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.publi.blob.vercel-storage.com/image-uSnnfyGDsr5eII4t4FphfCbrbVkggO.png"
                    alt="Your Brand Image"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-center w-full">
                      <p className="text-white font-semibold text-lg">Your Name</p>
                      <p className="text-gray-300 text-sm">Freelance Graphic Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <p className="text-gray-400 mb-4 animate-fade-in-up uppercase tracking-wider text-sm">
                Freelance Designer
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up text-white"
                style={{ animationDelay: "0.2s" }}
              >
                Your Visual <span className="text-gray-400">Design Partner</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                Professional freelance graphic designer specializing in visual design solutions that elevate your brand
                and business. Ready to transform your creative vision into stunning visual reality.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <span className="text-white font-semibold">Graphic Designer</span> |{" "}
                <span className="text-purple-400">Freelance Graphic</span> |{" "}
                <span className="text-pink-400">Visual Designer</span> |{" "}
                <span className="text-blue-400">Let's Talk About Your Business!</span>
                Ready to help you create amazing designs that make your business stand out. 🎨
              </p>

              {/* existing code */}

              <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "1s" }}>
                <div className="flex justify-between items-center hover:bg-gray-900/50 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <span className="text-white font-medium">Freelance Graphic Designer</span>
                  <span className="text-gray-400">Self-Employed</span>
                  <span className="text-gray-500">2020</span>
                </div>
                <div className="flex justify-between items-center hover:bg-gray-900/50 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <span className="text-white font-medium">Visual Design Specialist</span>
                  <span className="text-gray-400">Freelance Platform</span>
                  <span className="text-gray-500">2021</span>
                </div>
                <div className="flex justify-between items-center hover:bg-gray-900/50 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <span className="text-white font-medium">Brand Identity Designer</span>
                  <span className="text-gray-400">Multiple Clients</span>
                  <span className="text-gray-500">2022</span>
                </div>
                <div className="flex justify-between items-center hover:bg-gray-900/50 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <span className="text-white font-medium">Senior Graphic Designer</span>
                  <span className="text-gray-400">Design Studio</span>
                  <span className="text-gray-500">2024</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="mt-8 border-gray-600 text-white hover:bg-white hover:text-black bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              >
                Hire Me
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 bg-gray-950 relative">
        {/* existing code */}
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-gray-400 mb-4 uppercase tracking-wider text-sm font-medium">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              My Design <span className="text-teal-400">Process</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              A professional, streamlined approach that transforms your business ideas into compelling visual designs.
              Let's talk about your business and bring your vision to life through expert graphic design.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Pre-Project Phase */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center mb-8">
                <div className="w-4 h-4 bg-teal-400 rounded-full mr-4 animate-pulse"></div>
                <h3 className="text-2xl font-bold text-white">Creative Discovery</h3>
              </div>
              <div className="border-l-2 border-teal-400 pl-8 ml-2 space-y-6">
                <div className="group hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-2">Business consultation and project brief development</p>
                      <p className="text-gray-300 text-sm">
                        Understanding your business goals, target audience, and design requirements to create graphics
                        that effectively communicate your brand message and drive results.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-2">Visual concept and design strategy planning</p>
                      <p className="text-gray-300 text-sm">
                        Developing creative concepts and visual strategies that align with your business objectives and
                        resonate with your target market through professional design solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-2">Design system and style guide creation</p>
                      <p className="text-gray-300 text-sm">
                        Establishing consistent visual elements, color palettes, and typography that maintain brand
                        coherence across all materials.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-2">Project timeline and deliverable planning</p>
                      <p className="text-gray-300 text-sm">
                        Creating a clear project roadmap with milestones to ensure timely delivery of your graphic
                        design materials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Post-Project Phase */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center mb-8">
                <div
                  className="w-4 h-4 bg-teal-400 rounded-full mr-4 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <h3 className="text-2xl font-bold text-white">Design Execution</h3>
              </div>
              <div className="border-l-2 border-teal-400 pl-8 ml-2 space-y-6">
                <div className="group hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <Palette className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-2">High-quality graphic design and visual creation</p>
                      <p className="text-gray-300 text-sm">
                        Creating stunning graphics with attention to detail that effectively communicate your message
                        and engage your audience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-2">Marketing materials and content design</p>
                      <p className="text-gray-300 text-sm">
                        Developing marketing materials that support your business goals and create meaningful
                        connections with your target audience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-2">Client collaboration and feedback integration</p>
                      <p className="text-gray-300 text-sm">
                        Working closely with you throughout the design process to ensure the final graphics exceed your
                        expectations and meet your needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <Rocket className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-2">Final delivery and format optimization</p>
                      <p className="text-gray-300 text-sm">
                        Delivering your completed designs in multiple formats optimized for various platforms and uses,
                        with ongoing support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 max-w-2xl mx-auto backdrop-blur-sm">
              <p className="text-white font-medium mb-4">Ready to elevate your business with professional design?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-teal-500 text-white hover:bg-teal-600 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 md:px-8 py-16 md:py-24 bg-gray-950 relative">
        {/* existing code */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 animate-fade-in-up text-center">
            <p className="text-gray-400 mb-4 uppercase tracking-wider text-sm">Design Services</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Professional Design Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive graphic and visual design services for businesses looking to elevate their brand presence.
              From logos to complete brand identities, let's talk about your business needs and create something amazing
              together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className="bg-gray-900/80 border-gray-800 p-8 hover:scale-105 hover:bg-gray-800/80 transition-all duration-500 animate-fade-in-up group hover:shadow-xl hover:shadow-white/10 backdrop-blur-sm"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Logo & Brand Design</h3>
              <p className="text-gray-400 mb-6">
                Professional logo design and complete brand identity packages that make your business stand out and
                create lasting impressions with your target audience.
              </p>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black bg-transparent hover:scale-105 transition-all duration-300 w-full"
              >
                Get Quote
              </Button>
            </Card>

            <Card
              className="bg-gray-900/80 border-gray-800 p-8 hover:scale-105 hover:bg-gray-800/80 transition-all duration-500 animate-fade-in-up group hover:shadow-xl hover:shadow-white/10 backdrop-blur-sm"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Visual Design</h3>
              <p className="text-gray-400 mb-6">
                Creative visual design solutions including marketing materials, social media graphics, and promotional
                content that effectively communicate your business message.
              </p>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black bg-transparent hover:scale-105 transition-all duration-300 w-full"
              >
                Get Quote
              </Button>
            </Card>

            <Card
              className="bg-gray-900/80 border-gray-800 p-8 hover:scale-105 hover:bg-gray-800/80 transition-all duration-500 animate-fade-in-up group hover:shadow-xl hover:shadow-white/10 backdrop-blur-sm"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Business Graphics</h3>
              <p className="text-gray-400 mb-6">
                Professional business graphics and presentations that help you communicate your ideas effectively and
                make a strong impression in meetings and proposals.
              </p>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black bg-transparent hover:scale-105 transition-all duration-300 w-full"
              >
                Get Quote
              </Button>
            </Card>
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Button className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/30">
              Hire Me
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-6 md:px-8 py-12 border-t border-gray-800 animate-fade-in-up bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <span className="text-white">Designer Portfolio</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              >
                Privacy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              >
                Terms
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-8">© 2024 Designer Portfolio. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
