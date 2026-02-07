/**
 * DashboardLayout - Sovereign Dark Command Layout
 * تخطيط لوحة التحكم السيادية مع شريط جانبي ثابت
 */

import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Eye,
  Box,
  Code2,
  LayoutDashboard,
  ChevronRight,
  Activity,
  Menu,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";

interface NavItem {
  path: string;
  label: string;
  icon: typeof Shield;
  color: string;
}

const navItems: NavItem[] = [
  { path: "/", label: "لوحة التحكم", icon: LayoutDashboard, color: "text-cyber-cyan" },
  { path: "/quantum", label: "الدرع الكمومي", icon: Shield, color: "text-sovereign-gold" },
  { path: "/the-eye", label: "العين", icon: Eye, color: "text-cyber-cyan" },
  { path: "/entities", label: "الكيانات", icon: Box, color: "text-success-emerald" },
  { path: "/satr", label: "لغة سطر", icon: Code2, color: "text-sovereign-gold" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 right-0 z-50 w-72 bg-sidebar border-l border-sidebar-border flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo Area */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center overflow-hidden">
              <Shield className="w-5 h-5 text-cyber-cyan" />
            </div>
            <div>
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663119235650/PLCUEZrawJtxfFgy.png"
                alt="Allsitey"
                className="h-5"
                style={{ direction: 'ltr', filter: 'brightness(3) contrast(2)' }}
              />
              <p className="text-[11px] text-muted-foreground font-mono tracking-wider mt-1" style={{ direction: 'ltr' }}>
                SOVEREIGN v2.0.0
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location === item.path;
            const Icon = item.icon;
            return (
              <Link key={item.path} href={item.path}>
                <motion.div
                  whileHover={{ x: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "bg-cyber-cyan/10 border border-cyber-cyan/20"
                      : "hover:bg-sidebar-accent border border-transparent"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      isActive ? item.color : "text-muted-foreground group-hover:" + item.color
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <ChevronRight className="w-4 h-4 text-cyber-cyan mr-auto rotate-180" />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* System Status Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="glass-card rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-success-emerald animate-pulse-glow" />
              <span className="text-xs text-muted-foreground">حالة النظام</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-success-emerald">OPERATIONAL</span>
              <div className="flex items-center gap-1">
                <Activity className="w-3 h-3 text-cyber-cyan" />
                <span className="text-xs font-mono text-cyber-cyan">99.95%</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-3">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663119235650/XxaoTzKXAxWlOcPF.png"
              alt="E1SY"
              className="h-5"
            />
            <span className="text-[10px] text-muted-foreground/50 font-mono">Allsitey Sovereign</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <Menu className="w-5 h-5 text-muted-foreground" />
              </button>
              <div>
                <h2 className="text-sm font-semibold text-foreground">
                  {navItems.find((n) => n.path === location)?.label || "لوحة التحكم"}
                </h2>
                <p className="text-[11px] text-muted-foreground font-mono" style={{ direction: 'ltr' }}>
                  {new Date().toLocaleDateString("ar-SA", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-success-emerald/10 border border-success-emerald/20">
                <div className="w-1.5 h-1.5 rounded-full bg-success-emerald animate-pulse" />
                <span className="text-xs font-mono text-success-emerald">SECURE</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20">
                <Shield className="w-3.5 h-3.5 text-cyber-cyan" />
                <span className="text-xs font-mono text-cyber-cyan">QUANTUM</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={location}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
