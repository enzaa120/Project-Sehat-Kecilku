/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link,
  useNavigate
} from 'react-router-dom';
import { 
  Baby, 
  Play, 
  Thermometer, 
  Wind, 
  AlertCircle, 
  CheckCircle2, 
  Phone,
  Droplets,
  Timer,
  Home,
  Heart,
  Info,
  Settings,
  Save,
  Edit3,
  ArrowLeft,
  User,
  Upload,
  Lock,
  FileText,
  ChevronRight,
  BookOpen,
  Activity,
  Stethoscope,
  Brain,
  PlayCircle,
  Share2,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { useParams } from 'react-router-dom';

interface ContentSection {
  id: string;
  title: string;
  description: string;
  content_body: string;
  image_url: string;
  video_url: string;
  extra_data: string;
}

function LandingPage({ content }: { content: ContentSection[] }) {
  const navigate = useNavigate();
  const hero = content.find(s => s.id === 'hero');

  if (!hero) return null;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 blur-[120px] rounded-full animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-100/50 blur-[120px] rounded-full animate-blob [animation-delay:2s]"></div>
      <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-yellow-100/30 blur-[80px] rounded-full animate-blob [animation-delay:4s]"></div>

      {/* Navigation */}
      <header className="relative z-50 w-full bg-white/40 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-2xl shadow-lg shadow-blue-200 rotate-[-6deg]">
                <Baby className="text-white size-6" />
              </div>
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 font-display">
                Sehat<span className="text-blue-600">Kecilku</span>
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/admin" className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                <Settings className="size-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 pt-12 lg:pt-24 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100/50">
              <Sparkles className="size-4 animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wider font-display">Edukasi Terpercaya</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] font-display">
              {hero.title}
            </h1>
            
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
              {hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <button 
                onClick={() => navigate('/materi')}
                className="btn-primary group w-full sm:w-auto shadow-xl shadow-blue-200"
              >
                Pelajari Sekarang
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="size-10 rounded-xl border-2 border-white overflow-hidden bg-slate-100">
                      <img src={`https://picsum.photos/seed/mother${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => <Heart key={i} className="size-3 text-rose-500 fill-rose-500" />)}
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Dipercaya 1k+ Ibu</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Floating Icons */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 z-20 size-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-50"
            >
              <Heart className="text-rose-500 size-8" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 z-20 size-20 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-slate-50"
            >
              <Baby className="text-blue-500 size-10" />
            </motion.div>

            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-[12px] border-white aspect-[4/5] lg:aspect-square bg-white animate-float">
              <img 
                src={hero.image_url} 
                alt="Hero" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-3xl flex items-center gap-4">
                <div className="size-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200">
                  <CheckCircle2 className="text-white size-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 font-display">Materi Terverifikasi</h4>
                  <p className="text-xs text-slate-500 font-medium">Disusun oleh tenaga ahli medis</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Wave Divider */}
      <div className="relative h-24 w-full overflow-hidden">
        <svg className="absolute bottom-0 w-[200%] h-full animate-[wave_20s_linear_infinite]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,14.29,1200,52.47V0Z" fill="#FDFCF9" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#FDFCF9" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.37V0Z" fill="#FDFCF9"></path>
        </svg>
      </div>

      <footer className="relative z-10 py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <Baby className="text-blue-600 size-5" />
            <span className="font-bold text-slate-900 font-display">Sehat Kecilku</span>
          </div>
          <p className="text-slate-400 text-sm font-medium">© 2026 Sehat Kecilku. Dibuat dengan kasih untuk kesehatan anak Indonesia.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><User className="size-5" /></a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Phone className="size-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MateriPage({ content }: { content: ContentSection[] }) {
  const navigate = useNavigate();
  const sections = content.filter(s => s.id !== 'hero');

  const getIcon = (id: string) => {
    switch(id) {
      case 'pengenalan': return <BookOpen className="size-8 text-white" />;
      case 'penyebab': return <AlertCircle className="size-8 text-white" />;
      case 'gejala': return <Thermometer className="size-8 text-white" />;
      case 'perawatan': return <Stethoscope className="size-8 text-white" />;
      case 'psikologi': return <Brain className="size-8 text-white" />;
      case 'animasi': return <PlayCircle className="size-8 text-white" />;
      default: return <FileText className="size-8 text-white" />;
    }
  };

  const getBgColor = (id: string) => {
    switch(id) {
      case 'pengenalan': return 'bg-blue-500';
      case 'penyebab': return 'bg-rose-500';
      case 'gejala': return 'bg-amber-500';
      case 'perawatan': return 'bg-indigo-500';
      case 'psikologi': return 'bg-pink-500';
      case 'animasi': return 'bg-emerald-500';
      default: return 'bg-slate-500';
    }
  };

  const getShadowColor = (id: string) => {
    switch(id) {
      case 'pengenalan': return 'shadow-blue-200';
      case 'penyebab': return 'shadow-rose-200';
      case 'gejala': return 'shadow-amber-200';
      case 'perawatan': return 'shadow-indigo-200';
      case 'psikologi': return 'shadow-pink-200';
      case 'animasi': return 'shadow-emerald-200';
      default: return 'shadow-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-[-5%] right-[-5%] size-[30%] bg-blue-50/50 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-5%] left-[-5%] size-[30%] bg-pink-50/50 blur-[100px] rounded-full"></div>

      <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/')} className="p-2.5 hover:bg-white rounded-2xl shadow-sm border border-slate-100 transition-all">
                <ArrowLeft className="size-5" />
              </button>
              <div className="flex items-center gap-2">
                <Baby className="text-blue-600 size-6" />
                <h1 className="text-xl font-bold text-slate-900 font-display">Menu Belajar</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest font-display"
          >
            Kurikulum Edukasi
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-display">Mulai Belajar Tentang Pneumonia</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Pilih modul pembelajaran di bawah ini untuk memahami pneumonia pada balita secara menyeluruh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              onClick={() => navigate(`/materi/${section.id}`)}
              className="group bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-white hover:shadow-[0_40px_80px_-16px_rgba(0,0,0,0.12)] transition-all cursor-pointer relative overflow-hidden"
            >
              {/* Decorative background circle */}
              <div className={`absolute -top-10 -right-10 size-40 ${getBgColor(section.id)} opacity-[0.05] rounded-full group-hover:scale-150 transition-transform duration-700`}></div>
              
              <div className="flex justify-between items-start mb-8">
                <div className={`size-20 ${getBgColor(section.id)} rounded-3xl flex items-center justify-center shadow-2xl ${getShadowColor(section.id)}/40 group-hover:rotate-6 transition-transform`}>
                  {getIcon(section.id)}
                </div>
                <div className="px-3 py-1 bg-slate-50 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Modul {idx + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors font-display leading-tight">
                {section.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed mb-10 line-clamp-3 font-medium text-sm">
                {section.description}
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex items-center gap-2 text-blue-600 font-extrabold text-sm group-hover:gap-4 transition-all">
                  Pelajari <ChevronRight className="size-5" />
                </div>
                <div className="size-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <Play className="size-3 text-slate-300 group-hover:text-blue-600 fill-current" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm font-medium">© 2026 Sehat Kecilku. Dibuat dengan kasih untuk kesehatan anak Indonesia.</p>
        </div>
      </footer>
    </div>
  );
}

function MateriDetailPage({ content }: { content: ContentSection[] }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const section = content.find(s => s.id === id);

  if (!section) return null;

  const extra = JSON.parse(section.extra_data || '[]');

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: section.title,
        text: section.description,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link berhasil disalin!');
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50/50 to-transparent -z-10"></div>
      
      <header className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/materi')} className="p-2.5 hover:bg-slate-50 rounded-2xl transition-all">
                <ArrowLeft className="size-5" />
              </button>
              <h1 className="text-lg font-bold text-slate-900 font-display truncate max-w-[200px] sm:max-w-none">{section.title}</h1>
            </div>
            <button 
              onClick={handleShare}
              className="p-2.5 bg-blue-50 text-blue-600 rounded-2xl hover:bg-blue-100 transition-all flex items-center gap-2 font-bold text-sm"
            >
              <Share2 className="size-4" />
              <span className="hidden sm:inline">Bagikan</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          <div className="space-y-8 text-center">
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest font-display"
            >
              <Sparkles className="size-3" /> Modul Pembelajaran
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight font-display">{section.title}</h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
              {section.description}
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-[3.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-video bg-slate-50">
              {section.video_url ? (
                <div className="w-full h-full">
                  {section.video_url.includes('youtube.com') || section.video_url.includes('youtu.be') ? (
                    <iframe src={section.video_url} className="w-full h-full" allowFullScreen></iframe>
                  ) : (
                    <video src={section.video_url} controls className="w-full h-full object-cover"></video>
                  )}
                </div>
              ) : (
                <img src={section.image_url} alt={section.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              )}
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg font-medium">
            {(section.content_body || '').split('\n').map((p, i) => (
              <p key={i} className="mb-8">{p}</p>
            ))}
          </div>

          {/* Render Extra Data if it's an array (like symptoms or steps) */}
          {Array.isArray(extra) && extra.length > 0 && typeof extra[0] === 'object' && (
            <div className="grid sm:grid-cols-2 gap-8 mt-16">
              {extra.map((item: any, i: number) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:bg-white transition-all"
                >
                  {item.step && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider mb-4">
                      Langkah {item.step}
                    </div>
                  )}
                  <h4 className="text-2xl font-bold text-slate-900 mb-3 font-display">{item.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  {item.img && (
                    <div className="mt-6 rounded-2xl overflow-hidden border-4 border-white shadow-md">
                      <img src={item.img} alt={item.title} className="w-full aspect-video object-cover" referrerPolicy="no-referrer" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* Render Extra Data if it's a list of strings (like psychology steps) */}
          {Array.isArray(extra) && extra.length > 0 && typeof extra[0] === 'string' && (
            <div className="space-y-6 mt-16">
              {extra.map((text: string, i: number) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 bg-blue-50/50 rounded-[2rem] border border-blue-100 transition-all"
                >
                  <div className="size-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-xl font-bold shrink-0 shadow-lg shadow-blue-200">
                    {i+1}
                  </div>
                  <p className="text-slate-700 font-bold text-lg font-display">{text}</p>
                </motion.div>
              ))}
            </div>
          )}

          <div className="pt-16 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button 
              onClick={() => navigate('/materi')}
              className="btn-primary w-full sm:w-auto"
            >
              <ArrowLeft className="size-5" /> Kembali ke Menu
            </button>
            
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-slate-400">Bagikan materi ini:</span>
              <div className="flex gap-2">
                <button onClick={handleShare} className="size-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                  <Share2 className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="bg-slate-900 text-white py-24 mt-24">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
          <div className="flex items-center justify-center gap-3">
            <div className="bg-blue-600 p-2 rounded-2xl">
              <Baby className="text-white size-8" />
            </div>
            <h2 className="text-3xl font-extrabold font-display">Sehat Kecilku</h2>
          </div>
          <p className="text-slate-400 max-w-md mx-auto leading-relaxed font-medium">
            Portal edukasi kesehatan terpercaya khusus untuk ibu dan balita. Dapatkan informasi akurat demi tumbuh kembang si kecil yang optimal.
          </p>
          <div className="pt-8 border-t border-slate-800 text-slate-500 text-sm font-medium">
            © 2026 Sehat Kecilku. Dibuat dengan kasih untuk kesehatan anak Indonesia.
          </div>
        </div>
      </footer>
    </div>
  );
}

function AdminPage({ content, onUpdate }: { content: ContentSection[], onUpdate: () => void }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<ContentSection>>({});
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadType, setUploadType] = useState<'image' | 'video'>('image');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        alert('Password salah!');
      }
    } catch (error) {
      alert('Terjadi kesalahan saat login');
    }
  };

  const handleEdit = (section: ContentSection) => {
    setEditingId(section.id);
    setFormData(section);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const uploadFormData = new FormData();
    uploadFormData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: uploadFormData,
      });
      const data = await response.json();
      if (data.url) {
        if (uploadType === 'image') {
          setFormData({ ...formData, image_url: data.url });
        } else {
          setFormData({ ...formData, video_url: data.url });
        }
      }
    } catch (error) {
      alert('Gagal mengunggah file');
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!editingId) return;
    
    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setEditingId(null);
        onUpdate();
        alert('Konten berhasil diperbarui!');
      }
    } catch (error) {
      console.error('Error updating content:', error);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border border-slate-200"
        >
          <div className="text-center mb-8">
            <div className="size-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="text-blue-600 size-8" />
            </div>
            <h1 className="text-2xl font-bold">Admin Login</h1>
            <p className="text-slate-500">Masukkan password untuk mengelola konten</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
              <input 
                type="password" 
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100">
              Masuk
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white rounded-full transition-colors">
              <ArrowLeft className="size-6" />
            </button>
            <h1 className="text-3xl font-bold">Panel Admin</h1>
          </div>
          <button onClick={() => setIsLoggedIn(false)} className="text-sm font-bold text-red-600 hover:text-red-700">Logout</button>
        </div>

        <div className="grid gap-6">
          {content.map((section) => (
            <div key={section.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <Edit3 className="text-blue-600 size-5" />
                  </div>
                  <h3 className="text-xl font-bold capitalize">{section.id} Section</h3>
                </div>
                {editingId === section.id ? (
                  <button 
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md"
                  >
                    <Save className="size-4" /> Simpan
                  </button>
                ) : (
                  <button 
                    onClick={() => handleEdit(section)}
                    className="flex items-center gap-2 bg-slate-100 text-slate-700 px-6 py-2.5 rounded-xl font-bold hover:bg-slate-200 transition-colors"
                  >
                    Edit
                  </button>
                )}
              </div>

              {editingId === section.id ? (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Judul</label>
                        <input 
                          type="text" 
                          className="w-full p-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                          value={formData.title || ''}
                          onChange={e => setFormData({...formData, title: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1">Deskripsi Singkat</label>
                        <textarea 
                          rows={3}
                          className="w-full p-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                          value={formData.description || ''}
                          onChange={e => setFormData({...formData, description: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Media (Gambar/Video)</label>
                        <div className="flex gap-2 mb-3">
                          <button 
                            onClick={() => setUploadType('image')}
                            className={`flex-1 py-2 rounded-lg text-xs font-bold border transition-all ${uploadType === 'image' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 border-slate-200'}`}
                          >
                            Import Gambar
                          </button>
                          <button 
                            onClick={() => setUploadType('video')}
                            className={`flex-1 py-2 rounded-lg text-xs font-bold border transition-all ${uploadType === 'video' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 border-slate-200'}`}
                          >
                            Import Video
                          </button>
                        </div>
                        <div 
                          onClick={() => fileInputRef.current?.click()}
                          className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all group"
                        >
                          {uploading ? (
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                          ) : (
                            <>
                              <Upload className="size-8 text-slate-400 mx-auto mb-2 group-hover:text-blue-500" />
                              <p className="text-sm font-bold text-slate-500 group-hover:text-blue-600">Klik untuk Upload {uploadType === 'image' ? 'Gambar' : 'Video'}</p>
                              <p className="text-xs text-slate-400 mt-1">File akan disimpan langsung di server</p>
                            </>
                          )}
                        </div>
                        <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileUpload} accept={uploadType === 'image' ? 'image/*' : 'video/*'} />
                        <div className="mt-3 p-3 bg-slate-100 rounded-xl text-[10px] font-mono text-slate-500 break-all">
                          Current URL: {uploadType === 'image' ? formData.image_url : formData.video_url || 'None'}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Isi Materi (Konten Lengkap)</label>
                    <textarea 
                      rows={8}
                      className="w-full p-4 bg-slate-50 border rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none leading-relaxed"
                      value={formData.content_body || ''}
                      onChange={e => setFormData({...formData, content_body: e.target.value})}
                      placeholder="Masukkan isi materi lengkap di sini..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Data Tambahan (JSON)</label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 bg-slate-50 border rounded-xl font-mono text-xs focus:ring-2 focus:ring-blue-500 outline-none"
                      value={formData.extra_data || ''}
                      onChange={e => setFormData({...formData, extra_data: e.target.value})}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex gap-6 items-start">
                  <div className="size-24 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                    <img src={section.image_url} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 mb-1">{section.title}</h4>
                    <p className="text-sm text-slate-500 line-clamp-2">{section.description}</p>
                    <div className="mt-2 flex gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-500 rounded uppercase tracking-wider">
                        {section.content_body ? 'Has Content' : 'No Content'}
                      </span>
                      {section.video_url && (
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-600 rounded uppercase tracking-wider">
                          Video Attached
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [content, setContent] = useState<ContentSection[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    try {
      const response = await fetch('/api/content');
      const data = await response.json();
      setContent(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching content:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage content={content} />} />
        <Route path="/materi" element={<MateriPage content={content} />} />
        <Route path="/materi/:id" element={<MateriDetailPage content={content} />} />
        <Route path="/admin" element={<AdminPage content={content} onUpdate={fetchContent} />} />
      </Routes>
    </Router>
  );
}

