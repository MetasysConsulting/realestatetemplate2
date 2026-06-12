import {
  Activity,
  DollarSign,
  Eye,
  Home,
  RefreshCw,
  Unlock,
  Users,
} from "lucide-react";

export const REOVANA_BRAND = {
  name: "REOVANA",
  tagline: "Distressed property intelligence",
  headline: "Find great deals. Create real value.",
  adminTitle: "REOVANA Admin",
  publicSiteUrl: "https://reovana.com",
  localPublicSiteUrl: "http://localhost:3000",
  primaryColor: "#7695ff",
  adminUser: { name: "REOVANA Admin", email: "admin@reovana.com", role: "Site Administrator" },
} as const;

export const ADMIN_NOTIFICATIONS = [
  { title: "HUD scrape completed", detail: "807 listings synced", time: "8 min ago", type: "success" as const },
  { title: "Property unlock", detail: "investor.fl@email.com — Tampa, FL", time: "22 min ago", type: "revenue" as const },
  { title: "Fannie Mae HomePath blocked", detail: "CloudFront 403 — manual review needed", time: "41 min ago", type: "warning" as const },
  { title: "New Pro subscriber", detail: "sarah.m@email.com", time: "1h ago", type: "success" as const },
  { title: "VA REO feed refreshed", detail: "800 listings updated", time: "2h ago", type: "success" as const },
];

export const MOCK_LISTINGS = [
  { id: "HUD-094-123456", category: "HUD Home", city: "Tampa", state: "FL", price: "$142,000", status: "Published", views: 284, unlocks: 12 },
  { id: "VA-REO-8821", category: "Bank Owned", city: "Jacksonville", state: "FL", price: "$98,500", status: "Published", views: 196, unlocks: 8 },
  { id: "FC-2024-44102", category: "Foreclosure", city: "Cleveland", state: "OH", price: "$67,200", status: "Published", views: 412, unlocks: 19 },
  { id: "HS-475-019", category: "HomeSteps", city: "Austin", state: "TX", price: "$215,000", status: "Published", views: 158, unlocks: 6 },
  { id: "AUC-8844", category: "Auction", city: "Atlanta", state: "GA", price: "$124,900", status: "Pending review", views: 89, unlocks: 3 },
  { id: "PRE-9921", category: "Pre-Foreclosure", city: "Phoenix", state: "AZ", price: "$189,000", status: "Published", views: 221, unlocks: 11 },
  { id: "TAX-4410", category: "Tax Delinquent", city: "Kansas City", state: "MO", price: "$54,800", status: "Published", views: 134, unlocks: 7 },
  { id: "HUD-094-998812", category: "HUD Home", city: "Las Vegas", state: "NV", price: "$176,500", status: "Published", views: 302, unlocks: 14 },
  { id: "OFF-2201", category: "Off-Market", city: "Charlotte", state: "NC", price: "$203,000", status: "Draft", views: 0, unlocks: 0 },
  { id: "MOT-1188", category: "Motivated Seller", city: "Nashville", state: "TN", price: "$165,000", status: "Published", views: 97, unlocks: 4 },
  { id: "SHER-330", category: "Sheriff's Sale", city: "Columbus", state: "OH", price: "$72,400", status: "Published", views: 178, unlocks: 9 },
  { id: "GSA-048-2", category: "Government Auction", city: "Denver", state: "CO", price: "$310,000", status: "Published", views: 64, unlocks: 2 },
];

export const BUY_MENU_CATEGORIES = [
  "Motivated Seller", "Off-Market", "Foreclosure", "Pre-Foreclosure",
  "Bank Owned", "Auction Property", "Sheriff's Sale", "Tax Delinquent", "HUD Home",
];

export const SUBSCRIPTION_FAQ = [
  {
    q: "Can investors switch between per-unlock and Pro?",
    a: "Yes. Pro members skip per-unlock fees while active. Lapsed subscribers can still pay $9 per property.",
  },
  {
    q: "What payment methods are supported?",
    a: "Stripe checkout for cards and digital wallets. Wire transfer available for bulk investor accounts.",
  },
  {
    q: "Is browsing free on the public site?",
    a: "Yes. Users can search categories and see blurred previews. Full address and contact require unlock or Pro.",
  },
  {
    q: "What happens when a listing is removed at source?",
    a: "The admin feed marks it inactive on the next scrape. Unlocked buyers retain their purchased detail snapshot.",
  },
];

export const SITE_SETTINGS_DEFAULTS = {
  unlockPrice: 9,
  proMonthlyPrice: 49,
  blurAddresses: true,
  showEquityEstimates: true,
  autoPublishScraped: true,
  scraperSchedule: "Every 6 hours",
};

