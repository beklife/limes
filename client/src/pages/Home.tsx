import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { EventCard } from "@/components/EventCard";
import { useEvents } from "@/hooks/use-events";
import { useMenuItems } from "@/hooks/use-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Mail, Instagram, ArrowDown, Calendar, Clock, Beer, Phone } from "lucide-react";

export default function Home() {
  const { data: events, isLoading: eventsLoading } = useEvents();
  const { data: menuItems, isLoading: menuLoading } = useMenuItems();
  const { t } = useLanguage();

  const drinks = menuItems?.filter(item => item.category === "drink") || [];
  const food = menuItems?.filter(item => item.category === "food") || [];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* crowd at concert */}
          <img 
            src="https://images.unsplash.com/photo-1574169208507-84376144848b?w=1920&q=80" 
            alt="Concert Crowd" 
            className="w-full h-full object-cover grayscale opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-[10rem] font-bold uppercase leading-none tracking-tighter text-white mb-6 drop-shadow-2xl font-display">
              Limes
              <span className="block text-primary -rotate-2 mt-2 md:-mt-8">Müllem</span>
            </h1>
            <p className="text-xl md:text-3xl font-mono uppercase tracking-widest text-secondary mb-12">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a
                href="#events"
                className="group relative px-8 py-4 bg-white text-black font-bold uppercase text-lg hover:bg-secondary transition-colors"
              >
                <span className="relative z-10">{t.hero.upcomingShows}</span>
                <div className="absolute inset-0 border-2 border-white translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform z-0" />
              </a>
              <a
                href="#location"
                className="px-8 py-4 border-2 border-white text-white font-bold uppercase text-lg hover:bg-white hover:text-black transition-colors"
              >
                {t.hero.visitUs}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* ABOUT */}
      <Section id="about" className="bg-neutral-900 border-y border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold uppercase text-primary">
              {t.about.title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              {t.about.description}
            </p>
            <ul className="space-y-4 font-mono text-lg">
              <li className="flex items-center gap-3">
                <span className="text-secondary">►</span> {t.about.features.music}
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">►</span> {t.about.features.food}
              </li>
              <li className="flex items-center gap-3">
                <span className="text-secondary">►</span> {t.about.features.values}
              </li>
            </ul>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-[500px] border-4 border-white/10 rotate-2 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80"
              alt={t.about.imageAlt}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </Section>

      {/* EVENTS */}
      <Section id="events" title={t.events.title} subtitle={t.events.subtitle}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsLoading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="h-96 bg-neutral-900 animate-pulse border border-white/5" />
            ))
          ) : events && events.length > 0 ? (
            events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 border border-dashed border-neutral-800">
              <Calendar className="w-16 h-16 mx-auto text-neutral-700 mb-4" />
              <h3 className="text-2xl font-bold uppercase text-neutral-500">{t.events.noEvents}</h3>
              <p className="text-neutral-600">{t.events.noEventsDesc}</p>
            </div>
          )}
        </div>

        <div className="mt-12 p-6 bg-red-900/20 border border-red-500/30 text-center">
          <p className="text-red-400 font-mono uppercase tracking-widest text-sm font-bold">
            {t.events.curfew}
          </p>
        </div>
      </Section>

      {/* MENU */}
      <Section id="menu" className="bg-neutral-950" title={t.menu.title}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Drinks */}
          <div>
            <div className="flex items-center gap-4 mb-8 border-b-2 border-secondary pb-4">
              <Beer className="w-8 h-8 text-secondary" />
              <h3 className="text-3xl font-bold uppercase">{t.menu.drinks}</h3>
            </div>
            <div className="space-y-6">
              {menuLoading ? (
                <div className="h-64 bg-neutral-900 animate-pulse" />
              ) : (
                drinks.map((item) => (
                  <div key={item.id} className="flex justify-between items-baseline group border-b border-white/5 pb-2 hover:border-secondary transition-colors">
                    <div>
                      <h4 className="font-bold text-lg uppercase">{item.name}</h4>
                      {item.description && <p className="text-sm text-neutral-500">{item.description}</p>}
                    </div>
                    <span className="font-mono text-secondary font-bold whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Food */}
          <div>
            <div className="flex items-center gap-4 mb-8 border-b-2 border-primary pb-4">
              <div className="text-3xl font-bold uppercase">{t.menu.food}</div>
            </div>
            <div className="space-y-6">
              {menuLoading ? (
                <div className="h-64 bg-neutral-900 animate-pulse" />
              ) : (
                food.map((item) => (
                  <div key={item.id} className="flex justify-between items-baseline group border-b border-white/5 pb-2 hover:border-primary transition-colors">
                    <div>
                      <h4 className="font-bold text-lg uppercase">{item.name}</h4>
                      {item.description && <p className="text-sm text-neutral-500">{item.description}</p>}
                    </div>
                    <span className="font-mono text-primary font-bold whitespace-nowrap ml-4">{item.price}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* HOURS & LOCATION */}
      <Section id="location" title={t.location.title}>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info Card */}
          <div className="bg-neutral-900 border border-neutral-800 p-8 md:p-12 relative overflow-hidden">
             {/* Diagonal stripe */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 -translate-y-16 translate-x-16 rotate-45 blur-2xl pointer-events-none" />

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold uppercase text-secondary mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6" /> {t.location.hours}
                </h3>
                <div className="space-y-4 font-mono">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>{t.location.hoursBar}</span>
                    <span>{t.location.hoursBarTime}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>{t.location.hoursCafe}</span>
                    <span>{t.location.hoursCafeTime}</span>
                  </div>
                  <div className="flex justify-between text-neutral-500 text-sm italic pt-2">
                    <span>{t.location.mondayClosed}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold uppercase text-secondary mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6" /> {t.location.address}
                </h3>
                <address className="not-italic text-lg mb-6 block">
                  Mülheimer Freiheit 150<br />
                  51063 Köln-Mülheim
                </address>

                <div className="space-y-2 text-sm text-neutral-400 font-mono">
                  <p>{t.location.transport}</p>
                  <p>{t.location.bus}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="h-[400px] lg:h-full w-full border border-neutral-700 overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Mülheimer+Freiheit+150,+51063+Köln&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Limes Müllem Location"
            />
          </div>
        </div>
      </Section>

      {/* COMMUNITY */}
      <section className="py-20 bg-primary text-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8 font-display">
            {t.community.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-lg font-bold">
            <div className="p-6 border-4 border-black rotate-1 bg-white hover:-rotate-1 transition-transform">
              {t.community.noRacism}
            </div>
            <div className="p-6 border-4 border-black -rotate-2 bg-white hover:rotate-1 transition-transform">
              {t.community.noSexism}
            </div>
            <div className="p-6 border-4 border-black rotate-1 bg-white hover:-rotate-2 transition-transform">
              {t.community.noNazis}
            </div>
          </div>
          <p className="mt-12 text-xl font-medium max-w-2xl mx-auto">
            {t.community.respectText}
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <Section id="gallery" title={t.gallery.title}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Images with different spans for a masonry feel */}
          <div className="col-span-2 row-span-2 overflow-hidden border border-neutral-800 group relative">
            <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80" alt={t.gallery.imageAlts.concert} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-bold uppercase text-white tracking-widest">{t.gallery.liveAction}</div>
          </div>

          <div className="col-span-1 row-span-1 overflow-hidden border border-neutral-800 group relative">
            <img src="https://images.unsplash.com/photo-1534158914592-062992fbe900?w=400&q=80" alt={t.gallery.imageAlts.kicker} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>

          <div className="col-span-1 row-span-2 overflow-hidden border border-neutral-800 group relative">
            <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80" alt={t.gallery.imageAlts.guitarist} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>

          <div className="col-span-1 row-span-1 overflow-hidden border border-neutral-800 group relative">
            <img src="https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?w=400&q=80" alt={t.gallery.imageAlts.drinks} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>

          <div className="col-span-2 row-span-1 overflow-hidden border border-neutral-800 group relative">
            <img src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80" alt={t.gallery.imageAlts.crowd} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              {t.contact.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <a href={`tel:${t.contact.phone}`} className="group bg-neutral-900 border border-neutral-800 p-8 text-center hover:border-secondary transition-all hover:scale-105">
              <Phone className="w-12 h-12 mx-auto mb-4 text-secondary group-hover:scale-110 transition-transform" />
              <div className="font-mono text-lg">{t.contact.phone}</div>
            </a>

            {/* Email */}
            <a href={`mailto:${t.contact.email}`} className="group bg-neutral-900 border border-neutral-800 p-8 text-center hover:border-primary transition-all hover:scale-105">
              <Mail className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <div className="font-mono text-lg">{t.contact.email}</div>
            </a>

            {/* Instagram */}
            <a href={`https://instagram.com/${t.contact.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="group bg-neutral-900 border border-neutral-800 p-8 text-center hover:border-white transition-all hover:scale-105">
              <Instagram className="w-12 h-12 mx-auto mb-4 text-white group-hover:scale-110 transition-transform" />
              <div className="font-mono text-lg">{t.contact.instagram}</div>
            </a>
          </div>

          {/* Booking Section */}
          <div className="bg-primary/10 border-2 border-primary p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold uppercase text-primary mb-6 text-center">
              {t.contact.bookingTitle}
            </h3>
            <p className="text-lg mb-6 text-center">
              {t.contact.bookingIntro}
            </p>
            <ul className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
              {t.contact.genres.map((genre, index) => (
                <li key={index} className="flex items-center gap-3 text-lg font-mono">
                  <span className="text-primary text-2xl">►</span>
                  {genre}
                </li>
              ))}
            </ul>
            <p className="text-lg text-center font-medium max-w-2xl mx-auto border-t border-primary/30 pt-6">
              {t.contact.bookingText}
            </p>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-12 bg-black border-t border-white/10 text-center text-neutral-500 font-mono text-sm">
        <p>&copy; {new Date().getFullYear()} Limes Müllem. {t.footer.copyright}</p>
        <p className="mt-2">{t.footer.builtwith}</p>
      </footer>
    </div>
  );
}
