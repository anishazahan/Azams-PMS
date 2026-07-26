import { ImageResponse } from "next/og";
import { SITE } from "@/constants/site";

export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#07070b",
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(124,92,255,0.35) 0%, rgba(124,92,255,0) 55%), radial-gradient(circle at 90% 20%, rgba(245,158,11,0.25) 0%, rgba(245,158,11,0) 55%)",
          color: "#f5f5f7",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 20,
              backgroundImage: "linear-gradient(135deg, #8c72ff, #ffb521)",
              color: "#07070b",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ fontSize: 40, fontWeight: 600 }}>{SITE.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 58, fontWeight: 600, lineHeight: 1.15, maxWidth: 900 }}>
            Property management, engineered for excellence.
          </div>
          <div style={{ display: "flex", gap: 48, fontSize: 24, color: "#9a9aa8" }}>
            <span>15,000+ professionals</span>
            <span>20M+ sq. ft. managed</span>
            <span>200+ clients</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
