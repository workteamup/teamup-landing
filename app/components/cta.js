import Button from "./button";

export default function CTA({ variant = 'light' }) {
  const styles = {
    container: {
      light: 'bg-white border-slate-200',
      dark: 'bg-blue-950 border-blue-900'
    },
    title: {
      light: 'text-blue-950',
      dark: 'text-white'
    },
    subtitle: {
      light: 'text-slate-500',
      dark: 'text-slate-300'
    }
  };

  return (
    <div id="cta" className="mb-24 md:mb-[160px]">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className={`${styles.container[variant]} rounded-3xl p-10 md:p-12 shadow-xl border`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-16">
              <div className="space-y-4">
                <h2 className={`text-3xl md:text-5xl font-semibold ${styles.title[variant]}`}>
                  Get started for free.
                </h2>
                <h4 className={`text-2xl ${styles.subtitle[variant]}`}>
                  Start engaging your team now without worrying about the cost.
                </h4>
              </div>
              <Button
                size="lg"
                variant="primary"
                onClick={() =>
                  window.open("https://app.teamup.works/signup", "_blank")
                }
              >
                Get started
              </Button>
            </div>

            <div className="text-6xl md:text-9xl text-teal-400 font-semibold flex flex-row items-end">
              <span className="">0</span>
              <div className="flex items-start pb-2">
                <span className="text-7xl">€</span>
                <span className="text-5xl">/month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
