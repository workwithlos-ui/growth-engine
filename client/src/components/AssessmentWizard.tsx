import { useState } from "react";
import Reveal from "./Reveal";
import { ArrowRight, ArrowLeft, Loader2, Building2, DollarSign, Users, TrendingUp, Zap, CheckCircle } from "lucide-react";
import AssessmentResults from "./AssessmentResults";

interface BusinessData {
  businessName: string;
  industry: string;
  businessModel: string;
  yearsInBusiness: string;
  monthlyRevenue: string;
  monthlyExpenses: string;
  employees: string;
  customerCount: string;
  newCustomersPerMonth: string;
  churnRate: string;
  cac: string;
  ltv: string;
  growthChallenge: string;
  marketingChannels: string;
}

const INITIAL_DATA: BusinessData = {
  businessName: "",
  industry: "",
  businessModel: "",
  yearsInBusiness: "",
  monthlyRevenue: "",
  monthlyExpenses: "",
  employees: "",
  customerCount: "",
  newCustomersPerMonth: "",
  churnRate: "",
  cac: "",
  ltv: "",
  growthChallenge: "",
  marketingChannels: "",
};

const INDUSTRIES = [
  "Home Services", "E-commerce / DTC", "SaaS", "Agency / Consulting",
  "Healthcare", "Real Estate", "Construction", "Manufacturing",
  "Retail", "Food & Beverage", "Professional Services", "Other",
];

const BUSINESS_MODELS = [
  "Service-based", "Product-based", "Subscription / Recurring",
  "Marketplace", "Hybrid", "Other",
];

const CHALLENGES = [
  "Not enough leads / customers",
  "Can't convert leads to sales",
  "Revenue is flat or declining",
  "Margins are too thin",
  "Can't retain customers",
  "Operations are chaotic",
  "Can't scale past current level",
  "Too dependent on one channel",
  "Other",
];

const CHANNELS = [
  "Google Ads", "Facebook/Meta Ads", "SEO / Organic", "Referrals",
  "Social Media", "Email Marketing", "Cold Outreach", "Partnerships",
  "Direct Mail", "Other",
];

const steps = [
  { id: 1, title: "Your Business", icon: Building2, description: "Tell us about your company" },
  { id: 2, title: "Revenue & Costs", icon: DollarSign, description: "The financial picture" },
  { id: 3, title: "Customers", icon: Users, description: "Acquisition and retention" },
  { id: 4, title: "Growth", icon: TrendingUp, description: "Challenges and channels" },
];

function StepInput({ label, value, onChange, placeholder, type = "text", prefix, suffix }: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string;
  type?: string; prefix?: string; suffix?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-[12px] font-semibold tracking-[0.05em] uppercase block" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Mono, monospace" }}>
        {label}
      </label>
      <div className="relative flex items-center">
        {prefix && (
          <span className="absolute left-3 text-[14px] text-white/25 pointer-events-none">{prefix}</span>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full py-3 text-[14px] text-white/90 placeholder:text-white/15 outline-none transition-all duration-200 focus:border-[rgba(34,197,94,0.3)]"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            paddingLeft: prefix ? "1.75rem" : "0.875rem",
            paddingRight: suffix ? "2.5rem" : "0.875rem",
            fontFamily: "DM Sans, sans-serif",
          }}
        />
        {suffix && (
          <span className="absolute right-3 text-[14px] text-white/25 pointer-events-none">{suffix}</span>
        )}
      </div>
    </div>
  );
}

