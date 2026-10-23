'use client';

import { useState } from 'react';
import { X, UserPlus, CheckCircle2, ShieldCheck, Printer, FileText, Check, ArrowRight, ArrowLeft } from 'lucide-react';

export default function JoinMemberModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('online'); // 'online' | 'printable'
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [appCode, setAppCode] = useState('');

  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    // Step 1: Firm & Applicant Details
    firmName: '',
    proprietor: '',
    address: 'Mumbai / Maharashtra',
    category: 'Licensed Electrical Contractor (Class A / Class B / Supervisor)',
    region: 'Mumbai (Central / South / Western)',
    phone: '',
    email: '',
    licenseNo: '',

    // Step 2: Proposer (Statutory nomination)
    proposedBy: '',
    proposerMessers: '',
    proposerAddress: '',
    proposerDate: todayStr,

    // Step 2: Seconder (Statutory nomination)
    secondedBy: '',
    seconderMessers: '',
    seconderAddress: '',
    seconderDate: todayStr,

    // Step 3: Undertaking & Declaration
    undertakingAccepted: false,
    applicantSignature: '',
    applicantDate: todayStr,
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedCode = 'ECAM/' + Math.floor(1000 + Math.random() * 9000) + '/' + new Date().getFullYear();
    setAppCode(generatedCode);
    setSubmitted(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-4xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] border border-slate-200 overflow-hidden animate-scale-up my-4 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#B71C1C] via-[#DA251D] to-[#991B1B] text-white px-5 sm:px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-amber-300 border border-white/15">
              <UserPlus size={18} strokeWidth={2.2} />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                ECAM Membership Application Form
              </h3>
              <p className="text-xs text-rose-100">
                Electrical Contractors&apos; Association of Maharashtra (Estd. 1925) • Official Statutory Form
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Print button shortcut */}
            <button
              type="button"
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all cursor-pointer"
              title="Print Form"
            >
              <Printer size={13} />
              <span>Print Form</span>
            </button>

            <button
              type="button"
              className="text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={20} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* View Switcher Tabs: Online Interactive vs Official Printable Document */}
        <div className="bg-[#FAFBFD] px-6 py-2.5 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('online')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'online'
                  ? 'bg-[#DA251D] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-black border border-slate-200'
              }`}
            >
              <FileText size={13} />
              <span>Online Application</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('printable')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'printable'
                  ? 'bg-[#DA251D] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-black border border-slate-200'
              }`}
            >
              <Printer size={13} />
              <span>Official Physical Document View</span>
            </button>
          </div>

          <span className="hidden md:inline text-[11px] font-semibold text-slate-500">
            Form Ref: ECAM/MEMB/2026/FORM-2
          </span>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-2xl bg-[#EAFFF1] text-[#17C653] flex items-center justify-center mx-auto mb-4 border border-[#C5FAD7] shadow-sm">
                <CheckCircle2 size={32} strokeWidth={2.2} />
              </div>
              <h4 className="text-xl font-bold text-black mb-1.5">
                Membership Application Submitted!
              </h4>
              <p className="text-xs text-slate-500 mb-1">
                Official Reference Code No:
              </p>
              <div className="inline-block bg-[#FEF2F2] px-4 py-1.5 rounded-lg border border-red-200 text-sm font-mono font-bold text-[#DA251D] mb-4">
                {appCode}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 mb-6 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong className="text-black">{formData.proprietor || 'Applicant'}</strong>. Your application on behalf of <strong className="text-black">{formData.firmName || 'your enterprise firm'}</strong> along with official Proposer &amp; Seconder endorsements and statutory Undertaking has been logged in the ECAM Secretariat Registry (The Stock Exchange Towers, Fort, Mumbai).
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-6 py-2.5 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer size={14} />
                  <span>Print Application Summary</span>
                </button>
                <button
                  type="button"
                  className="px-6 py-2.5 rounded-full bg-[#DA251D] hover:bg-[#B71C1C] text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                    onClose();
                  }}
                >
                  Done
                </button>
              </div>
            </div>
          ) : activeTab === 'printable' ? (
            /* =========================================================================
               TAB 2: OFFICIAL PHYSICAL DOCUMENT VIEW
               ========================================================================= */
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    ELECTRICAL CONTRACTORS&apos; ASSOCIATION OF MAHARASHTRA (ECAM)
                  </h4>
                  <p className="text-xs text-slate-500">
                    Membership Application &bull; Proposer, Seconder, Undertaking &amp; Office Record (Estd. 1925)
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-4 py-1.5 rounded-lg bg-[#DA251D] text-white text-xs font-bold flex items-center gap-1.5 hover:bg-[#B71C1C] transition-colors cursor-pointer"
                >
                  <Printer size={13} />
                  <span>Print This Form</span>
                </button>
              </div>

              {/* Exact Paper Document Container */}
              <div className="bg-white border-2 border-slate-800 p-6 sm:p-8 rounded-lg shadow-sm font-sans text-slate-900 space-y-6 max-w-2xl mx-auto">
                
                {/* 1. PROPOSER */}
                <div className="space-y-3 pb-5 border-b border-slate-300">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-bold text-xs sm:text-sm text-black">Proposed by:</span>
                    <span className="flex-1 border-b border-slate-700 min-w-[200px] text-xs font-medium pl-2">
                      {formData.proposedBy || '________________________________________________'}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-bold text-xs sm:text-sm text-black">of messers (Member Firm):</span>
                    <span className="flex-1 border-b border-slate-700 min-w-[200px] text-xs font-medium pl-2">
                      {formData.proposerMessers || '________________________________________________'}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-bold text-xs sm:text-sm text-black">Address:</span>
                    <span className="flex-1 border-b border-slate-700 min-w-[200px] text-xs font-medium pl-2">
                      {formData.proposerAddress || '________________________________________________'}
                    </span>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                    <div>
                      <p className="font-bold text-xs text-black">
                        Authorised signature of the proposer
                      </p>
                      <p className="text-[11px] text-slate-600">with official rubber stamp</p>
                    </div>
                    <div className="space-y-1.5 text-right w-full sm:w-auto">
                      <div className="flex items-center justify-end gap-2 text-xs">
                        <span className="text-red-500 font-bold">*</span>
                        <span className="border-b border-slate-700 w-44 inline-block text-center text-xs">
                          {formData.proposedBy ? '✓ Verified ECAM Proposer' : 'signature'}
                        </span>
                      </div>
                      <div className="flex items-center justify-end gap-2 text-xs">
                        <span className="font-bold">Date:</span>
                        <span className="border-b border-slate-700 w-32 inline-block text-center text-xs">
                          {formData.proposerDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. SECONDER */}
                <div className="space-y-3 pb-5 border-b border-slate-300">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-bold text-xs sm:text-sm text-black">Seconded by:</span>
                    <span className="flex-1 border-b border-slate-700 min-w-[200px] text-xs font-medium pl-2">
                      {formData.secondedBy || '________________________________________________'}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-bold text-xs sm:text-sm text-black">of messers (Member Firm):</span>
                    <span className="flex-1 border-b border-slate-700 min-w-[200px] text-xs font-medium pl-2">
                      {formData.seconderMessers || '________________________________________________'}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-bold text-xs sm:text-sm text-black">Address:</span>
                    <span className="flex-1 border-b border-slate-700 min-w-[200px] text-xs font-medium pl-2">
                      {formData.seconderAddress || '________________________________________________'}
                    </span>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                    <div>
                      <p className="font-bold text-xs text-black">
                        Authorised signature of the seconder
                      </p>
                      <p className="text-[11px] text-slate-600">with official rubber stamp</p>
                    </div>
                    <div className="space-y-1.5 text-right w-full sm:w-auto">
                      <div className="flex items-center justify-end gap-2 text-xs">
                        <span className="text-red-500 font-bold">*</span>
                        <span className="border-b border-slate-700 w-44 inline-block text-center text-xs">
                          {formData.secondedBy ? '✓ Verified ECAM Seconder' : 'signature'}
                        </span>
                      </div>
                      <div className="flex items-center justify-end gap-2 text-xs">
                        <span className="font-bold">Date:</span>
                        <span className="border-b border-slate-700 w-32 inline-block text-center text-xs">
                          {formData.seconderDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. UNDERTAKING */}
                <div className="space-y-3 pb-5 border-b-2 border-slate-800">
                  <h5 className="text-center font-black tracking-wider text-sm sm:text-base text-black uppercase underline decoration-1 underline-offset-4">
                    STATUTORY UNDERTAKING
                  </h5>
                  <p className="text-[11px] sm:text-xs text-justify leading-relaxed text-slate-800">
                    I/We agree to abide by the terms and conditions of membership and also the Memorandum &amp; Articles of the Electrical Contractors&apos; Association of Maharashtra (ECAM). Bye-laws for Code of Conduct and other Rules &amp; Regulations that will be in force from time to time subject to which I/We have paid Admission Fee and Membership Fee. I/We agree that if admitted as member, I/We shall be jointly and severally liable with my/our firm for upholding electrical safety standards and all Association dues. In case I/We violate to honour any of the laws, rules and regulations, the Association is authorised to publish my/our names and company&apos;s name in the ECAM official journals / IECT Magazine as defaulter and blacklist my/our names, including any other disciplinary action which the Association feels right and fit as per their discretion.
                  </p>

                  <div className="pt-5 flex flex-col items-end gap-3">
                    <div className="w-full flex flex-col sm:flex-row items-baseline justify-between gap-2">
                      <span className="font-bold text-xs text-black">
                        Signature of the Applicant with Rubber Stamp:
                      </span>
                      <span className="border-b border-slate-700 flex-1 sm:max-w-xs text-right pr-2 text-xs font-semibold text-[#DA251D]">
                        {formData.applicantSignature || formData.proprietor || '__________________________________'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-bold">Date:</span>
                      <span className="border-b border-slate-700 w-36 text-center text-xs">
                        {formData.applicantDate}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4. FOR OFFICE USE ONLY */}
                <div className="border border-slate-700 p-4 sm:p-5 rounded space-y-3.5 bg-[#FAFBFD]">
                  <p className="font-black text-xs uppercase tracking-wider text-black">
                    FOR ECAM SECRETARIAT OFFICE USE ONLY
                  </p>

                  <div className="flex items-baseline gap-2 text-xs">
                    <span className="font-bold">Member Code No.:</span>
                    <span className="border-b border-slate-600 flex-1 pl-2 font-mono font-bold text-[#DA251D]">
                      {appCode || 'ECAM / MEMB / 2026 / ____'}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-xs pt-1">
                    <div className="flex items-baseline gap-2 flex-1">
                      <span className="font-bold">Application with remittance received on:</span>
                      <span className="border-b border-slate-600 flex-1 pl-2 font-mono">
                        {todayStr}
                      </span>
                    </div>
                    <div className="space-y-1 text-right">
                      <div className="flex items-center gap-1">
                        <span className="text-red-500 font-bold">*</span>
                        <span className="border-b border-slate-600 w-36 inline-block text-[11px] text-center text-slate-500">Hon. Gen. Secretary</span>
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        <span>Date:</span>
                        <span className="border-b border-slate-600 w-24 inline-block text-[11px] text-center">{todayStr}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-xs space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold">Remarks by Scrutiny Committee :-</span>
                      <span className="border-b border-slate-600 flex-1 pl-2 text-slate-500 italic">
                        Electrical License &amp; Credentials verified and recommended for admission
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 pt-1">
                      <div>
                        <span className="font-bold">Membership Working Committee :</span>
                        <span className="font-semibold text-[#DA251D] ml-1">Approved</span>
                        <span className="text-slate-400 mx-1">/</span>
                        <span className="text-slate-400">Not Approved</span>
                        <span className="text-slate-400 mx-1">/</span>
                        <span className="text-slate-400">Under Review</span>
                      </div>
                      <div className="space-y-1 text-right">
                        <div className="flex items-center gap-1">
                          <span className="text-red-500 font-bold">*</span>
                          <span className="border-b border-slate-600 w-36 inline-block text-[11px] text-center text-slate-500">President, ECAM</span>
                        </div>
                        <div className="flex items-center gap-1 justify-end">
                          <span>Date:</span>
                          <span className="border-b border-slate-600 w-24 inline-block text-[11px] text-center">____________</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-300 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-xs">
                    <div className="flex items-baseline gap-2 flex-1">
                      <span className="font-bold">Approved at Managing Council Meeting held on:</span>
                      <span className="border-b border-slate-600 flex-1 pl-2">____________________</span>
                    </div>
                    <div className="space-y-1 text-right">
                      <div className="flex items-center gap-1">
                        <span className="text-red-500 font-bold">*</span>
                        <span className="border-b border-slate-600 w-36 inline-block text-[11px] text-center text-slate-500">Hon. Treasurer</span>
                      </div>
                      <div className="flex items-center gap-1 justify-end">
                        <span>Date:</span>
                        <span className="border-b border-slate-600 w-24 inline-block text-[11px] text-center">____________</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ) : (
            /* =========================================================================
               TAB 1: ONLINE INTERACTIVE STEP-BY-STEP SUBMISSION FORM
               ========================================================================= */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Stepper Progress Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Step 1 Pill */}
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold cursor-pointer transition-all ${
                      currentStep === 1
                        ? 'bg-[#DA251D] text-white shadow-2xs'
                        : currentStep > 1
                        ? 'bg-[#EAFFF1] text-[#17C653]'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <span>1. Firm &amp; License</span>
                  </button>

                  <span className="text-slate-300">→</span>

                  {/* Step 2 Pill */}
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold cursor-pointer transition-all ${
                      currentStep === 2
                        ? 'bg-[#DA251D] text-white shadow-2xs'
                        : currentStep > 2
                        ? 'bg-[#EAFFF1] text-[#17C653]'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <span>2. Proposer &amp; Seconder</span>
                  </button>

                  <span className="text-slate-300">→</span>

                  {/* Step 3 Pill */}
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold cursor-pointer transition-all ${
                      currentStep === 3
                        ? 'bg-[#DA251D] text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <span>3. Undertaking &amp; Sign</span>
                  </button>
                </div>

                <span className="text-[11px] font-semibold text-slate-500">
                  Step {currentStep} of 3
                </span>
              </div>

              {/* STEP 1: BUSINESS FIRM DETAILS */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="bg-[#FEF2F2] p-3.5 rounded-xl border border-red-200/70 text-xs text-slate-700 leading-relaxed">
                    Enter your Electrical Contracting firm, trading establishment or manufacturing enterprise details along with designated Partner / Proprietor / Director for ECAM accreditation.
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black mb-1">
                      Business Firm / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. M/s Western India Electrical Contractors &amp; Engineers"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D] focus:ring-2 focus:ring-red-100 bg-white"
                      value={formData.firmName}
                      onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-black mb-1">
                        Partner / Proprietor / Director *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name as per Business Registration"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D] focus:ring-2 focus:ring-red-100 bg-white"
                        value={formData.proprietor}
                        onChange={(e) => setFormData({ ...formData, proprietor: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-black mb-1">
                        Trade / License Category *
                      </label>
                      <select
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm font-medium text-black focus:outline-none focus:border-[#DA251D] bg-white cursor-pointer"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      >
                        <option value="Licensed Electrical Contractor (Class A / Class B / Supervisor)">Licensed Electrical Contractor (Class A / Class B / Supervisor)</option>
                        <option value="Electrical Goods Trader & Wholesaler">Electrical Goods Trader &amp; Wholesaler</option>
                        <option value="Switchgear & Electrical Equipment Manufacturer">Switchgear &amp; Electrical Equipment Manufacturer</option>
                        <option value="Consulting Electrical Engineer & Energy Auditor">Consulting Electrical Engineer &amp; Energy Auditor</option>
                        <option value="Solar & Renewable Energy EPC Contractor">Solar &amp; Renewable Energy EPC Contractor</option>
                        <option value="Panel Builder & HT/LT Automation Specialist">Panel Builder &amp; HT/LT Automation Specialist</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-black mb-1">
                        Regional Chapter *
                      </label>
                      <select
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm font-medium text-black focus:outline-none focus:border-[#DA251D] bg-white cursor-pointer"
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      >
                        <option value="Mumbai (Central / South / Western)">Mumbai (Central / South / Western)</option>
                        <option value="Thane & Navi Mumbai">Thane &amp; Navi Mumbai</option>
                        <option value="Pune & Pimpri Chinchwad">Pune &amp; Pimpri Chinchwad</option>
                        <option value="Nashik & North Maharashtra">Nashik &amp; North Maharashtra</option>
                        <option value="Ahilyanagar (Ahmednagar)">Ahilyanagar (Ahmednagar)</option>
                        <option value="Jalgaon & Khandesh">Jalgaon &amp; Khandesh</option>
                        <option value="Western Maharashtra (Kolhapur, Sangli, Satara)">Western Maharashtra (Kolhapur, Sangli, Satara)</option>
                        <option value="Dhule & Nandurbar">Dhule &amp; Nandurbar</option>
                        <option value="Kokan (Ratnagiri, Sindhudurg, Raigad)">Kokan (Ratnagiri, Sindhudurg, Raigad)</option>
                        <option value="Vidarbha & Marathwada">Vidarbha &amp; Marathwada</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-black mb-1">
                        Electrical Contractor License No. / GSTIN *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. MH/PWD/LEC-8472 / 27AAAAA0000A1Z5"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D] focus:ring-2 focus:ring-red-100 bg-white"
                        value={formData.licenseNo}
                        onChange={(e) => setFormData({ ...formData, licenseNo: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-black mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98XXXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D] focus:ring-2 focus:ring-red-100 bg-white"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-black mb-1">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="director@firm.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D] focus:ring-2 focus:ring-red-100 bg-white"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black mb-1">
                      Registered Office Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Office No, Commercial Complex, City, District, PIN"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D] focus:ring-2 focus:ring-red-100 bg-white"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>

                  <div className="pt-3 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        if (!formData.firmName || !formData.proprietor) {
                          alert('Please enter your Firm Name and Principal Officer.');
                          return;
                        }
                        setCurrentStep(2);
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#DA251D] hover:bg-[#B71C1C] text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>Proceed to Proposer &amp; Seconder</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: PROPOSER & SECONDER DETAILS */}
              {currentStep === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="bg-[#FEF2F2] p-3.5 rounded-xl border border-red-200/70 text-xs text-slate-700 leading-relaxed">
                    As per ECAM Constitution, membership applications require endorsement by two existing active ECAM member firms (Proposer &amp; Seconder).
                  </div>

                  {/* Section A: Proposer */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-3">
                    <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
                      <span className="text-[11px] font-bold text-[#DA251D] uppercase tracking-wider">
                        1. PROPOSER DETAILS
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-black mb-1">
                          Proposed by (Authorised Representative) *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Full Name of Member Proposer"
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D]"
                          value={formData.proposedBy}
                          onChange={(e) => setFormData({ ...formData, proposedBy: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-black mb-1">
                          of messers (Proposer ECAM Member Firm) *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. M/s Devang Electricals &amp; Engineering"
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D]"
                          value={formData.proposerMessers}
                          onChange={(e) => setFormData({ ...formData, proposerMessers: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-black mb-1">
                        Address of Proposer *
                      </label>
                      <input
                        type="text"
                        placeholder="Registered Address of Proposing Member"
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D]"
                        value={formData.proposerAddress}
                        onChange={(e) => setFormData({ ...formData, proposerAddress: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Section B: Seconder */}
                  <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-3">
                    <div className="flex items-center gap-2 pb-1 border-b border-slate-100">
                      <span className="text-[11px] font-bold text-[#DA251D] uppercase tracking-wider">
                        2. SECONDER DETAILS
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-black mb-1">
                          Seconded by (Authorised Representative) *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Full Name of Member Seconder"
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D]"
                          value={formData.secondedBy}
                          onChange={(e) => setFormData({ ...formData, secondedBy: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-black mb-1">
                          of messers (Seconder ECAM Member Firm) *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. M/s Modern Power Systems &amp; Controls"
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D]"
                          value={formData.seconderMessers}
                          onChange={(e) => setFormData({ ...formData, seconderMessers: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-black mb-1">
                        Address of Seconder *
                      </label>
                      <input
                        type="text"
                        placeholder="Registered Address of Seconding Member"
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D]"
                        value={formData.seconderAddress}
                        onChange={(e) => setFormData({ ...formData, seconderAddress: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-5 py-2.5 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ArrowLeft size={14} />
                      <span>Back to Firm Details</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (!formData.proposedBy || !formData.secondedBy) {
                          alert('Please enter Proposer and Seconder names.');
                          return;
                        }
                        setCurrentStep(3);
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#DA251D] hover:bg-[#B71C1C] text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>Proceed to Official Undertaking</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: STATUTORY UNDERTAKING & APPLICANT SIGNATURE */}
              {currentStep === 3 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-3">
                    <h5 className="font-black text-xs sm:text-sm text-[#DA251D] uppercase tracking-wider text-center">
                      STATUTORY UNDERTAKING
                    </h5>
                    <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 leading-relaxed text-justify space-y-2">
                      <p>
                        I/We agree to abide by the terms and conditions of membership and also Memorandum &amp; Articles of the Electrical Contractors&apos; Association of Maharashtra (ECAM). Bye-laws for Code of Conduct and other Rules &amp; Regulations that will be in force from time to time subject to which I/We have paid Admission Fee and Annual / Life Membership Fee.
                      </p>
                      <p>
                        I/We agree that if admitted as member, I/We shall be jointly and severally liable with my/our firm for upholding electrical safety standards and all Association dues. In case I/We violate to honour any of the laws, rules and regulations, the Association is authorised to publish my/our names and company&apos;s name in ECAM official publications / IECT Magazine as defaulter and blacklist my/our names, including any other disciplinary action which the Association feels right and fit as per their discretion.
                      </p>
                    </div>

                    <label className="flex items-start gap-2.5 pt-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        required
                        checked={formData.undertakingAccepted}
                        onChange={(e) => setFormData({ ...formData, undertakingAccepted: e.target.checked })}
                        className="mt-0.5 w-4 h-4 text-[#DA251D] rounded border-slate-300 focus:ring-[#DA251D] cursor-pointer"
                      />
                      <span className="text-xs font-bold text-slate-900 leading-snug">
                        I hereby declare that I am the Authorised Principal Officer / Director of {formData.firmName || 'the applicant firm'} and solemnly accept the above undertaking with our corporate seal. *
                      </span>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-black mb-1">
                        Signature of Applicant (Full Name) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Type full legal name as digital signature"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm text-black placeholder-slate-400 focus:outline-none focus:border-[#DA251D] bg-white font-medium"
                        value={formData.applicantSignature || formData.proprietor}
                        onChange={(e) => setFormData({ ...formData, applicantSignature: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-black mb-1">
                        Date of Application *
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs sm:text-sm text-black focus:outline-none focus:border-[#DA251D] bg-white"
                        value={formData.applicantDate}
                        onChange={(e) => setFormData({ ...formData, applicantDate: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Secretariat Office Use Preview Accordion */}
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-[#FAFBFD] space-y-2 text-xs">
                    <span className="font-bold text-slate-800 uppercase text-[11px] block">
                      ECAM Secretariat Verification Process:
                    </span>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Upon submission, your application enters ECAM Secretariat verification: Member Code generation &bull; PWD / Electrical License validation &bull; Scrutiny Sub-Committee review &bull; Formal approval by the ECAM Managing Council.
                    </p>
                  </div>

                  <div className="pt-3 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-5 py-2.5 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ArrowLeft size={14} />
                      <span>Back to Endorsements</span>
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.undertakingAccepted}
                      className="px-8 py-3 rounded-full bg-[#DA251D] hover:bg-[#B71C1C] disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                    >
                      <Check size={16} />
                      <span>Submit Membership Application</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