/** Mirrors live scraper inventory on the public site (mock admin snapshot). */
export const DATA_SOURCE_FEEDS = [
  { name: "HUD HomeStore", listings: 807, status: "Active", lastSync: "2h ago" },
  { name: "VA REO (VRM)", listings: 800, status: "Active", lastSync: "3h ago" },
  { name: "Freddie Mac HomeSteps", listings: 475, status: "Active", lastSync: "4h ago" },
  { name: "GSA Government Disposition", listings: 48, status: "Active", lastSync: "6h ago" },
  { name: "GSA Federal Property Auctions", listings: 12, status: "Active", lastSync: "6h ago" },
  { name: "USDA Resales", listings: 0, status: "Blocked", lastSync: "Failed" },
  { name: "Fannie Mae HomePath", listings: 0, status: "Blocked", lastSync: "403 error" },
] as const;

export const LISTING_CATEGORIES = [
  { name: "HUD Homes", listings: 807, fill: "var(--chart-1)" },
  { name: "Foreclosure", listings: 312, fill: "var(--chart-1)" },
  { name: "Bank Owned", listings: 248, fill: "var(--chart-1)" },
  { name: "Pre-Foreclosure", listings: 186, fill: "url(#barStripes)" },
  { name: "Auction", listings: 164, fill: "var(--chart-1)" },
  { name: "Tax Delinquent", listings: 92, fill: "var(--chart-1)" },
] as const;

export const dashboardStats = [
  {
    title: "Active Listings",
    value: "2,142",
    icon: Home,
    change: "+12.4%",
    trend: "up" as const,
    gradient: "from-primary/20 to-primary/20",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    subtext: "156 added this week",
  },
  {
    title: "Property Unlocks",
    value: "1,847",
    icon: Unlock,
    change: "+21.8%",
    trend: "up" as const,
    gradient: "from-primary/20 to-primary/20",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    subtext: "94 today",
  },
  {
    title: "Monthly Revenue",
    value: "$28.4K",
    icon: DollarSign,
    change: "+18.6%",
    trend: "up" as const,
    gradient: "from-primary/20 to-[#4e0aad]/20",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    subtext: "$1.2K today",
  },
  {
    title: "Scraper Success",
    value: "96.2%",
    icon: RefreshCw,
    change: "+1.4%",
    trend: "up" as const,
    gradient: "from-[#4e0aad]/20 to-primary/20",
    iconBg: "bg-white/10",
    iconColor: "text-white",
    subtext: "5 of 7 feeds healthy",
  },
];

export const listingTrendData = [
  { month: "Jan", listings: 1680, unlocks: 920, revenue: 14200 },
  { month: "Feb", listings: 1745, unlocks: 1010, revenue: 15800 },
  { month: "Mar", listings: 1810, unlocks: 1120, revenue: 17100 },
  { month: "Apr", listings: 1895, unlocks: 1185, revenue: 18400 },
  { month: "May", listings: 1960, unlocks: 1290, revenue: 21200 },
  { month: "Jun", listings: 2045, unlocks: 1410, revenue: 23800 },
  { month: "Jul", listings: 2142, unlocks: 1520, revenue: 25400 },
];

export const recentAdminActivity = [
  {
    time: "8 min ago",
    action: "HUD HomeStore scrape completed",
    user: "807 listings synced",
    status: "success" as const,
  },
  {
    time: "22 min ago",
    action: "Property unlock purchased",
    user: "investor.fl@email.com",
    status: "success" as const,
  },
  {
    time: "41 min ago",
    action: "Fannie Mae HomePath blocked",
    user: "CloudFront 403",
    status: "warning" as const,
  },
  {
    time: "1h ago",
    action: "New Pro subscription",
    user: "sarah.m@email.com",
    status: "success" as const,
  },
  {
    time: "2h ago",
    action: "VA REO feed refreshed",
    user: "800 listings updated",
    status: "success" as const,
  },
];

export const topMarkets = [
  { name: "Florida", listings: "412", views: "18.2K", status: "Active", usage: 88 },
  { name: "Texas", listings: "318", views: "14.6K", status: "Active", usage: 74 },
  { name: "Ohio", listings: "245", views: "11.1K", status: "Active", usage: 62 },
  { name: "Georgia", listings: "198", views: "8.4K", status: "Growing", usage: 48 },
];

export const analyticsKeyMetrics = [
  {
    title: "Unlock Revenue",
    value: "$28,400",
    change: "+18.6%",
    trend: "up" as const,
    icon: DollarSign,
    subtext: "$12.4K from subscriptions",
    color: "green-500",
  },
  {
    title: "Listing Views",
    value: "184K",
    change: "+24.1%",
    trend: "up" as const,
    icon: Eye,
    subtext: "6.2K views/day avg",
    color: "blue-500",
  },
  {
    title: "Paid Subscribers",
    value: "1,240",
    change: "+9.8%",
    trend: "up" as const,
    icon: Users,
    subtext: "86 new this month",
    color: "purple-500",
  },
  {
    title: "Feed Uptime",
    value: "96.2%",
    change: "+1.4%",
    trend: "up" as const,
    icon: Activity,
    subtext: "2 feeds need attention",
    color: "emerald-500",
  },
];

