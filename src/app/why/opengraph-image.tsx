import { ImageResponse } from "next/og";

export const alt =
  "Why Project Nosta — Building the Backrooms in Real Life as a Gift";
export const size = {
  width: 1200,
  height: 630,
};
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
          padding: "60px 80px",
          backgroundColor: "#efede6",
          color: "#141413",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Nosta
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#66645e",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            Why Project Nosta
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 18,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#66645e",
            }}
          >
            A real-life Backrooms gift
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
            }}
          >
            She always wanted to be in the Backrooms.
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#44423d",
              marginTop: 8,
              maxWidth: 900,
            }}
          >
            So he&apos;s building Level 0 in real life — for her.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #141413",
            paddingTop: 24,
            fontSize: 20,
            color: "#66645e",
          }}
        >
          <div>Project Nosta by Luan Kenning</div>
          <div>Final look reveal: 10 October 2028</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
