import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, "public", "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const db = new Database("content.db");

// Initialize database with content_body
db.exec(`
  CREATE TABLE IF NOT EXISTS content (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    content_body TEXT,
    image_url TEXT,
    video_url TEXT,
    extra_data TEXT
  )
`);

// Add content_body column if it doesn't exist (for existing databases)
try {
  db.exec("ALTER TABLE content ADD COLUMN content_body TEXT");
} catch (e) {
  // Column already exists
}

// Seed initial data if empty
const count = db.prepare("SELECT COUNT(*) as count FROM content").get() as { count: number };
if (count.count === 0) {
  const initialData = [
    {
      id: "hero",
      title: "Sehat Kecilku: Panduan Pneumonia Balita",
      description: "Memberikan ketenangan dan pengetahuan bagi Ibu dalam menghadapi gejala pernapasan pada si kecil dengan cara yang tepat dan didukung medis.",
      content_body: "",
      image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPA-xZs-gpcN8bBcqpNZ11TTRMFAG2xYqmAyeebAxwwSykuxS8Xn09qSDeJWf3dFLd4wgd4sdRDW1bNUhBwMs78cnYsFKA6Vn5txh2nQtS70pfXUe092LymANyPAUWKVSaB71RTrYpNf9OdQDJCdfoJ9udl7PnseIC7RbzB4zMjPUXPtSbuERMLa5MnxBBjiteCuSWfAsUAn5x3WzJluWgGJHo9K_WFbeQPIRalY7pnnRccgr2ukf1PrHidWeceIJCby9bsVF9H84",
      video_url: "",
      extra_data: ""
    },
    {
      id: "pengenalan",
      title: "Mengenal Pneumonia",
      description: "Pneumonia adalah peradangan pada kantung udara di salah satu atau kedua paru-paru yang biasanya disebabkan oleh infeksi. Pada balita, kondisi ini memerlukan perhatian ekstra karena sistem pernapasan mereka masih berkembang.",
      content_body: "Pneumonia adalah infeksi yang menyerang paru-paru, menyebabkan kantung udara di dalam paru-paru (alveoli) meradang dan terisi cairan atau nanah. Hal ini membuat penderitanya sulit bernapas karena oksigen tidak dapat masuk ke dalam aliran darah dengan baik.",
      image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOJukp5qAX554op3536ovw8Hj2iDXqyqLiTAVSAKYnceP3m1D5nJ8GDTQaUKmXoRPbYcFv8TdKQkstHGm-PZaMAxSFofuAYyzS2ze0W1Nb6y2hDt1a7WN9s16k-ES-qoIM4jqhHfoRrHkOalPH_TFOs-biaJyLfNYwvRBxYq1_X8Eh8fF5dv4RUIWTGXQS4YZEm3PmTM-12OO0BmlyVUDYy9yU5prI67jZXWxSYxMWRMQoCK_cIQdiGAryZJasU2k-zQjGH6QsNWw",
      video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      extra_data: JSON.stringify({
        paruNormal: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJw7PAEqu1UPkzQLKx4f_M6vdIJneXxQZKnS7p6d0OsLqE0IPC-KAa7NdRNBMMHVdOcrkljXZwmbNXD8Bhy7V3e_XcuSqgl7VitkD2cARVUiiIyVbbWjBu6uV4KXS1-9adOW3J073YdryvFs8HsWIA7KL63kRVpBehKnDGNjxrLZrk2Hj28pT6TFszJze_3kOxdit6SDjFGGT_tUHM5sRrIHpdCZ5djyZjPLUyjbZIBWGTYosRsSyqQju2DhOcvqA3PHx1xgXeVTA",
        paruPneumonia: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDcbb3CMz0v9CXs_z8JKvWOg9QKTE6IenMN6N_WtCZn0T155F0bAkPEJiudCOHpv5wDzpvc4bMjYDejy6mOPNBihzIFbFjKIWhc-We_CWjAoIVQbfU04lHmNlOL1H0gjKD8E1NegunwwjinrH823NEBNW5mrf2GQ_HK10DibHRmNvbQptH1emxHJnit1N7s7Ft3VDzI9DnTmvKDSthXwiEvzgY1_ZiriIMvvxougfgpgZt2howV51lrQQxoIXjAQUNjey31UibsyI"
      })
    },
    {
      id: "penyebab",
      title: "Penyebab & Faktor Risiko",
      description: "Pahami apa yang memicu dan meningkatkan risiko pada si kecil.",
      content_body: "Pneumonia dapat disebabkan oleh berbagai mikroorganisme, termasuk bakteri, virus, dan jamur. Faktor lingkungan juga berperan besar dalam meningkatkan risiko anak terkena pneumonia.",
      image_url: "",
      video_url: "",
      extra_data: JSON.stringify([
        { title: "Virus & Bakteri", desc: "Penyebab paling umum adalah Streptococcus pneumoniae dan virus pernapasan lainnya.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9Rbe6wPP8SR5SEnrrr0_WyYbSJKbyVkVwvjCdow8DldBN6fVBatngWCnxWWciF7Wp1FuDuosw7drB_GbEA7GhkY6dsPt6Wek5poHfQrPSmTK89wZe9ik2I-DgejnlPk11OuLACLrsFPYtA1dJsNggSz7jmjnVNgQS19wXGikeOB21_zkQMQMo5fIR9bfyyQTEI7KpvaqtOc1FCUy22cT9O352r4aJ5pcTnNFelunmREj3ZWjMof3aVyzch4Tfc5KtV-QaHbroQA8" },
        { title: "Polusi Udara", desc: "Asap rokok dan polusi udara di dalam rumah meningkatkan risiko iritasi paru-paru.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjDYjHz8cqFF6nuyV0HK2HDV2WDE384yXkwBL7QHlRy1wynaXnxFDNGT2_y0CpCiCN6SGuuIzZIjfpXOj_6RZrGA3KWkCM9HFH3mhjF2HH1R80pW_lZacdW5qz4XxISOivwktHd3ITbU-aZhBSEgTH2X-96I6ugM372g20xv394xwOjUvyOip2kRyeE9pSU0XGPuIhHr7SKhCrUDs9n1K-bMZQ0WTc-KplgJv-yw0j3ekwE0qSNM91K2OVnajq3ZffDDjcsOT7o-c" },
        { title: "Kurang Nutrisi", desc: "Sistem imun yang lemah karena kurangnya ASI eksklusif atau gizi buruk.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADUU6iCC6TKhHqbmuAV0ueqiuRKoNc83EeAqeizUpASaRk7rJgNZp-vPWRQkfcUd1VMpjUFo9yYrWAZesMPYnUkEX12JmD4a8KWPfDkEOscCXaL1RGiC0hzh8S9kNP0aiQ2azJ5Bv5KV5BTOidyThAnJvMmasG7NlybzOtrtJZr7PmyNypWvr2EsELJqRvcJ3achHTaBQS0BqJWnkoeeShPKE6JXQeKrxX4h4nKIJSO5oqymKSrWFhIJTKvnQkZMXsNyQBIbzCNSc" }
      ])
    },
    {
      id: "gejala",
      title: "Mengenali Tanda & Gejala",
      description: "Penting bagi orang tua untuk membedakan antara batuk biasa dengan gejala pneumonia yang lebih serius.",
      content_body: "Gejala pneumonia pada anak bisa bervariasi tergantung pada usia dan penyebab infeksinya. Namun, ada beberapa tanda bahaya yang harus segera diwaspadai.",
      image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm-BeJs-ibCN4y45iySisRq8kfOEs77Gj8DUMO4JUom0xgNBpuZ6098IPSf2wIXRHjVPMNTy7qQyVqoggyCEh1IdMYtfPQ4UkzGMMkHd3HDfGLgQ4yvIr0Cta24a4PR1paCXfrZ68et96NBDl3O1xlC60S9JYQZyNybRBvoAVE4Uto9JnPcyZKaxSOjrNuN6yziQFw-qicDq5-HbBozulD-LlbOe4ZIVKW2qp41IU4zJZe04TBMpsSCTr-AJGX-pbYP-kFnFWzJso",
      video_url: "",
      extra_data: JSON.stringify([
        { title: "Demam Tinggi", desc: "Suhu tubuh meningkat drastis disertai menggigil." },
        { title: "Napas Cepat", desc: "Frekuensi napas lebih banyak dari biasanya (takipnea)." },
        { title: "Tarikan Dinding Dada", desc: "Dada tampak masuk ke dalam saat anak menarik napas." }
      ])
    },
    {
      id: "perawatan",
      title: "Langkah Perawatan & Deteksi Dini",
      description: "Apa yang harus dilakukan saat anak menunjukkan gejala?",
      content_body: "Deteksi dini adalah kunci dalam menangani pneumonia pada balita. Orang tua harus tahu kapan harus merawat di rumah dan kapan harus segera membawa anak ke fasilitas kesehatan.",
      image_url: "",
      video_url: "",
      extra_data: JSON.stringify([
        { step: 1, title: "Hitung Napas", desc: "Gunakan stopwatch untuk menghitung napas anak dalam 1 menit.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPnRYSOiSFWFvuvB4mlp0j6AWE1436JNkJzKMyENYV_4e_YV4EJt8weImGwnQfZrnbaE-dKECrlrQJbn4JaZ0830biqdWhIopppIobQMu-D7PWGQxURewChBpJdMo9_DnLCTyjJ25AvkTBM6mgF2uIkPtSsTvuQLwwATcv1343k3Ab9lBfrxF03Ry9ynFOKVYskLknwnOs82fqkO2vOLc_QdYdmHY2FCzt56WmduiJQ1cAo7JcxbGdCOHgKoiX9tN8UQ2WcZg1XPc" },
        { step: 2, title: "Pemberian Cairan", desc: "Pastikan anak tetap terhidrasi dengan ASI atau air putih.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXSOc_lx18MsUkfvwpeAwymsHWqgyVm3aFyauFmHzhpZaEVLgpZmKTROinsDk9S5ojf-mzOVsDjcFdTebeMcngL1caXItT677FIDsB9Cwu8zceT2qQDsgBZ7rU0bvx4wawLPzH7B1bFxQcRGrD2gY6U1YZ_QXpmNHBqrHAEY_DgbgFImYxMnTx-91lzX35DsRqZ4JxfTSL8FvXDnM-mWJp9K-c6BYD_NamqeglzgQ7QPQEJH93OlKHp9bGDFJcBPc2Cgq8sCC13vg" },
        { step: 3, title: "Bersihkan Hidung", desc: "Bantu bersihkan sumbatan hidung agar napas lebih lega.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbbwKrOrY9vtVTMcnttlckg-5g2tNi-hHDUnf9Id4jdmBMTgaqRjAgwqW_Hq0YU8fhZRcIgZNnBjTz715xl_63TqHtxjT6cqxIVNVhmqGSdXKvPyNainp4y2DVbnQqNZJgCvrl8eDpRjwClcWI_2qLe9fRaEZNdqadEWGF-EjYVGarnG1iHJQ-LRfSYInF3Op-z1yCIW0_0zZmxX0S7HZdf5ZDjOhm02Xnt83781qbz9aTigzK_fFDCB9rqBxDSk_2BtKfJQMB_7Y" },
        { step: 4, title: "Segera ke Dokter", desc: "Jangan menunda jika gejala memberat atau anak sulit makan.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2WNhtLjG4PLYTZBnY48b35igqxgPxE0Uztw3qw63XuLQpBGSmpTGb-1XrurIwderr4OfFJaxLWq0ShpbPcpUMJRDhDrHz95c_LsxcX7zwPBXUR02F7wIdOVQgX7LqukXe6xQ8mVIIO02oftrTWjwrVzo0cuhmbXhhkXDov0Bln9p4VSGcczqNPHbyDlPkpXhF2tvshYzul8HzHCMPOCVQpmTb_e2Z7zVfw7_nnxd2GQUU-j4paAEuW9FPXVe8m7J36HAsU5NbquQ" }
      ])
    },
    {
      id: "psikologi",
      title: "Manajemen Psikologis: Teknik Hipnosis 5 Jari",
      description: "Menghadapi anak yang sakit bisa sangat melelahkan secara emosional. Teknik relaksasi ini membantu Ibu tetap tenang sehingga dapat memberikan perawatan terbaik bagi si kecil.",
      content_body: "Teknik Hipnosis 5 Jari adalah metode relaksasi sederhana yang dapat dilakukan oleh Ibu untuk mengurangi kecemasan dan stres saat merawat anak yang sakit. Dengan pikiran yang tenang, Ibu dapat membuat keputusan yang lebih baik.",
      image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCgItwt_cM_JS4UkLiUpyljjGjjlU1jRD9E4Ugx-3YLgDhGijAgpkla-TzSnurOvGaHB-kHPM3M74J4--NN98fpkiYNeMVFBRoRk0iNNWNZmtlyy5KIPG3bYZrTlw8TuuILZQ1jg09Gt1P9jY3hcX_IWtPVkVRBiemSCIX8VLWQEa4e2E1kqHkOGmb3Wmjq2M-8RBivtAcLnfOWpIy4g_1UYSKpo937fttx8u98DcYArbPaSBv56Rix0f2YGKuBDZ0C8BKDH6YWsY",
      video_url: "",
      extra_data: JSON.stringify([
        "Satukan jempol dan telunjuk: Bayangkan tubuh sehat dan segar.",
        "Satukan jempol dan jari tengah: Bayangkan orang-orang tercinta.",
        "Satukan jempol dan jari manis: Bayangkan pujian yang pernah didapat.",
        "Satukan jempol dan kelingking: Bayangkan tempat yang paling indah."
      ])
    },
    {
      id: "animasi",
      title: "Video Animasi Pneumonia Balita",
      description: "Tonton video animasi edukatif mengenai pneumonia pada balita untuk pemahaman yang lebih visual dan menarik.",
      content_body: "Video animasi ini dirancang khusus untuk memberikan gambaran yang jelas mengenai apa itu pneumonia, bagaimana gejalanya, dan langkah-langkah pencegahannya dengan cara yang mudah dipahami.",
      image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbbwKrOrY9vtVTMcnttlckg-5g2tNi-hHDUnf9Id4jdmBMTgaqRjAgwqW_Hq0YU8fhZRcIgZNnBjTz715xl_63TqHtxjT6cqxIVNVhmqGSdXKvPyNainp4y2DVbnQqNZJgCvrl8eDpRjwClcWI_2qLe9fRaEZNdqadEWGF-EjYVGarnG1iHJQ-LRfSYInF3Op-z1yCIW0_0zZmxX0S7HZdf5ZDjOhm02Xnt83781qbz9aTigzK_fFDCB9rqBxDSk_2BtKfJQMB_7Y",
      video_url: "",
      extra_data: ""
    }
  ];

  const insert = db.prepare("INSERT INTO content (id, title, description, content_body, image_url, video_url, extra_data) VALUES (?, ?, ?, ?, ?, ?, ?)");
  for (const item of initialData) {
    insert.run(item.id, item.title, item.description, item.content_body, item.image_url, item.video_url, item.extra_data);
  }
}

