export const youtubePlaylists = [
  {
    id: "PLJyVyGSmn1nU",
    title: "தேவனுடைய சர்வாயுதவர்கம்",
    count: 4,
    videos: [
      { id: "vid1_1", title: "Introduction to Spiritual Armour" },
      { id: "vid1_2", title: "The Helmet of Salvation" },
      { id: "vid1_3", title: "The Breastplate of Righteousness" },
      { id: "vid1_4", title: "The Sword of the Spirit" },
    ],
  },
  {
    id: "PLGXF149opUurXUr-x8zN4hPeXll-e9xSE",
    title: "Biblical Parenting | பிள்ளை வளர்ப்ப",
    count: 8,
    videos: [
      { id: "vid2_1", title: "Foundation of Faith in Home" },
      { id: "vid2_2", title: "Teaching Children to Pray" },
      { id: "vid2_3", title: "Discipline with Love" },
      { id: "vid2_4", title: "The Role of Parents" },
      { id: "vid2_5", title: "Biblical Guidance" },
      { id: "vid2_6", title: "Nurturing the Soul" },
      { id: "vid2_7", title: "Family Worship" },
      { id: "vid2_8", title: "Leading by Example" },
    ],
  },
  {
    id: "PLGXF149opUuqumyfTmAICJAAaL4thlkcq",
    title: "Classic sermons",
    count: 25,
    videos: [
      { id: "vid3_1", title: "The Eternal Promise" },
      { id: "vid3_2", title: "Faith Over Fear" },
      { id: "vid3_3", title: "Walking in Truth" },
      // ... Placeholders for the remaining 22 videos
      ...Array.from({ length: 22 }, (_, i) => ({ id: `vid3_${i + 4}`, title: `Classic Sermon Part ${i + 4}` })),
    ],
  },
  {
    id: "PLGXF149opUurzzObg60j1Thtvzv1BOoX9",
    title: "Tamil worship by Ps.Dinesh kumar",
    count: 1,
    videos: [
      { id: "vid4_1", title: "Powerful Tamil Worship Session" },
    ],
  },
  {
    id: "PLGXF149opUupVt18dod19jna4aQa9OGAq",
    title: "Tamil Full sermon by Ps.Dinesh kumar",
    count: 23,
    videos: [
      { id: "vid5_1", title: "Sermon on Divine Grace" },
      { id: "vid5_2", title: "The Path of Righteousness" },
      { id: "vid5_3", title: "Strength in Trials" },
      // ... Placeholders for the remaining 20 videos
      ...Array.from({ length: 20 }, (_, i) => ({ id: `vid5_${i + 4}`, title: `Full Sermon Part ${i + 4}` })),
    ],
  },
  {
    id: "PLGXF149opUuraOIGm1c6W_c4pcHiTBhph",
    title: "Ask Ps Dinesh Kumar",
    count: 15,
    videos: [
      { id: "vid6_1", title: "Q&A: Faith and Science" },
      { id: "vid6_2", title: "Q&A: Family Struggles" },
      { id: "vid6_3", title: "Q&A: Spiritual Growth" },
      // ... Placeholders for the remaining 12 videos
      ...Array.from({ length: 12 }, (_, i) => ({ id: `vid6_${i + 4}`, title: `Q&A Session Part ${i + 4}` })),
    ],
  },
  {
    id: "PLGXF149opUuoET2CKxM9xRO7pOe3ZbjMl",
    title: "Devotional Short clips",
    count: 7,
    videos: [
      { id: "vid7_1", title: "Morning Prayer Clip" },
      { id: "vid7_2", title: "Faith Minute 1" },
      { id: "vid7_3", title: "Faith Minute 2" },
      { id: "vid7_4", title: "Daily Devotional 1" },
      { id: "vid7_5", title: "Daily Devotional 2" },
      { id: "vid7_6", title: "Daily Devotional 3" },
      { id: "vid7_7", title: "Daily Devotional 4" },
    ],
  },
  {
    id: "PLGXF149opUupPvWhc3tTiMiflBfcxz4WV",
    title: "Tamil Bible Study and Q & A",
    count: 27,
    videos: [
      { id: "vid8_1", title: "Genesis Deep Dive" },
      { id: "vid8_2", title: "Exodus Insights" },
      { id: "vid8_3", title: "Leviticus Study" },
      // ... Placeholders for the remaining 24 videos
      ...Array.from({ length: 24 }, (_, i) => ({ id: `vid8_${i + 4}`, title: `Bible Study Part ${i + 4}` })),
    ],
  },
];

