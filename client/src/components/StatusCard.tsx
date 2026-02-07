/**
 * StatusCard - Sovereign glass card for system metrics
 */

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface StatusCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  color: "cyan" | "gold" | "emerald" | "red";
  trend?: { value: number; label: string };
  delay?: number;
}

const colorMap = {
  cyan: {
    bg: "bg-cyber-cyan/10",
    border: "border-cyber-cyan/20",
    text: "text-cyber-cyan",
    glow: "glow-cyan",
    iconBg: "bg-cyber-cyan/15",
  },
  gold: {
    bg: "bg-sovereign-gold/10",
    border: "border-sovereign-gold/20",
    text: "text-sovereign-gold",
    glow: "glow-gold",
    iconBg: "bg-sovereign-gold/15",
  },
  emerald: {
    bg: "bg-success-emerald/10",
    border: "border-success-emerald/20",
    text: "text-success-emerald",
    glow: "",
    iconBg: "bg-success-emerald/15",
  },
  red: {
    bg: "bg-threat-red/10",
    border: "border-threat-red/20",
    text: "text-threat-red",
    glow: "glow-red",
    iconBg: "bg-threat-red/15",
  },
};

export default function StatusCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color,
  trend,
  delay = 0,
}: StatusCardProps) {
  const c = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1, ease: "easeOut" }}
      className={`glass-card rounded-xl p-5 ${c.glow} hover:scale-[1.02] transition-transform duration-300`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2.5 rounded-lg ${c.iconBg} ${c.border} border`}>
          <Icon className={`w-5 h-5 ${c.text}`} />
        </div>
        {trend && (
          <span
            className={`text-xs font-mono px-2 py-1 rounded-full ${
              trend.value >= 0
                ? "bg-success-emerald/10 text-success-emerald"
                : "bg-threat-red/10 text-threat-red"
            }`}
          >
            {trend.value >= 0 ? "+" : ""}
            {trend.value}% {trend.label}
          </span>
        )}
      </div>
      <div>
        <p className="text-2xl font-bold font-display text-foreground mb-1 animate-counter" style={{ direction: 'ltr', textAlign: 'right' }}>
          {value}
        </p>
        <p className="text-sm text-muted-foreground">{title}</p>
        {subtitle && (
          <p className="text-xs text-muted-foreground/60 mt-1 font-mono" style={{ direction: 'ltr', textAlign: 'right' }}>
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}
