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

/** Sammy admin Home tab — operations snapshot (mock). */
export const HOME_SALES_STATS = [
  { label: "Today", value: "$1,247" },
  { label: "Weekly", value: "$8,420" },
  { label: "Monthly Total", value: "$28,400" },
];

export const HOME_MEMBER_STATS = [
  { label: "Today", value: "12" },
  { label: "Weekly", value: "86" },
  { label: "Monthly", value: "312" },
  { label: "Total", value: "1,240" },
];

export const HOME_NEW_USERS = [
  { id: "u1", name: "Marcus Chen", email: "marcus.chen@email.com", plan: "Pro", joined: "2h ago" },
  { id: "u2", name: "Sarah Mitchell", email: "sarah.m@email.com", plan: "Per unlock", joined: "4h ago" },
  { id: "u3", name: "James Ortiz", email: "j.ortiz@email.com", plan: "Free", joined: "6h ago" },
  { id: "u4", name: "Emily Foster", email: "emily.f@email.com", plan: "Pro", joined: "8h ago" },
  { id: "u5", name: "David Kim", email: "david.kim@email.com", plan: "Per unlock", joined: "11h ago" },
  { id: "u6", name: "Lisa Nguyen", email: "lisa.n@email.com", plan: "Free", joined: "14h ago" },
  { id: "u7", name: "Robert Hayes", email: "r.hayes@email.com", plan: "Pro", joined: "18h ago" },
];

export const HOME_NEW_LISTINGS_TODAY = 156;

export const HOME_LOAN_LEADS = [
  { id: "l1", name: "Angela Brooks", email: "a.brooks@email.com", amount: "$185,000", state: "FL", submitted: "1h ago" },
  { id: "l2", name: "Tyler Reed", email: "t.reed@email.com", amount: "$142,500", state: "TX", submitted: "3h ago" },
  { id: "l3", name: "Nina Patel", email: "n.patel@email.com", amount: "$98,000", state: "OH", submitted: "5h ago" },
  { id: "l4", name: "Chris Dalton", email: "c.dalton@email.com", amount: "$220,000", state: "GA", submitted: "7h ago" },
  { id: "l5", name: "Rachel Stone", email: "r.stone@email.com", amount: "$156,000", state: "AZ", submitted: "9h ago" },
  { id: "l6", name: "Kevin Marsh", email: "k.marsh@email.com", amount: "$89,500", state: "TN", submitted: "11h ago" },
];

export const HOME_LOAN_LEADS_TO_BANKS = [
  { id: "b1", lead: "Angela Brooks", bank: "SunTrust Mortgage", sent: "45m ago", status: "Pending" },
  { id: "b2", lead: "Tyler Reed", bank: "Wells Fargo Home", sent: "2h ago", status: "In review" },
  { id: "b3", lead: "Nina Patel", bank: "Chase Home Lending", sent: "4h ago", status: "Pending" },
  { id: "b4", lead: "Chris Dalton", bank: "Rocket Mortgage", sent: "5h ago", status: "Submitted" },
  { id: "b5", lead: "Michael Torres", bank: "Quicken Loans", sent: "Jun 2, 2026", status: "Closed" },
];

export const HOME_CLOSED_LOANS_DEFAULT = [
  { id: "c1", lead: "Michael Torres", bank: "Quicken Loans", closedDate: "Jun 2, 2026", earned: "$450" },
  { id: "c2", lead: "Janet Walsh", bank: "Bank of America", closedDate: "May 28, 2026", earned: "$380" },
];

export const HOME_TOP_NEW_LISTINGS = [
  { id: "HUD-094-123456", title: "3bd HUD — Tampa, FL", price: "$142,000", category: "HUD Home", added: "Today", beds: 3, baths: 2, sqft: "1,420", address: "4821 Oak Ridge Dr, Tampa, FL 33610", views: 284, source: "HUD HomeStore" },
  { id: "FC-2024-44102", title: "2bd Foreclosure — Cleveland, OH", price: "$67,200", category: "Foreclosure", added: "Today", beds: 2, baths: 1, sqft: "980", address: "1184 E 55th St, Cleveland, OH 44103", views: 412, source: "County records" },
  { id: "VA-REO-8821", title: "4bd Bank Owned — Jacksonville, FL", price: "$98,500", category: "Bank Owned", added: "Today", beds: 4, baths: 2, sqft: "1,680", address: "903 Pine Hollow Ln, Jacksonville, FL 32218", views: 196, source: "VA REO (VRM)" },
  { id: "HS-475-019", title: "3bd HomeSteps — Austin, TX", price: "$215,000", category: "HomeSteps", added: "Today", beds: 3, baths: 2, sqft: "1,540", address: "2207 Cedar Park Blvd, Austin, TX 78745", views: 158, source: "Freddie Mac HomeSteps" },
  { id: "PRE-9921", title: "3bd Pre-Foreclosure — Phoenix, AZ", price: "$189,000", category: "Pre-Foreclosure", added: "Today", beds: 3, baths: 2, sqft: "1,290", address: "4410 W Camelback Rd, Phoenix, AZ 85019", views: 221, source: "Pre-foreclosure feed" },
];

