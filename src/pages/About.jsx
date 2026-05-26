import React from 'react';
import { Star, Send } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import FadeInSection from '../components/common/FadeInSection';

const About = () => {
  return (
    <div className="bg-page-bg pb-24">
      <div className="bg-primary/5 py-20 px-4 border-b border-border">
        <div className="container max-w-4xl text-center">
          <SectionHeading 
            title="About Rudreksh Dental" 
            subtitle="Our Story"
            className="mb-8"
          />
        </div>
      </div>

      <div className="container mt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeInSection>
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Malkesh Pankhaniya" 
                className="w-full h-full object-cover"
              />
            </div>
          </FadeInSection>
          
          <FadeInSection delay={0.2} className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold font-heading text-text-primary mb-4">
                Dr. Malkesh Pankhaniya <span className="text-xl font-medium text-text-muted">BDS</span>
              </h2>
              <div className="h-1 w-20 bg-primary/30 rounded-full mb-6"></div>
              
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  As the driving force behind Rudreksh Dental Clinic, Dr. Malkesh has dedicated his career to changing the way people experience dentistry. With a Bachelor of Dental Surgery degree and numerous advanced certifications, he specializes in creating personalized treatment plans that prioritize long-term oral health over quick fixes.
                </p>
                <p>
                  "My philosophy is simple: Treat every patient like family. I understand that visiting the dentist can be anxiety-inducing for many. That's why we've invested heavily in painless technologies and created an environment that feels more like a lounge than a clinic."
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-border card-shadow space-y-6">
              <h3 className="text-xl font-bold font-heading text-primary border-b border-border pb-4">Our Core Values</h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                    <span className="text-accent">01.</span> Transparency
                  </h4>
                  <p className="text-sm text-text-secondary">Clear communication about treatments, options, and pricing before we begin.</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                    <span className="text-accent">02.</span> Innovation
                  </h4>
                  <p className="text-sm text-text-secondary">Constantly upgrading our skills and technology to offer the best care possible.</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                    <span className="text-accent">03.</span> Compassion
                  </h4>
                  <p className="text-sm text-text-secondary">A gentle, empathetic approach to managing dental anxiety and pain.</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                    <span className="text-accent">04.</span> Excellence
                  </h4>
                  <p className="text-sm text-text-secondary">Refusing to cut corners, using only premium materials for all restorations.</p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border my-16"></div>

        {/* New Added Content Grid (Text left, form right) */}
        <div className="grid lg:grid-cols-12 gap-12 items-start relative">
          
          <div className="lg:col-span-7 space-y-10">
            <FadeInSection>
              <h3 className="text-2xl font-bold font-heading text-primary mb-6">
                Philosophy in Dental Care
              </h3>
              <p className="text-text-secondary leading-relaxed pl-5 border-l-4 border-primary italic">
                “I believe dentistry is not just about fixing teeth — it's about restoring confidence and function. My philosophy is simple: treat every patient as I would my family, use intervention only when necessary, and always aim for healing that preserves natural tooth structure, reduces pain, and empowers people to live happily.”
              </p>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h3 className="text-2xl font-bold font-heading text-primary mb-6">
                Guiding Principles
              </h3>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></div>
                  <p><strong className="text-text-primary">Patient First, Procedure Second</strong> — Treatment is never the starting point; it is the right step only when truly needed.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></div>
                  <p><strong className="text-text-primary">Preserve Tooth, Preserve Health</strong> — My approach always aims to protect the natural biomechanics of the mouth.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></div>
                  <p><strong className="text-text-primary">Minimally Invasive, Maximally Effective</strong> — Less trauma, painless techniques, faster recovery, and better comfort.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></div>
                  <p><strong className="text-text-primary">Compassion with Precision</strong> — A balance of cutting-edge tech and human empathy.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></div>
                  <p><strong className="text-text-primary">Beyond the Operation</strong> — Long-term education and empowerment as part of the healing journey.</p>
                </li>
              </ul>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <h3 className="text-2xl font-bold font-heading text-primary mb-6">
                My Vision
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Building upon the legacy of excellence and enriched by global training, I strive to bridge traditional care with innovation. My vision is to advance dental care by combining minimally invasive procedures, digital dentistry, and evidence-based medicine with human-centered compassion. I believe oral care is not just about intervention, but about guiding patients through a holistic journey toward absolute health, confidence, and freedom.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <h3 className="text-2xl font-bold font-heading text-primary mb-6">
                Qualifications & Academics
              </h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <span>B.D.S. from reputed Dental College & Hospital, India</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <span>Certification in Advanced Rotary Endodontics (Painless RCT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <span>Experienced in Digital Smile Designing for enhanced aesthetics</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <span>Published papers and presentations in national dental conferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                  <span>Actively involved in training and continuous education programs</span>
                </li>
              </ul>
            </FadeInSection>
          </div>

          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="sticky top-28">
              <FadeInSection delay={0.4}>
                <div className="bg-white rounded-3xl shadow-xl border border-border p-8 card-shadow overflow-hidden relative">
                  
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10"></div>
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold font-heading text-text-primary mb-2">
                      Your feedback matters
                    </h3>
                    <p className="text-sm text-text-secondary font-medium">
                      Rating 5 Star, Add your comments below.
                    </p>
                    
                    <div className="flex justify-center gap-2 mt-5 text-slate-300">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={32} className="hover:text-accent cursor-pointer transition-transform hover:scale-110" />
                      ))}
                    </div>
                  </div>

                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-primary ml-1">Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3.5 text-sm focus-ring transition-shadow"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-primary ml-1">Number</label>
                      <input 
                        type="tel" 
                        className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3.5 text-sm focus-ring transition-shadow"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-text-primary ml-1">Message</label>
                      <textarea 
                        rows="4"
                        className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3.5 text-sm focus-ring transition-shadow resize-none"
                        placeholder="Tell us about your experience..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg focus-ring group mt-4"
                    >
                      Submit
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </FadeInSection>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
