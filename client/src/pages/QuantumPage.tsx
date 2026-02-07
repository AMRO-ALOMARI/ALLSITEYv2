/**
 * QuantumPage - Quantum Shield Dashboard
 * صفحة الدرع الكمومي
 */

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Key,
  Fingerprint,
  ArrowLeftRight,
  FileSignature,
  Cpu,
  CheckCircle2,
  Atom,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import StatusCard from "@/components/StatusCard";
import { quantumStats, entities, IMAGES } from "@/lib/mock-data";

const opsData = [
  { name: "تشفير", value: quantumStats.encryptionOps, fill: "#00D4FF" },
  { name: "توقيع", value: quantumStats.signingOps, fill: "#D4A853" },
  { name: "تبادل مفاتيح", value: quantumStats.keyExchanges, fill: "#2EC4B6" },
];

const algorithms = [
  {
    name: "ML-KEM-768",
    nameAr: "تغليف المفاتيح الكمومي",
    type: "KEM",
    standard: "NIST FIPS 203",
    security: "128-bit post-quantum",
    icon: Key,
    color: "text-cyber-cyan",
  },
  {
    name: "ML-DSA-65",
    nameAr: "التوقيع الرقمي الكمومي",
    type: "Digital Signature",
    standard: "NIST FIPS 204",
    security: "128-bit post-quantum",
    icon: FileSignature,
    color: "text-sovereign-gold",
  },
  {
    name: "AES-256-GCM",
    nameAr: "التشفير المتماثل",
    type: "Symmetric Encryption",
    standard: "NIST SP 800-38D",
    security: "256-bit classical",
    icon: Lock,
    color: "text-success-emerald",
  },
];

