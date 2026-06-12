"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { XAxis, YAxis, Bar, BarChart, Line, LineChart } from "recharts";
import { MessageSquare, FileText, Code, Brain, Sparkles, ArrowUpRight, ArrowDownRight, Users, DollarSign, Activity, TrendingUp, Clock, CheckCircle2, AlertCircle, MoreVertical, CalendarDays, CalendarRange, History, Clock10, Calendar, Zap, LayoutList, Trophy, BarChart3, Cpu, Sparkle } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const statsData = [
  {
    title: "Active Users",
    value: "12,543",
    icon: Users,
    change: "+18.2%",
    trend: "up",
    gradient: "from-primary/20 to-primary/20",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    subtext: "1,234 today"
  },
  {
    title: "Total Revenue",
    value: "$45.2K",
    icon: DollarSign,
    change: "+23.1%",
    trend: "up",
    gradient: "from-primary/20 to-primary/20",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    subtext: "$2.4K today"
  },
  {
    title: "AI Requests",
    value: "89.5K",
    icon: Brain,
    change: "-3.2%",
    trend: "down",
    gradient: "from-primary/20 to-[#4e0aad]/20",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    subtext: "8.2K today"
  },
  {
    title: "Success Rate",
    value: "98.4%",
    icon: Activity,
    change: "+2.1%",
    trend: "up",
    gradient: "from-[#4e0aad]/20 to-primary/20",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    subtext: "99.1% peak"
  },
]

const usageData = [
  { month: "Jan", requests: 4000, tokens: 2400, revenue: 2400 },
  { month: "Feb", requests: 3000, tokens: 1398, revenue: 2210 },
  { month: "Mar", requests: 2000, tokens: 9800, revenue: 2290 },
  { month: "Apr", requests: 2780, tokens: 3908, revenue: 2000 },
  { month: "May", requests: 1890, tokens: 4800, revenue: 2181 },
  { month: "Jun", requests: 2390, tokens: 3800, revenue: 2500 },
  { month: "Jul", requests: 3490, tokens: 4300, revenue: 2100 },
]

const modelPerformance = [
  { name: "GPT-4", usage: 4500, fill: "var(--chart-1)" },
  { name: "Claude", usage: 3200, fill: "var(--chart-1)" },
  { name: "Gemini", usage: 1800, fill: "url(#barStripes)" },
  { name: "Llama", usage: 2100, fill: "var(--chart-1)" },
]

const recentActivity = [
  {
    time: "2 min ago",
    action: "New user registration",
    user: "john@example.com",
    status: "success",
    icon: CheckCircle2
  },
  {
    time: "5 min ago",
    action: "API rate limit reached",
    user: "api-client-001",
    status: "warning",
    icon: AlertCircle
  },
  {
    time: "12 min ago",
    action: "Payment processed",
    user: "sarah@example.com",
    status: "success",
    icon: CheckCircle2
  },
  {
    time: "18 min ago",
    action: "Model training completed",
    user: "system",
    status: "success",
    icon: CheckCircle2
  },
  {
    time: "25 min ago",
    action: "High token usage detected",
    user: "enterprise-001",
    status: "warning",
    icon: AlertCircle
  },
]

const topModels = [
  { name: "GPT-4 Turbo", requests: "45.2K", avgTime: "1.2s", status: "Active", usage: 85 },
  { name: "Claude 3 Opus", requests: "32.8K", avgTime: "0.9s", status: "Active", usage: 70 },
  { name: "Gemini Pro", requests: "18.5K", avgTime: "1.5s", status: "Active", usage: 45 },
  { name: "GPT-3.5", requests: "12.1K", avgTime: "0.6s", status: "Idle", usage: 30 },
]

