export const SERVICES = [
  { slug: "back-pain", icon: "spine", title: "Back Pain", desc: "Targeted relief for chronic and acute back pain through manual therapy and corrective exercise." },
  { slug: "neck-pain", icon: "neck", title: "Neck Pain", desc: "Postural correction and mobilisation to ease neck stiffness, headaches, and desk-related strain." },
  { slug: "sports-injuries", icon: "activity", title: "Sports Injuries", desc: "Return-to-play rehabilitation for sprains, strains, and overuse injuries across every sport." },
  { slug: "sciatica", icon: "zap", title: "Sciatica", desc: "Decompression, nerve glides, and core strengthening to settle radiating leg pain." },
  { slug: "post-surgery", icon: "heart-pulse", title: "Post-Surgery Rehab", desc: "Structured recovery plans after orthopaedic and joint replacement surgery." },
  { slug: "joint-pain", icon: "bone", title: "Joint Pain", desc: "Evidence-based care for knee, shoulder, hip, and ankle pain — including arthritis." },
  { slug: "neuro-rehab", icon: "brain", title: "Neurological Rehab", desc: "Stroke, Parkinson's, and neuropathy rehabilitation to restore movement and confidence." },
  { slug: "pediatric", icon: "baby", title: "Pediatric Physio", desc: "Gentle, child-centred therapy for developmental delays, posture, and sports injuries." },
] as const;

export const TESTIMONIALS = [
  { name: "Anjali R.", condition: "Chronic Back Pain", quote: "After three years of pain, I finally have my life back. Doctor's calm, methodical approach made all the difference." },
  { name: "Suresh M.", condition: "Post-Knee Surgery", quote: "I was walking unaided in six weeks. The personalised plan and constant guidance gave me real confidence." },
  { name: "Priya K.", condition: "Sciatica", quote: "The pain that kept me awake for months is gone. Honest, experienced, and never rushed — exactly what I needed." },
  { name: "Rajesh D.", condition: "Frozen Shoulder", quote: "Range of motion fully restored. Worth every visit. I send my whole family here now." },
  { name: "Meena S.", condition: "Sports Injury", quote: "Back on the badminton court stronger than before. Knowledgeable and genuinely caring." },
  { name: "Vikram J.", condition: "Home Visit — Stroke Rehab", quote: "Doctor came home every week. My father is now walking again. Forever grateful." },
];

export const CONDITIONS = [
  { slug: "back-pain", title: "Back Pain Treatment", what: "Persistent or sudden pain in the lower, mid, or upper back caused by posture, strain, disc issues, or sedentary lifestyle.", how: ["Detailed posture and movement assessment", "Manual therapy and soft-tissue release", "Targeted core and mobility exercises", "Ergonomic guidance for home and work"], recovery: "Most patients report 60–80% improvement within 6–8 sessions." },
  { slug: "neck-pain", title: "Neck Pain Treatment", what: "Cervical stiffness, headaches, and radiating arm discomfort — often related to desk work and screen time.", how: ["Cervical mobilisation and traction", "Postural retraining", "Deep neck flexor strengthening", "Workstation ergonomic review"], recovery: "Noticeable relief in 3–5 sessions; lasting change in 4–6 weeks." },
  { slug: "sciatica", title: "Sciatica Treatment", what: "Radiating pain from the lower back through the buttock and down the leg, caused by sciatic nerve irritation.", how: ["Nerve mobilisation techniques", "Disc decompression strategies", "Core stabilisation programme", "Lifestyle and activity modification"], recovery: "Most acute cases resolve within 4–8 weeks of consistent therapy." },
  { slug: "frozen-shoulder", title: "Frozen Shoulder", what: "Progressive shoulder stiffness and pain that limits everyday tasks like reaching, dressing, and sleeping.", how: ["Joint mobilisation and capsular stretching", "Pain-modulating modalities", "Progressive strengthening", "Sleep posture coaching"], recovery: "Full range typically restored over 8–16 weeks depending on stage." },
  { slug: "post-surgery", title: "Post-Surgery Rehabilitation", what: "Structured recovery after orthopaedic procedures including knee/hip replacement, ACL repair, and spine surgery.", how: ["Surgeon-aligned recovery protocol", "Gait re-training and balance work", "Strength progression milestones", "Return-to-activity testing"], recovery: "Phased over 6–16 weeks based on procedure and patient goals." },
  { slug: "sports-injury", title: "Sports Injury Rehabilitation", what: "Sprains, strains, tendinopathies, and overuse injuries — for amateur and serious athletes.", how: ["Sport-specific movement screen", "Manual therapy and taping", "Progressive loading programme", "Return-to-sport criteria testing"], recovery: "Typical timelines from 2 weeks (minor) to 12 weeks (significant)." },
  { slug: "joint-pain", title: "Knee & Joint Pain", what: "Osteoarthritis, meniscal issues, and general wear-and-tear pain in knees, hips, and shoulders.", how: ["Joint protection education", "Targeted strengthening", "Manual therapy", "Activity pacing strategies"], recovery: "Significant function gains within 6–10 weeks for most patients." },
  { slug: "neuro-rehab", title: "Neurological Rehabilitation", what: "Movement recovery after stroke, in Parkinson's, peripheral neuropathy, and similar conditions.", how: ["Functional movement re-education", "Balance and fall-prevention training", "Caregiver education", "Long-term home programme"], recovery: "Highly individual — measurable progress in most patients within 8–12 weeks." },
  { slug: "pediatric", title: "Pediatric Physiotherapy", what: "Therapy for children with developmental delays, posture concerns, gait issues, or sports injuries.", how: ["Play-based assessment", "Family-involved home programme", "Postural and motor skill development", "Co-ordination with paediatricians"], recovery: "Progress reviewed at 4-week intervals with milestone tracking." },
  { slug: "home-visit", title: "Home Visit Physiotherapy", what: "Full physiotherapy care delivered at your home — for post-surgery, elderly, and neurological patients.", how: ["Pre-visit phone consultation", "Home safety and equipment review", "Same evidence-based protocols as clinic", "Family training included"], recovery: "Same outcomes as clinic care, with the comfort of recovering at home." },
];

