import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  ArrowDown,
  Star,
  Users,
  Zap,
  CheckCircle,
  Palette,
  Lightbulb,
  Rocket,
  Play,
  ImageIcon,
  Layers,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 md:p-8 animate-fade-in backdrop-blur-sm bg-black/80 sticky top-0 z-50">
        <div className="text-xl font-bold hover:scale-110 transition-all duration-300 cursor-pointer">
          <span className="text-white">Qasim GFX</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
          >
            Testimonials
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <Button
          variant="outline"
          className="border-gray-600 text-white hover:bg-white hover:text-black bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
        >
          Get In Touch
        </Button>
      </nav>

      <section className="px-6 md:px-8 py-16 md:py-24 relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-900/30"></div>
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
                <span className="text-gray-300 text-sm">DM for Orders - Available Now</span>
              </div>
              <h1
                className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up leading-tight"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="text-white">Creative</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient-text">
                  Designer
                </span>
              </h1>
              <p
                className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up max-w-lg"
                style={{ animationDelay: "0.4s" }}
              >
                I'm <span className="text-white font-semibold">Qasim</span>, a passionate{" "}
                <span className="text-purple-400">Graphic Designer</span> |{" "}
                <span className="text-pink-400">Video Editor</span> specializing in
                <span className="text-blue-400"> Thumbnails, Logos & More</span> that elevates your content and brand.
              </p>
              <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center space-x-2 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-700">
                  <Play className="w-4 h-4 text-red-400" />
                  <span className="text-white text-sm">Video Editor</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-700">
                  <ImageIcon className="w-4 h-4 text-purple-400" />
                  <span className="text-white text-sm">Thumbnails & More</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-900/50 px-4 py-2 rounded-full border border-gray-700">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span className="text-white text-sm">164 Followers</span>
                </div>
              </div>
              <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 px-8 py-3">
                  My Portfolio
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-white hover:text-black bg-transparent transition-all duration-300 px-8 py-3"
                >
                  DM for Orders
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card className="bg-gray-900/80 border-gray-800 p-6 aspect-square hover:scale-105 hover:bg-gray-800/80 transition-all duration-500 group animate-float">
                    <img
                      src="https://images.pexels.com/photos/3826648/pexels-photo-3826648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Calligraphy Design"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                      <span className="text-white font-semibold">Calligraphy</span>
                    </div>
                  </Card>
                  <Card
                    className="bg-gray-900/80 border-gray-800 p-6 aspect-square hover:bg-gray-800/80 transition-all duration-500 animate-float"
                  // style={{ animationDelay: "0.4s" }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-qTJp9xP_GujBm_L_IVIwT9hxpGHDeuhJQg&s"
                      alt="Motivation Design"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                      <span className="text-white font-semibold">Motivation</span>
                    </div>
                  </Card>
                </div>
                <div className="space-y-6 mt-12">
                  <Card
                    className="bg-gray-900/80 border-gray-800 p-6 aspect-square hover:bg-gray-800/80 transition-all duration-500 hover:shadow-green-500/20 animate-float"
                  // style={{ animationDelay: "0.2s" }}
                  >
                    <img
                      src="https://images.pexels.com/photos/13791398/pexels-photo-13791398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="Upwork Portfolio"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                      <span className="text-white font-semibold">Upwork</span>
                    </div>
                  </Card>
                  <Card
                    className="bg-gray-900/80 border-gray-800 p-6 aspect-square hover:bg-gray-800/80 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20 animate-float"
                  // style={{ animationDelay: "0.6s" }}
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtyr8m3sB4tTk0VHVTx3LWur_kcgbpI4oyYg&s"
                      alt="Mascot Logo"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg flex items-end p-4">
                      <span className="text-white font-semibold">Mascot Logo</span>
                    </div>
                  </Card>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"
              // style={{ animationDelay: "1s" }}
              ></div>
            </div>

          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-8 py-16 bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div
              className="text-center animate-fade-in-up hover:scale-105 transition-all duration-300"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                122
              </div>
              <div className="text-gray-400 text-sm">Posts Created</div>
            </div>
            <div
              className="text-center animate-fade-in-up group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                164
              </div>
              <div className="text-gray-400 text-sm">Followers</div>
            </div>
            <div
              className="text-center animate-fade-in-up group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                291
              </div>
              <div className="text-gray-400 text-sm">Following</div>
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
      <section className="px-6 md:px-8 py-16 md:py-24 bg-gray-950 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full animate-spin-slow"></div>
          <div
            className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full animate-spin-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative group">
                <div className="w-full max-w-md h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg hover:scale-105 transition-transform duration-500 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.publi.blob.vercel-storage.com/image-uSnnfyGDsr5eII4t4FphfCbrbVkggO.png"
                    alt="Qasim GFX - Graphic Designer & Video Editor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-center w-full">
                      <p className="text-white font-semibold text-lg">Qasim GFX</p>
                      <p className="text-gray-300 text-sm">Graphic Designer & Video Editor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <p className="text-gray-400 mb-4 animate-fade-in-up uppercase tracking-wider text-sm">
                Graphic Designer | Video Editor
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up text-white"
                style={{ animationDelay: "0.2s" }}
              >
                Qasim_GFX_43, <span className="text-gray-400">Your Creative Partner</span>
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                With creative excellence and extensive freelance experience, showcasing work across multiple platforms
                including my Behance portfolio.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                I'm Qasim, a dedicated <span className="text-white font-semibold">Graphic Designer | Video Editor</span>{" "}
                specializing in <span className="text-purple-400">Thumbnails, Logos & More</span>. I create compelling
                visual content that helps creators and businesses stand out and connect with their audience through
                engaging design and professional video editing. <span className="text-blue-400">DM for Orders</span> -
                let's bring your vision to life!
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 hover:text-gray-100 transition-colors duration-300 cursor-pointer">
                    <Play className="w-4 h-4 text-red-400" />
                    <span className="text-white font-medium">Video Editing</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-gray-100 transition-colors duration-300 cursor-pointer">
                    <ImageIcon className="w-4 h-4 text-blue-400" />
                    <span className="text-white font-medium">Thumbnails & More</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 hover:text-gray-100 transition-colors duration-300 cursor-pointer">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-white font-medium">Logos & More</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-gray-100 transition-colors duration-300 cursor-pointer">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <span className="text-white font-medium">Social Media Posts</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "1s" }}>
                <div className="flex justify-between items-center hover:bg-gray-900/50 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <span className="text-white font-medium">YouTube Thumbnail Designer</span>
                  <span className="text-gray-400">Freelance</span>
                  <span className="text-gray-500">2021</span>
                </div>
                <div className="flex justify-between items-center hover:bg-gray-900/50 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <span className="text-white font-medium">Video Editor</span>
                  <span className="text-gray-400">Content Creators</span>
                  <span className="text-gray-500">2022</span>
                </div>
                <div className="flex justify-between items-center hover:bg-gray-900/50 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <span className="text-white font-medium">Graphic Designer</span>
                  <span className="text-gray-400">Social Media</span>
                  <span className="text-gray-500">2023</span>
                </div>
                <div className="flex justify-between items-center hover:bg-gray-900/50 p-3 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <span className="text-white font-medium">Creative Portfolio</span>
                  <span className="text-gray-400">Behance Portfolio</span>
                  <span className="text-gray-500">2024</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="mt-8 border-gray-600 text-white hover:bg-white hover:text-black bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              >
                DM for Orders
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 bg-gray-950 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-spin-slow"></div>
          <div
            className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-spin-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-gray-400 mb-4 uppercase tracking-wider text-sm font-medium">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              My Design <span className="text-teal-400">Process</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              A streamlined, collaborative approach that ensures exceptional results for every project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Pre-Project Phase */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center mb-8">
                <div className="w-4 h-4 bg-teal-400 rounded-full mr-4 animate-pulse"></div>
                <h3 className="text-2xl font-bold text-white">Pre-Project Support</h3>
              </div>
              <div className="border-l-2 border-teal-400 pl-8 ml-2 space-y-6">
                <div className="group hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-2">Initial consultation and project discovery</p>
                      <p className="text-gray-300 text-sm">
                        Understanding your brand vision, target audience, and specific design requirements through
                        detailed discussions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-2">Market research and competitor analysis</p>
                      <p className="text-gray-300 text-sm">
                        Analyzing industry trends and competitor designs to ensure your brand stands out uniquely.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-2">Project timeline and milestone planning</p>
                      <p className="text-gray-300 text-sm">
                        Creating a detailed roadmap with clear deliverables and deadlines for transparent collaboration.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-2">Style guide and mood board creation</p>
                      <p className="text-gray-300 text-sm">
                        Establishing visual direction with color palettes, typography, and design elements that align
                        with your brand.
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
                <h3 className="text-2xl font-bold text-white">Design Development</h3>
              </div>
              <div className="border-l-2 border-teal-400 pl-8 ml-2 space-y-6">
                <div className="group hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <Palette className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-2">Concept sketching and ideation</p>
                      <p className="text-gray-300 text-sm">
                        Creating multiple design concepts and exploring various creative directions for your project.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-2">Digital design refinement</p>
                      <p className="text-gray-300 text-sm">
                        Transforming approved concepts into polished digital designs with attention to every detail.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-2">Client feedback and revisions</p>
                      <p className="text-gray-300 text-sm">
                        Collaborative review process with up to 3 revision rounds to ensure perfect alignment with your
                        vision.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="group hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <Rocket className="w-5 h-5 text-teal-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium mb-2">Final delivery and brand guidelines</p>
                      <p className="text-gray-300 text-sm">
                        Complete file package with multiple formats, usage guidelines, and ongoing support for
                        implementation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 max-w-2xl mx-auto backdrop-blur-sm">
              <p className="text-white font-medium mb-4">Ready to start your design journey?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-teal-500 text-white hover:bg-teal-600 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-8 py-16 md:py-24 bg-gray-950 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 animate-fade-in-up text-center">
            <p className="text-gray-400 mb-4 uppercase tracking-wider text-sm">Design Services</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Creative Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive design and video editing services to elevate your content and create lasting visual impact
              for your brand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className="bg-gray-900/80 border-gray-800 p-8 hover:scale-105 hover:bg-gray-800/80 transition-all duration-500 animate-fade-in-up group hover:shadow-xl hover:shadow-white/10 backdrop-blur-sm"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Thumbnail Design</h3>
              <p className="text-gray-400 mb-6">
                Eye-catching and click-worthy YouTube thumbnails that boost your video views and engagement rates.
              </p>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black bg-transparent hover:scale-105 transition-all duration-300 w-full"
              >
                DM for Orders
              </Button>
            </Card>

            <Card
              className="bg-gray-900/80 border-gray-800 p-8 hover:scale-105 hover:bg-gray-800/80 transition-all duration-500 animate-fade-in-up group hover:shadow-xl hover:shadow-white/10 backdrop-blur-sm"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Video Editing</h3>
              <p className="text-gray-400 mb-6">
                Professional video editing services that transform your raw footage into engaging, polished content.
              </p>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black bg-transparent hover:scale-105 transition-all duration-300 w-full"
              >
                DM for Orders
              </Button>
            </Card>

            <Card
              className="bg-gray-900/80 border-gray-800 p-8 hover:scale-105 hover:bg-gray-800/80 transition-all duration-500 animate-fade-in-up group hover:shadow-xl hover:shadow-white/10 backdrop-blur-sm"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Logos & More</h3>
              <p className="text-gray-400 mb-6">
                Creating memorable logos and brand identities that represent your business values and vision perfectly.
              </p>
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-white hover:text-black bg-transparent hover:scale-105 transition-all duration-300 w-full"
              >
                DM for Orders
              </Button>
            </Card>
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Button className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/30">
              DM for Orders
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-8 py-12 border-t border-gray-800 animate-fade-in-up bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <span className="text-white">Qasim GFX</span>
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
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-8">© 2024 Qasim GFX. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}








