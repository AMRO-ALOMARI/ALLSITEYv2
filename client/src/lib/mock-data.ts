/**
 * Allsitey Sovereign Dashboard - Mock Data
 * بيانات محاكاة لنظام ألسيتي السيادي
 * 
 * Design: Sovereign Dark Command
 * Colors: Cyan (#00D4FF), Gold (#D4A853), Charcoal (#0C0C14)
 */

export interface SystemComponent {
  id: string;
  name: string;
  nameAr: string;
  status: 'active' | 'warning' | 'critical' | 'offline';
  uptime: number;
  version: string;
  description: string;
}

export interface Entity {
  id: string;
  name: string;
  state: 'running' | 'created' | 'quarantined' | 'terminated';
  memoryUsage: number;
  memoryLimit: number;
  cpuUsage: number;
  cpuLimit: number;
  permissions: string[];
  networkAllowed: boolean;
  suspiciousCount: number;
  createdAt: number;
  quantumFingerprint: string;
}

export interface ThreatEvent {
  id: string;
  timestamp: number;
  entityId: string;
  entityName: string;
  threatLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  type: string;
  description: string;
  action: string;
}

export interface QuantumStats {
  mode: 'production' | 'simulation';
  kemAlgorithm: string;
  sigAlgorithm: string;
  totalIdentities: number;
  encryptionOps: number;
  signingOps: number;
  keyExchanges: number;
  libVersion: string;
}

export interface SatrExecution {
  id: string;
  timestamp: number;
  code: string;
  output: string[];
  success: boolean;
  executionTime: number;
}

export interface TimeSeriesPoint {
  time: string;
  value: number;
}

// ─── System Components ───────────────────────────────────────────────

export const systemComponents: SystemComponent[] = [
  {
    id: 'entity-isolation',
    name: 'Entity Isolation',
    nameAr: 'عزل الكيانات',
    status: 'active',
    uptime: 99.97,
    version: '2.0.0',
    description: 'نظام عزل الكيانات في بيئات آمنة مع تحكم كامل بالصلاحيات والموارد',
  },
  {
    id: 'the-eye',
    name: 'The Eye',
    nameAr: 'العين',
    status: 'active',
    uptime: 99.99,
    version: '2.0.0',
    description: 'نظام مراقبة سلوكية ذكي يكتشف التهديدات والأنماط المشبوهة',
  },
  {
    id: 'quantum-shield',
    name: 'Quantum Shield',
    nameAr: 'الدرع الكمومي',
    status: 'active',
    uptime: 99.95,
    version: '2.0.0',
    description: 'حماية مقاومة للحوسبة الكمومية باستخدام ML-KEM و ML-DSA',
  },
  {
    id: 'satr-engine',
    name: 'Satr Engine',
    nameAr: 'محرك سطر',
    status: 'active',
    uptime: 99.90,
    version: '2.0.0',
    description: 'محرك لغة البرمجة العربية الأصيلة مع دعم الصرف العربي',
  },
];

// ─── Entities ────────────────────────────────────────────────────────

export const entities: Entity[] = [
  {
    id: 'entity_a1b2c3d4e5f6',
    name: 'خادم_الويب',
    state: 'running',
    memoryUsage: 256,
    memoryLimit: 512,
    cpuUsage: 35,
    cpuLimit: 50,
    permissions: ['network_access', 'read_file'],
    networkAllowed: true,
    suspiciousCount: 0,
    createdAt: Date.now() - 86400000 * 3,
    quantumFingerprint: 'QF-7a8b9c0d1e2f3a4b',
  },
  {
    id: 'entity_f6e5d4c3b2a1',
    name: 'قاعدة_البيانات',
    state: 'running',
    memoryUsage: 384,
    memoryLimit: 1024,
    cpuUsage: 22,
    cpuLimit: 75,
    permissions: ['read_file', 'write_file'],
    networkAllowed: false,
    suspiciousCount: 0,
    createdAt: Date.now() - 86400000 * 5,
    quantumFingerprint: 'QF-1e2f3a4b5c6d7e8f',
  },
  {
    id: 'entity_1a2b3c4d5e6f',
    name: 'محرك_التحليل',
    state: 'running',
    memoryUsage: 128,
    memoryLimit: 256,
    cpuUsage: 67,
    cpuLimit: 80,
    permissions: ['read_file', 'execute_code'],
    networkAllowed: false,
    suspiciousCount: 1,
    createdAt: Date.now() - 86400000 * 1,
    quantumFingerprint: 'QF-5c6d7e8f9a0b1c2d',
  },
  {
    id: 'entity_9a8b7c6d5e4f',
    name: 'خدمة_المصادقة',
    state: 'running',
    memoryUsage: 96,
    memoryLimit: 256,
    cpuUsage: 12,
    cpuLimit: 30,
    permissions: ['network_access', 'read_file', 'write_file'],
    networkAllowed: true,
    suspiciousCount: 0,
    createdAt: Date.now() - 86400000 * 7,
    quantumFingerprint: 'QF-9a0b1c2d3e4f5a6b',
  },
  {
    id: 'entity_q1w2e3r4t5y6',
    name: 'كيان_مشبوه_01',
    state: 'quarantined',
    memoryUsage: 450,
    memoryLimit: 256,
    cpuUsage: 95,
    cpuLimit: 50,
    permissions: ['execute_code'],
    networkAllowed: false,
    suspiciousCount: 7,
    createdAt: Date.now() - 86400000 * 2,
    quantumFingerprint: 'QF-REVOKED',
  },
  {
    id: 'entity_z9x8c7v6b5n4',
    name: 'خدمة_السجلات',
    state: 'running',
    memoryUsage: 64,
    memoryLimit: 128,
    cpuUsage: 8,
    cpuLimit: 20,
    permissions: ['read_file', 'write_file'],
    networkAllowed: false,
    suspiciousCount: 0,
    createdAt: Date.now() - 86400000 * 10,
    quantumFingerprint: 'QF-3e4f5a6b7c8d9e0f',
  },
];