function StepSelect({ label, value, onChange, options, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; options: string[]; placeholder: string;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-[12px] font-semibold tracking-[0.05em] uppercase block" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Mono, monospace" }}>
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full py-3 px-3.5 text-[14px] outline-none transition-all duration-200 appearance-none cursor-pointer focus:border-[rgba(34,197,94,0.3)]"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: value ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.15)",
          fontFamily: "DM Sans, sans-serif",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
        }}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ background: "#1a1a1a", color: "#fff" }}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function MultiSelect({ label, values, onChange, options }: {
  label: string; values: string[]; onChange: (v: string[]) => void; options: string[];
}) {
  const toggle = (opt: string) => {
    if (values.includes(opt)) {
      onChange(values.filter((v) => v !== opt));
    } else {
      onChange([...values, opt]);
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-[12px] font-semibold tracking-[0.05em] uppercase block" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "DM Mono, monospace" }}>
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = values.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => toggle(opt)}
              className="px-3 py-1.5 text-[12px] font-medium transition-all duration-200"
              style={{
                background: selected ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.03)",
                border: selected ? "1px solid rgba(34,197,94,0.3)" : "1px solid rgba(255,255,255,0.08)",
                color: selected ? "#4ade80" : "rgba(255,255,255,0.4)",
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function AssessmentWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<BusinessData>(INITIAL_DATA);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [channels, setChannels] = useState<string[]>([]);
  const [error, setError] = useState("");

  const update = (field: keyof BusinessData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const canAdvance = () => {
    switch (currentStep) {
      case 1: return data.businessName && data.industry && data.businessModel;
      case 2: return data.monthlyRevenue && data.monthlyExpenses;
      case 3: return data.customerCount;
      case 4: return data.growthChallenge;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const payload = {
        ...data,
        marketingChannels: channels.join(", ") || data.marketingChannels || "Not specified",
        monthlyRevenue: data.monthlyRevenue.replace(/[^0-9.]/g, ""),
        monthlyExpenses: data.monthlyExpenses.replace(/[^0-9.]/g, ""),
        employees: data.employees || "Not specified",
        customerCount: data.customerCount.replace(/[^0-9.]/g, "") || "Not specified",
        newCustomersPerMonth: data.newCustomersPerMonth.replace(/[^0-9.]/g, "") || "Not specified",
        churnRate: data.churnRate.replace(/[^0-9.]/g, "") || "Not specified",
        cac: data.cac.replace(/[^0-9.]/g, "") || "Not specified",
        ltv: data.ltv.replace(/[^0-9.]/g, "") || "Not specified",
        yearsInBusiness: data.yearsInBusiness || "Not specified",
      };

      const res = await fetch("/api/assess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ businessData: payload }),
      });

      const json = await res.json();
      if (json.success) {
        setResults(json.assessment);
      } else {
        setError(json.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (results) {
    return <AssessmentResults results={results} businessName={data.businessName} industry={data.industry} onReset={() => { setResults(null); setCurrentStep(1); setData(INITIAL_DATA); setChannels([]); }} />;
  }

  return (
    <section id="assess" className="relative py-32 overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.2), transparent)" }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center top, rgba(34,197,94,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="container relative z-10 max-w-3xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-[11px] font-semibold tracking-[0.12em] uppercase"
              style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", color: "#4ade80", fontFamily: "DM Mono, monospace" }}>
              <Zap size={10} />
              Free Assessment
            </div>
            <h2 className="font-black leading-[1.05] tracking-[-0.03em] mb-4"
              style={{ fontFamily: "Syne, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.65) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Get your GRIP score.
            </h2>
            <p className="text-[16px]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Answer a few questions. Our AI analyzes your business in real-time.
            </p>
          </div>
        </Reveal>

        {/* Progress steps */}
        <Reveal delay={100}>
          <div className="flex items-center justify-between mb-10 px-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isComplete = currentStep > step.id;
              return (
                <div key={step.id} className="flex items-center gap-3 flex-1">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-10 h-10 flex items-center justify-center transition-all duration-300" style={{
                      background: isActive ? "rgba(34,197,94,0.12)" : isComplete ? "rgba(34,197,94,0.08)" : "rgba(255,255,255,0.03)",
                      border: isActive ? "1px solid rgba(34,197,94,0.4)" : isComplete ? "1px solid rgba(34,197,94,0.2)" : "1px solid rgba(255,255,255,0.06)",
                    }}>
                      {isComplete ? <CheckCircle size={16} style={{ color: "#22c55e" }} /> : <Icon size={16} style={{ color: isActive ? "#22c55e" : "rgba(255,255,255,0.2)" }} />}
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.05em] hidden sm:block" style={{
                      color: isActive ? "#4ade80" : isComplete ? "rgba(34,197,94,0.5)" : "rgba(255,255,255,0.2)",
                      fontFamily: "DM Mono, monospace",
                    }}>{step.title}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-px mx-2" style={{
                      background: isComplete ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.06)",
                    }} />
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Form card */}
        <Reveal delay={150}>
          <div className="p-8 md:p-10" style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.3)",
          }}>
            {/* Step 1: Business Info */}
            {currentStep === 1 && (
              <div className="space-y-5">
                <StepInput label="Business Name" value={data.businessName} onChange={(v) => update("businessName", v)} placeholder="e.g. Apex Home Services" />
                <StepSelect label="Industry" value={data.industry} onChange={(v) => update("industry", v)} options={INDUSTRIES} placeholder="Select your industry" />
                <StepSelect label="Business Model" value={data.businessModel} onChange={(v) => update("businessModel", v)} options={BUSINESS_MODELS} placeholder="How do you make money?" />
                <StepInput label="Years in Business" value={data.yearsInBusiness} onChange={(v) => update("yearsInBusiness", v)} placeholder="e.g. 5" type="text" />
              </div>
            )}

            {/* Step 2: Revenue & Costs */}
            {currentStep === 2 && (
              <div className="space-y-5">
                <StepInput label="Monthly Revenue" value={data.monthlyRevenue} onChange={(v) => update("monthlyRevenue", v)} placeholder="e.g. 150000" prefix="$" />
                <StepInput label="Monthly Expenses" value={data.monthlyExpenses} onChange={(v) => update("monthlyExpenses", v)} placeholder="e.g. 110000" prefix="$" />
                <StepInput label="Number of Employees" value={data.employees} onChange={(v) => update("employees", v)} placeholder="e.g. 25" />
              </div>
            )}

            {/* Step 3: Customers */}
            {currentStep === 3 && (
              <div className="space-y-5">
                <StepInput label="Total Active Customers" value={data.customerCount} onChange={(v) => update("customerCount", v)} placeholder="e.g. 500" />
                <StepInput label="New Customers Per Month" value={data.newCustomersPerMonth} onChange={(v) => update("newCustomersPerMonth", v)} placeholder="e.g. 40" />
                <StepInput label="Monthly Churn Rate" value={data.churnRate} onChange={(v) => update("churnRate", v)} placeholder="e.g. 5" suffix="%" />
                <StepInput label="Customer Acquisition Cost" value={data.cac} onChange={(v) => update("cac", v)} placeholder="e.g. 250" prefix="$" />
                <StepInput label="Average Customer Lifetime Value" value={data.ltv} onChange={(v) => update("ltv", v)} placeholder="e.g. 2500" prefix="$" />
              </div>
            )}

            {/* Step 4: Growth */}
            {currentStep === 4 && (
              <div className="space-y-5">
                <StepSelect label="Primary Growth Challenge" value={data.growthChallenge} onChange={(v) => update("growthChallenge", v)} options={CHALLENGES} placeholder="What's holding you back?" />
                <MultiSelect label="Marketing Channels (select all that apply)" values={channels} onChange={setChannels} options={CHANNELS} />
              </div>
            )}

            {error && (
              <div className="mt-4 p-3 text-[13px]" style={{ background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.2)", color: "#f87171" }}>
                {error}
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {currentStep > 1 ? (
                <button
                  onClick={() => setCurrentStep((s) => s - 1)}
                  className="inline-flex items-center gap-2 text-[13px] font-medium px-5 py-2.5 transition-all duration-200"
                  style={{ color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <ArrowLeft size={12} /> Back
                </button>
              ) : <div />}

              {currentStep < 4 ? (
                <button
                  onClick={() => canAdvance() && setCurrentStep((s) => s + 1)}
                  disabled={!canAdvance()}
                  className="group inline-flex items-center gap-2 text-[14px] font-bold px-6 py-3 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-30 disabled:hover:translate-y-0"
                  style={{
                    background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                    color: "#0a0a0a",
                    fontFamily: "Syne, sans-serif",
                    boxShadow: canAdvance() ? "0 0 24px rgba(34,197,94,0.3)" : "none",
                  }}
                >
                  Continue
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canAdvance() || loading}
                  className="group relative overflow-hidden inline-flex items-center gap-2.5 text-[14px] font-bold px-7 py-3.5 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-30 disabled:hover:translate-y-0"
                  style={{
                    background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                    color: "#0a0a0a",
                    fontFamily: "Syne, sans-serif",
                    boxShadow: canAdvance() ? "0 0 30px rgba(34,197,94,0.4)" : "none",
                  }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Analyzing your business...
                    </>
                  ) : (
                    <>
                      Generate GRIP Score
                      <Zap size={13} />
                    </>
                  )}
                  <div className="absolute inset-0 shimmer" />
                </button>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-center text-[12px] mt-6" style={{ color: "rgba(255,255,255,0.2)" }}>
            Your data is analyzed in real-time by AI and never stored. Free. No signup required.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
