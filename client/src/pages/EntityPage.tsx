/**
 * EntityPage - Entity Isolation Management
 * صفحة إدارة الكيانات المعزولة
 */

import { motion } from "framer-motion";
import {
  Box,
  Shield,
  Cpu,
  HardDrive,
  Wifi,
  WifiOff,
  AlertTriangle,
  Play,
  Pause,
  Ban,
  Fingerprint,
  MemoryStick,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import StatusCard from "@/components/StatusCard";
import { entities, summaryStats, IMAGES } from "@/lib/mock-data";

const stateLabels: Record<string, { label: string; color: string; bg: string }> = {
  running: { label: "نشط", color: "text-success-emerald", bg: "bg-success-emerald/10" },
  created: { label: "مُنشأ", color: "text-cyber-cyan", bg: "bg-cyber-cyan/10" },
  quarantined: { label: "محجور", color: "text-threat-red", bg: "bg-threat-red/10" },
  terminated: { label: "متوقف", color: "text-muted-foreground", bg: "bg-muted/30" },
};

export default function EntityPage() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative rounded-2xl overflow-hidden h-44"
      >
        <img src={IMAGES.entityIsolation} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/95" />
        <div className="relative z-10 h-full flex flex-col justify-center p-8">
          <div className="flex items-center gap-2 mb-2">
            <Box className="w-5 h-5 text-success-emerald" />
            <span className="text-xs font-mono text-success-emerald tracking-wider">ENTITY ISOLATION v2.0.0</span>
          </div>
          <h1 className="text-2xl font-bold font-display text-foreground mb-1">عزل الكيانات</h1>
          <p className="text-sm text-muted-foreground max-w-lg">
            نظام عزل متقدم يدير إنشاء وتشغيل ومراقبة الكيانات في بيئات معزولة مع تحكم كامل بالصلاحيات والموارد
          </p>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatusCard title="إجمالي الكيانات" value={summaryStats.totalEntities} icon={Box} color="cyan" delay={0} />
        <StatusCard title="كيانات نشطة" value={summaryStats.activeEntities} icon={Play} color="emerald" delay={1} />
        <StatusCard title="محجورة" value={summaryStats.quarantinedEntities} icon={Ban} color="red" delay={2} />
        <StatusCard title="هويات كمومية" value={summaryStats.quantumIdentities} icon={Fingerprint} color="gold" delay={3} />
      </div>

      {/* Entity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {entities.map((entity, i) => {
          const state = stateLabels[entity.state];
          const memPercent = Math.round((entity.memoryUsage / entity.memoryLimit) * 100);
          const cpuPercent = entity.cpuUsage;
          const isQuarantined = entity.state === "quarantined";

          return (
            <motion.div
              key={entity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.4 }}
              className={`glass-card rounded-xl p-5 ${
                isQuarantined ? "border-threat-red/30 glow-red" : ""
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${state.bg} border border-current/20 flex items-center justify-center`}>
                    <Box className={`w-5 h-5 ${state.color}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{entity.name}</h3>
                    <p className="text-[10px] font-mono text-muted-foreground/60" dir="ltr">{entity.id}</p>
                  </div>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${state.bg} ${state.color}`}>
                  {state.label}
                </span>
              </div>

              {/* Resources */}
              <div className="space-y-3 mb-4">
                {/* Memory */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <MemoryStick className="w-3 h-3 text-muted-foreground" />
                      <span className="text-[10px] text-muted-foreground">الذاكرة</span>
                    </div>
                    <span className={`text-[10px] font-mono ${memPercent > 80 ? "text-threat-red" : "text-muted-foreground"}`} dir="ltr">
                      {entity.memoryUsage}MB / {entity.memoryLimit}MB
                    </span>
                  </div>
                  <Progress
                    value={Math.min(memPercent, 100)}
                    className="h-1.5"
                  />
                </div>

                {/* CPU */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <Cpu className="w-3 h-3 text-muted-foreground" />
                      <span className="text-[10px] text-muted-foreground">المعالج</span>
                    </div>
                    <span className={`text-[10px] font-mono ${cpuPercent > 80 ? "text-threat-red" : "text-muted-foreground"}`} dir="ltr">
                      {entity.cpuUsage}% / {entity.cpuLimit}%
                    </span>
                  </div>
                  <Progress
                    value={Math.min((cpuPercent / entity.cpuLimit) * 100, 100)}
                    className="h-1.5"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2 pt-3 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground">الشبكة</span>
                  <div className="flex items-center gap-1">
                    {entity.networkAllowed ? (
                      <>
                        <Wifi className="w-3 h-3 text-success-emerald" />
                        <span className="text-[10px] text-success-emerald">مسموح</span>
                      </>
                    ) : (
                      <>
                        <WifiOff className="w-3 h-3 text-muted-foreground/50" />
                        <span className="text-[10px] text-muted-foreground/50">محظور</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground">الصلاحيات</span>
                  <div className="flex gap-1 flex-wrap justify-end">
                    {entity.permissions.map((p) => (
                      <span key={p} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-secondary/50 text-muted-foreground" dir="ltr">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground">البصمة الكمومية</span>
                  <span className={`text-[10px] font-mono ${
                    entity.quantumFingerprint === "QF-REVOKED" ? "text-threat-red" : "text-sovereign-gold"
                  }`} dir="ltr">
                    {entity.quantumFingerprint}
                  </span>
                </div>
                {entity.suspiciousCount > 0 && (
                  <div className="flex items-center gap-1.5 mt-2 p-2 rounded-lg bg-threat-red/5 border border-threat-red/20">
                    <AlertTriangle className="w-3 h-3 text-threat-red" />
                    <span className="text-[10px] text-threat-red">
                      {entity.suspiciousCount} نشاط مشبوه مسجل
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
