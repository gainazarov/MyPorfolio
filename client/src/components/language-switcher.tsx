import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/hooks/use-language";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-16 h-8 bg-primary-dark border-2 border-accent font-mono text-sm focus:ring-2 focus:ring-accent">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="bg-primary-dark border-2 border-accent">
        <SelectItem value="en" className="font-mono">EN</SelectItem>
        <SelectItem value="ru" className="font-mono">RU</SelectItem>
        <SelectItem value="tj" className="font-mono">TJ</SelectItem>
      </SelectContent>
    </Select>
  );
}
