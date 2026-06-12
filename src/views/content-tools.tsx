"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, FileText, Code, Database, Palette, Building2, Bot, Filter, TrendingUp, Download, Calendar, SlidersHorizontal, Grid3x3, List, ZoomIn, Maximize2, Brain, Edit3, Tag, MessageSquare, Share2, Paintbrush, RefreshCw, Bell, Plug, BarChart3, FileSpreadsheet, Image, Save, Users, Settings, ChevronRight, ArrowRight } from "lucide-react";
import colorMap from "@/lib/colorMap.json";

// Define the type for color keys
type ColorKey = "blue-500" | "purple-500" | "green-500" | "primary" | "amber-500" | "pink-500" | "cyan-500" | "rose-500" | "indigo-500" | "teal-500" | "violet-500";

// Type assertion for the imported JSON
const typedColorMap = colorMap as Record<ColorKey, { bg: string; border: string; hoverBorder: string; text: string }>;

const toolCategories = [
  {
    id: "search",
    name: "Search & Discovery",
    icon: Search,
    color: "blue-500",
    tools: [
      { name: "Global Search", icon: Search, desc: "Search across all datasets", prompt: "Help me search for specific data patterns in my analytics" },
      { name: "AI Semantic Search", icon: Brain, desc: "Natural language queries", prompt: "I need to find insights using natural language queries" },
      { name: "Quick Filters", icon: Filter, desc: "Instant data filtering", prompt: "Show me how to apply quick filters to my data" },
    ]
  },
  {
    id: "filters",
    name: "Filters & Sorting",
    icon: SlidersHorizontal,
    color: "purple-500",
    tools: [
      { name: "Date Range Picker", icon: Calendar, desc: "Select time periods", prompt: "Help me filter data by specific date ranges" },
      { name: "Advanced Filters", icon: Filter, desc: "Multi-criteria filtering", prompt: "Create advanced filters with multiple conditions" },
      { name: "Smart Sort", icon: TrendingUp, desc: "AI-powered sorting", prompt: "Sort my data intelligently based on patterns" },
      { name: "Saved Filters", icon: Save, desc: "Save filter presets", prompt: "How do I save and reuse my filter configurations?" },
    ]
  },
  {
    id: "views",
    name: "View Controls",
    icon: Grid3x3,
    color: "green-500",
    tools: [
      { name: "Grid View", icon: Grid3x3, desc: "Card-based layout", prompt: "How do I optimize my dashboard layout with grid view?" },
      { name: "List View", icon: List, desc: "Compact table view", prompt: "Show me data in a compact list format" },
      { name: "Zoom Controls", icon: ZoomIn, desc: "Chart magnification", prompt: "Help me zoom into specific chart details" },
      { name: "Full Screen", icon: Maximize2, desc: "Expand visualizations", prompt: "How to maximize my visualization workspace?" },
    ]
  },
  {
    id: "ai-insights",
    name: "AI Insights",
    icon: Brain,
    color: "primary",
    tools: [
      { name: "Auto Insights", icon: Sparkles, desc: "Generate insights automatically", prompt: "Generate automatic insights from my current data" },
      { name: "Trend Detection", icon: TrendingUp, desc: "Identify patterns", prompt: "Identify trends and patterns in my analytics data" },
      { name: "Anomaly Detection", icon: Bell, desc: "Spot unusual data", prompt: "Detect anomalies and unusual patterns in my data" },
      { name: "Predictions", icon: BarChart3, desc: "Forecast future trends", prompt: "Create predictions and forecasts based on historical data" },
    ]
  },
  {
    id: "export",
    name: "Export Tools",
    icon: Download,
    color: "amber-500",
    tools: [
      { name: "Export PNG/JPG", icon: Image, desc: "Save as image", prompt: "How do I export my charts as high-quality images?" },
      { name: "Export PDF", icon: FileText, desc: "Generate PDF report", prompt: "Generate a comprehensive PDF report of my dashboard" },
      { name: "Export CSV/XLSX", icon: FileSpreadsheet, desc: "Download data", prompt: "Export my data to CSV or Excel format" },
      { name: "Export Insights", icon: Brain, desc: "AI analysis report", prompt: "Create an AI-powered analysis report with insights" },
    ]
  },
  {
    id: "editing",
    name: "Data Editing",
    icon: Edit3,
    color: "pink-500",
    tools: [
      { name: "Inline Editing", icon: Edit3, desc: "Edit data directly", prompt: "How do I edit data directly in the dashboard?" },
      { name: "Bulk Operations", icon: Database, desc: "Mass edit/delete", prompt: "Perform bulk operations on multiple data entries" },
      { name: "Tag Manager", icon: Tag, desc: "Organize with tags", prompt: "Help me organize my data with tags and categories" },
      { name: "Annotations", icon: MessageSquare, desc: "Add notes to data", prompt: "Add annotations and notes to specific data points" },
    ]
  },
  {
    id: "collaboration",
    name: "Collaboration",
    icon: Users,
    color: "cyan-500",
    tools: [
      { name: "Comments", icon: MessageSquare, desc: "Discuss insights", prompt: "How do I add comments and discuss insights with my team?" },
      { name: "Share Dashboard", icon: Share2, desc: "Share with team", prompt: "Share this dashboard with team members" },
      { name: "Mentions", icon: Users, desc: "@mention teammates", prompt: "How to mention and notify team members?" },
      { name: "Access Control", icon: Settings, desc: "Role-based permissions", prompt: "Set up role-based access control for my dashboard" },
    ]
  },
  {
    id: "customization",
    name: "Customization",
    icon: Paintbrush,
    color: "rose-500",
    tools: [
      { name: "Theme Selector", icon: Paintbrush, desc: "Light/Dark modes", prompt: "Help me customize the theme and color scheme" },
      { name: "Layout Builder", icon: Grid3x3, desc: "Drag & drop widgets", prompt: "Build a custom layout with drag and drop widgets" },
      { name: "Color Picker", icon: Palette, desc: "Custom accent colors", prompt: "Customize accent colors for my dashboard" },
      { name: "Save Layouts", icon: Save, desc: "Personal presets", prompt: "Save my current layout as a personal preset" },
    ]
  },
  {
    id: "performance",
    name: "Performance",
    icon: RefreshCw,
    color: "indigo-500",
    tools: [
      { name: "Refresh Data", icon: RefreshCw, desc: "Update dashboard", prompt: "Refresh and update my dashboard data" },
      { name: "Auto-Refresh", icon: RefreshCw, desc: "Real-time updates", prompt: "Set up automatic real-time data refresh" },
      { name: "Cache Control", icon: Database, desc: "Clear cached data", prompt: "Clear cache and optimize dashboard performance" },
      { name: "Data Source Status", icon: BarChart3, desc: "Connection health", prompt: "Check the health status of my data sources" },
    ]
  },
  {
    id: "integrations",
    name: "Integrations",
    icon: Plug,
    color: "teal-500",
    tools: [
      { name: "API Connector", icon: Plug, desc: "Connect external APIs", prompt: "Help me connect external APIs to my dashboard" },
      { name: "Database Links", icon: Database, desc: "Direct DB access", prompt: "Set up direct database connections" },
      { name: "Webhooks", icon: Code, desc: "Event triggers", prompt: "Configure webhooks and event triggers" },
      { name: "Third-party Apps", icon: Building2, desc: "Google Sheets, Excel", prompt: "Integrate with Google Sheets and Excel" },
    ]
  },
  {
    id: "prompts",
    name: "Prompt Library",
    icon: Bot,
    color: "violet-500",
    tools: [
      { name: "Analysis Prompts", icon: TrendingUp, desc: "Data analysis templates", prompt: "Show me data analysis prompt templates" },
      { name: "Writing Prompts", icon: FileText, desc: "Content generation", prompt: "Generate content using AI writing prompts" },
      { name: "Coding Prompts", icon: Code, desc: "SQL & code helpers", prompt: "Help me write SQL queries and code" },
      { name: "AI Agents", icon: Bot, desc: "Specialized assistants", prompt: "Connect me with specialized AI agents for specific tasks" },
    ]
  },
]
 