// Ensure 'animasi' section exists for existing databases
const checkAnimasi = db.prepare("SELECT id FROM content WHERE id = 'animasi'").get();
if (!checkAnimasi) {
  const insert = db.prepare("INSERT INTO content (id, title, description, content_body, image_url, video_url, extra_data) VALUES (?, ?, ?, ?, ?, ?, ?)");
  insert.run(
    "animasi",
    "Video Animasi Pneumonia Balita",
    "Tonton video animasi edukatif mengenai pneumonia pada balita untuk pemahaman yang lebih visual dan menarik.",
    "Video animasi ini dirancang khusus untuk memberikan gambaran yang jelas mengenai apa itu pneumonia, bagaimana gejalanya, dan langkah-langkah pencegahannya dengan cara yang mudah dipahami.",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCbbwKrOrY9vtVTMcnttlckg-5g2tNi-hHDUnf9Id4jdmBMTgaqRjAgwqW_Hq0YU8fhZRcIgZNnBjTz715xl_63TqHtxjT6cqxIVNVhmqGSdXKvPyNainp4y2DVbnQqNZJgCvrl8eDpRjwClcWI_2qLe9fRaEZNdqadEWGF-EjYVGarnG1iHJQ-LRfSYInF3Op-z1yCIW0_0zZmxX0S7HZdf5ZDjOhm02Xnt83781qbz9aTigzK_fFDCB9rqBxDSk_2BtKfJQMB_7Y",
    "",
    ""
  );
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

async function startServer() {
  const app = express();
  app.use(express.json());

  // Serve static files from public directory
  app.use("/uploads", express.static(uploadsDir));

  // API Routes
  app.get("/api/content", (req, res) => {
    const content = db.prepare("SELECT * FROM content").all();
    res.json(content);
  });

  app.post("/api/content", (req, res) => {
    const { id, title, description, content_body, image_url, video_url, extra_data } = req.body;
    const update = db.prepare(`
      UPDATE content 
      SET title = ?, description = ?, content_body = ?, image_url = ?, video_url = ?, extra_data = ?
      WHERE id = ?
    `);
    update.run(title, description, content_body, image_url, video_url, extra_data, id);
    res.json({ success: true });
  });

  // Upload endpoint
  app.post("/api/upload", upload.single("file"), (req: any, res) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    const fileUrl = `/uploads/${req.file.filename}`;
    res.json({ url: fileUrl });
  });

  // Simple login endpoint
  app.post("/api/login", (req, res) => {
    const { password } = req.body;
    if (password === "admin123") {
      res.json({ success: true });
    } else {
      res.status(401).json({ error: "Invalid password" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  const PORT = 3000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