export default function QuantumPage() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative rounded-2xl overflow-hidden h-44"
      >
        <img src={IMAGES.quantumShield} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/95" />
        <div className="relative z-10 h-full flex flex-col justify-center p-8">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-sovereign-gold" />
            <span className="text-xs font-mono text-sovereign-gold tracking-wider">QUANTUM SHIELD v2.0.0</span>
          </div>
          <h1 className="text-2xl font-bold font-display text-foreground mb-1">الدرع الكمومي</h1>
          <p className="text-sm text-muted-foreground max-w-lg">
            حماية مقاومة للحوسبة الكمومية باستخدام خوارزميات NIST المعتمدة - ML-KEM للتشفير و ML-DSA للتوقيعات
          </p>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatusCard title="الهويات الكمومية" value={quantumStats.totalIdentities} icon={Fingerprint} color="gold" delay={0} />
        <StatusCard title="عمليات التشفير" value={quantumStats.encryptionOps.toLocaleString()} icon={Lock} color="cyan" delay={1} />
        <StatusCard title="عمليات التوقيع" value={quantumStats.signingOps.toLocaleString()} icon={FileSignature} color="emerald" delay={2} />
        <StatusCard title="تبادل المفاتيح" value={quantumStats.keyExchanges.toLocaleString()} icon={ArrowLeftRight} color="gold" delay={3} />
      </div>

      {/* Mode & Algorithms */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Production Mode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-xl p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="w-4 h-4 text-cyber-cyan" />
            <h3 className="text-sm font-semibold text-foreground">وضع التشغيل</h3>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg bg-success-emerald/5 border border-success-emerald/20 mb-4">
            <div className="w-12 h-12 rounded-full bg-success-emerald/10 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-success-emerald" />
            </div>
            <div>
              <p className="text-lg font-bold font-display text-success-emerald" style={{ direction: 'ltr', textAlign: 'right' }}>PRODUCTION MODE</p>
              <p className="text-xs text-muted-foreground">تشفير كمومي حقيقي مفعل عبر liboqs</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-border/50">
              <span className="text-xs text-muted-foreground">مكتبة liboqs</span>
              <span className="text-xs font-mono text-cyber-cyan" dir="ltr">v{quantumStats.libVersion}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border/50">
              <span className="text-xs text-muted-foreground">خوارزمية KEM</span>
              <span className="text-xs font-mono text-sovereign-gold" dir="ltr">{quantumStats.kemAlgorithm}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border/50">
              <span className="text-xs text-muted-foreground">خوارزمية التوقيع</span>
              <span className="text-xs font-mono text-sovereign-gold" dir="ltr">{quantumStats.sigAlgorithm}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-xs text-muted-foreground">مستوى الأمان</span>
              <span className="text-xs font-mono text-success-emerald" dir="ltr">128-bit post-quantum</span>
            </div>
          </div>
        </motion.div>

        {/* Operations Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card rounded-xl p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <Atom className="w-4 h-4 text-sovereign-gold" />
            <h3 className="text-sm font-semibold text-foreground">العمليات الكمومية</h3>
          </div>
          <div className="h-56" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={opsData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#1E1E2E" />
                <XAxis type="number" tick={{ fontSize: 10, fill: '#666' }} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 11, fill: '#999' }} width={80} />
                <Tooltip
                  contentStyle={{
                    background: '#17171F',
                    border: '1px solid #2a2a3a',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                />
                <Bar dataKey="value" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Algorithms */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="glass-card rounded-xl p-5"
      >
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-4 h-4 text-sovereign-gold" />
          <h3 className="text-sm font-semibold text-foreground">الخوارزميات المستخدمة</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {algorithms.map((algo, i) => {
            const Icon = algo.icon;
            return (
              <motion.div
                key={algo.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="p-4 rounded-lg bg-secondary/30 border border-border/50 hover:border-cyber-cyan/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon className={`w-4 h-4 ${algo.color}`} />
                  <span className="text-sm font-bold font-mono text-foreground" dir="ltr">{algo.name}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{algo.nameAr}</p>
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-[10px] text-muted-foreground/60">النوع</span>
                    <span className="text-[10px] font-mono text-muted-foreground" dir="ltr">{algo.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] text-muted-foreground/60">المعيار</span>
                    <span className="text-[10px] font-mono text-cyber-cyan" dir="ltr">{algo.standard}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] text-muted-foreground/60">الأمان</span>
                    <span className="text-[10px] font-mono text-success-emerald" dir="ltr">{algo.security}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Quantum Identities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="glass-card rounded-xl p-5"
      >
        <div className="flex items-center gap-2 mb-4">
          <Fingerprint className="w-4 h-4 text-sovereign-gold" />
          <h3 className="text-sm font-semibold text-foreground">الهويات الكمومية المسجلة</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm" dir="rtl">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right py-2 px-3 text-xs text-muted-foreground font-medium">الكيان</th>
                <th className="text-right py-2 px-3 text-xs text-muted-foreground font-medium">البصمة الكمومية</th>
                <th className="text-right py-2 px-3 text-xs text-muted-foreground font-medium hidden sm:table-cell">الحالة</th>
                <th className="text-right py-2 px-3 text-xs text-muted-foreground font-medium hidden md:table-cell">KEM</th>
              </tr>
            </thead>
            <tbody>
              {entities.map((entity) => (
                <tr key={entity.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="py-2.5 px-3 text-xs text-foreground">{entity.name}</td>
                  <td className="py-2.5 px-3 text-xs font-mono text-sovereign-gold" dir="ltr">{entity.quantumFingerprint}</td>
                  <td className="py-2.5 px-3 hidden sm:table-cell">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      entity.quantumFingerprint === 'QF-REVOKED'
                        ? 'bg-threat-red/10 text-threat-red'
                        : 'bg-success-emerald/10 text-success-emerald'
                    }`}>
                      {entity.quantumFingerprint === 'QF-REVOKED' ? 'REVOKED' : 'ACTIVE'}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-xs font-mono text-muted-foreground hidden md:table-cell" dir="ltr">ML-KEM-768</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