// ─── Threat Events ───────────────────────────────────────────────────

export const threatEvents: ThreatEvent[] = [
  {
    id: 'evt_001',
    timestamp: Date.now() - 120000,
    entityId: 'entity_q1w2e3r4t5y6',
    entityName: 'كيان_مشبوه_01',
    threatLevel: 'CRITICAL',
    type: 'memory_overflow',
    description: 'تجاوز حد الذاكرة المسموح (450MB / 256MB)',
    action: 'تم الحجر الصحي تلقائياً',
  },
  {
    id: 'evt_002',
    timestamp: Date.now() - 300000,
    entityId: 'entity_q1w2e3r4t5y6',
    entityName: 'كيان_مشبوه_01',
    threatLevel: 'HIGH',
    type: 'rapid_file_access',
    description: 'وصول سريع متكرر لملفات النظام (47 عملية/ثانية)',
    action: 'تم تسجيل التحذير',
  },
  {
    id: 'evt_003',
    timestamp: Date.now() - 600000,
    entityId: 'entity_1a2b3c4d5e6f',
    entityName: 'محرك_التحليل',
    threatLevel: 'MEDIUM',
    type: 'suspicious_spawning',
    description: 'محاولة إنشاء عمليات فرعية غير مصرح بها',
    action: 'تم رفض العملية',
  },
  {
    id: 'evt_004',
    timestamp: Date.now() - 1800000,
    entityId: 'entity_q1w2e3r4t5y6',
    entityName: 'كيان_مشبوه_01',
    threatLevel: 'HIGH',
    type: 'privilege_escalation',
    description: 'محاولة تصعيد الصلاحيات للوصول لموارد محظورة',
    action: 'تم حظر المحاولة',
  },
  {
    id: 'evt_005',
    timestamp: Date.now() - 3600000,
    entityId: 'entity_a1b2c3d4e5f6',
    entityName: 'خادم_الويب',
    threatLevel: 'LOW',
    type: 'unusual_network',
    description: 'اتصال شبكي غير معتاد بعنوان خارجي',
    action: 'تم التسجيل للمراجعة',
  },
  {
    id: 'evt_006',
    timestamp: Date.now() - 7200000,
    entityId: 'entity_q1w2e3r4t5y6',
    entityName: 'كيان_مشبوه_01',
    threatLevel: 'CRITICAL',
    type: 'unauthorized_network',
    description: 'محاولة اتصال شبكي غير مصرح به',
    action: 'تم الحظر والتسجيل',
  },
];

// ─── Quantum Stats ───────────────────────────────────────────────────

export const quantumStats: QuantumStats = {
  mode: 'production',
  kemAlgorithm: 'ML-KEM-768',
  sigAlgorithm: 'ML-DSA-65',
  totalIdentities: 6,
  encryptionOps: 1247,
  signingOps: 3891,
  keyExchanges: 892,
  libVersion: '0.15.0',
};

// ─── Satr Executions ─────────────────────────────────────────────────

