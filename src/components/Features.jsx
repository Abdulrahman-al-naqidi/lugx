import { CloudDownload, CircleUserRound, CirclePlay, PanelTop } from "lucide-react";

const features = [
  { title: "FREE STORAGE", icon: CloudDownload, color: "bg-main" },
  { title: "USER MORE", icon: CircleUserRound, color: "bg-indigo-500" },
  { title: "REPLY READY", icon: CirclePlay, color: "bg-main" },
  { title: "EASY LAYOUT", icon: PanelTop, color: "bg-main" },
];

function Features() {
  return (
    <section className="max-w-[1620px] mx-auto px-5 -mt-40 relative z-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item) => (
          <div key={item.title} className="bg-white rounded-[40px] shadow-xl py-10 text-center hover:bg-pink hover:text-white transition cursor-pointer">
            <div className={`${item.color} w-28 h-28 rounded-full mx-auto flex items-center justify-center`}>
              <item.icon size={56} strokeWidth={1.2} className="text-white" />
            </div>
            <h4 className="mt-6 font-bold text-xl">{item.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