export type MemberSavedProperty = { id: string; title: string; price: string; savedAt: string };
export type MemberPostedProperty = { id: string; title: string; price: string; status: string; postedAt: string };
export type MemberPayment = { id: string; date: string; description: string; amount: string; method: string };

export const MOCK_MEMBERS = [
  {
    id: "m1",
    name: "Sarah Mitchell",
    email: "sarah.m@email.com",
    plan: "Pro",
    savedProperties: 4,
    postedProperties: 2,
    totalSpent: "$294",
    joined: "Jan 2025",
    savedList: [
      { id: "HUD-094-123456", title: "3bd HUD — Tampa, FL", price: "$142,000", savedAt: "Jun 3, 2026" },
      { id: "FC-2024-44102", title: "2bd Foreclosure — Cleveland, OH", price: "$67,200", savedAt: "Jun 1, 2026" },
      { id: "VA-REO-8821", title: "4bd Bank Owned — Jacksonville, FL", price: "$98,500", savedAt: "May 28, 2026" },
      { id: "PRE-9921", title: "3bd Pre-Foreclosure — Phoenix, AZ", price: "$189,000", savedAt: "May 20, 2026" },
    ] as MemberSavedProperty[],
    postedList: [
      { id: "MOT-1188", title: "Motivated seller — Nashville, TN", price: "$165,000", status: "Published", postedAt: "Apr 12, 2026" },
      { id: "OFF-2201", title: "Off-market duplex — Charlotte, NC", price: "$203,000", status: "Draft", postedAt: "May 2, 2026" },
    ] as MemberPostedProperty[],
    payments: [
      { id: "p1", date: "Jun 1, 2026", description: "Pro subscription — monthly", amount: "$49", method: "Stripe" },
      { id: "p2", date: "May 1, 2026", description: "Pro subscription — monthly", amount: "$49", method: "Stripe" },
      { id: "p3", date: "Apr 1, 2026", description: "Pro subscription — monthly", amount: "$49", method: "Stripe" },
      { id: "p4", date: "Mar 15, 2026", description: "Property unlock — HUD Tampa", amount: "$9", method: "Stripe" },
      { id: "p5", date: "Mar 1, 2026", description: "Pro subscription — monthly", amount: "$49", method: "Stripe" },
      { id: "p6", date: "Feb 1, 2026", description: "Pro subscription — monthly", amount: "$49", method: "Stripe" },
    ] as MemberPayment[],
  },
  {
    id: "m2",
    name: "Marcus Chen",
    email: "marcus.chen@email.com",
    plan: "Pro",
    savedProperties: 3,
    postedProperties: 0,
    totalSpent: "$441",
    joined: "Mar 2025",
    savedList: [
      { id: "HS-475-019", title: "3bd HomeSteps — Austin, TX", price: "$215,000", savedAt: "Jun 4, 2026" },
      { id: "TAX-4410", title: "Tax delinquent — Kansas City, MO", price: "$54,800", savedAt: "May 30, 2026" },
      { id: "SHER-330", title: "Sheriff's sale — Columbus, OH", price: "$72,400", savedAt: "May 18, 2026" },
    ] as MemberSavedProperty[],
    postedList: [] as MemberPostedProperty[],
    payments: [
      { id: "p1", date: "Jun 1, 2026", description: "Pro subscription — monthly", amount: "$49", method: "Stripe" },
      { id: "p2", date: "May 1, 2026", description: "Pro subscription — monthly", amount: "$49", method: "Stripe" },
      { id: "p3", date: "Apr 22, 2026", description: "Property unlock — Austin HomeSteps", amount: "$9", method: "Stripe" },
      { id: "p4", date: "Apr 1, 2026", description: "Pro subscription — monthly", amount: "$49", method: "Stripe" },
      { id: "p5", date: "Mar 1, 2026", description: "Pro subscription — monthly", amount: "$49", method: "Stripe" },
    ] as MemberPayment[],
  },
  {
    id: "m3",
    name: "James Ortiz",
    email: "j.ortiz@email.com",
    plan: "Per unlock",
    savedProperties: 2,
    postedProperties: 1,
    totalSpent: "$72",
    joined: "May 2025",
    savedList: [
      { id: "AUC-8844", title: "Auction — Atlanta, GA", price: "$124,900", savedAt: "Jun 2, 2026" },
      { id: "GSA-048-2", title: "Government auction — Denver, CO", price: "$310,000", savedAt: "May 25, 2026" },
    ] as MemberSavedProperty[],
    postedList: [
      { id: "MOT-3301", title: "Motivated seller — Orlando, FL", price: "$178,000", status: "Published", postedAt: "May 8, 2026" },
    ] as MemberPostedProperty[],
    payments: [
      { id: "p1", date: "May 28, 2026", description: "Property unlock — Atlanta auction", amount: "$9", method: "Stripe" },
      { id: "p2", date: "May 10, 2026", description: "Property unlock — Orlando off-market", amount: "$9", method: "Stripe" },
      { id: "p3", date: "Apr 3, 2026", description: "Property unlock — Denver GSA", amount: "$9", method: "Stripe" },
    ] as MemberPayment[],
  },
  {
    id: "m4",
    name: "Emily Foster",
    email: "emily.f@email.com",
    plan: "Pro",
    savedProperties: 5,
    postedProperties: 0,
    totalSpent: "$539",
    joined: "Feb 2025",
    savedList: [
      { id: "HUD-094-998812", title: "HUD Home — Las Vegas, NV", price: "$176,500", savedAt: "Jun 3, 2026" },
      { id: "FC-2024-44102", title: "2bd Foreclosure — Cleveland, OH", price: "$67,200", savedAt: "Jun 1, 2026" },
      { id: "VA-REO-8821", title: "4bd Bank Owned — Jacksonville, FL", price: "$98,500", savedAt: "May 29, 2026" },
      { id: "PRE-9921", title: "3bd Pre-Foreclosure — Phoenix, AZ", price: "$189,000", savedAt: "May 22, 2026" },
      { id: "HS-475-019", title: "3bd HomeSteps — Austin, TX", price: "$215,000", savedAt: "May 15, 2026" },
    ] as MemberSavedProperty[],
    postedList: [] as MemberPostedProperty[],
    payments: [
      { id: "p1", date: "Jun 1, 2026", description: "Pro subscription — monthly", amount: "$49", method: "Stripe" },
      { id: "p2", date: "May 1, 2026", description: "Pro subscription — monthly", amount: "$49", method: "Stripe" },
      { id: "p3", date: "Apr 1, 2026", description: "Pro subscription — monthly", amount: "$49", method: "Stripe" },
      { id: "p4", date: "Mar 1, 2026", description: "Pro subscription — monthly", amount: "$49", method: "Stripe" },
      { id: "p5", date: "Feb 1, 2026", description: "Pro subscription — monthly", amount: "$49", method: "Stripe" },
    ] as MemberPayment[],
  },
  {
    id: "m5",
    name: "David Kim",
    email: "david.kim@email.com",
    plan: "Free",
    savedProperties: 1,
    postedProperties: 0,
    totalSpent: "$0",
    joined: "Jun 2026",
    savedList: [
      { id: "HUD-094-123456", title: "3bd HUD — Tampa, FL", price: "$142,000", savedAt: "Jun 4, 2026" },
    ] as MemberSavedProperty[],
    postedList: [] as MemberPostedProperty[],
    payments: [] as MemberPayment[],
  },
];

