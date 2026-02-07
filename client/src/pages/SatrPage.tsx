/**
 * SatrPage - Satr Programming Language Dashboard
 * صفحة لغة سطر البرمجية العربية
 */

import { motion } from "framer-motion";
import {
  Code2,
  Play,
  Terminal,
  BookOpen,
  Braces,
  FileCode,
  Clock,
  CheckCircle2,
  XCircle,
  Sparkles,
} from "lucide-react";
import StatusCard from "@/components/StatusCard";
import { satrExecutions, IMAGES } from "@/lib/mock-data";
import { useState } from "react";

const satrExamples = [
  {
    title: "المتغيرات والعمليات",
    code: `متغير س = 42
متغير ص = 8
اطبع(س + ص)
اطبع(س * ص)`,
  },
  {
    title: "الدوال",
    code: `دالة مرحبا(اسم):
    اطبع("مرحباً " + اسم)

مرحبا("ألسيتي")`,
  },
  {
    title: "الحلقات",
    code: `لكل ع في مدى(1، 6):
    اطبع(ع * ع)`,
  },
  {
    title: "الشروط",
    code: `متغير درجة = 85
إذا درجة >= 90:
    اطبع("ممتاز")
وإلا_إذا درجة >= 80:
    اطبع("جيد جداً")
وإلا:
    اطبع("جيد")`,
  },
  {
    title: "الأصناف",
    code: `صنف كيان:
    دالة __بداية__(ذات، اسم):
        ذات.اسم = اسم
        ذات.نشط = صحيح

    دالة حالة(ذات):
        اطبع(ذات.اسم + " - نشط")

متغير خادم = كيان("خادم_الويب")
خادم.حالة()`,
  },
  {
    title: "القوائم والقواميس",
    code: `متغير أسماء = ["ألسيتي"، "سطر"، "الدرع"]
لكل اسم في أسماء:
    اطبع("مكون: " + اسم)

متغير نظام = {"اسم": "ألسيتي"، "إصدار": "2.0"}
اطبع(نظام["اسم"])`,
  },
];

const languageFeatures = [
  { name: "المتغيرات والثوابت", status: "ready", icon: "متغير" },
  { name: "الدوال والاستدعاءات", status: "ready", icon: "دالة" },
  { name: "الأصناف والوراثة", status: "ready", icon: "صنف" },
  { name: "الشروط والتفرعات", status: "ready", icon: "إذا" },
  { name: "الحلقات التكرارية", status: "ready", icon: "لكل" },
  { name: "معالجة الأخطاء", status: "ready", icon: "حاول" },
  { name: "القوائم والقواميس", status: "ready", icon: "[]" },
  { name: "محرك الصرف العربي", status: "ready", icon: "صرف" },
  { name: "العمليات الحسابية", status: "ready", icon: "+−" },
  { name: "العمليات المنطقية", status: "ready", icon: "و/أو" },
  { name: "النصوص والمعالجة", status: "ready", icon: "نص" },
  { name: "الاستيراد والوحدات", status: "beta", icon: "من" },
];

