/**
 * TheEyePage - Behavioral Monitoring Dashboard
 * صفحة العين - المراقبة السلوكية
 */

import { motion } from "framer-motion";
import {
  Eye,
  AlertTriangle,
  ShieldAlert,
  Activity,
  Search,
  Filter,
  Clock,
  Scan,
  Radio,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import StatusCard from "@/components/StatusCard";
import { threatEvents, threatTimeSeries, IMAGES } from "@/lib/mock-data";
import { useState } from "react";

const threatLevelCounts = [
  { level: "LOW", count: threatEvents.filter((e) => e.threatLevel === "LOW").length, color: "#2EC4B6", label: "منخفض" },
  { level: "MEDIUM", count: threatEvents.filter((e) => e.threatLevel === "MEDIUM").length, color: "#D4A853", label: "متوسط" },
  { level: "HIGH", count: threatEvents.filter((e) => e.threatLevel === "HIGH").length, color: "#FF6B35", label: "عالي" },
  { level: "CRITICAL", count: threatEvents.filter((e) => e.threatLevel === "CRITICAL").length, color: "#E63946", label: "حرج" },
];

const behavioralPatterns = [
  { name: "وصول سريع للملفات", nameEn: "rapid_file_access", detected: 2, blocked: 1 },
  { name: "اتصال شبكي غير مصرح", nameEn: "unauthorized_network", detected: 1, blocked: 1 },
  { name: "إنشاء عمليات مشبوهة", nameEn: "suspicious_spawning", detected: 1, blocked: 1 },
  { name: "تصعيد صلاحيات", nameEn: "privilege_escalation", detected: 1, blocked: 1 },
  { name: "تلاعب بالذاكرة", nameEn: "memory_manipulation", detected: 1, blocked: 0 },
];

export default function TheEyePage() {
  const [filter, setFilter] = useState<string>("ALL");

  const filteredEvents = filter === "ALL"
    ? threatEvents
    : threatEvents.filter((e) => e.threatLevel === filter);

  return (
    <div className="space-y-6">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative rounded-2xl overflow-hidden h-44"
      >
        <img src={IMAGES.theEye} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/95" />
        <div className="relative z-10 h-full flex flex-col justify-center p-8">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-5 h-5 text-cyber-cyan" />
            <span className="text-xs font-mono text-cyber-cyan tracking-wider">THE EYE v2.0.0</span>
          </div>
          <h1 className="text-2xl font-bold font-display text-foreground mb-1">العين</h1>
          <p className="text-sm text-muted-foreground max-w-lg">
            نظام مراقبة سلوكية ذكي يراقب استدعاءات النظام ويكتشف الأنماط المشبوهة والتهديدات الأمنية
          </p>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatusCard title="إجمالي الأحداث" value={threatEvents.length} icon={Activity} color="cyan" delay={0} />
        <StatusCard title="تهديدات حرجة" value={threatEvents.filter((e) => e.threatLevel === "CRITICAL").length} icon={ShieldAlert} color="red" delay={1} />
        <StatusCard title="أنماط مكتشفة" value={behavioralPatterns.length} icon={Scan} color="gold" delay={2} />
        <StatusCard title="محاولات محظورة" value={4} icon={AlertTriangle} color="emerald" delay={3} />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Threat Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-xl p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-cyber-cyan" />
            <h3 className="text-sm font-semibold text-foreground">مخطط التهديدات الزمني</h3>
          </div>
          <div className="h-52" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={threatTimeSeries}>
                <defs>
                  <linearGradient id="threatGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#E63946" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#E63946" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
                <XAxis dataKey="time" tick={{ fontSize: 10, fill: '#666' }} interval={4} />
                <YAxis tick={{ fontSize: 10, fill: '#666' }} />
                <Tooltip
                  contentStyle={{ background: '#17171F', border: '1px solid #2a2a3a', borderRadius: '8px', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="value" stroke="#E63946" fill="url(#threatGrad)" strokeWidth={2} name="تهديدات" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Threat Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card rounded-xl p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <Radio className="w-4 h-4 text-threat-red" />
            <h3 className="text-sm font-semibold text-foreground">توزيع مستويات التهديد</h3>
          </div>
          <div className="h-52" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={threatLevelCounts}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
                <XAxis dataKey="label" tick={{ fontSize: 11, fill: '#999' }} />
                <YAxis tick={{ fontSize: 10, fill: '#666' }} />
                <Tooltip
                  contentStyle={{ background: '#17171F', border: '1px solid #2a2a3a', borderRadius: '8px', fontSize: '12px' }}
                />
                <Bar dataKey="count" radius={[6, 6, 0, 0]} name="عدد">
                  {threatLevelCounts.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Behavioral Patterns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass-card rounded-xl p-5"
      >
        <div className="flex items-center gap-2 mb-4">
          <Scan className="w-4 h-4 text-sovereign-gold" />
          <h3 className="text-sm font-semibold text-foreground">الأنماط السلوكية المراقبة</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {behavioralPatterns.map((pattern, i) => (
            <motion.div
              key={pattern.nameEn}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.05 }}
              className="p-3 rounded-lg bg-secondary/30 border border-border/50"
            >
              <p className="text-xs font-medium text-foreground mb-2">{pattern.name}</p>
              <p className="text-[10px] font-mono text-muted-foreground/60 mb-2" dir="ltr">{pattern.nameEn}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-sovereign-gold">مكتشف: {pattern.detected}</span>
                <span className="text-[10px] text-threat-red">محظور: {pattern.blocked}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Events Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass-card rounded-xl p-5"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-threat-red" />
            <h3 className="text-sm font-semibold text-foreground">سجل الأحداث الأمنية</h3>
          </div>
          <div className="flex items-center gap-2">
            {["ALL", "CRITICAL", "HIGH", "MEDIUM", "LOW"].map((level) => (
              <button
                key={level}
                onClick={() => setFilter(level)}
                className={`text-[10px] font-mono px-2.5 py-1 rounded-full transition-colors ${
                  filter === level
                    ? "bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/30"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {level === "ALL" ? "الكل" : level}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm" dir="rtl">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right py-2 px-3 text-xs text-muted-foreground font-medium">الوقت</th>
                <th className="text-right py-2 px-3 text-xs text-muted-foreground font-medium">الكيان</th>
                <th className="text-right py-2 px-3 text-xs text-muted-foreground font-medium">المستوى</th>
                <th className="text-right py-2 px-3 text-xs text-muted-foreground font-medium">النوع</th>
                <th className="text-right py-2 px-3 text-xs text-muted-foreground font-medium hidden sm:table-cell">الوصف</th>
                <th className="text-right py-2 px-3 text-xs text-muted-foreground font-medium hidden md:table-cell">الإجراء</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((evt) => {
                const levelColors: Record<string, string> = {
                  LOW: "bg-success-emerald/10 text-success-emerald",
                  MEDIUM: "bg-sovereign-gold/10 text-sovereign-gold",
                  HIGH: "bg-orange-500/10 text-orange-400",
                  CRITICAL: "bg-threat-red/10 text-threat-red",
                };
                return (
                  <tr key={evt.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-mono text-muted-foreground" dir="ltr">
                      {new Date(evt.timestamp).toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                    </td>
                    <td className="py-2.5 px-3 text-xs text-foreground">{evt.entityName}</td>
                    <td className="py-2.5 px-3">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${levelColors[evt.threatLevel]}`}>
                        {evt.threatLevel}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-xs font-mono text-muted-foreground" dir="ltr">{evt.type}</td>
                    <td className="py-2.5 px-3 text-xs text-muted-foreground hidden sm:table-cell max-w-xs truncate">{evt.description}</td>
                    <td className="py-2.5 px-3 text-xs text-muted-foreground hidden md:table-cell">{evt.action}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
