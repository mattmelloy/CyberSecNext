"use client"

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  FileText,
  RotateCcw,
  Shield,
  Mail,
  Users,
  Lock,
  Hand,
  Wifi,
  Bell,
  Phone,
  FileTextIcon,
  Key,
  Smartphone,
  Eye,
  AlertTriangle,
  Check,
  X,
  ShieldCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { trainingSlides, totalSlides } from "@/data/training-slides";
import {
  TrainingSlide,
  TitleSlide,
  StatsSlide,
  ThreatsSlide,
  TwoColumnSlide,
  StepsSlide,
  UpdatesSlide,
  BackupSlide,
  GridSlide,
  ChecklistSlide,
  TrainingState,
  TRAINING_STORAGE_KEY,
  colorValues,
} from "@/types/training";

// Icon mapping for dynamic icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  email: Mail,
  users: Users,
  lock: Lock,
  hand: Hand,
  wifi: Wifi,
  bell: Bell,
  phone: Phone,
  document: FileTextIcon,
  key: Key,
  mobile: Smartphone,
  eye: Eye,
  warning: AlertTriangle,
  check: Check,
  x: X,
  shield: Shield,
  'user-shield': ShieldCheck,
};

function DynamicIcon({ name, className }: { name?: string; className?: string }) {
  if (!name) return null;
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}

// Layout constants
const HEADER_HEIGHT = 180;
const FOOTER_HEIGHT = 38;

