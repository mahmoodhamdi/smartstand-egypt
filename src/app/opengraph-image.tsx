import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Smart Stand Egypt - Integrated Display Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 50%, #0D0D0D 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 900,
              background: "linear-gradient(180deg, #FEF8C5 0%, #906F1E 50%, #FBDD97 100%)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1.1,
            }}
          >
            Smart Stand Egypt
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "rgba(255, 255, 255, 0.7)",
              fontWeight: 400,
            }}
          >
            Integrated Display &amp; Promotional Solutions
          </div>
          <div
            style={{
              width: "120px",
              height: "4px",
              background: "linear-gradient(90deg, #FBF7D3, #906F1E, #FBDD97)",
              borderRadius: "2px",
              marginTop: "8px",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