export const programs = [
  {
    img: "/assets/images/Education.webp",
    title: "Education",
    subtitle: "Vocations Support",
    description:
      "Support the training and formation of future priests, religious sisters, and brothers through a donation campaign that helps cover the costs of their education and living expenses.",
  },
  {
    img: "/assets/images/Deveopment.webp",
    title: "Development",
    subtitle: "Church Renovation Fund",
    description:
      " Raise money for the renovation and maintenance of Catholic churches, cathedrals, and other religious buildings, preserving these sacred spaces for future generations.",
  },
  {
    img: "/assets/images/Service.webp",
    title: "Emergency",
    subtitle: "Crisis Relief Fund",
    description:
      "Provide emergency relief and support to communities affected by natural disasters, conflicts, or other crises, in partnership with Catholic relief organizations.",
  },
  {
    img: "/assets/images/social.webp",
    title: "Healthcare",
    subtitle: "Social Justice Initiatives",
    description:
      " Raise funds for Catholic organizations that work to promote social justice, alleviate poverty, and support marginalized communities, in line with Catholic social teaching.",
  },
];

export const events = [
  {
    title: "Virtual Bible Study Series",
    location: "Online",
    date: "September 30, 2026",
    schedule: [
      {
        time: "07:00 pm",
        img: "https://images.unsplash.com/photo-1507434965995-757f60374d7b?auto=format&fit=crop&q=80&w=800",
        desc: "Intro and Overview of the Book of Genesis",
      },
      {
        time: "08:00 pm",
        img: "https://images.unsplash.com/photo-1504052433848-17a279777414?auto=format&fit=crop&q=80&w=800",
        desc: "Group Discussions and Reflections",
      },
      {
        time: "10:00 pm",
        img: "https://images.unsplash.com/photo-1438761681033-6",
        desc: "Intro and Overview of the Book of Genesis",
      },
    ],
  },
  {
    title: "Family Enrichment Program",
    location: "Worship Center",
    date: "March 15, 2024",
    schedule: [
      {
        time: "08:00 am",
        img: "https://images.unsplash.com/photo-1511895497565-cb9689a97f75?auto=format&fit=crop&q=80&w=800",
        desc: "Importance of the Family in the Church",
      },
      {
        time: "10:00 am",
        img: "https://images.unsplash.com/photo-1543269865-cbf427efad32?auto=format&fit=crop&q=80&w=800",
        desc: "Importance of the Family in the Church",
      },
      {
        time: "03:00 pm",
        img: "https://images.unsplash.com/photo-1516627145494-738778269100?auto=format&fit=crop&q=80&w=800",
        desc: "Importance of the Family in the Church",
      },
    ],
  },
  {
    title: "Catholic Social Teaching Seminar",
    location: "Worship Center",
    date: "February 19, 2024",
    schedule: [
      {
        time: "10:00 am",
        img: "https://images.unsplash.com/photo-1529070757047-8a5431644308?auto=format&fit=crop&q=80&w=800",
        desc: "Importance of Youth Ministry in the Church",
      },
      {
        time: "01:00 pm",
        img: "https://images.unsplash.com/photo-1509062522246-3755977927a7?auto=format&fit=crop&q=80&w=800",
        desc: "Sharing of Best Practices",
      },
      {
        time: "02:00 pm",
        img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
        desc: "Importance of Youth Ministry in the Church",
      },
    ],
  },
];