export const satrExecutions: SatrExecution[] = [
  {
    id: 'exec_001',
    timestamp: Date.now() - 60000,
    code: 'متغير س = 42\nاطبع(س * 2)',
    output: ['84'],
    success: true,
    executionTime: 0.0003,
  },
  {
    id: 'exec_002',
    timestamp: Date.now() - 120000,
    code: 'دالة مرحبا(اسم):\n    اطبع("مرحباً " + اسم)\n\nمرحبا("ألسيتي")',
    output: ['مرحباً ألسيتي'],
    success: true,
    executionTime: 0.0005,
  },
  {
    id: 'exec_003',
    timestamp: Date.now() - 180000,
    code: 'لكل ع في مدى(1، 6):\n    اطبع(ع * ع)',
    output: ['1', '4', '9', '16', '25'],
    success: true,
    executionTime: 0.0008,
  },
];

// ─── Time Series Data ────────────────────────────────────────────────

export function generateTimeSeries(hours: number = 24, baseValue: number = 50, variance: number = 20): TimeSeriesPoint[] {
  const points: TimeSeriesPoint[] = [];
  const now = Date.now();
  for (let i = hours; i >= 0; i--) {
    const time = new Date(now - i * 3600000);
    const value = Math.max(0, Math.min(100, baseValue + (Math.random() - 0.5) * variance * 2));
    points.push({
      time: time.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
      value: Math.round(value * 10) / 10,
    });
  }
  return points;
}

export const cpuTimeSeries = generateTimeSeries(24, 35, 15);
export const memoryTimeSeries = generateTimeSeries(24, 55, 10);
export const threatTimeSeries = generateTimeSeries(24, 5, 8);
export const networkTimeSeries = generateTimeSeries(24, 40, 20);

// ─── Summary Stats ───────────────────────────────────────────────────

export const summaryStats = {
  totalEntities: entities.length,
  activeEntities: entities.filter(e => e.state === 'running').length,
  quarantinedEntities: entities.filter(e => e.state === 'quarantined').length,
  threatEvents: threatEvents.length,
  criticalThreats: threatEvents.filter(e => e.threatLevel === 'CRITICAL').length,
  quantumIdentities: quantumStats.totalIdentities,
  satrExecutions: satrExecutions.length,
  systemUptime: 99.95,
  securityScore: 94,
};

