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
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Baby className="text-white size-6" />
              </div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">Sehat Kecilku</h1>
            </div>
            <Link to="/admin" className="text-slate-400 hover:text-slate-600">
              <Settings className="size-5" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center py-16 lg:py-32 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl text-center"
        >
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 font-bold text-xs uppercase tracking-wider rounded-full mb-6">
            Edukasi Kesehatan Anak
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
            {hero.title}
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => navigate('/materi')}
              className="group bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-3"
            >
              Pelajari Sekarang
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-20 w-full max-w-3xl aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
        >
          <img 
            src={hero.image_url} 
            alt="Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </main>

      <footer className="mt-auto py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">© 2026 Sehat Kecilku. Dibuat dengan kasih untuk kesehatan anak Indonesia.</p>
        </div>
      </footer>
    </div>
  );
}

function MateriPage({ content }: { content: ContentSection[] }) {
  const navigate = useNavigate();
  const sections = content.filter(s => s.id !== 'hero');

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => navigate('/')} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <ArrowLeft className="size-5" />
              </button>
              <div className="flex items-center gap-2">
                <Baby className="text-blue-600 size-6" />
                <h1 className="text-lg font-bold text-slate-900">Materi Edukasi</h1>
              </div>
            </div>
            <nav className="hidden lg:flex items-center gap-6">
              {sections.map(s => (
                <a key={s.id} href={`#${s.id}`} className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
                  {s.title?.split(':')[0] || s.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-24">
        {sections.map((section, idx) => {
          const extra = JSON.parse(section.extra_data || '[]');
          const isEven = idx % 2 === 0;

          return (
            <motion.section 
              key={section.id} 
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="scroll-mt-24"
            >
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}>
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                    <FileText className="size-3" /> Materi {idx + 1}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{section.title}</h2>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    {section.description}
                  </p>
                  <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                    {(section.content_body || '').split('\n').map((p, i) => (
                      <p key={i} className="mb-4">{p}</p>
                    ))}
                  </div>

                  {/* Render Extra Data if it's an array (like symptoms or steps) */}
                  {Array.isArray(extra) && extra.length > 0 && typeof extra[0] === 'object' && (
                    <div className="grid sm:grid-cols-2 gap-4 mt-8">
                      {extra.map((item: any, i: number) => (
                        <div key={i} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                          {item.step && <span className="text-blue-600 font-bold text-lg mb-2 block">Langkah {item.step}</span>}
                          <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Render Extra Data if it's a list of strings (like psychology steps) */}
                  {Array.isArray(extra) && extra.length > 0 && typeof extra[0] === 'string' && (
                    <div className="space-y-3 mt-8">
                      {extra.map((text: string, i: number) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100">
                          <div className="size-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">{i+1}</div>
                          <p className="text-sm text-slate-700 font-medium">{text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="w-full lg:w-2/5 shrink-0">
                  <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-square bg-white">
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
              </div>
            </motion.section>
          );
        })}
      </main>

      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Baby className="text-blue-400 size-8" />
              <h2 className="text-2xl font-bold">Sehat Kecilku</h2>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Portal edukasi kesehatan terpercaya khusus untuk ibu dan balita. Dapatkan informasi akurat demi tumbuh kembang si kecil yang optimal.
            </p>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-lg">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <User className="size-5 text-blue-400" />
                <span>Novi Enis Rosuliana</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="size-5 text-blue-400" />
                <span>+62 819-4494-2421</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© 2026 Sehat Kecilku. Dibuat dengan kasih untuk kesehatan anak Indonesia.</p>
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
        <Route path="/admin" element={<AdminPage content={content} onUpdate={fetchContent} />} />
      </Routes>
    </Router>
  );
}