export const FAQS = [
  { q: "How long is a typical physiotherapy session?", a: "Most sessions run 45–60 minutes. Your first assessment is 60–75 minutes so we can build a complete picture of your condition." },
  { q: "Do I need a doctor's referral?", a: "No referral required. You can book directly. If you have a referral or recent scans, please bring them." },
  { q: "Do you offer home visit physiotherapy?", a: "Yes — across Kandivali, Borivali, Malad, and Goregaon. Please call to confirm scheduling and area coverage." },
  { q: "How many sessions will I need?", a: "It varies by condition. Most patients see meaningful progress in 6–10 sessions; we review goals every 4 weeks." },
  { q: "What should I wear to a session?", a: "Comfortable, loose-fitting clothing that gives easy access to the area being treated. Shorts or athletic wear work well for lower-body issues." },
  { q: "Do you accept insurance?", a: "We provide detailed receipts you can submit for reimbursement. We don't bill insurers directly at this time." },
  { q: "How soon will I feel improvement?", a: "Many patients feel some relief after the first session. Lasting change typically follows a few weeks of consistent treatment." },
  { q: "Is parking available?", a: "Yes — street parking is available outside the clinic, and there is paid parking next door." },
  { q: "Can I book online?", a: "Use the appointment form on any page, or message us on WhatsApp. We'll call back to confirm a time." },
  { q: "What payment methods are accepted?", a: "Cash, UPI, all major cards, and net banking." },
  { q: "Do you treat children?", a: "Yes — we offer paediatric physiotherapy for developmental delays, posture, and sports injuries." },
  { q: "What conditions do you commonly treat?", a: "Back and neck pain, sciatica, frozen shoulder, sports injuries, post-surgery rehab, knee and joint pain, neurological conditions, and paediatric concerns." },
  { q: "Are weekend appointments available?", a: "Saturdays are full clinic days. Sundays are reserved for emergencies and home visits by prior arrangement." },
  { q: "How experienced is the practitioner?", a: "36 years of full-time clinical practice with over 5,000 patients treated across Mumbai." },
  { q: "Will I see the same physiotherapist every visit?", a: "Yes — continuity of care is core to how we work. You will see Dr. [Name] at every session." },
];

export const BLOG = [
  { slug: "back-pain-doesnt-go-away", category: "Back Pain", title: "Why Back Pain Doesn't Go Away on Its Own — And What to Do About It", excerpt: "The myth of 'rest and it'll heal' costs many patients years of unnecessary pain. Here's what really works." },
  { slug: "what-is-sciatica", category: "Sciatica", title: "What Is Sciatica? Causes, Symptoms, and Physiotherapy Treatment", excerpt: "A plain-language guide to the most misunderstood nerve pain, and the proven steps to relief." },
  { slug: "post-surgery-rehab", category: "Rehabilitation", title: "Post-Surgery Rehabilitation: What to Expect and Why Physiotherapy Matters", excerpt: "Surgery is only the first step. Your recovery is decided in the weeks that follow." },
  { slug: "frozen-shoulder-recovery", category: "Joint Pain", title: "Frozen Shoulder: How Long Does Recovery Take?", excerpt: "A realistic timeline, what the three stages feel like, and how to shorten each one." },
  { slug: "home-vs-clinic", category: "General Wellness", title: "Home Physiotherapy vs Clinic Visits — Which Is Right for You?", excerpt: "Both deliver real results. Choosing well depends on your condition, mobility, and goals." },
  { slug: "posture-at-desk", category: "Posture", title: "The Five Posture Mistakes Quietly Hurting Your Spine", excerpt: "Small daily habits that, over years, become the back pain you can't explain." },
];