const ContentTools = () => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [activeView, setActiveView] = useState<"grid" | "list">("grid")

  const handleToolClick = (prompt: string) => {
    // Store the prompt in sessionStorage to pass to chatbot
    sessionStorage.setItem("chatbotPrompt", prompt)
    router.push("/chatbot")
  }

  const filteredTools = toolCategories.filter(category => {
    if (selectedCategory !== "all" && category.id !== selectedCategory) return false
    if (searchQuery) {
      return category.tools.some(tool =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.desc.toLowerCase().includes(searchQuery.toLowerCase())
      ) || category.name.toLowerCase().includes(searchQuery.toLowerCase())
    }
    return true
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Content Tools</h1>
          <p className="text-sm sm:text-base text-white/50 mt-1">Complete toolkit for data management and AI assistance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-primary/30 text-slate-300 hover:bg-primary/10"
            onClick={() => setActiveView(activeView === "grid" ? "list" : "grid")}
          >
            {activeView === "grid" ? <List className="h-4 w-4 " /> : <Grid3x3 className="h-4 w-4 " />}
            <span className="hidden sm:inline">{activeView === "grid" ? "List" : "Grid"} View</span>
          </Button>
          <Button className="bg-linear-to-r from-primary to-sidebar-primary hover:from-sidebar-primary hover:to-primary text-white border-0">
            <Settings className="h-4 w-4 " />
            <span className="hidden sm:inline">Customize Tools</span>
          </Button>
        </div>
      </div>

      {/* Search & Filter */}
      <Card>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" />
              <Input placeholder="Search tools..." value={searchQuery} className="pl-10 bg-white/10 border-white/20 text-slate-200 placeholder:text-white/30"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button variant={selectedCategory === "all" ? "default" : "outline"} size="sm" className={selectedCategory === "all" ? "bg-primary text-white" : "border-primary/30 text-slate-300"}
                onClick={() => setSelectedCategory("all")}
              >
                All Tools
              </Button>
              {toolCategories.slice(0, 5).map((category) => (
                <Button key={category.id} size="sm" className={selectedCategory === category.id ? "bg-primary text-white" : "border-primary/30 text-slate-300"}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <category.icon className="h-3 w-3 " />
                  <span className="hidden sm:inline">{category.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Overview */}
      <div className="grid xs:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:border-primary/50 transition-all">
          <CardContent className="">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Settings className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white">45+</p>
                <p className="text-sm text-white/50">Total Tools</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:border-primary/50 transition-all">
          <CardContent className="">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <Brain className="h-4 w-4 sm:h-6 sm:w-6 text-blue-400" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white">12</p>
                <p className="text-sm text-white/50">AI-Powered</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:border-primary/50 transition-all">
          <CardContent className="">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                <Plug className="h-4 w-4 sm:h-6 sm:w-6 text-green-400" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white">8</p>
                <p className="text-sm text-white/50">Integrations</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hover:border-primary/50 transition-all">
          <CardContent className="">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="p-1.5 sm:p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <Users className="h-4 w-4 sm:h-6 sm:w-6 text-amber-400" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-white">5</p>
                <p className="text-sm text-white/50">Collaboration</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tools Grid/List */}
      {activeView === "grid" ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredTools.map((category) => {
            const colors = typedColorMap[category.color as ColorKey] ?? typedColorMap["primary"]
            return (
              <Card key={category.id} className="hover:border-primary/50 transition-all group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${colors.bg} border ${colors.border} ${colors.hoverBorder} transition-all`}>
                        <category.icon className={`h-6 w-6 ${colors.text}`} />
                      </div>
                      <div>
                        <CardTitle className="text-white text-base">{category.name}</CardTitle>
                        <p className="text-sm text-white/50 mt-0.5">{category.tools.length} tools</p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-primary transition-colors" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.tools.map((tool, index) => (
                      <button key={index} onClick={() => handleToolClick(tool.prompt || `Help me with ${tool.name}`)} className="w-full text-left group/tool flex items-start gap-3 p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all">
                        <div className="p-1.5 rounded-md bg-white/5 border border-white/10 group-hover/tool:bg-primary/10 group-hover/tool:border-primary/30 transition-all">
                          <tool.icon className="h-5 w-5 text-white/50 group-hover/tool:text-primary transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-200 group-hover/tool:text-white transition-colors flex items-center gap-2">
                            {tool.name}
                            <ArrowRight className="h-3 w-3 opacity-0 group-hover/tool:opacity-100 transition-opacity" />
                          </p>
                          <p className="text-sm text-white/50 mt-0.5">{tool.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            <div className="divide-y divide-primary/10">
              {filteredTools.map((category) => {
                const colors = typedColorMap[category.color as ColorKey] ?? typedColorMap["primary"]
                return (
                  <div key={category.id} className="p-4 hover:bg-slate-800/40 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-slate-800/60 border border-primary/20`}>
                        <category.icon className={`h-4 w-4 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{category.name}</h3>
                        <p className="text-xs text-white/50">{category.tools.length} tools available</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ml-12">
                      {category.tools.map((tool, index) => (
                        <button key={index} onClick={() => handleToolClick(tool.prompt || `Help me with ${tool.name}`)} className="text-left flex items-center gap-2 p-2 rounded-lg bg-slate-800/40 border border-primary/10 hover:border-primary/30 hover:bg-slate-800/60 transition-all group">
                          <tool.icon className="h-3.5 w-3.5 text-white/50 group-hover:text-primary transition-colors shrink-0" />
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-medium text-slate-200 truncate flex items-center gap-1">
                              {tool.name}
                              <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Empty State */}
      {filteredTools.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Search className="h-12 w-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-300 mb-2">No tools found</h3>
            <p className="text-sm text-slate-500">Try adjusting your search or filter</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default ContentTools;