export const revenueData = [
  { month: "Jan", revenue: 18200, expenses: 8400, profit: 9800 },
  { month: "Feb", revenue: 19800, expenses: 8600, profit: 11200 },
  { month: "Mar", revenue: 21400, expenses: 8900, profit: 12500 },
  { month: "Apr", revenue: 22100, expenses: 9100, profit: 13000 },
  { month: "May", revenue: 24600, expenses: 9400, profit: 15200 },
  { month: "Jun", revenue: 26800, expenses: 9800, profit: 17000 },
  { month: "Jul", revenue: 28400, expenses: 10200, profit: 18200 },
];

export const trafficData = [
  { day: "Mon", views: 8200, unlocks: 142, signups: 28 },
  { day: "Tue", views: 9100, unlocks: 156, signups: 31 },
  { day: "Wed", views: 10400, unlocks: 168, signups: 35 },
  { day: "Thu", views: 9800, unlocks: 151, signups: 29 },
  { day: "Fri", views: 11200, unlocks: 189, signups: 42 },
  { day: "Sat", views: 7600, unlocks: 124, signups: 22 },
  { day: "Sun", views: 6900, unlocks: 108, signups: 19 },
];

export const scraperPerformance = [
  { time: "00:00", success: 94, failed: 6, pending: 12 },
  { time: "04:00", success: 96, failed: 4, pending: 8 },
  { time: "08:00", success: 92, failed: 8, pending: 18 },
  { time: "12:00", success: 97, failed: 3, pending: 6 },
  { time: "16:00", success: 95, failed: 5, pending: 10 },
  { time: "20:00", success: 96, failed: 4, pending: 7 },
];

export const subscriptionMetrics = [
  { month: "Jan", new: 68, churned: 22, net: 46 },
  { month: "Feb", new: 74, churned: 19, net: 55 },
  { month: "Mar", new: 82, churned: 24, net: 58 },
  { month: "Apr", new: 79, churned: 21, net: 58 },
  { month: "May", new: 91, churned: 18, net: 73 },
  { month: "Jun", new: 96, churned: 25, net: 71 },
];

export const topSiteFeatures = [
  { feature: "Property Search", usage: 12400, growth: 22 },
  { feature: "HUD Home Listings", usage: 9800, growth: 28 },
  { feature: "Unlock Checkout", usage: 7200, growth: 19 },
  { feature: "Auction Calendar", usage: 5100, growth: 14 },
  { feature: "Equity Estimates", usage: 4300, growth: 11 },
];

export const reovanaPricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Browse blurred listings and explore categories",
    features: [
      { text: "Browse all property categories", included: true },
      { text: "Basic search & filters", included: true },
      { text: "Learn guides & FAQs", included: true },
      { text: "Property unlocks", included: false },
      { text: "Saved searches", included: false },
      { text: "Priority alerts", included: false },
    ],
    cta: "View on site",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "Unlimited unlocks for active investors",
    features: [
      { text: "Unlimited property unlocks", included: true },
      { text: "Full address & contact details", included: true },
      { text: "Saved searches & alerts", included: true },
      { text: "Auction & HUD detail pages", included: true },
      { text: "Export saved lists (CSV)", included: true },
      { text: "Priority email support", included: true },
    ],
    cta: "Manage plan",
    popular: true,
  },
  {
    name: "Per Unlock",
    price: "$9",
    period: "/property",
    description: "Pay once for a single property detail",
    features: [
      { text: "One full property unlock", included: true },
      { text: "Address & owner contact", included: true },
      { text: "Equity estimate snapshot", included: true },
      { text: "No subscription required", included: true },
      { text: "Bulk unlock discounts", included: false },
      { text: "Unlimited access", included: false },
    ],
    cta: "View pricing",
    popular: false,
  },
];

export const adminChartConfig = {
  listings: { label: "Listings", color: "var(--chart-1)" },
  unlocks: { label: "Unlocks", color: "var(--chart-2)" },
  revenue: { label: "Revenue", color: "var(--chart-3)" },
  views: { label: "Views", color: "var(--chart-1)" },
  success: { label: "Success %", color: "var(--chart-1)" },
  failed: { label: "Failed", color: "var(--chart-2)" },
  new: { label: "New", color: "var(--chart-1)" },
  churned: { label: "Churned", color: "var(--chart-2)" },
  expenses: { label: "Expenses", color: "var(--chart-2)" },
  profit: { label: "Profit", color: "var(--chart-3)" },
};
