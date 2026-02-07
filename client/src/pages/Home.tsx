/**
 * Home - Sovereign Dashboard Overview
 * الصفحة الرئيسية - نظرة عامة على النظام السيادي
 * 
 * Design: Sovereign Dark Command
 */

import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Box,
  Code2,
  Activity,
  AlertTriangle,
  Lock,
  Fingerprint,
  Cpu,
  HardDrive,
  Zap,
  TrendingUp,
} from "lucide-react";
import { Link } from "wouter";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import StatusCard from "@/components/StatusCard";
import {
  summaryStats,
  systemComponents,
  threatEvents,
  cpuTimeSeries,
  memoryTimeSeries,
  entities,
  IMAGES,
} from "@/lib/mock-data";

const entityStateData = [
  { name: "نشط", value: entities.filter((e) => e.state === "running").length, color: "#2EC4B6" },
  { name: "محجور", value: entities.filter((e) => e.state === "quarantined").length, color: "#E63946" },
  { name: "متوقف", value: entities.filter((e) => e.state === "terminated").length, color: "#555" },
];

const threatLevelData = [
  { name: "منخفض", value: threatEvents.filter((e) => e.threatLevel === "LOW").length, color: "#2EC4B6" },
  { name: "متوسط", value: threatEvents.filter((e) => e.threatLevel === "MEDIUM").length, color: "#D4A853" },
  { name: "عالي", value: threatEvents.filter((e) => e.threatLevel === "HIGH").length, color: "#FF6B35" },
  { name: "حرج", value: threatEvents.filter((e) => e.threatLevel === "CRITICAL").length, color: "#E63946" },
];

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-2xl overflow-hidden h-48 sm:h-56"
      >
        <img
          src={IMAGES.heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/70 to-background/90" />
        <div className="relative z-10 h-full flex flex-col justify-center p-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-success-emerald animate-pulse" />
            <span className="text-xs font-mono text-success-emerald tracking-wider">ALL SYSTEMS OPERATIONAL</span>
          </div>
          <div className="flex items-center gap-3 mb-1">
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663119235650/PLCUEZrawJtxfFgy.png"
              alt="Allsitey"
              className="h-8 sm:h-10"
              style={{ filter: 'brightness(3) contrast(2)' }}
            />
            <span className="text-xl sm:text-2xl font-bold font-display text-foreground" style={{ direction: 'ltr' }}>Sovereign System</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-lg">
            نظام الحماية السيادي المتكامل - تشفير كمومي حقيقي، مراقبة سلوكية ذكية، عزل كيانات، ولغة برمجة عربية
          </p>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20">
              <Shield className="w-3.5 h-3.5 text-cyber-cyan" />
              <span className="text-xs font-mono text-cyber-cyan">ML-KEM-768</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sovereign-gold/10 border border-sovereign-gold/20">
              <Lock className="w-3.5 h-3.5 text-sovereign-gold" />
              <span className="text-xs font-mono text-sovereign-gold">ML-DSA-65</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-success-emerald/10 border border-success-emerald/20">
              <Zap className="w-3.5 h-3.5 text-success-emerald" />
              <span className="text-xs font-mono text-success-emerald">liboqs 0.15.0</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatusCard
          title="الكيانات النشطة"
          value={summaryStats.activeEntities}
          subtitle={`من أصل ${summaryStats.totalEntities}`}
          icon={Box}
          color="cyan"
          delay={0}
        />
        <StatusCard
          title="الهويات الكمومية"
          value={summaryStats.quantumIdentities}
          subtitle="ML-KEM-768"
          icon={Fingerprint}
          color="gold"
          delay={1}
        />
        <StatusCard
          title="أحداث التهديد"
          value={summaryStats.threatEvents}
          subtitle={`${summaryStats.criticalThreats} حرج`}
          icon={AlertTriangle}
          color="red"
          delay={2}
        />
        <StatusCard
          title="درجة الأمان"
          value={`${summaryStats.securityScore}%`}
          subtitle="مستوى عالي"
          icon={Shield}
          color="emerald"
          delay={3}
          trend={{ value: 2.3, label: "" }}
        />
      </div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {systemComponents.map((comp, i) => {
          const icons: Record<string, typeof Shield> = {
            'entity-isolation': Box,
            'the-eye': Eye,
            'quantum-shield': Shield,
            'satr-engine': Code2,
          };
          const colors: Record<string, string> = {
            'entity-isolation': 'text-success-emerald',
            'the-eye': 'text-cyber-cyan',
            'quantum-shield': 'text-sovereign-gold',
            'satr-engine': 'text-sovereign-gold',
          };
          const paths: Record<string, string> = {
            'entity-isolation': '/entities',
            'the-eye': '/the-eye',
            'quantum-shield': '/quantum',
            'satr-engine': '/satr',
          };
          const images: Record<string, string> = {
            'entity-isolation': IMAGES.entityIsolation,
            'the-eye': IMAGES.theEye,
            'quantum-shield': IMAGES.quantumShield,
            'satr-engine': IMAGES.satrLang,
          };
          const Icon = icons[comp.id] || Shield;
          return (
            <Link key={comp.id} href={paths[comp.id] || "/"}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.4 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="h-28 relative overflow-hidden">
                  <img
                    src={images[comp.id]}
                    alt={comp.nameAr}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute bottom-3 right-3 flex items-center gap-2">
                    <Icon className={`w-5 h-5 ${colors[comp.id]}`} />
                    <span className="text-sm font-bold text-foreground">{comp.nameAr}</span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      comp.status === 'active'
                        ? 'bg-success-emerald/20 text-success-emerald'
                        : 'bg-threat-red/20 text-threat-red'
                    }`}>
                      {comp.status === 'active' ? 'ACTIVE' : 'OFFLINE'}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{comp.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-muted-foreground/60" style={{ direction: 'ltr' }}>v{comp.version}</span>
                    <span className="text-[10px] font-mono text-success-emerald">{comp.uptime}% uptime</span>
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* CPU Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-card rounded-xl p-5 lg:col-span-2"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyber-cyan" />
              <h3 className="text-sm font-semibold text-foreground">استهلاك المعالج والذاكرة</h3>
            </div>
            <span className="text-[10px] font-mono text-muted-foreground">آخر 24 ساعة</span>
          </div>
          <div className="h-52" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cpuTimeSeries}>
                <defs>
                  <linearGradient id="cpuGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00D4FF" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00D4FF" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="memGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4A853" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#D4A853" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
                <XAxis dataKey="time" tick={{ fontSize: 10, fill: '#666' }} interval={4} />
                <YAxis tick={{ fontSize: 10, fill: '#666' }} domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    background: '#17171F',
                    border: '1px solid #2a2a3a',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#00D4FF"
                  fill="url(#cpuGrad)"
                  strokeWidth={2}
                  name="CPU %"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Entity States Pie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="glass-card rounded-xl p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <Box className="w-4 h-4 text-success-emerald" />
            <h3 className="text-sm font-semibold text-foreground">حالة الكيانات</h3>
          </div>
          <div className="h-40" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={entityStateData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={65}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {entityStateData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: '#17171F',
                    border: '1px solid #2a2a3a',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            {entityStateData.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                <span className="text-[11px] text-muted-foreground">{item.name} ({item.value})</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Threats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="glass-card rounded-xl p-5"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-threat-red" />
            <h3 className="text-sm font-semibold text-foreground">آخر أحداث التهديد</h3>
          </div>
          <Link href="/the-eye">
            <span className="text-xs text-cyber-cyan hover:underline cursor-pointer">عرض الكل</span>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm" dir="rtl">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right py-2 px-3 text-xs text-muted-foreground font-medium">الوقت</th>
                <th className="text-right py-2 px-3 text-xs text-muted-foreground font-medium">الكيان</th>
                <th className="text-right py-2 px-3 text-xs text-muted-foreground font-medium">المستوى</th>
                <th className="text-right py-2 px-3 text-xs text-muted-foreground font-medium hidden sm:table-cell">الوصف</th>
                <th className="text-right py-2 px-3 text-xs text-muted-foreground font-medium hidden md:table-cell">الإجراء</th>
              </tr>
            </thead>
            <tbody>
              {threatEvents.slice(0, 5).map((evt) => {
                const levelColors: Record<string, string> = {
                  LOW: "bg-success-emerald/10 text-success-emerald",
                  MEDIUM: "bg-sovereign-gold/10 text-sovereign-gold",
                  HIGH: "bg-orange-500/10 text-orange-400",
                  CRITICAL: "bg-threat-red/10 text-threat-red",
                };
                return (
                  <tr key={evt.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                    <td className="py-2.5 px-3 text-xs font-mono text-muted-foreground" dir="ltr">
                      {new Date(evt.timestamp).toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" })}
                    </td>
                    <td className="py-2.5 px-3 text-xs text-foreground">{evt.entityName}</td>
                    <td className="py-2.5 px-3">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${levelColors[evt.threatLevel]}`}>
                        {evt.threatLevel}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-xs text-muted-foreground hidden sm:table-cell max-w-xs truncate">
                      {evt.description}
                    </td>
                    <td className="py-2.5 px-3 text-xs text-muted-foreground hidden md:table-cell">
                      {evt.action}
                    </td>
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
