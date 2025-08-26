import { useState, useEffect } from "react"
export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        // apply theme to body whenever dark changes
        document.body.style.background = dark ? "#0f172a" : "#ffffff";
        document.body.style.color = dark ? "#e2e8f0" : "#0f172a";
    }, [dark]);

    return (
        <div style={{ padding: 16, borderRadius: 12 }}>
            <p>Theme: {dark ? "Dark" : "Light"}</p>
            <button onClick={() => setDark((d) => !d)}>
            Switch to {dark ? "Light" : "Dark"}
            </button>
        </div>
    );
}