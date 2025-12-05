export const data = {
    basic: {
        firstName: "Munawar",
        lastName: "T",
        title: "Flutter Developer (AI & ML Integration)",
        age: 27,
        email: "devmunawar@gmail.com",
        phone: "+91 9539834484",
        address: "Kerala, India",
        photos: [
            "/images/photos/new-profile.jpg",
            "/images/photos/black-white.png",
            "/images/photos/colored.png",
            "/images/photos/mobile.png"
        ],
        resume: "https://drive.google.com/file/d/1g91P2S6nvJERjfzvpfUlGKciqQBCkxkg/view?usp=sharing"
    },
    socials: [
        {
            icon: "fa-brands fa-linkedin",
            url: "https://linkedin.com/in/devmunawar/"
        },
        {
            icon: "fa-solid fa-globe",
            url: "https://munucodes.in"
        },
        {
            icon: "fa-brands fa-github",
            url: "https://github.com/munawr/"
        },
        {
            icon: "fa-brands fa-square-facebook",
            url: "https://www.facebook.com/munutm/"
        },
        {
            icon: "fa-brands fa-x-twitter",
            url: "https://x.com/munawr23/"
        },
        {
            icon: "fa-brands fa-instagram",
            url: "https://www.instagram.com/mun.a.war/"
        }
    ],
    about: {
        heading: "Flutter Developer (AI & ML Integration)",
        description: "A results-driven Flutter Developer with over 4 years of experience specializing in building intelligent, high-performance, cross-platform applications. Expert in architecting scalable solutions (Clean Architecture, MVVM) and integrating on-device and cloud-based AI to deliver cutting-edge features. Proven ability to accelerate the development lifecycle through AI-assisted coding and robust CI/CD pipelines, delivering enterprise-grade solutions from concept to deployment.",
        tech: [
            "Dart",
            "Flutter SDK",
            "Python",
            "Kotlin",
            "Swift",
            "MVVM",
            "Provider",
            "GetX",
            "BLoC/Cubit",
            "Riverpod",
            "GoRouter",
            "TensorFlow Lite (On-Device Vision)",
            "Google AI / Gemini API",
            "Firebase ML Kit",
            "SQLite (Floor)",
            "Hive",
            "SharedPreferences",
            "REST APIs",
            "GraphQL",
            "Dio",
            "http",
            "Firebase (Firestore, Auth, FCM, Crashlytics, Storage)",
            "OneSignal",
            "Unit/Widget Testing",
            "Mockito",
            "Git",
            "GitHub Actions",
            "Codemagic",
            "Vercel",
            "Android Studio",
            "VS Code",
            "Xcode",
            "Postman",
            "Jira"
        ],
        works: []
    },
    experience: [
        {
            company: "Fortelogic Software Pvt Ltd",
            location: "Dubai, UAE",
            role: "Flutter Developer",
            period: "Dec 2024 – Present",
            description: [
                "Architected and led the development of ANRML, a cross-platform industrial maintenance app, using Clean Architecture for scalability and maintainability.",
                "Engineered a resilient offline-first data strategy using SQLite (Floor) and network request handling with HTTP interceptors to ensure full functionality in low-connectivity zones.",
                "Integrated hardware-level features including native NFC tag reading, QR/Barcode scanning, and image compression to streamline on-site industrial workflows.",
                "Developed a dynamic Checklist App for equipment inspection, implementing secure role-based access control (RBAC) and real-time status updates via Firebase Cloud Messaging (FCM).",
                "Modernized a legacy Java Android app by upgrading and refactoring the project code."
            ]
        },
        {
            company: "PMR Infos Pvt Ltd",
            location: "Malappuram, India",
            role: "Flutter Developer",
            period: "Oct 2022 – Dec 2024",
            description: [
                "Owned the complete development lifecycle for the Vehicify fleet management app, from concept to deployment, resulting in performance increase by leveraging Provider and Hive.",
                "Implemented live GPS tracking and routing by integrating Google Maps API and established a CI/CD pipeline with Codemagic for automated builds and deployments to the App Store and Play Store.",
                "Built the Restoboard financial dashboard, utilizing GoRouter for navigation and integrating FlChart and Syncfusion charts to visualize complex real-time financial data.",
                "Led the successful migration of the Gastroboard app from Ionic to Flutter, achieving a performance increase and enhancing code quality.",
                "Resolved critical hardware integration issues in the Vansales ERP app by migrating from a deprecated Bluetooth library to blue_thermal_printer, ensuring null-safety and stable receipt printing.",
                "Developed a seamless payment application with Razorpay integration, enabling secure in-app payments."
            ]
        },
        {
            company: "XC llp",
            location: "Calicut, India",
            role: "Flutter Developer Intern",
            period: "April 2021 – September 2021",
            description: [
                "Developed a real-time chat module for the Emtees App, implementing Firebase Realtime Database for instant messaging and integrating OneSignal for targeted push notifications, increasing user engagement.",
                "Translated complex Figma designs into responsive, pixel-perfect Flutter widgets for the Wise Learning App, leading to a more intuitive and visually appealing user experience."
            ]
        }
    ],
    education: [
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "PRIEST University, India",
            year: "2020"
        },
        {
            degree: "Higher Secondary Education (CBSE)",
            institution: "DHIS, Al Ain, UAE",
            year: "2016"
        }
    ],
    languages: [
        "English (Fluent)",
        "Malayalam (Native)",
        "Tamil (Proficient)",
        "Hindi (Proficient)"
    ],
    services: [
        {
            icon: "/images/services/app.png",
            title: "Mobile Development"
        },
        {
            icon: "/images/services/ui.png",
            title: "Web Development"
        },
        {
            icon: "/images/services/rapid.png",
            title: "Performance Optimization"
        },
        {
            icon: "/images/services/ui.png",
            title: "UI/UX Design"
        },
        {
            icon: "/images/services/open.png",
            title: "Open Source - GitHub"
        }
    ],
    projects: [
        {
            slug: "intellifleet",
            banner: "/images/projects/anmrlB.png",
            icon: "/images/projects/anmrlchecklist_icon.webp",
            title: "IntelliFleet - AI-Powered Fleet & Maintenance Management",
            description: "An enterprise-grade, cross-platform application designed to revolutionize fleet management using AI-driven insights and workflow automation.",
            longDescription: "IntelliFleet is a cutting-edge solution that bridges the gap between traditional fleet management and modern AI capabilities. It empowers organizations to predict maintenance needs, automate workflows, and ensure driver safety through real-time monitoring. The application was built with a focus on offline-first architecture to support operations in remote areas.",
            techStack: ["Flutter", "TensorFlow Lite", "Gemini API", "Riverpod", "Floor (SQLite)", "Firebase"],
            features: [
                "AI-Powered Damage Detection using on-device ML",
                "Conversational AI Assistant for maintenance queries",
                "Resilient Offline-First Architecture with background sync",
                "Real-time Driver Behavior Monitoring"
            ],
            challenges: "Implementing complex ML models on low-end devices while maintaining 60fps performance was a significant challenge. We optimized the TensorFlow Lite models and used isolate-based background processing to ensure the UI remained responsive.",
            link: "",
            tags: ["Flutter", "TensorFlow Lite", "Gemini API", "Riverpod", "Floor", "Firebase"]
        },
        {
            slug: "anrml-cmms",
            banner: "/images/projects/anmrlB.png",
            icon: "/images/projects/anmrlchecklist_icon.webp",
            title: "ANRML CMMS",
            description: "CMMS used to schedule periodic & conditional maintenances, facilitate workflow, generate maintenance history, and derive maintenance KPIs.",
            longDescription: "ANRML CMMS is a comprehensive Computerized Maintenance Management System designed to streamline industrial maintenance operations. It allows facility managers to schedule preventive maintenance, track work orders, and analyze equipment performance through detailed KPIs. The system significantly reduces downtime and extends asset lifespan.",
            techStack: ["Flutter", "Firebase", "Google Maps API", "Provider"],
            features: [
                "Automated Preventive Maintenance Scheduling",
                "Work Order Management & Tracking",
                "Asset Lifecycle Management",
                "KPI Dashboard & Reporting"
            ],
            challenges: "Designing a user interface that could handle complex industrial workflows without overwhelming the user required multiple iterations of user testing and refinement.",
            link: "https://play.google.com/store/apps/details?id=com.anrml&hl=en_IN",
            tags: ["Flutter", "CMMS", "Industrial"]
        },
        {
            slug: "vehicify",
            banner: "/images/projects/vehicifyB.png",
            icon: "/images/projects/vehicify.png",
            title: "Vehicify",
            description: "A fleet and driver management system, optimized for iOS, Android, and Windows platforms, with Google Maps and real-time notifications.",
            longDescription: "Vehicify is a multi-platform fleet management solution that provides real-time visibility into fleet operations. It enables businesses to track vehicles, manage driver assignments, and monitor fuel consumption. The app's cross-platform nature ensures that fleet managers can stay connected from any device.",
            techStack: ["Flutter", "Google Maps API", "Hive", "Provider"],
            features: [
                "Real-time GPS Vehicle Tracking",
                "Driver Performance Scoring",
                "Fuel Management & Analytics",
                "Cross-Platform Support (iOS, Android, Windows)"
            ],
            challenges: "Ensuring consistent map performance and notification delivery across three different operating systems required platform-specific optimizations.",
            link: "https://play.google.com/store/apps/developer?id=PMR+INFOS&hl=en_IN",
            tags: ["Flutter", "Fleet Management", "Maps"]
        },
        {
            slug: "brickly",
            banner: "/images/projects/bricklyB.png",
            icon: "/images/projects/brickly.png",
            title: "Brickly",
            description: "A comprehensive construction management and accounts automation system with real-time tracking and route optimization.",
            longDescription: "Brickly is tailored for the construction industry, integrating project management with financial accounting. It helps construction firms track material deliveries, manage site expenses, and optimize vehicle routes for material transport. The automation of accounts reduces manual errors and saves significant administrative time.",
            techStack: ["Flutter", "Rest API", "Google Maps", "GetX"],
            features: [
                "Construction Site Material Tracking",
                "Automated Accounting & Invoicing",
                "Route Optimization for Logistics",
                "Real-time Site Progress Updates"
            ],
            challenges: "Integrating complex accounting logic within a mobile-first interface was a key challenge, solved by creating a modular and scalable state management architecture.",
            link: "https://play.google.com/store/apps/details?id=com.pmr.bricklyApp&hl=en_IN",
            tags: ["Flutter", "Construction", "ERP"]
        },
        {
            slug: "vansales",
            banner: "/images/projects/vansalesB.png",
            icon: "/images/projects/vansales.png",
            title: "Vansales Application System",
            description: "An ERP device app with seamless Bluetooth bill printing, optimized for stability and business operations.",
            longDescription: "The Vansales Application System is a robust ERP extension for field sales representatives. It allows them to manage inventory, process orders, and print invoices on the go using Bluetooth thermal printers. The app is designed for high stability to prevent data loss during critical sales transactions.",
            techStack: ["Flutter", "Bluetooth Thermal Printer", "SQLite", "Provider"],
            features: [
                "Offline Order Processing",
                "Bluetooth Thermal Printing Integration",
                "Inventory Management",
                "Daily Sales Reporting"
            ],
            challenges: "Migrating from a deprecated Bluetooth library to a modern, null-safe alternative while maintaining compatibility with various printer models was a critical task.",
            link: "https://play.google.com/store/apps/details?id=com.vansalesapp.next&hl=en_IN",
            tags: ["Flutter", "ERP", "Bluetooth"]
        },
        {
            slug: "gastroboard",
            banner: "/images/projects/gastroboardB.png",
            icon: "/images/projects/gastroboard.png",
            title: "Gastroboard",
            description: "An advanced restaurant management system migrated from Ionic to Flutter, with financial and operational analytics.",
            longDescription: "Gastroboard is a specialized analytics platform for the restaurant industry. It aggregates data from POS systems to provide actionable insights on sales trends, menu performance, and staff efficiency. The migration from Ionic to Flutter resulted in a 40% performance improvement.",
            techStack: ["Flutter", "FlChart", "Rest API", "Bloc"],
            features: [
                "Real-time Sales Analytics",
                "Menu Performance Tracking",
                "Staff Efficiency Reports",
                "Multi-Branch Management"
            ],
            challenges: "Replicating the complex chart interactions and data visualizations from the web-based Ionic app to a native Flutter experience required custom chart implementations.",
            link: "https://drive.google.com/drive/u/0/folders/19-RpKtffMsAHI3oWYViCSusde8NXN45O",
            tags: ["Flutter", "Analytics", "Migration"]
        },
        {
            slug: "restoboard",
            banner: "/images/projects/restoboardB.png",
            icon: "/images/projects/restoboard.png",
            title: "Restoboard",
            description: "An advanced financial management dashboard built for real-time revenue, sales, and order tracking using Flutter.",
            longDescription: "Restoboard focuses on the financial health of restaurant businesses. It offers a real-time dashboard for tracking revenue streams, expense categorization, and profit margins. The app helps owners make data-driven financial decisions instantly.",
            techStack: ["Flutter", "Syncfusion Charts", "Firebase", "GetX"],
            features: [
                "Real-time Revenue Dashboard",
                "Expense Tracking & Categorization",
                "Profit & Loss Analysis",
                "Secure Data Encryption"
            ],
            challenges: "Handling large datasets for real-time financial reporting without UI lag was achieved through efficient data pagination and local caching strategies.",
            link: "https://drive.google.com/drive/folders/1PULGhvqrf1Yi7qFuQwTpz3snbyAJGNMl",
            tags: ["Flutter", "Finance", "Dashboard"]
        },
        {
            slug: "wise-learning",
            banner: "/images/projects/wiselearningB.png",
            icon: "/images/projects/wiselearning.png",
            title: "Wise Learning App",
            description: "Led a major UI overhaul to improve navigation and consistency, resulting in an engaging user experience.",
            longDescription: "The Wise Learning App is an educational platform designed to make learning interactive and accessible. The UI overhaul focused on simplifying navigation for younger users and creating a more visually engaging interface with consistent design patterns.",
            techStack: ["Flutter", "Figma", "Riverpod"],
            features: [
                "Interactive Video Lessons",
                "Gamified Quizzes",
                "Progress Tracking",
                "Intuitive UI/UX Design"
            ],
            challenges: "Translating complex Figma designs into pixel-perfect Flutter widgets while ensuring responsiveness across various tablet and phone sizes.",
            link: "https://play.google.com/store/apps/details?id=com.innerix.wiselearning&hl=en_IN&pli=1",
            tags: ["Flutter", "EdTech", "UI/UX"]
        },
        {
            slug: "checklist-app",
            banner: "/images/projects/checklist.png",
            icon: "/images/projects/anmrlchecklist_icon.webp",
            title: "Checklist App",
            description: "Production-ready checklist/inspections app with offline sync, role-based permissions, and real-time updates.",
            longDescription: "This Checklist App is a versatile tool for conducting inspections and audits. It supports custom checklist creation, photo evidence attachment, and digital signatures. The offline sync capability ensures that field workers can complete inspections even without internet access.",
            techStack: ["Flutter", "SQLite", "Firebase FCM", "Bloc"],
            features: [
                "Customizable Inspection Checklists",
                "Offline Data Synchronization",
                "Role-Based Access Control",
                "Photo Attachments & Annotations"
            ],
            challenges: "Implementing a robust two-way sync mechanism between the local SQLite database and the remote server to handle conflict resolution.",
            link: "",
            tags: ["Flutter", "Productivity", "Offline-First"]
        }
    ],
    contact: [
        {
            icon: "fa-duotone fa-solid fa-house",
            title: "Location",
            description: "Kerala, India",
            action: "https://maps.app.goo.gl/1iPVo2nqXfTbyYhh6"
        },
        {
            icon: "fa-duotone fa-solid fa-phone",
            title: "Phone",
            description: "+91 9539834484",
            action: "https://wa.me/919539834484"
        },
        {
            icon: "fa-duotone fa-solid fa-envelope",
            title: "Email",
            description: "devmunawar@gmail.com",
            action: "mailto:devmunawar@gmail.com"
        }
    ]
};