export const MOCK_EMAIL_CAMPAIGNS = [
  { id: "e1", subject: "New HUD listings in Florida", audience: "Pro members — FL", status: "Sent", sentAt: "Today 9:00 AM", opens: "42%", recipients: 318 },
  { id: "e2", subject: "Your saved search: Tampa foreclosures", audience: "Saved search alerts", status: "Scheduled", sentAt: "Tomorrow 8:00 AM", opens: "—", recipients: 124 },
  { id: "e3", subject: "Welcome to REOVANA Pro", audience: "New Pro signups", status: "Automated", sentAt: "On signup", opens: "68%", recipients: 86 },
  { id: "e4", subject: "Weekly distressed property digest", audience: "All subscribers", status: "Draft", sentAt: "—", opens: "—", recipients: 1240 },
  { id: "e5", subject: "Auction ending soon — Atlanta, GA", audience: "Saved auction alerts", status: "Sent", sentAt: "Yesterday 6:00 PM", opens: "51%", recipients: 89 },
  { id: "e6", subject: "Tax delinquent deals in Missouri", audience: "Pro members — MO", status: "Sent", sentAt: "Jun 2, 2026", opens: "38%", recipients: 42 },
];

export const EMAIL_SUMMARY_STATS = {
  sentThisMonth: MOCK_EMAIL_CAMPAIGNS.filter((c) => c.status === "Sent").length,
  scheduled: MOCK_EMAIL_CAMPAIGNS.filter((c) => c.status === "Scheduled").length,
  avgOpenRate: "54%",
};