export default function TrainingPage() {
  const [state, setState] = useState<TrainingState>({
    currentSlide: 0,
    showPresenterNotes: false,
    isPlaying: false,
    isCompleted: false,
  });
  const [hasHydrated, setHasHydrated] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Load saved progress on mount
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem(TRAINING_STORAGE_KEY);
      if (savedProgress) {
        try {
          const parsed = JSON.parse(savedProgress);
          if (parsed.currentSlide > 0) {
            setState({
              currentSlide: parsed.currentSlide,
              showPresenterNotes: false,
              isPlaying: false,
              isCompleted: parsed.isCompleted || false,
              completedAt: parsed.completedAt,
            });
          }
        } catch {
          // Invalid JSON, clear corrupted data
          localStorage.removeItem(TRAINING_STORAGE_KEY);
        }
      }
    } catch {
      // localStorage not available (private browsing mode)
    }
    setHasHydrated(true);
  }, []);

  // Save progress whenever state changes
  useEffect(() => {
    if (hasHydrated && state.currentSlide > 0) {
      try {
        localStorage.setItem(
          TRAINING_STORAGE_KEY,
          JSON.stringify({
            ...state,
            savedAt: new Date().toISOString(),
          })
        );
      } catch {
        // Storage quota exceeded or unavailable - fail silently
      }
    }
  }, [state, hasHydrated]);

  // Define callbacks before using them in useEffect
  const goToSlide = useCallback((index: number) => {
    setState((prev) => ({
      ...prev,
      currentSlide: index,
    }));
  }, []);

  const togglePresenterNotes = useCallback(() => {
    setState((prev) => ({
      ...prev,
      showPresenterNotes: !prev.showPresenterNotes,
    }));
  }, []);

  const togglePlay = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isPlaying: !prev.isPlaying,
    }));
    
    if (audioRef.current) {
      if (!state.isPlaying) {
        audioRef.current.play().catch(() => {
          // Audio not available, that's fine
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [state.isPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case "ArrowLeft":
          if (state.currentSlide > 0) {
            goToSlide(state.currentSlide - 1);
          }
          break;
        case "ArrowRight":
          if (state.currentSlide < totalSlides - 1) {
            goToSlide(state.currentSlide + 1);
          }
          break;
        case " ":
          e.preventDefault();
          togglePlay();
          break;
        case "p":
        case "P":
          togglePresenterNotes();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [state.currentSlide, goToSlide, togglePlay, togglePresenterNotes]);

  // Audio handling
  useEffect(() => {
    const currentSlideData = trainingSlides[state.currentSlide];
    if (audioRef.current && currentSlideData.audioPath) {
      audioRef.current.src = currentSlideData.audioPath;
      audioRef.current.load();
      
      // Auto-play if was already playing
      if (state.isPlaying) {
        audioRef.current.play().catch(() => {
          // Auto-play blocked, reset state
          setState(prev => ({ ...prev, isPlaying: false }));
        });
      }
    }
  }, [state.currentSlide, state.isPlaying]);

  // Sync isPlaying state with actual audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setState(prev => ({ ...prev, isPlaying: false }));
    };

    const handlePlay = () => {
      setState(prev => ({ ...prev, isPlaying: true }));
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('play', handlePlay);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('play', handlePlay);
    };
  }, []);

  const goToNextSlide = useCallback(() => {
    if (state.currentSlide < totalSlides - 1) {
      goToSlide(state.currentSlide + 1);
    }
  }, [state.currentSlide, goToSlide]);

  const goToPreviousSlide = useCallback(() => {
    if (state.currentSlide > 0) {
      goToSlide(state.currentSlide - 1);
    }
  }, [state.currentSlide, goToSlide]);

  const restartTraining = useCallback(() => {
    // Stop any playing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    
    try {
      localStorage.removeItem(TRAINING_STORAGE_KEY);
    } catch {
      // localStorage not available
    }
    setState({
      currentSlide: 0,
      showPresenterNotes: false,
      isPlaying: false,
      isCompleted: false,
    });
  }, []);

  const currentSlideData = trainingSlides[state.currentSlide];
  const progress = ((state.currentSlide + 1) / totalSlides) * 100;

  // Render Slide 1: Title Slide
  const renderTitleSlide = (slide: TitleSlide) => (
    <div className="relative h-full min-h-[calc(100vh-180px)] flex bg-[#0D1B2A]">
      {/* Mint accent bar */}
      <div className="w-[22px] bg-[#02C39A] flex-shrink-0" />
      
      {/* Main content area */}
      <div className="flex-1 flex">
        {/* Left zone - Typography */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
            {slide.headlineLine1}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#02C39A] mb-6">
            {slide.headlineLine2}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-4">
            {slide.tagline}
          </p>
          <p className="text-sm md:text-base text-[#B8C9D9] italic mb-8">
            {slide.sourceAttribution}
          </p>
          
          {/* Separator line */}
          <div className="w-full h-[2px] bg-[#028090] mb-6" />
          
          {/* Session info */}
          <p className="text-sm text-[#B8C9D9]">
            {slide.businessName}  |  {slide.duration}
          </p>
        </div>
        
        {/* Right zone - Shield with tick icon */}
        <div className="hidden md:flex items-start justify-center pt-20 pr-12 w-1/3">
          <ShieldCheck className="w-48 h-48 lg:w-72 lg:h-72 text-[#028090] opacity-85" />
        </div>
      </div>
      
      {/* Footer strip */}
      <div className="absolute bottom-0 left-0 right-0 h-[38px] bg-[#0A1520] flex items-center px-6">
        <span className="text-xs text-[#B8C9D9]">
          cyber.gov.au  |  ReportCyber  |  1300 CYBER 1
        </span>
      </div>
    </div>
  );

  // Render Slide 2: Stats Slide
  const renderStatsSlide = (slide: StatsSlide) => (
    <div className="relative h-full min-h-[calc(100vh-180px)] flex">
      {/* Teal accent bar */}
      <div className="w-[22px] bg-[#028090] flex-shrink-0" />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col px-6 md:px-10 py-8">
        {/* Title */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A]">{slide.title}</h2>
          <p className="text-sm italic text-[#028090]">{slide.subtitle}</p>
        </div>
        
        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
          {slide.statCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-[6px]" style={{ backgroundColor: colorValues[card.accentColor] }} />
              <div className="p-6 text-center">
                <p className="text-3xl md:text-4xl font-bold mb-2" style={{ color: colorValues[card.accentColor] }}>
                  {card.stat}
                </p>
                <p className="text-sm text-[#1A2B3C]">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Key message banner */}
        <div className="bg-[#0D1B2A] rounded-lg shadow-lg p-4 md:p-6">
          <p className="text-white text-sm md:text-base">
            💡  {slide.keyMessage}
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[38px] bg-[#0D1B2A] flex items-center justify-between px-6">
        <span className="text-xs text-[#B8C9D9]">Australian Cyber Security Centre | cyber.gov.au</span>
        <span className="text-xs text-[#02C39A]">{slide.id} / {totalSlides}</span>
      </div>
    </div>
  );

  // Render Slide 3: Threats Slide
  const renderThreatsSlide = (slide: ThreatsSlide) => (
    <div className="relative h-full min-h-[calc(100vh-180px)] flex">
      {/* Teal accent bar */}
      <div className="w-[22px] bg-[#028090] flex-shrink-0" />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col px-6 md:px-10 py-8">
        {/* Title */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A]">{slide.title}</h2>
          <p className="text-sm italic text-[#028090]">{slide.subtitle}</p>
        </div>
        
        {/* Threat rows */}
        <div className="space-y-4">
          {slide.threatRows.map((row, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex">
              {/* Colored left bar */}
              <div className="w-[18px] flex-shrink-0" style={{ backgroundColor: colorValues[row.accentColor] }} />
              
              {/* Icon circle */}
              <div className="flex items-center px-4 py-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colorValues[row.accentColor] }}>
                  <DynamicIcon name={row.icon} className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 py-4 pr-4">
                <h3 className="font-bold text-[#1A2B3C] text-lg">{row.title}</h3>
                <p className="text-sm text-[#1A2B3C]">{row.description}</p>
              </div>
              
              {/* Quote box */}
              <div className="hidden md:flex items-center px-4 py-4">
                <div className="px-4 py-3 rounded text-white text-sm italic" style={{ backgroundColor: colorValues[row.accentColor] }}>
                  "{row.exampleQuote}"
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[38px] bg-[#0D1B2A] flex items-center justify-between px-6">
        <span className="text-xs text-[#B8C9D9]">Australian Cyber Security Centre | cyber.gov.au</span>
        <span className="text-xs text-[#02C39A]">{slide.id} / {totalSlides}</span>
      </div>
    </div>
  );

  // Render Two-Column Slide
  const renderTwoColumnSlide = (slide: TwoColumnSlide) => (
    <div className="relative h-full min-h-[calc(100vh-180px)] flex">
      {/* Teal accent bar */}
      <div className="w-[22px] bg-[#028090] flex-shrink-0" />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col px-6 md:px-10 py-8">
        {/* Title */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A]">{slide.title}</h2>
          <p className="text-sm italic text-[#028090]">{slide.subtitle}</p>
        </div>
        
        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-12 flex items-center px-4 gap-3" style={{ backgroundColor: colorValues[slide.leftColumn.headerColor] }}>
              {slide.leftColumn.headerIcon && (
                <DynamicIcon name={slide.leftColumn.headerIcon} className="w-5 h-5 text-white" />
              )}
              <span className="text-white font-bold text-sm uppercase">{slide.leftColumn.headerText}</span>
            </div>
            <ul className="p-4 space-y-3">
              {slide.leftColumn.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-[#028090] flex-shrink-0" />
                  <span className="text-sm text-[#1A2B3C]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right column */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-12 flex items-center px-4 gap-3" style={{ backgroundColor: colorValues[slide.rightColumn.headerColor] }}>
              {slide.rightColumn.headerIcon && (
                <DynamicIcon name={slide.rightColumn.headerIcon} className="w-5 h-5 text-white" />
              )}
              <span className="text-white font-bold text-sm uppercase">{slide.rightColumn.headerText}</span>
            </div>
            <ul className="p-4 space-y-3">
              {slide.rightColumn.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-[#028090] flex-shrink-0" />
                  <span className="text-sm text-[#1A2B3C]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[38px] bg-[#0D1B2A] flex items-center justify-between px-6">
        <span className="text-xs text-[#B8C9D9]">Australian Cyber Security Centre | cyber.gov.au</span>
        <span className="text-xs text-[#02C39A]">{slide.id} / {totalSlides}</span>
      </div>
    </div>
  );

  // Render Steps Slide (Emergency Response)
  const renderStepsSlide = (slide: StepsSlide) => (
    <div className="relative h-full min-h-[calc(100vh-180px)] flex bg-[#0D1B2A]">
      {/* Mint accent bar */}
      <div className="w-[22px] bg-[#02C39A] flex-shrink-0" />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col px-6 md:px-10 py-8">
        {/* Title */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-white">{slide.title}</h2>
          <p className="text-sm italic text-[#02C39A]">{slide.subtitle}</p>
        </div>
        
        {/* Step cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 flex-1">
          {slide.steps.map((step, index) => (
            <div key={index} className="bg-[#162535] rounded-lg shadow-lg overflow-hidden flex flex-col">
              {/* Top accent bar */}
              <div className="h-[8px]" style={{ backgroundColor: colorValues[step.color] }} />
              
              {/* Icon circle */}
              <div className="flex justify-center pt-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: colorValues[step.color] }}>
                  <DynamicIcon name={step.icon} className="w-6 h-6 text-white" />
                </div>
              </div>
              
              {/* Step label */}
              <p className="text-center text-[9pt] mt-2 uppercase" style={{ color: colorValues[step.color] }}>
                Step {index + 1}
              </p>
              
              {/* Title */}
              <h3 className="text-center font-bold text-white text-lg mt-1">{step.title}</h3>
              
              {/* Description */}
              <p className="text-center text-[#E8EFF5] text-xs px-3 pb-4 mt-2 flex-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Footer tip */}
        {slide.footerTip && (
          <div className="mt-6 text-center">
            <p className="text-[#02C39A] text-sm">📌  {slide.footerTip}</p>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[38px] bg-[#0A1520] flex items-center px-6">
        <span className="text-xs text-[#B8C9D9]">cyber.gov.au  |  ReportCyber  |  1300 CYBER 1</span>
      </div>
    </div>
  );

  // Render Updates Slide
  const renderUpdatesSlide = (slide: UpdatesSlide) => (
    <div className="relative h-full min-h-[calc(100vh-180px)] flex">
      {/* Teal accent bar */}
      <div className="w-[22px] bg-[#028090] flex-shrink-0" />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col px-6 md:px-10 py-8">
        {/* Title */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A]">{slide.title}</h2>
          <p className="text-sm italic text-[#028090]">{slide.subtitle}</p>
        </div>
        
        {/* Three-zone layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
          {/* Left card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[6px]" style={{ backgroundColor: colorValues[slide.leftCardAccentColor] }} />
            <div className="p-4">
              <h3 className="font-bold text-sm mb-3" style={{ color: colorValues[slide.leftCardAccentColor] }}>{slide.leftCardTitle}</h3>
              <ul className="space-y-2">
                {slide.leftCardItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: colorValues[slide.leftCardAccentColor] }} />
                    <span className="text-sm text-[#1A2B3C]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Center visual */}
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-32 h-32 rounded-full bg-[#028090] flex items-center justify-center">
              <div className="text-center">
                {slide.centerVisualText.map((line, index) => (
                  <p key={index} className="text-white font-bold text-lg">{line}</p>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[6px]" style={{ backgroundColor: colorValues[slide.rightCardAccentColor] }} />
            <div className="p-4">
              <h3 className="font-bold text-sm mb-3" style={{ color: colorValues[slide.rightCardAccentColor] }}>{slide.rightCardTitle}</h3>
              <ul className="space-y-2">
                {slide.rightCardItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: colorValues[slide.rightCardAccentColor] }} />
                    <span className="text-sm text-[#1A2B3C]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Tip banner */}
        <div className="bg-[#0D1B2A] rounded-lg shadow-lg p-4">
          <p className="text-white text-sm">✅  {slide.tipBanner}</p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[38px] bg-[#0D1B2A] flex items-center justify-between px-6">
        <span className="text-xs text-[#B8C9D9]">Australian Cyber Security Centre | cyber.gov.au</span>
        <span className="text-xs text-[#02C39A]">{slide.id} / {totalSlides}</span>
      </div>
    </div>
  );

  // Render Backup Slide
  const renderBackupSlide = (slide: BackupSlide) => (
    <div className="relative h-full min-h-[calc(100vh-180px)] flex">
      {/* Teal accent bar */}
      <div className="w-[22px] bg-[#028090] flex-shrink-0" />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col px-6 md:px-10 py-8">
        {/* Title */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A]">{slide.title}</h2>
          <p className="text-sm italic text-[#028090]">{slide.subtitle}</p>
        </div>
        
        {/* Backup cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {slide.backupCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: colorValues[card.circleColor] }}>
                <span className="text-3xl font-bold text-white">{card.number}</span>
              </div>
              <h3 className="font-bold text-[#1A2B3C] mb-2">{card.label}</h3>
              <p className="text-sm text-[#8BA0B2]">{card.description}</p>
            </div>
          ))}
        </div>
        
        {/* Rule label */}
        <p className="text-center font-bold text-[#028090] mb-4">{slide.ruleLabel}</p>
        
        {/* Warning banner */}
        <div className="bg-[#0D1B2A] rounded-lg shadow-lg p-4">
          <p className="text-white text-sm">⚠️  {slide.warningBanner}</p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[38px] bg-[#0D1B2A] flex items-center justify-between px-6">
        <span className="text-xs text-[#B8C9D9]">Australian Cyber Security Centre | cyber.gov.au</span>
        <span className="text-xs text-[#02C39A]">{slide.id} / {totalSlides}</span>
      </div>
    </div>
  );

  // Render Grid Slide
  const renderGridSlide = (slide: GridSlide) => (
    <div className="relative h-full min-h-[calc(100vh-180px)] flex">
      {/* Teal accent bar */}
      <div className="w-[22px] bg-[#028090] flex-shrink-0" />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col px-6 md:px-10 py-8">
        {/* Title */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B2A]">{slide.title}</h2>
          <p className="text-sm italic text-[#028090]">{slide.subtitle}</p>
        </div>
        
        {/* Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {slide.gridCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex">
              {/* Colored left bar */}
              <div className="w-[18px] flex-shrink-0" style={{ backgroundColor: colorValues[card.accentColor] }} />
              <div className="p-4">
                <h3 className="font-bold mb-2" style={{ color: colorValues[card.accentColor] }}>{card.title}</h3>
                <p className="text-sm text-[#1A2B3C]">{card.bodyText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[38px] bg-[#0D1B2A] flex items-center justify-between px-6">
        <span className="text-xs text-[#B8C9D9]">Australian Cyber Security Centre | cyber.gov.au</span>
        <span className="text-xs text-[#02C39A]">{slide.id} / {totalSlides}</span>
      </div>
    </div>
  );

  // Render Checklist Slide
  const renderChecklistSlide = (slide: ChecklistSlide) => (
    <div className="relative h-full min-h-[calc(100vh-180px)] flex bg-[#0D1B2A]">
      {/* Mint accent bar */}
      <div className="w-[22px] bg-[#02C39A] flex-shrink-0" />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col px-6 md:px-10 py-8">
        {/* Title */}
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-white">{slide.title}</h2>
          <p className="text-sm italic text-[#02C39A]">{slide.subtitle}</p>
        </div>
        
        {/* Checklist items */}
        <div className="space-y-3 flex-1">
          {slide.checklistItems.map((item, index) => (
            <div key={index} className="bg-[#162535] rounded-lg shadow-lg p-4 flex items-center gap-4">
              {/* Check icon */}
              <div className="w-8 h-8 rounded-full bg-[#02C39A] flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
              
              {/* Content */}
              <div>
                <h3 className="font-bold text-[#02C39A]">{item.title}</h3>
                <p className="text-sm text-[#E8EFF5]">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-[38px] bg-[#0A1520] flex items-center px-6">
        <span className="text-xs text-[#02C39A]">
          🌐  {slide.footerText}
        </span>
      </div>
    </div>
  );

  // Main slide renderer
  const renderSlideContent = (slide: TrainingSlide) => {
    switch (slide.type) {
      case "title":
        return renderTitleSlide(slide);
      case "stats":
        return renderStatsSlide(slide);
      case "threats":
        return renderThreatsSlide(slide);
      case "two-column":
        return renderTwoColumnSlide(slide);
      case "steps":
        return renderStepsSlide(slide);
      case "updates":
        return renderUpdatesSlide(slide);
      case "backup":
        return renderBackupSlide(slide);
      case "grid":
        return renderGridSlide(slide);
      case "checklist":
        return renderChecklistSlide(slide);
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      
      {/* Progress bar */}
      <div className="w-full bg-muted/30">
        <Progress 
          value={progress} 
          className="h-1 rounded-none" 
          aria-label={`Training progress: ${Math.round(progress)}% complete`}
        />
      </div>
      
      {/* Main slide area */}
      <main className="flex-1 flex flex-col" role="main">
        {/* Screen reader announcement */}
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Slide {state.currentSlide + 1} of {totalSlides}: {currentSlideData.title}
        </div>
        
        {/* Slide container */}
        <div 
          className="flex-1 relative overflow-hidden" 
          aria-live="polite" 
          aria-atomic="true"
          role="region"
          aria-label="Training slide content"
        >
          {renderSlideContent(currentSlideData)}
        </div>
        
        {/* Presenter notes panel */}
        {state.showPresenterNotes && (
          <div 
            className="bg-muted/50 border-t px-6 py-4 max-h-[200px] overflow-y-auto"
            role="complementary"
            aria-label="Presenter notes"
          >
            <div className="max-w-4xl mx-auto">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4" aria-hidden="true" />
                Presenter Notes
              </h4>
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {currentSlideData.presenterScript}
              </p>
            </div>
          </div>
        )}
        
        {/* Navigation controls */}
        <div className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" role="navigation" aria-label="Slide navigation">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Left: Previous button */}
              <Button
                variant="outline"
                size="lg"
                onClick={goToPreviousSlide}
                disabled={state.currentSlide === 0}
                className="gap-2 min-w-[120px]"
                aria-label="Go to previous slide"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                Previous
              </Button>
              
              {/* Center: Slide counter and controls */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground" aria-label={`Current slide ${state.currentSlide + 1} of ${totalSlides}`}>
                  Slide {state.currentSlide + 1} of {totalSlides}
                </span>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={togglePlay}
                  className="gap-1"
                  title={state.isPlaying ? "Pause audio" : "Play audio"}
                  aria-label={state.isPlaying ? "Pause audio narration" : "Play audio narration"}
                  aria-pressed={state.isPlaying}
                >
                  {state.isPlaying ? (
                    <Pause className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Play className="h-4 w-4" aria-hidden="true" />
                  )}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={togglePresenterNotes}
                  className="gap-1"
                  title="Toggle presenter notes"
                  aria-label={state.showPresenterNotes ? "Hide presenter notes" : "Show presenter notes"}
                  aria-pressed={state.showPresenterNotes}
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  {state.showPresenterNotes ? "Hide" : "Notes"}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={restartTraining}
                  className="gap-1"
                  title="Reset to first slide"
                  aria-label="Reset training to first slide"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  Reset
                </Button>
              </div>
              
              {/* Right: Next button */}
              <Button
                size="lg"
                onClick={goToNextSlide}
                disabled={state.currentSlide === totalSlides - 1}
                className="gap-2 min-w-[120px]"
                aria-label="Go to next slide"
              >
                Next
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
            
            {/* Keyboard shortcuts hint */}
            <div className="mt-3 text-center text-xs text-muted-foreground" role="note">
              <p>
                Keyboard shortcuts: <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">ArrowLeft</kbd> <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">ArrowRight</kbd> to navigate &bull; <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">Space</kbd> to play/pause &bull; <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">P</kbd> for presenter notes
              </p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Hidden audio element for audio support */}
      <audio 
        ref={audioRef} 
        className="hidden" 
        aria-label="Training narration audio"
      />
    </div>
  );
}