const chartConfig = {
  requests: {
    label: "Requests",
    color: "var(--chart-1)",
  },
  tokens: {
    label: "Tokens",
    color: "var(--chart-2)",
  },
  revenue: {
    label: "Revenue",
    color: "var(--chart-3)",
  },
  usage: {
    label: "Usage",
    color: "var(--chart-1)",
  },
}

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-white/50 mt-1 text-sm sm:text-base">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" className="border-primary/50 text-slate-200 hover:bg-primary/10 hover:border-primary flex-1 sm:flex-none text-xs sm:text-sm">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Last 7 days</span>
            <span className="sm:hidden">7 days</span>
          </Button>
          <Button className="bg-linear-to-r from-primary to-sidebar-primary hover:from-sidebar-primary hover:to-primary text-white border-0 flex-1 sm:flex-none text-xs sm:text-sm">
            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">View Reports</span>
            <span className="sm:hidden">Reports</span>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => {
          const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight
          const trendColor = stat.trend === "up" ? "text-green-500" : "text-red-400"

          return (
            <Card key={index} className="relative overflow-hidden  hover:border-primary/50 transition-all duration-300 group backdrop-blur-sm">
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-[10px] sm:text-xs font-medium text-white/50 uppercase tracking-wider">{stat.title}</p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-[10px] sm:text-sm text-white/50">{stat.subtext}</p>
                  </div>
                  <div className={`${stat.iconBg} p-2 sm:p-3 rounded-xl border border-white/20`}>
                    <stat.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${stat.iconColor}`} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className={`flex items-center gap-1 ${trendColor}`}>
                  <TrendIcon className="h-3 w-3" />
                  <span className="text-xs font-semibold">{stat.change}</span>
                  <span className="text-sm text-white/50">vs last month</span>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        {/* Usage Trends */}
        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-white text-base sm:text-lg">Usage Trends</CardTitle>
              <p className="text-xs sm:text-sm text-white/50 mt-1">Monthly requests, tokens, and revenue</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative group">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <div className="max-h-[300px] overflow-y-auto">
                  <DropdownMenuItem><CalendarDays className="mr-1 h-4 w-4" /> Monthly</DropdownMenuItem>
                  <DropdownMenuItem><CalendarRange className="mr-1 h-4 w-4" /> Yearly</DropdownMenuItem>
                  <DropdownMenuItem><History className="mr-1 h-4 w-4" /> Last Year</DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px] sm:h-[300px] w-full">
              <LineChart data={usageData} margin={{ left: 0, right: 0 }}>
                <defs>
                  <linearGradient id="colorRequests" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} padding={{ left: 10, right: 10 }} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} width={50} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="requests" stroke="var(--chart-1)" strokeWidth={2} dot={{ fill: "var(--chart-1)", r: 4 }} />
                <Line type="monotone" dataKey="tokens" stroke="var(--chart-2)" strokeWidth={2} dot={{ fill: "var(--chart-2)", r: 4 }} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Model Performance */}
        <Card className="lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-white text-base sm:text-lg">Model Performance</CardTitle>
              <p className="text-xs sm:text-sm text-white/50 mt-1">Usage by AI model</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative group">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <div className="max-h-[300px] overflow-y-auto">
                  <DropdownMenuItem><CalendarDays className="mr-1 h-4 w-4" /> Monthly</DropdownMenuItem>
                  <DropdownMenuItem><CalendarRange className="mr-1 h-4 w-4" /> Yearly</DropdownMenuItem>
                  <DropdownMenuItem><History className="mr-1 h-4 w-4" /> Last Year</DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px] sm:h-[300px] w-full">
              <BarChart data={modelPerformance} margin={{ left: 0, right: 0 }}>
                <defs>
                  <pattern id="barStripes" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                    <rect width="4" height="8" transform="translate(0,0)" fill="var(--chart-1)" />
                  </pattern>
                </defs>
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} width={40} />
                <ChartTooltip label="false" content={<ChartTooltipContent />} />
                <Bar dataKey="usage" radius={[15, 15, 15, 15]} barSize={50} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-white text-base sm:text-lg">Recent Activity</CardTitle>
              <p className="text-xs sm:text-sm text-white/50 mt-1">Latest system events</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative group">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <div className="max-h-[300px] overflow-y-auto">
                  <DropdownMenuItem><Clock10 className="mr-1 h-4 w-4" /> Last 24 Hours</DropdownMenuItem>
                  <DropdownMenuItem><Calendar className="mr-1 h-4 w-4" /> This Month</DropdownMenuItem>
                  <DropdownMenuItem><History className="mr-1 h-4 w-4" /> Lifetime Logs</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><Zap className="mr-1 h-4 w-4" /> AI Computations</DropdownMenuItem>
                  <DropdownMenuItem><LayoutList className="mr-1 h-4 w-4" /> System Logs</DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-2">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3 p-2 rounded-lg hover:bg-white/5 transition-all">
                  <div className={`p-1.5 sm:p-2 rounded-lg border ${activity.status === "success"
                    ? "bg-blue-500/10 border-blue-500/20"
                    : "bg-amber-500/10 border-amber-500/20"
                    }`}>
                    <activity.icon className={`h-3 w-3 sm:h-6 sm:w-6 ${activity.status === "success"
                      ? "text-blue-500"
                      : "text-amber-400"
                      }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="xs:flex justify-between gap-2">
                      <div>
                        <p className="text-xs sm:text-base text-slate-200 font-medium truncate">{activity.action}</p>
                        <p className="text-xs sm:text-sm text-white/50 truncate">{activity.user}</p>
                      </div>
                      <p className="text-xs sm:text-sm text-white/50 mt-1">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* Top Models */}
        <Card className="lg:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-white text-base sm:text-lg">Top AI Models</CardTitle>
              <p className="text-xs sm:text-sm text-white/50 mt-1">Most used models this week</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative group">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <div className="max-h-[300px] overflow-y-auto">
                  <DropdownMenuItem><Trophy className="mr-1 h-4 w-4" /> Top Performance</DropdownMenuItem>
                  <DropdownMenuItem><Zap className="mr-1 h-4 w-4" /> Fastest Inference</DropdownMenuItem>
                  <DropdownMenuItem><BarChart3 className="mr-1 h-4 w-4" /> Highest Volume</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><Cpu className="mr-1 h-4 w-4" /> LLM Reasoning</DropdownMenuItem>
                  <DropdownMenuItem><Sparkle className="mr-1 h-4 w-4" /> Image & Video</DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 sm:space-y-4">
              {topModels.map((model, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-4 p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-primary/20 border border-primary/30">
                          <Brain className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-200">{model.name}</span>
                        <span
                          className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded ${model.status === "Active"
                            ? "bg-primary/20 text-primary border border-primary/30"
                            : "bg-slate-700 text-white/50"
                            }`}
                        >
                          {model.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-white/50 ml-8 sm:ml-0">
                        <span>{model.requests} requests</span>
                        <span>{model.avgTime} avg</span>
                      </div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 border border-primary/10">
                      <div className="bg-linear-to-r from-primary to-primary h-1.5 rounded-full transition-all duration-500" style={{ width: `${model.usage}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-white text-base sm:text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
            <Button variant="outline" className="h-auto flex-col gap-1.5 sm:gap-2 py-3 sm:py-4 bg-primary/5 border-primary/30 text-slate-200 hover:bg-primary/10 hover:border-primary hover:text-white transition-all">
              <Sparkles className="h-4! w-4! sm:h-5! sm:w-5! text-primary" />
              <span className="text-xs sm:text-sm">Generate Content</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-1.5 sm:gap-2 py-3 sm:py-4 bg-primary/5 border-primary/30 text-slate-200 hover:bg-primary/10 hover:border-primary hover:text-white transition-all">
              <MessageSquare className="h-4! w-4! sm:h-5! sm:w-5! text-primary" />
              <span className="text-xs sm:text-sm">Train Chatbot</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-1.5 sm:gap-2 py-3 sm:py-4 bg-primary/5 border-primary/30 text-slate-200 hover:bg-primary/10 hover:border-primary hover:text-white transition-all">
              <Code className="h-4! w-4! sm:h-5! sm:w-5! text-primary" />
              <span className="text-xs sm:text-sm">Code Assistant</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-1.5 sm:gap-2 py-3 sm:py-4 bg-primary/5 border-primary/30 text-slate-200 hover:bg-primary/10 hover:border-primary hover:text-white transition-all">
              <FileText className="h-4! w-4! sm:h-5! sm:w-5! text-primary" />
              <span className="text-xs sm:text-sm">View Analytics</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard;
