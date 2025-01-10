import Button from "./button";
import { useTranslations } from "../contexts/TranslationContext";

export default function CTA({
  variant = "light",
  title = "Get started for free.",
  subtitle = "Start engaging your team now without worrying about the cost.",
  buttonText = "Get started",
  price = "0€",
}) {
  const t = useTranslations();

  const styles = {
    container: {
      light: "bg-white border-slate-200",
      dark: "bg-blue-950 border-blue-900",
    },
    title: {
      light: "text-blue-950",
      dark: "text-white",
    },
    subtitle: {
      light: "text-slate-500",
      dark: "text-slate-300",
    },
  };

  return (
    <div id="cta" className="mb-24 md:mb-[160px]">
      <div className={`${styles.container[variant]} w-full`}>
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="rounded-3xl p-4 py-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex flex-col gap-8 md:gap-16">
                <div className="space-y-4">
                  <h2
                    className={`text-3xl md:text-5xl font-semibold ${styles.title[variant]}`}
                  >
                    {title}
                  </h2>
                  <h4 className={`text-2xl ${styles.subtitle[variant]}`}>
                    {subtitle}
                  </h4>
                </div>

                <div className="text-6xl md:text-9xl text-teal-400 font-semibold flex flex-row items-start md:hidden">
                  <span>{price}</span>
                  <span className="text-3xl md:text-5xl mt-2">
                    {t("Pricing.perMonth")}
                  </span>
                </div>

                <Button
                  size="lg"
                  variant="primary"
                  className="self-start"
                  onClick={() =>
                    window.open("https://app.teamup.works/signup", "_blank")
                  }
                >
                  {buttonText}
                </Button>
              </div>

              <div className="hidden md:flex text-6xl md:text-9xl text-teal-400 font-semibold flex-row items-start">
                <span>{price}</span>
                <span className="text-3xl md:text-5xl mt-2">
                  {t("Pricing.perMonth")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