export const missionImage = [
  "/assets/images/heroimage1.webp",
  "/assets/images/heroimage2.webp",
  "/assets/images/heroimage3.webp",
];

export const sermons = [
  {
    id: "S6NfN9vC0oY",
    title: "The Power of Faith in Modern Life",
    speaker: "Pr. Dinesh Kumar",
    date: "Recent",
    description: "Discover how to maintain a strong spiritual foundation in a rapidly changing world.",
    youtubeId: "S6NfN9vC0oY",
    img: "https://img.youtube.com/vi/S6NfN9vC0oY/maxresdefault.jpg",
    isFeatured: true,
  },
  {
    id: "lP7uW9vT6H0",
    title: "Understanding Divine Grace",
    speaker: "Pr. Dinesh Kumar",
    date: "Recent",
    description: "An exploration of God's unconditional love and how it transforms our identity.",
    youtubeId: "lP7uW9vT6H0",
    img: "https://img.youtube.com/vi/lP7uW9vT6H0/maxresdefault.jpg",
    isFeatured: false,
  },
  {
    id: "mK8zP2qW1Xn",
    title: "Walking Through the Valley",
    speaker: "Pr. Dinesh Kumar",
    date: "Recent",
    description: "Finding hope and strength during the most challenging seasons of your life.",
    youtubeId: "mK8zP2qW1Xn",
    img: "https://img.youtube.com/vi/mK8zP2qW1Xn/maxresdefault.jpg",
    isFeatured: false,
  },
];

export const visitData = {
  serviceTimes: [
    { day: "Sunday", time: "9:00 AM & 11:00 AM", type: "Main Service" },
    { day: "Wednesday", time: "7:00 PM", type: "Mid-week Prayer" },
  ],
  faqs: [
    {
      question: "What should I wear?",
      answer: "Come as you are! While some prefer traditional attire, most of our congregation wears casual or business-casual clothing."
    },
    {
      question: "Where do I park?",
      answer: "We have a spacious parking lot available. Look for the 'Guest Parking' signs near the main entrance."
    },
    {
      question: "What about my children?",
      answer: "Our Kids' Ministry provides a safe and engaging environment for children from birth through 5th grade."
    },
  ]
};

export const leadership = [
  {
    name: "Pastor Michael Smith",
    role: "Lead Pastor",
    bio: "With over 20 years of ministry, Pastor Michael is passionate about bridging the gap between ancient scripture and modern living.",
    image: "/assets/images/pastor-michael.png",
  },
  {
    name: "Pastor Jane Smith",
    role: "Associate Pastor",
    bio: "Jane leads our mission to serve the marginalized, believing that faith is best expressed through radical acts of love.",
    image: "/assets/images/leadership2.png",
  },
  {
    name: "Elder John Doe",
    role: "Head of Outreach",
    bio: "John leads our mission initiatives, focusing on bringing the Gospel to the marginalized and underserved.",
    image: "/assets/images/leadership3.png",
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    memberSince: "2018",
    quote: "Finding this community was the turning point in my spiritual journey. I finally feel seen, heard, and loved exactly as I am.",
    image: "https://images.unsplash.com/photo-1438761681033-6",
  },
  {
    name: "David Chen",
    memberSince: "2021",
    quote: "The teachings here don't just stay in the sanctuary—they challenge me to be a better husband, father, and citizen.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43f",
  },
  {
    name: "Maria Garcia",
    memberSince: "2022",
    quote: "I've never felt more welcome. The sermons are challenging yet comforting, and the small groups provide a real sense of belonging.",
    image: "https://images.unsplash.com/photo-1494790108377-L",
  },
];

export const givingFunds = [
  { id: 'general', label: 'General Fund', description: 'Supports daily operations and ministry.' },
  { id: 'missions', label: 'Missions', description: 'Funding global outreach and relief.' },
  { id: 'building', label: 'Building Fund', description: 'Investing in our future sacred spaces.' },
];
