import { THEMES } from "../../data/theme";

export default function NavBar({ theme, setTheme, apiKey, setApiKey }) {
  return (
    <div className="fixed top-4 right-4 flex flex-col gap-2">
      <input
        className="block w-2xs h-8 border rounded-sm px-2"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="API Key 입력"
      />

      <div className="flex justify-end-safe w-full space-x-2">
        {THEMES.map((t) => (
          <button
            key={t.name}
            onClick={() => setTheme(t.name)}
            className={`w-6 h-6 rounded-full border-2 ${
              theme === t.name ? "border-black" : "border-gray-300"
            } hover:ring-2`}
            style={{ backgroundColor: t.color }}
            aria-label={`테마 ${t.name}`}
          />
        ))}
      </div>
    </div>
  );
}