// Image URLs
export const IMAGES = {
  heroBg: 'https://private-us-east-1.manuscdn.com/sessionFile/AWKFAW8RDj0gS7gNRQOGc3/sandbox/7oqHz6Xi4iHbQS40lXcxmp-img-1_1770436277000_na1fn_aGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVdLRkFXOFJEajBnUzdnTlJRT0djMy9zYW5kYm94LzdvcUh6NlhpNGlIYlFTNDBsWGN4bXAtaW1nLTFfMTc3MDQzNjI3NzAwMF9uYTFmbl9hR1Z5YnkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=gjwU70HabEzjLUcg4YnuX3wbbO8tvOVrOHsVoL0fZL6851PJeRVcaQqPVFNAtK8kdODCb~jirN6HfU2h7sDxhU4xVrJppbLzpW-0O0cXVuQokMmHWv9Mu0R7RPUEay-DYVanB1-oLsSqYd3ndlFPgk7arzy4JvwNFPxtwB4ejq4uDmuBaG8sn3s~xaoqv27FHIcP6ePaULggieEaAzZS1AfqviRK9Fd6k5xwgMwKc5ioJo9IZcqbRMXJW6wUqq1U8qAKyRxALOPMi6eOs3lype1rhTaeOjXjYuGDZkTNBUoKKcvvjhUMWyxNil4aHczxbtaokar17QA~0wSGuoUeDQ__',
  quantumShield: 'https://private-us-east-1.manuscdn.com/sessionFile/AWKFAW8RDj0gS7gNRQOGc3/sandbox/7oqHz6Xi4iHbQS40lXcxmp-img-2_1770436263000_na1fn_cXVhbnR1bS1zaGllbGQtdmlzdWFs.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVdLRkFXOFJEajBnUzdnTlJRT0djMy9zYW5kYm94LzdvcUh6NlhpNGlIYlFTNDBsWGN4bXAtaW1nLTJfMTc3MDQzNjI2MzAwMF9uYTFmbl9jWFZoYm5SMWJTMXphR2xsYkdRdGRtbHpkV0ZzLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nBFvgJxtfd1328FgRv7BaOS~KlvcOIa8OkdCLuU1I24cWcBHP9gZUUIYKL1l80xdb~Pxh~bcQSUoLafd8o3zXf-qr8t565V6BdptJ1Tpz7UPjPFP4wLkHCIBvyo-Hx2NPuaNGnbMLfGGAQUOuoeZ~zPZYsFJIj51iZ1DiEE~5RGmSmtYttBVJPSHNabGxYxtad2NIL4Xx9rZx5PozOlL7sOjuvCtbGiP08T6R9QKyxMp1bT23XixRgbnGDQSlYLzBGNaoQ-kvFli-Cnu47SlO0vw-hOnFE7RYi4VVmB7hIqsz06~92wFXedAFDVwwJpJgzbD70nusN6MEsc4~LNjbQ__',
  theEye: 'https://private-us-east-1.manuscdn.com/sessionFile/AWKFAW8RDj0gS7gNRQOGc3/sandbox/7oqHz6Xi4iHbQS40lXcxmp-img-3_1770436266000_na1fn_dGhlLWV5ZS12aXN1YWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVdLRkFXOFJEajBnUzdnTlJRT0djMy9zYW5kYm94LzdvcUh6NlhpNGlIYlFTNDBsWGN4bXAtaW1nLTNfMTc3MDQzNjI2NjAwMF9uYTFmbl9kR2hsTFdWNVpTMTJhWE4xWVd3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DxJWVMhZbxU61RA3zYwfyO68yR1sta15DkXsbu4ERM05npvAQo2uiIW12M8DXDq3632hxhLtfDlP89AAYkZCgx3HsYFeQ~C2vXJ5gIhkGL3J3LBsqzsQvKepzh1J6vUB2ks9aSIBHlo0zwVyQe0sDljDPnaQLrtuL2AVujKHYEVLnsJqzwOPSXSyOzFjyskcjp5sI8XArnYbN6ujq39ThbeulrRKrxk2NlqLF8Ma5-2P3Wml-qtUGVhAIgyunRhbbnA7Bi2Ag9BFeVBKm-d03-NBEx3zORJlWsOtCeNi3cxSlL4E6oRsv7IbazeCGl-XsK2v8X-ab5uO7DvSqqflHA__',
  entityIsolation: 'https://private-us-east-1.manuscdn.com/sessionFile/AWKFAW8RDj0gS7gNRQOGc3/sandbox/7oqHz6Xi4iHbQS40lXcxmp-img-4_1770436271000_na1fn_ZW50aXR5LWlzb2xhdGlvbi12aXN1YWw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVdLRkFXOFJEajBnUzdnTlJRT0djMy9zYW5kYm94LzdvcUh6NlhpNGlIYlFTNDBsWGN4bXAtaW1nLTRfMTc3MDQzNjI3MTAwMF9uYTFmbl9aVzUwYVhSNUxXbHpiMnhoZEdsdmJpMTJhWE4xWVd3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=szWnNtyLVfHTolpbLxTBIcOaVH-yqWeFQYevWdJylmfHtkGGqaWg84SyEm3es93r1TGZQ6l8Gcp2OF81PrJ~nOdI2Zblg10l6d0tPTOYWrP~tQgaZjseuR6RoA8DB~~tVUqZh-OrZM2xkWfivpma6~3joUcSr57hFA5S~iA3bsfo2-FhfA5oY~wonEY3OHMAKxKHXZM3p35B6viIYwO~Rjox5WdLiOgUQ8gVtxEI67ccume49FkObQio1PhjiNMTfDoC1uDdoADhYIsC1pLiGPPrQf47CBOGAWjl0ME-~F7wyy4s4p8ebznuxQglXr4a214TtlkGTX-ZA~6oMoTPDA__',
  satrLang: 'https://private-us-east-1.manuscdn.com/sessionFile/AWKFAW8RDj0gS7gNRQOGc3/sandbox/7oqHz6Xi4iHbQS40lXcxmp-img-5_1770436283000_na1fn_c2F0ci1sYW5nLXZpc3VhbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQVdLRkFXOFJEajBnUzdnTlJRT0djMy9zYW5kYm94LzdvcUh6NlhpNGlIYlFTNDBsWGN4bXAtaW1nLTVfMTc3MDQzNjI4MzAwMF9uYTFmbl9jMkYwY2kxc1lXNW5MWFpwYzNWaGJBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Rsco5bE7bsIWHnBkZWD5RWPJTvJ7lRWkGrn84TIpkfU80NdJuOAWDzGVwIpdCDJh7OX9rt7jURcFDl3e595lPapVy679h~A-hWfKgPfpm-6FjBElwrvk6skc43nWjjHUEuFep5G~73AA-0l5XdQJwBGodRB0HHlbXOouVLtKpn7OIDcS44bAPo7xH1Nr1hi0DgT2YBK1IUw4Ingg1KDj-q8J6TYKYPwpUZR1REgP-ttWO5L5NhB02WuJfncUBcCwCQZSTII5v~ZStk9hzCFqu6TbxvAzNnVs06WCQ-GJI6j5NA1hUTBM0XmRaaoBDvMH5ABqVkQlFokM31azV9uq9g__',
};
