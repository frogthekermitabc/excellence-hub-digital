import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ms";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      managementSystems: "Management Systems",
      consultants: "Our Consultants",
      courses: "Courses",
      contact: "Contact",
      getQuote: "Get a Quote",
    },
    footer: {
      description: "Leading ISO certification consultancy in Malaysia since 1995. Inspiring excellence through quality and integrity.",
      quickLinks: "Quick Links",
      isoStandards: "ISO Standards",
      contactUs: "Contact Us",
      mofRegistered: "MOF Registered",
      hrdCorp: "HRD Corp",
      allRightsReserved: "All rights reserved",
    },
    home: {
      heroTitle: "QAI",
      heroSubtitle: "Inspiring Excellence Through Quality & Integrity Since 1995",
      heroDescription: "Leading ISO certification consultancy serving Malaysia, Indonesia, and Singapore",
      getFreeQuote: "Get a Free Quote",
      learnMore: "Learn More",
      yearsOfExcellence: "Years of Excellence",
      satisfiedClients: "Satisfied Clients",
      countriesServed: "Countries Served",
      certificationsCompleted: "Certifications Completed",
      isoManagementSystems: "ISO Management Systems",
      isoManagementSystemsDesc: "Comprehensive certification, training, and consulting services for international quality standards",
      iso9001Desc: "Quality Management System for operational excellence and customer satisfaction",
      iso14001Desc: "Environmental Management System for sustainable business practices",
      iso45001Desc: "Occupational Health & Safety Management for workplace protection",
      iso27001Desc: "Information Security Management for data protection and cybersecurity",
      iso37001Desc: "Anti-Bribery Management System for corruption prevention",
      iso21001Desc: "Educational Organisations Management for quality in learning",
      ourServices: "Our Services",
      ourServicesDesc: "End-to-end solutions for ISO certification and quality management",
      trainingServices: "Training Services",
      trainingServicesDesc: "Public courses, in-house training, and customized programs. HRD Corp claimable courses available.",
      consultingServices: "Consulting Services",
      consultingServicesDesc: "ISO implementation, gap analysis, documentation development, and system maintenance support.",
      auditingServices: "Auditing Services",
      auditingServicesDesc: "Internal audits, surveillance audits, pre-certification, and second-party auditing.",
      readyToCertify: "Ready to Get Certified?",
      readyToCertifyDesc: "Connect with our expert consultants and start your ISO certification journey today",
      scheduleConsultation: "Schedule Consultation",
      meetOurTeam: "Meet Our Team",
    },
    about: {
      title: "About QAI",
      subtitle: "Three decades of excellence in ISO certification, training, and consulting services",
      whoWeAre: "Who We Are",
      para1: "QAI Sdn Bhd (Quality Assurance International) was incorporated in August 1995 with a clear vision — to inspire and empower organizations to achieve excellence through quality, integrity, and continuous improvement.",
      para2: "Beginning with a focus on ISO 9001 (Quality Management System), QAI has progressively expanded its expertise to include ISO 14001 (Environmental Management System), ISO 27001 (Information Security Management System), ISO 45001 (Occupational Health and Safety Management System), and ISO 37001 (Anti-Bribery Management System), along with Kaizen and Lean Management practices.",
      para3: "For nearly three decades, QAI has been a trusted partner in providing training, consulting, and auditing services across Malaysia and ASEAN countries, including Indonesia and Singapore.",
      para4: "Through unwavering commitment, professionalism, and adaptability, QAI has successfully sustained its growth and reputation amidst the changing business and economic landscapes — continuing to uphold its mission of enhancing organizational performance and promoting a culture of excellence.",
      ourVision: "Our Vision",
      visionText: "To assist clients to operate cost effective competitive businesses using the ISO Quality Management System Standards as the basis for continual improvement. QAI achieves this by facilitating clients to proactively look at areas of potential and achievable improvements and adopt innovative, practical and realistic targets over a set timeframe.",
      ourMission: "Our Mission",
      missionText: "Committed in providing excellent training and consultancy services to all clients by:",
      mission1: "Ensuring innovative and effective knowledge transfer",
      mission2: "Facilitating and enhancing management competency",
      mission3: "Delivering effective solutions across the clients' organization",
      qualityPolicy: "Quality Policy",
      qualityPolicyText: "Committed in providing value and excellent training and consulting services that comply with clients' requirements through continual improvement and effective quality management system.",
      ourJourney: "Our Journey",
      timeline: {
        1995: "QAI established, beginning our journey in quality management consulting",
        2000: "Expanded services to include ISO 14001 environmental management",
        2005: "Reached milestone of 500+ successful certifications",
        2010: "Extended operations to Indonesia and Singapore",
        2015: "Celebrated 20 years of excellence with 2000+ clients served",
        2020: "Launched comprehensive online training programs",
        2025: "30 years of inspiring excellence in quality management",
      },
      certificationsRegistrations: "Certifications & Registrations",
      registrationNumber: "Registration Number",
      mofCertificateNo: "MOF Certificate No",
      mofRegRefNo: "MOF Reg. Ref. No",
      mofValidationPeriod: "MOF Validation Period",
      bumiputeraCertificateNo: "Bumiputera Certificate No",
      hrdCorpProvider: "HRD CORP Registered Training Provider",
      ourGeographicReach: "Our Geographic Reach",
      malaysiaDesc: "Headquarters in Puchong with nationwide coverage",
      indonesiaDesc: "Serving major business centers across the archipelago",
      singaporeDesc: "Supporting enterprises in the financial hub of Southeast Asia",
    },
    iso: {
      qualityManagement: "Quality Management",
      environmentalManagement: "Environmental Management",
      occupationalHealthSafety: "Occupational Health & Safety Management",
      informationSecurity: "Information Security Management System",
      antiBribery: "Anti-Bribery Management System",
    },
  },
  ms: {
    nav: {
      home: "Laman Utama",
      about: "Tentang Kami",
      services: "Perkhidmatan",
      managementSystems: "Sistem Pengurusan",
      consultants: "Perunding Kami",
      courses: "Kursus",
      contact: "Hubungi",
      getQuote: "Dapatkan Sebut Harga",
    },
    footer: {
      description: "Perunding pensijilan ISO terkemuka di Malaysia sejak 1995. Memberi inspirasi kecemerlangan melalui kualiti dan integriti.",
      quickLinks: "Pautan Pantas",
      isoStandards: "Piawaian ISO",
      contactUs: "Hubungi Kami",
      mofRegistered: "Berdaftar MOF",
      hrdCorp: "HRD Corp",
      allRightsReserved: "Hak cipta terpelihara",
    },
    home: {
      heroTitle: "QAI",
      heroSubtitle: "Memberi Inspirasi Kecemerlangan Melalui Kualiti & Integriti Sejak 1995",
      heroDescription: "Perunding pensijilan ISO terkemuka yang melayani Malaysia, Indonesia, dan Singapura",
      getFreeQuote: "Dapatkan Sebut Harga Percuma",
      learnMore: "Ketahui Lebih Lanjut",
      yearsOfExcellence: "Tahun Kecemerlangan",
      satisfiedClients: "Pelanggan Berpuas Hati",
      countriesServed: "Negara Dilayani",
      certificationsCompleted: "Pensijilan Selesai",
      isoManagementSystems: "Sistem Pengurusan ISO",
      isoManagementSystemsDesc: "Pensijilan, latihan, dan perkhidmatan perundingan yang komprehensif untuk piawaian kualiti antarabangsa",
      iso9001Desc: "Sistem Pengurusan Kualiti untuk kecemerlangan operasi dan kepuasan pelanggan",
      iso14001Desc: "Sistem Pengurusan Alam Sekitar untuk amalan perniagaan yang mampan",
      iso45001Desc: "Pengurusan Kesihatan & Keselamatan Pekerjaan untuk perlindungan tempat kerja",
      iso27001Desc: "Pengurusan Keselamatan Maklumat untuk perlindungan data dan keselamatan siber",
      iso37001Desc: "Sistem Pengurusan Anti-Rasuah untuk pencegahan rasuah",
      iso21001Desc: "Pengurusan Organisasi Pendidikan untuk kualiti dalam pembelajaran",
      ourServices: "Perkhidmatan Kami",
      ourServicesDesc: "Penyelesaian menyeluruh untuk pensijilan ISO dan pengurusan kualiti",
      trainingServices: "Perkhidmatan Latihan",
      trainingServicesDesc: "Kursus awam, latihan dalaman, dan program tersuai. Kursus boleh dituntut HRD Corp tersedia.",
      consultingServices: "Perkhidmatan Perundingan",
      consultingServicesDesc: "Pelaksanaan ISO, analisis jurang, pembangunan dokumentasi, dan sokongan penyelenggaraan sistem.",
      auditingServices: "Perkhidmatan Audit",
      auditingServicesDesc: "Audit dalaman, audit pengawasan, pra-pensijilan, dan audit pihak kedua.",
      readyToCertify: "Bersedia untuk Disijilkan?",
      readyToCertifyDesc: "Hubungi perunding pakar kami dan mulakan perjalanan pensijilan ISO anda hari ini",
      scheduleConsultation: "Jadualkan Perundingan",
      meetOurTeam: "Temui Pasukan Kami",
    },
    about: {
      title: "Tentang QAI",
      subtitle: "Tiga dekad kecemerlangan dalam pensijilan ISO, latihan, dan perkhidmatan perundingan",
      whoWeAre: "Siapa Kami",
      para1: "QAI Sdn Bhd (Quality Assurance International) telah diperbadankan pada Ogos 1995 dengan visi yang jelas — untuk memberi inspirasi dan memperkasakan organisasi untuk mencapai kecemerlangan melalui kualiti, integriti, dan penambahbaikan berterusan.",
      para2: "Bermula dengan fokus kepada ISO 9001 (Sistem Pengurusan Kualiti), QAI telah mengembangkan kepakarannya secara progresif untuk merangkumi ISO 14001 (Sistem Pengurusan Alam Sekitar), ISO 27001 (Sistem Pengurusan Keselamatan Maklumat), ISO 45001 (Sistem Pengurusan Kesihatan dan Keselamatan Pekerjaan), dan ISO 37001 (Sistem Pengurusan Anti-Rasuah), bersama-sama dengan amalan Kaizen dan Lean Management.",
      para3: "Selama hampir tiga dekad, QAI telah menjadi rakan kongsi yang dipercayai dalam menyediakan perkhidmatan latihan, perundingan, dan audit di seluruh Malaysia dan negara-negara ASEAN, termasuk Indonesia dan Singapura.",
      para4: "Melalui komitmen yang tidak berbelah bahagi, profesionalisme, dan kebolehsuaian, QAI telah berjaya mengekalkan pertumbuhan dan reputasinya di tengah-tengah perubahan landskap perniagaan dan ekonomi — terus menegakkan misinya untuk meningkatkan prestasi organisasi dan mempromosikan budaya kecemerlangan.",
      ourVision: "Visi Kami",
      visionText: "Untuk membantu pelanggan mengendalikan perniagaan yang kompetitif dengan kos efektif menggunakan Piawaian Sistem Pengurusan Kualiti ISO sebagai asas untuk penambahbaikan berterusan. QAI mencapai ini dengan memudahkan pelanggan untuk secara proaktif melihat bidang penambahbaikan yang berpotensi dan boleh dicapai serta menggunakan sasaran yang inovatif, praktikal dan realistik dalam jangka masa yang ditetapkan.",
      ourMission: "Misi Kami",
      missionText: "Komited dalam menyediakan perkhidmatan latihan dan perundingan yang cemerlang kepada semua pelanggan dengan:",
      mission1: "Memastikan pemindahan pengetahuan yang inovatif dan berkesan",
      mission2: "Memudahkan dan meningkatkan kecekapan pengurusan",
      mission3: "Menyampaikan penyelesaian yang berkesan di seluruh organisasi pelanggan",
      qualityPolicy: "Dasar Kualiti",
      qualityPolicyText: "Komited dalam menyediakan nilai dan perkhidmatan latihan serta perundingan yang cemerlang yang mematuhi keperluan pelanggan melalui penambahbaikan berterusan dan sistem pengurusan kualiti yang berkesan.",
      ourJourney: "Perjalanan Kami",
      timeline: {
        1995: "QAI ditubuhkan, memulakan perjalanan kami dalam perundingan pengurusan kualiti",
        2000: "Perkhidmatan dikembangkan untuk merangkumi pengurusan alam sekitar ISO 14001",
        2005: "Mencapai pencapaian 500+ pensijilan yang berjaya",
        2010: "Memperluaskan operasi ke Indonesia dan Singapura",
        2015: "Meraikan 20 tahun kecemerlangan dengan 2000+ pelanggan yang dilayani",
        2020: "Melancarkan program latihan dalam talian yang komprehensif",
        2025: "30 tahun memberi inspirasi kecemerlangan dalam pengurusan kualiti",
      },
      certificationsRegistrations: "Pensijilan & Pendaftaran",
      registrationNumber: "Nombor Pendaftaran",
      mofCertificateNo: "No. Sijil MOF",
      mofRegRefNo: "No. Rujukan Pendaftaran MOF",
      mofValidationPeriod: "Tempoh Pengesahan MOF",
      bumiputeraCertificateNo: "No. Sijil Bumiputera",
      hrdCorpProvider: "Penyedia Latihan Berdaftar HRD CORP",
      ourGeographicReach: "Jangkauan Geografi Kami",
      malaysiaDesc: "Ibu pejabat di Puchong dengan liputan di seluruh negara",
      indonesiaDesc: "Melayani pusat perniagaan utama di seluruh nusantara",
      singaporeDesc: "Menyokong perusahaan di pusat kewangan Asia Tenggara",
    },
    iso: {
      qualityManagement: "Pengurusan Kualiti",
      environmentalManagement: "Pengurusan Alam Sekitar",
      occupationalHealthSafety: "Pengurusan Kesihatan & Keselamatan Pekerjaan",
      informationSecurity: "Sistem Pengurusan Keselamatan Maklumat",
      antiBribery: "Sistem Pengurusan Anti-Rasuah",
    },
  },
};
