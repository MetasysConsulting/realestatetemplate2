"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  HOME_CLOSED_LOANS_DEFAULT,
  HOME_LOAN_LEADS,
  HOME_LOAN_LEADS_TO_BANKS,
  HOME_MEMBER_STATS,
  HOME_NEW_LISTINGS_TODAY,
  HOME_NEW_USERS,
  HOME_SALES_STATS,
  HOME_TOP_NEW_LISTINGS,
} from "@/lib/reovana-admin-data";
import { ChevronDown, ChevronUp, DollarSign, Home, Users } from "lucide-react";

type ClosedLoan = {
  id: string;
  lead: string;
  bank: string;
  closedDate: string;
  earned: string;
};

const AdminHome = () => {
  const [showAllUsers, setShowAllUsers] = useState(false);
  const [closedLoans, setClosedLoans] = useState<ClosedLoan[]>(HOME_CLOSED_LOANS_DEFAULT);
  const [manualLead, setManualLead] = useState("");
  const [manualBank, setManualBank] = useState("");
  const [manualEarned, setManualEarned] = useState("");

  const visibleUsers = showAllUsers ? HOME_NEW_USERS : HOME_NEW_USERS.slice(0, 5);

  const addClosedLoan = () => {
    if (!manualLead.trim()) return;
    setClosedLoans((prev) => [
      {
        id: `c-${Date.now()}`,
        lead: manualLead,
        bank: manualBank || "—",
        closedDate: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        earned: manualEarned ? `$${manualEarned.replace(/^\$/, "")}` : "$0",
      },
      ...prev,
    ]);
    setManualLead("");
    setManualBank("");
    setManualEarned("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Home</h1>
        <p className="text-sm sm:text-base text-white/50 mt-1">
          Daily operations — sales, members, listings, and loan leads
        </p>
      </div>

      {/* Row 1: Sales */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {HOME_SALES_STATS.map((stat) => (
          <Card key={stat.label} className="hover:border-primary/40 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50">{stat.label}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  <p className="text-xs text-white/40 mt-1">Unlock + subscription revenue</p>
                </div>
                <DollarSign className="h-8 w-8 text-primary opacity-80" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Row 2: Members */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {HOME_MEMBER_STATS.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="pt-6">
              <p className="text-xs uppercase tracking-wider text-white/50">New members — {stat.label}</p>
              <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Row 3: New users + listings today */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" /> New users
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              className="text-primary"
              onClick={() => setShowAllUsers(!showAllUsers)}
            >
              {showAllUsers ? (
                <>Show top 5 <ChevronUp className="h-4 w-4 ml-1" /></>
              ) : (
                <>Expand list <ChevronDown className="h-4 w-4 ml-1" /></>
              )}
            </Button>
          </CardHeader>
          <CardContent className="space-y-2">
            {visibleUsers.map((user) => (
              <div
                key={user.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg bg-white/5 border border-white/10"
              >
                <div>
                  <p className="font-medium text-white">{user.name}</p>
                  <p className="text-sm text-white/50">{user.email}</p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-primary">{user.plan}</span>
                  <span className="text-white/40">{user.joined}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="flex flex-col justify-center">
          <CardContent className="pt-6 text-center">
            <Home className="h-10 w-10 text-primary mx-auto mb-3" />
            <p className="text-xs uppercase tracking-wider text-white/50">New listings today</p>
            <p className="text-5xl font-bold text-white mt-2">{HOME_NEW_LISTINGS_TODAY}</p>
            <p className="text-sm text-white/50 mt-2">Added to REOVANA from scrapers & sellers</p>
            <Button variant="outline" className="mt-4 border-primary/30" asChild>
              <Link href="/listings">View all listings</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Row 4: Loan leads */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-white text-base">Need-a-loan form leads</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 max-h-64 overflow-y-auto scrollbar-thin">
            {HOME_LOAN_LEADS.map((lead) => (
              <div key={lead.id} className="p-3 rounded-lg bg-white/5 border border-white/10 text-sm">
                <p className="font-medium text-white">{lead.name}</p>
                <p className="text-white/50">{lead.amount} · {lead.state}</p>
                <p className="text-white/40 text-xs mt-1">{lead.submitted}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-white text-base">Sent to banks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 max-h-64 overflow-y-auto scrollbar-thin">
            {HOME_LOAN_LEADS_TO_BANKS.map((row) => (
              <div key={row.id} className="p-3 rounded-lg bg-white/5 border border-white/10 text-sm">
                <p className="font-medium text-white">{row.lead}</p>
                <p className="text-white/50">{row.bank}</p>
                <p className="text-primary text-xs mt-1">{row.status} · {row.sent}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-white text-base">Closed deals (manual entry)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Input
                placeholder="Lead name"
                value={manualLead}
                onChange={(e) => setManualLead(e.target.value)}
              />
              <Input
                placeholder="Bank"
                value={manualBank}
                onChange={(e) => setManualBank(e.target.value)}
              />
              <Input
                placeholder="Amount earned ($)"
                value={manualEarned}
                onChange={(e) => setManualEarned(e.target.value)}
              />
              <Button className="w-full" onClick={addClosedLoan}>
                Add closed deal
              </Button>
            </div>
            <div className="space-y-2 max-h-40 overflow-y-auto scrollbar-thin">
              {closedLoans.map((deal) => (
                <div key={deal.id} className="p-2 rounded-lg bg-white/5 border border-white/10 text-sm">
                  <p className="text-white font-medium">{deal.lead}</p>
                  <p className="text-white/50">{deal.bank} · {deal.closedDate}</p>
                  <p className="text-green-400">{deal.earned}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Row 5: Top new listings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-white">Top 5 new listings today</CardTitle>
          <p className="text-sm text-white/50">Click a row to open the listing detail page</p>
        </CardHeader>
        <CardContent className="space-y-2">
          {HOME_TOP_NEW_LISTINGS.map((listing) => (
            <Link
              key={listing.id}
              href={`/home/listing/${encodeURIComponent(listing.id)}`}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-colors"
            >
              <div>
                <p className="font-medium text-white">{listing.title}</p>
                <p className="text-sm text-white/50">{listing.category} · {listing.added}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-primary">{listing.price}</span>
                <span className="text-xs text-white/40 font-mono">{listing.id}</span>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminHome;
