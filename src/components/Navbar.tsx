import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop: fixed left sidebar */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-48 flex-col justify-between z-50 bg-background/60 backdrop-blur-xl border-r border-border/50 p-8">
        <div className="space-y-1">
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Oskar Rebermark
          </p>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={cn(
                "block w-full text-left py-2 text-sm transition-all duration-300",
                active === item.href.replace("#", "")
                  ? "text-foreground font-medium translate-x-1"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </nav>

      {/* Mobile: top bar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center justify-between px-6 py-4">
          <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Oskar Rebermark
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span className={cn("block h-px w-5 bg-current transition-all duration-300", mobileOpen && "rotate-45 translate-y-[3.5px]")} />
                <span className={cn("block h-px w-5 bg-current transition-all duration-300", mobileOpen && "-rotate-45 -translate-y-[3.5px]")} />
              </div>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="px-6 pb-4 space-y-1 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className={cn(
                  "block w-full text-left py-2 text-sm transition-colors",
                  active === item.href.replace("#", "")
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
