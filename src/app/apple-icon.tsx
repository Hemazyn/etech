import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#4f46e5",
          borderRadius: "20%",
        }}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
        >
          <rect x="8" y="8" width="16" height="16" rx="2" fill="white" />
          <path
            d="M12 11v10h2v-3.5h4V19h2V11h-2v3.5H14V11h-2z"
            fill="#4f46e5"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