export default function SatrPage() {
  const [selectedExample, setSelectedExample] = useState(0);

  return (
    <div className="space-y-6">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative rounded-2xl overflow-hidden h-44"
      >
        <img src={IMAGES.satrLang} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/95" />
        <div className="relative z-10 h-full flex flex-col justify-center p-8">
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="w-5 h-5 text-sovereign-gold" />
            <span className="text-xs font-mono text-sovereign-gold tracking-wider">SATR LANGUAGE v2.0.0</span>
          </div>
          <h1 className="text-2xl font-bold font-display text-foreground mb-1">لغة سطر</h1>
          <p className="text-sm text-muted-foreground max-w-lg">
            لغة برمجة عربية أصيلة مع محرك صرف عربي متقدم - تدعم الأصناف والدوال والحلقات ومعالجة الأخطاء
          </p>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatusCard title="عمليات التنفيذ" value={satrExecutions.length} icon={Play} color="gold" delay={0} />
        <StatusCard title="نسبة النجاح" value="100%" icon={CheckCircle2} color="emerald" delay={1} />
        <StatusCard title="ميزات اللغة" value={languageFeatures.length} icon={Braces} color="cyan" delay={2} />
        <StatusCard title="متوسط التنفيذ" value="0.5ms" icon={Clock} color="gold" delay={3} />
      </div>

      {/* Code Examples & Features */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Code Editor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card rounded-xl p-5 lg:col-span-2"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-sovereign-gold" />
              <h3 className="text-sm font-semibold text-foreground">أمثلة كود سطر</h3>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sovereign-gold" />
              <span className="text-[10px] font-mono text-sovereign-gold">عربي 100%</span>
            </div>
          </div>

          {/* Example Tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {satrExamples.map((ex, i) => (
              <button
                key={i}
                onClick={() => setSelectedExample(i)}
                className={`text-[11px] px-3 py-1.5 rounded-lg transition-colors ${
                  selectedExample === i
                    ? "bg-sovereign-gold/15 text-sovereign-gold border border-sovereign-gold/30"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {ex.title}
              </button>
            ))}
          </div>

          {/* Code Block */}
          <div className="rounded-lg bg-[#0A0A12] border border-border/50 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-[#0E0E18] border-b border-border/50">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-threat-red/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-sovereign-gold/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-success-emerald/60" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/50" dir="ltr">
                  {satrExamples[selectedExample].title}.سطر
                </span>
              </div>
              <FileCode className="w-3.5 h-3.5 text-muted-foreground/30" />
            </div>
            <pre className="p-4 text-sm font-mono leading-relaxed overflow-x-auto" dir="rtl">
              <code>
                {satrExamples[selectedExample].code.split("\n").map((line, i) => (
                  <div key={i} className="flex">
                    <span className="text-muted-foreground/30 select-none ml-4 w-6 text-left" dir="ltr">
                      {i + 1}
                    </span>
                    <span className="text-foreground/90">
                      {line.split(/(\b(?:متغير|دالة|صنف|إذا|وإلا_إذا|وإلا|لكل|في|طالما|حاول|التقط|أخيراً|أعد|اطبع|مدى|صحيح|خطأ|ذات)\b)/).map((part, j) => {
                        const keywords = ["متغير", "دالة", "صنف", "إذا", "وإلا_إذا", "وإلا", "لكل", "في", "طالما", "حاول", "التقط", "أخيراً", "أعد"];
                        const builtins = ["اطبع", "مدى"];
                        const constants = ["صحيح", "خطأ", "ذات"];
                        if (keywords.includes(part)) return <span key={j} className="text-cyber-cyan font-semibold">{part}</span>;
                        if (builtins.includes(part)) return <span key={j} className="text-sovereign-gold">{part}</span>;
                        if (constants.includes(part)) return <span key={j} className="text-success-emerald">{part}</span>;
                        // Highlight strings
                        const stringParts = part.split(/(".*?")/);
                        return stringParts.map((sp, k) => {
                          if (sp.startsWith('"') && sp.endsWith('"')) return <span key={`${j}-${k}`} className="text-orange-300">{sp}</span>;
                          // Highlight numbers
                          const numParts = sp.split(/(\b\d+\b)/);
                          return numParts.map((np, l) => {
                            if (/^\d+$/.test(np)) return <span key={`${j}-${k}-${l}`} className="text-purple-400">{np}</span>;
                            return <span key={`${j}-${k}-${l}`}>{np}</span>;
                          });
                        });
                      })}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Language Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="glass-card rounded-xl p-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-cyber-cyan" />
            <h3 className="text-sm font-semibold text-foreground">ميزات اللغة</h3>
          </div>
          <div className="space-y-2">
            {languageFeatures.map((feature, i) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.03 }}
                className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-secondary/30 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-sovereign-gold bg-sovereign-gold/10 px-1.5 py-0.5 rounded w-8 text-center">
                    {feature.icon}
                  </span>
                  <span className="text-xs text-foreground">{feature.name}</span>
                </div>
                <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full ${
                  feature.status === "ready"
                    ? "bg-success-emerald/10 text-success-emerald"
                    : "bg-sovereign-gold/10 text-sovereign-gold"
                }`}>
                  {feature.status === "ready" ? "جاهز" : "تجريبي"}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Execution History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="glass-card rounded-xl p-5"
      >
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-4 h-4 text-cyber-cyan" />
          <h3 className="text-sm font-semibold text-foreground">سجل التنفيذ</h3>
        </div>
        <div className="space-y-3">
          {satrExecutions.map((exec, i) => (
            <motion.div
              key={exec.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="p-4 rounded-lg bg-secondary/20 border border-border/50"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {exec.success ? (
                    <CheckCircle2 className="w-4 h-4 text-success-emerald" />
                  ) : (
                    <XCircle className="w-4 h-4 text-threat-red" />
                  )}
                  <span className="text-xs font-mono text-muted-foreground" dir="ltr">
                    {new Date(exec.timestamp).toLocaleTimeString("ar-SA")}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/60" dir="ltr">
                  {(exec.executionTime * 1000).toFixed(1)}ms
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded bg-[#0A0A12] p-3">
                  <p className="text-[10px] text-muted-foreground/50 mb-1">الكود</p>
                  <pre className="text-xs font-mono text-foreground/80 whitespace-pre-wrap" dir="rtl">{exec.code}</pre>
                </div>
                <div className="rounded bg-[#0A0A12] p-3">
                  <p className="text-[10px] text-muted-foreground/50 mb-1">المخرجات</p>
                  <pre className="text-xs font-mono text-success-emerald whitespace-pre-wrap" dir="ltr">
                    {exec.output.join("\n")}
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
