import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SubtitlesOffIcon from "@mui/icons-material/SubtitlesOff";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const MASK_MODES = {
  SHOW_ALL: "show_all",
  HIDE_TRANSLATION: "hide_translation",
  HIDE_BOTH: "hide_both",
};

const MODES = [
  { key: MASK_MODES.SHOW_ALL, Icon: VisibilityIcon, title: "显示全部" },
  {
    key: MASK_MODES.HIDE_TRANSLATION,
    Icon: SubtitlesOffIcon,
    title: "遮蔽译文 (悬停显示)",
  },
  {
    key: MASK_MODES.HIDE_BOTH,
    Icon: VisibilityOffIcon,
    title: "遮蔽全部 (悬停显示)",
  },
];

export function SubtitleControls({ mode = MASK_MODES.SHOW_ALL, onModeChange }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      {MODES.map(({ key, Icon, title }) => {
        const isActive = mode === key;
        return (
          <button
            key={key}
            title={title}
            onClick={() => onModeChange && onModeChange(key)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "28px",
              height: "28px",
              border: isActive
                ? "1.5px solid var(--kt-primary, #1e88e5)"
                : "1.5px solid transparent",
              borderRadius: "6px",
              background: isActive
                ? "rgba(30, 136, 229, 0.12)"
                : "transparent",
              cursor: "pointer",
              padding: "0",
              transition: "background 0.15s, border-color 0.15s",
              color: isActive
                ? "var(--kt-primary, #1e88e5)"
                : "var(--kt-subtext, #666)",
            }}
          >
            <Icon style={{ fontSize: "16px" }} />
          </button>
        );
      })}
    </div>
  );
}
