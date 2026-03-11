import { motion } from "motion/react";
import { StarIcon, ChevronRightIcon } from "lucide-react";

const pamperPackages = [
  {
    name: "Refreshing",
    role: "Balinese massage, Body Scrub",
    price: "IDR 350.000",
    duration: "1.5h",
    image: "https://images.unsplash.com/photo-1649751295468-953038600bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    name: "Nourishing",
    role: "Balinese massage, Biokos Facial (IDR 400k) / Collagen upgrade (IDR 450k)",
    price: "IDR 400.000+",
    duration: "2h",
    image: "https://images.unsplash.com/photo-1611073615452-4889cb93422e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    name: "Relaxation",
    role: "Warm stone massage & cream bath",
    price: "IDR 450.000",
    duration: "2h",
    image: "https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    name: "Balance",
    role: "Balinese massage, pedi or mani, no colour",
    price: "IDR 500.000",
    duration: "2h",
    image: "https://images.unsplash.com/photo-1613457492120-4fcfbb7c3a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    name: "Harmony",
    role: "Balinese massage, body scrub, facial & cream bath",
    price: "IDR 750.000",
    duration: "2.5h",
    image: "https://images.unsplash.com/photo-1761718210055-e83ca7e2c9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    name: "Perfect Celebration",
    role: "Deanna signature massage & 1.5 hours facial-collagen (Couple: 900k / Pax: 500k)",
    price: "IDR 500.000+",
    duration: "2.5h",
    image: "https://images.unsplash.com/photo-1706795034887-be9a24d1ac19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    name: "Ratus V",
    role: "Local treatment assist with menstrual discomfort & infection. Feel fresh & eliminate odour",
    price: "IDR 200.000",
    duration: "30min",
    image: "https://images.unsplash.com/photo-1709315610156-fda8311ee3e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
  {
    name: "Kiddies Spa",
    role: "Massage, scrub (chocolate) 1hr (200k) / 30min (150k) / Nail colour (150k)",
    price: "Start IDR 150k",
    duration: "30m - 1h",
    image: "https://images.unsplash.com/photo-1516815989420-9cb5ef0fce78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
  },
];

function PackageCard({ pkg, index }: { pkg: typeof pamperPackages[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-border/50 flex items-center gap-3 p-3 h-full"
    >
      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
        <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-1 mb-1">
          <div>
            <p className="font-sans font-semibold text-sm text-foreground truncate">{pkg.name}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground font-sans line-clamp-2 mb-2 leading-relaxed">
          {pkg.role}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2 text-xs font-medium text-[#00838F]">
            <span>{pkg.price}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{pkg.duration}</span>
          </div>
          <button className="text-xs bg-[#00838F] text-white px-3 py-1.5 rounded-lg font-medium hover:bg-[#006064] transition-colors flex-shrink-0">
            Book
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function BestDealSection() {
  return (
    <section id="about" className="bg-background py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Best Deal - Left */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-serif text-3xl font-semibold text-foreground">Best Deal</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-md overflow-hidden border border-border/50"
            >
              <div className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1737978697863-5d65495b28ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                  alt="Best deal artist"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-xl font-semibold text-white">Daja</p>
                  <p className="text-white/80 text-xs font-sans">Makeup Artists at Beat By DAJ</p>
                  <p className="text-white/60 text-xs font-sans">Oak Grove Blvd, California</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {[1,2,3,4,5].map(i => (
                    <StarIcon key={i} className={`w-4 h-4 ${i <= 4 ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`} />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">4.2/5 (20 reviews)</span>
                </div>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {"Hi Girls and Guys I'm 4, originally from South Carolina and I've been residing in Atlanta for 3 years. I hope you book me for all of your hair and beauty needs."}
                </p>
                <button className="mt-3 w-full bg-[#00838F] text-white py-2.5 rounded-xl text-sm font-medium hover:bg-[#006064] transition-colors">
                  Book Now
                </button>
              </div>
            </motion.div>
          </div>

          {/* Pamper Package - Right */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-serif text-3xl font-semibold text-foreground">Pamper Package</h2>
              <button className="text-xs text-[#00838F] font-medium font-sans flex items-center gap-1 hover:underline">
                See All <ChevronRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pamperPackages.map((pkg, i) => (
                <PackageCard key={i} pkg={pkg} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
